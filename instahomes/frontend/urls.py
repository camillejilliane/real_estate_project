from django.urls import path

from .views import *

urlpatterns = [
    path('', index),
    path('about', index),
<<<<<<< HEAD
    path('login', index),
    path('register', index)
=======
    path('listings', index),
>>>>>>> 77ffefd5490c844dc4a1ff4a706320820d88f8b1
]
