from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tracker.urls')),
    # Redirect root to API root so visiting / shows the API links instead of a debug 404
    path('', RedirectView.as_view(url='/api/', permanent=False)),
]
