from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, status
from listings.models import Listing
from realtors.models import Realtor
from .serializers import ListingSerializer, RealtorSerializer
from rest_framework.response import Response
from django.http import JsonResponse


class PublishedListingView(generics.ListAPIView):
    queryset = Listing.objects.filter(is_published=True)
    serializer_class = ListingSerializer


class ListingView(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class GetListingView(APIView):
    lookup_url_kwarg = 'listing_id'

    def get(self, request, format=None):
        listing_id = request.GET.get(self.lookup_url_kwarg)
        if listing_id != None:
            listing = Listing.objects.filter(listing_id=listing_id)
            if len(listing) > 0:
                listing = listing[0]
                data = ListingSerializer(listing).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found': 'Invalid Realtor.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class RealtorView(generics.ListAPIView):
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer


class RealtorListingsView(APIView):
    lookup_url_kwarg = 'realtor_id'

    def get(self, request, format=None):
        realtor_id = request.GET.get(self.lookup_url_kwarg)
        if realtor_id != None:
            listings = Listing.objects.filter(realtor_id=realtor_id)
            if len(listings) > 0:
                data = ListingSerializer(listings, many=True).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found': 'Invalid Realtor.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)
