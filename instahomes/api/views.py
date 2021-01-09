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


def login(request, *args, **kwargs):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    password2 = request.POST['password2']

    # Check if passwords match
    if password == password2:
        # Check username
        if User.objects.filter(username=username).exists():
            messages.error(request, 'That username is taken')
            return redirect('register')
        else:
            if User.objects.filter(email=email).exists():
                messages.error(request, 'That email is being used')
                return redirect('register')
            else:
                # Looks good
                user = User.objects.create_user(
                    username=username, password=password, email=email, first_name=first_name, last_name=last_name)
                # Login after register
                # auth.login(request, user)
                # messages.success(request, 'You are now logged in')
                # return redirect('index')
                user.save()
                messages.success(
                    request, 'You are now registered and can log in')
                return redirect('login')
    else:
        messages.error(request, 'Passwords do not match')
        return redirect('register')
