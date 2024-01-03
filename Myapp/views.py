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