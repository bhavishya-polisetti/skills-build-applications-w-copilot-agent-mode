from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from tracker.models import UserProfile, Activity, Team


class Command(BaseCommand):
    help = 'Populate the octofit_db with test data'

    def handle(self, *args, **options):
        self.stdout.write('Creating test users...')
        users = []
        for i in range(1, 6):
            username = f'user{i}'
            email = f'user{i}@example.com'
            user, created = User.objects.get_or_create(username=username, defaults={'email': email})
            if created:
                user.set_password('password')
                user.save()
            users.append(user)

        self.stdout.write('Creating profiles...')
        for u in users:
            UserProfile.objects.get_or_create(user=u, defaults={'bio': f'Test bio for {u.username}', 'location': 'Testville'})

        self.stdout.write('Creating teams...')
        team1, _ = Team.objects.get_or_create(name='Red Runners')
        team2, _ = Team.objects.get_or_create(name='Blue Bikers')
        team1.members.set(users[:3])
        team2.members.set(users[3:])

        self.stdout.write('Creating activities...')
        for idx, u in enumerate(users, start=1):
            Activity.objects.create(user=u, activity_type='run', duration_minutes=30 * idx, calories=200 * idx)

        self.stdout.write(self.style.SUCCESS('Test data created.'))
