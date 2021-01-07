from django.urls import path

from .views import *

urlpatterns = [
    path('', index),
    path('about', index),
    path('listings', index),
]
