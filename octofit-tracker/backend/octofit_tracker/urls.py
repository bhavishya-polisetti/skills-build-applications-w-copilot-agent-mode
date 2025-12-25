import os
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

# Use Codespace env to build a base URL when available (used for Docs / tests)
codespace_name = os.environ.get('CODESPACE_NAME')
if codespace_name:
    base_url = f"https://{codespace_name}-8000.app.github.dev"
else:
    base_url = "http://localhost:8000"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tracker.urls')),
    # Redirect root to API root so visiting / shows the API links instead of a debug 404
    path('', RedirectView.as_view(url='/api/', permanent=False)),
]
