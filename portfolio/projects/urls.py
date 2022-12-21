from django.urls import path, include

from rest_framework.routers import DefaultRouter

from projects import views


router = DefaultRouter()
router.register('projects', views.ProjectViewSet, basename="projects")
router.register('categories', views.CategoryViewSet, basename="categories")
urlpatterns = [
    path('', include(router.urls)),
]
