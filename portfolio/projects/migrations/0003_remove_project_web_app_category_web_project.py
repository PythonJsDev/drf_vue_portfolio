# Generated by Django 4.1.2 on 2022-11-24 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_project_web_app'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='web_app',
        ),
        migrations.AddField(
            model_name='category',
            name='web_project',
            field=models.BooleanField(default=True),
        ),
    ]
