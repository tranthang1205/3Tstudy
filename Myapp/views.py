from django.shortcuts import render
import pandas as pd

def test(request):
    data = pd.read_excel('/home/tranthanglinux/3Tstudy/KHKT2024/test.xlsx')
    data_to_display = data.iloc[:, :5].to_dict(orient='records')
    correct_answers = data.iloc[:, 5].tolist()
    return render(request, 'test.html', {
        'data': data_to_display,
        'correct_answers' : correct_answers,
    })

def landing(request):
    return render(request, template_name='landing.html')

def library(request):
    return render(request, template_name='library.html')

def practice(request):
    return render(request, template_name='practice.html')

def result(request):
    return render(request, template_name='result.html')

def starttest(request):
    return render(request, template_name='starttest.html')