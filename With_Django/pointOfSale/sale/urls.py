from django import views
from django.contrib import admin
from django.urls import path,include
from .views import SalesDetailsView
from .views import SalesView

urlpatterns = [
   path('sales/', SalesView.as_view(), name='sales'),
   path('sales/<int:id>/details/', SalesDetailsView.as_view(), name='salesdetails'),
]
