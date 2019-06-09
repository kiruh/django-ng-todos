from django.db import models


class Todo(models.Model):
    todo_text = models.CharField(max_length=200)
    created_on = models.DateField(auto_now_add=True)
    completed = models.BooleanField(default=True)


class TodoTag(models.Model):
    todo = models.ForeignKey(Todo, on_delete=models.CASCADE)
    tag_text = models.CharField(max_length=50)
