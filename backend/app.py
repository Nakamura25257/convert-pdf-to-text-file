from flask import Flask, jsonify, request
from flask_cors import CORS
import pdfplumber

app = Flask(__name__)
CORS(app)

# pdfからテキストを抽出
@app.route('/pdf_analize', methods=['POST'])
def pdf_analisys():
  print('hoge', request.form)







  return jsonify(message='hoge')


# pdfからテキストを抽出(テスト実装)
@app.route('/')
def main():
  with pdfplumber.open('/Users/apple/Downloads/pdf_test.pdf')as pdf:
    with open('output_text', 'w') as file:
      for page in pdf.pages:
        text = page.extract_text()
        # テキストファイルを読み込む
        if text:
          file.write(text + '\n')
          print(text)

  return jsonify(message='hoge')
        




# このpyファイルが直接実行された時だけこの中の処理を行うという意味。→つまり、直接実行された場合はport: 5000でサーバーを起動する
if __name__ == '__main__':
  app.run(debug=True, port=5000)