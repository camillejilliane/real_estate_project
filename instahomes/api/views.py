from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from listings.models import Listing
from .serializers import ListingSerializer


class PublishedListingView(generics.ListAPIView):
    queryset = Listing.objects.filter(is_published=True)
    serializer_class = ListingSerializer


class ListingView(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
