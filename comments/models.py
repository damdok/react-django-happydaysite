from django.db import models

class Comment(models.Model):
    name = models.CharField("Name", max_length=240)
    relationship = models.CharField("Relationship", max_length=240)
    comment = models.CharField("Comment", max_length=1024)    
    registrationDate = models.DateField("RegistrationDate", auto_now_add=True)

    def __str__(self):
        return self.name