from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, UserProfileViewSet, ActivityViewSet, TeamViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', UserProfileViewSet)
router.register(r'activities', ActivityViewSet)
router.register(r'teams', TeamViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
