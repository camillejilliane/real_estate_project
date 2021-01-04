from django.urls import path
from .views import ListingView, PublishedListingView, RealtorListingsView, RealtorView

urlpatterns = [
    path('listing', ListingView.as_view()),
    path('published-listing', PublishedListingView.as_view()),
    path('realtor-listing', RealtorListingsView.as_view()),
    path('realtor', RealtorView.as_view())
]
