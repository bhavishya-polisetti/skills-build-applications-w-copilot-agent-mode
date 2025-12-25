from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.user.username


class Team(models.Model):
    name = models.CharField(max_length=200)
    members = models.ManyToManyField(User, related_name='teams', blank=True)

    def __str__(self):
        return self.name


class Activity(models.Model):
    ACTIVITY_TYPES = (
        ('run', 'Run'),
        ('walk', 'Walk'),
        ('bike', 'Bike'),
        ('swim', 'Swim'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activities')
    activity_type = models.CharField(max_length=20, choices=ACTIVITY_TYPES)
    duration_minutes = models.IntegerField(default=0)
    calories = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} {self.activity_type} {self.duration_minutes}min"
