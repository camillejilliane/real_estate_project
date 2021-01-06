from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, status
from listings.models import Listing
from realtors.models import Realtor
from .serializers import ListingSerializer, RealtorSerializer
from rest_framework.response import Response


class GetListingView(generics.ListAPIView):
    serializer_class = ListingSerializer

    def get_queryset(self):
        queryset = Listing.objects.all()
        id = self.request.query_params.get('id', '')
        is_published = self.request.query_params.get('is_published', '')
        realtor_id = self.request.query_params.get('realtor_id', '')

        if is_published != '':
            if is_published == "True":
                is_published = True
            else:
                is_published = False
            queryset = queryset.filter(is_published=is_published)

        if id != '':
            queryset = queryset.filter(id=int(id))

        if realtor_id != '':
            queryset = queryset.filter(realtor_id=int(realtor_id))
        return queryset


class GetRealtorView(generics.ListAPIView):
    serializer_class = RealtorSerializer

    def get_queryset(self):
        queryset = Realtor.objects.all()
        id = self.request.query_params.get('id', '')
        is_mvp = self.request.query_params.get('is_mvp', '')

        if is_mvp != '':
            if is_mvp == "True":
                is_mvp = True
            else:
                is_mvp = False
            queryset = queryset.filter(is_mvp=is_mvp)

        if id != '':
            queryset = queryset.filter(id=int(id))

        return queryset
