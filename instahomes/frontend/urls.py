from django.urls import path

from .views import *

urlpatterns = [
    path('', index),
    path('about', index),
    path('login', index),
    path('register', index),
    path('listings', index)
]
