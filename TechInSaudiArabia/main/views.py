from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect


# Create your views here.

def home_view (request:HttpRequest):
    return render(request,"main/home.html")

def ai_view (request:HttpRequest):
    return render(request,"main/ai.html")


def digital_view (request:HttpRequest):
    return render(request,"main/digital.html")

def energy_view (request:HttpRequest):
    return render(request,"main/energy.html")

def neom_view (request:HttpRequest):
    return render(request,"main/neom.html")

def space_view (request:HttpRequest):
    return render(request,"main/space.html")

def resources_view (request:HttpRequest):
    return render(request,"main/resources.html")


def contact_view (request:HttpRequest):
    return render(request,"main/contact.html")

def switch_mode(request):
    current_mode = request.COOKIES.get('theme', 'light')
    new_mode = 'dark' if current_mode == 'light' else 'light'
    
    response = redirect(request.META.get('HTTP_REFERER', '/'))
    response.set_cookie('theme', new_mode, max_age=60*60*24*30)
    return response


