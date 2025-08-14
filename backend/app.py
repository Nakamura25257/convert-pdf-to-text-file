from flask import Flask, jsonify, request
from flask_cors import CORS
import pdfplumber

app = Flask(__name__)
CORS(app)

# pdfからテキストを抽出
@app.route('/upload', methods=['POST'])
def pdf_analisys():
  all_text = []
  file = request.files['file']
  with pdfplumber.open(file) as pdf:
    for page in pdf.pages:
      # PDFをテキストへ変換；extract_text
      text = page.extract_text()
      if text:
        all_text.append(text.split('\n'))
  return jsonify(message=all_text)

if __name__ == '__main__':
  app.run(debug=True, port=5000)