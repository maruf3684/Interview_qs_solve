
from django.db import models

# Create your models here.

class Sales(models.Model):
    CustomerName = models.CharField(max_length=100)
    MobileNo = models.CharField(max_length=20)
    TotalAmount = models.FloatField()


class SalesDetails(models.Model):
    SalesId = models.ForeignKey(Sales,on_delete=models.CASCADE)
    ProductId = models.CharField(max_length=100)
    Quantity = models.IntegerField()
    Unitprice = models.FloatField()
    total = models.FloatField()

