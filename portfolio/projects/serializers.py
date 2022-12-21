from rest_framework import serializers

from .models import Category, Project


class ProjectSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True)

    class Meta:
        model = Category
        fields = '__all__'
