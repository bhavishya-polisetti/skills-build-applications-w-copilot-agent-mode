from django.test import TestCase
from django.core.management import call_command
from pymongo import MongoClient
from django.conf import settings


class PopulateTestDataTests(TestCase):
    def test_populate_command_creates_objects(self):
        # run the populate command (wrapper)
        call_command('populate_db')
        client = MongoClient(settings.DATABASES['default']['CLIENT']['host'])
        db = client[settings.DATABASES['default']['NAME']]
        # verify collections have documents
        self.assertGreater(db['auth_user'].count_documents({}), 0)
        self.assertGreater(db['tracker_activity'].count_documents({}), 0)
        self.assertGreater(db['tracker_team'].count_documents({}), 0)
