from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(blank=True)
    web_project = models.BooleanField(default=True)

    class Meta:
        ordering = ('name',)
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Project(models.Model):
    category = models.ForeignKey(
        Category, related_name='projects', on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    slug = models.SlugField(blank=True)
    items_list = models.CharField(max_length=2000, blank=True, null=True)
    description = models.TextField(blank=True)
    short_description = models.CharField(max_length=256, blank=True)
    keywords_list = models.CharField(max_length=256, blank=True)
    url_github_oc = models.URLField(max_length=200, blank=True, null=True)
    url_github_portfolio = models.URLField(
        max_length=200, blank=True, null=True)
    thumbnail = models.ImageField(upload_to='projects', blank=True, null=True)
    related_project_name = models.CharField(
        max_length=128, blank=True, null=True)
    related_project_url = models.URLField(
        max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
