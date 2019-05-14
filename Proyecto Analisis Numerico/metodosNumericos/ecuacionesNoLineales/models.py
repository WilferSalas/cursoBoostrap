from django.db import models


# Create your models here.
class EcuacionesNoLineales(models.Model):
    objects = None
    tittle = models.CharField(max_length=50)
    description = models.TextField()
