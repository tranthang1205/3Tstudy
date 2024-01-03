import pandas as pd

data = pd.read_excel('/home/tranthanglinux/3Tstudy/KHKT2024/test.xlsx')
data_to_display = data.to_dict(orient='records')
print(data_to_display)