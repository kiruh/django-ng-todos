from django.conf.urls import url, include
from rest_framework import routers

from .viewsets import TodoViewSet, TodoTagViewSet

router = routers.DefaultRouter()
router.register(r"todos", TodoViewSet)
router.register(r"todotags", TodoTagViewSet)

urlpatterns = [url(r"^", include(router.urls))]
