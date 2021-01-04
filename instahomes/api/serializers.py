from rest_framework import serializers
from listings.models import Listing
from realtors.models import Realtor


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('id', 'realtor_id', 'title', 'address', 'city', 'state', 'zipcode', 'description', 'price', 'bedrooms', 'bathrooms', 'garage',
                  'sqft', 'lot_size', 'photo_main', 'photo_1', 'photo_2', 'photo_3', 'photo_4', 'photo_5', 'photo_6', 'is_published', 'list_date')


class RealtorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realtor
        fields = ('id', 'name', 'photo', 'description',
                  'phone', 'email', 'is_mvp', 'hire_date')
