from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about_us/', views.about_us),
    path('expertise/', views.expertise),
    path('careers/', views.careers),
    path('responsibility/', views.responsibility),
    path('lets_meet/', views.lets_meet),
    path('contact/', views.contact),
]