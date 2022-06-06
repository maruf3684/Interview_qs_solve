from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import SalesSerializer, SalesDetailsSerializer
from .models import Sales, SalesDetails



class SalesView(APIView):

    def get(self, request, format=None):
        sales=Sales.objects.all()
        serializer=SalesSerializer(sales, many=True)
        dict={
            'status':'success',
            'data':serializer.data
        }
        return Response(dict)
    
    #extra code not mantioned in assignment
    def post(self, request, format=None):
        serializer=SalesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   



class SalesDetailsView(APIView):
    def get(self, request,id, format=None):
        salesdetails=SalesDetails.objects.filter(SalesId=id)
        serializer=SalesDetailsSerializer(salesdetails , many=True)
        dict={}
        if len(serializer.data)<=0:
            dict={
            'status':'fail',
            'message':'No data found',
            'data':serializer.data
            }
        else:
            dict={
            'status':'success',
            'data':serializer.data
        }
            
        return Response(dict)

    #extra code not mantioned in assignment
    def post(self, request, id, format=None):
        serializer=SalesDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     


