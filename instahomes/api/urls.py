from django.urls import path
from .views import GetListingView, GetRealtorView

urlpatterns = [
    path('listing', GetListingView.as_view()),
    path('realtor', GetRealtorView.as_view())
]
