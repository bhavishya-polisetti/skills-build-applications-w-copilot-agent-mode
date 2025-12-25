from django.contrib import admin
from .models import UserProfile, Activity, Team


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'location')


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('user', 'activity_type', 'duration_minutes', 'calories', 'timestamp')


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name',)
