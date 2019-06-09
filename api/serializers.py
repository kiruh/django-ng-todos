from todos.models import Todo, TodoTag
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = "__all__"


class TodoTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoTag
        fields = "__all__"
