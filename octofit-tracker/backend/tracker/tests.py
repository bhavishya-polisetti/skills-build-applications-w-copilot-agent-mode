from django.test import TestCase
from django.core.management import call_command
from django.contrib.auth.models import User
from .models import Activity, Team


class PopulateTestDataTests(TestCase):
    def test_populate_command_creates_objects(self):
        # run the populate command
        call_command('populate_test_data')
        self.assertTrue(User.objects.exists())
        self.assertTrue(Activity.objects.exists())
        self.assertTrue(Team.objects.exists())
