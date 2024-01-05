"""
URL configuration for KHKT2024 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from Myapp.views import test, landing, library, result, practice, starttest

urlpatterns = [
    path('admin/', admin.site.urls),
    path('test/', test, name='test'),
    path('landing/', landing, name='landing'),
    path('library/', library, name='library'),
    path('result/', result, name='result'),
    path('practice/', practice, name='practice'),
    path('starttest/', starttest, name='starttest'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
