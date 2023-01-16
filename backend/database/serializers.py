from rest_framework import serializers
from .models import Database


class PlannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Database
        fields = '__all__'