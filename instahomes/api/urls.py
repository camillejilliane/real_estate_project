from django.urls import path
from .views import *

urlpatterns = [
    path('', ListingView.as_view()),
    path('published-listing', PublishedListingView.as_view())
]
