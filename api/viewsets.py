from todos.models import Todo, TodoTag
from rest_framework import viewsets

from .serializers import TodoSerializer, TodoTagSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = []


class TodoTagViewSet(viewsets.ModelViewSet):
    queryset = TodoTag.objects.all()
    serializer_class = TodoTagSerializer
    permission_classes = []
