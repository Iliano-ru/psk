from django.shortcuts import render

def index(request):
    return render(request, "landing/index.html", {'path': request.path})

def about_us(request):
    return render(request, "landing/index.html", {'path': request.path})

def expertise(request):
    return render(request, "landing/index.html", {'path': request.path})

def careers(request):
    return render(request, "landing/index.html", {'path': request.path})

def responsibility(request):
    return render(request, "landing/index.html", {'path': request.path})

def lets_meet(request):
    return render(request, "landing/index.html", {'path': request.path})

def contact(request):
    return render(request, "landing/index.html", {'path': request.path})
