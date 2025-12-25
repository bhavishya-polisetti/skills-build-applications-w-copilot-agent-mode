from django.core.management.base import BaseCommand, CommandError
from django.core.management import call_command


class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delegate to the tracker app's populate_test_data command
        try:
            call_command('populate_test_data')
            self.stdout.write(self.style.SUCCESS('Database populated via populate_test_data.'))
        except Exception as exc:
            raise CommandError(f'Error populating database: {exc}')
