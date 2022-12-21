from rest_framework import viewsets
from django_filters import rest_framework as filters

from django_filters.rest_framework import DjangoFilterBackend
from projects.serializers import ProjectSerializer, CategorySerializer
from projects.models import Project, Category


class ProjectCategoryFilter(filters.FilterSet):
    category__name = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Project
        fields = ['category']


class ProjectViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProjectCategoryFilter
    # permission_classes = [IsAccountAdminOrReadOnly]


class CategoryViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [IsAccountAdminOrReadOnly]
