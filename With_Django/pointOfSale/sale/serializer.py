from sale.models import Sales, SalesDetails
from rest_framework import serializers


class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sales
        fields = '__all__'

class SalesDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesDetails
        fields = '__all__'

    