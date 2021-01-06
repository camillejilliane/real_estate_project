from rest_framework import serializers
from listings.models import Listing
from realtors.models import Realtor


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'


class RealtorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realtor
        fields = ('id', 'name', 'photo', 'description',
                  'phone', 'email', 'is_mvp', 'hire_date')
