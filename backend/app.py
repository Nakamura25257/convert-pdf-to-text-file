from flask import Flask, jsonify
from flask_cors import CORS

import speech_recognition as sr

app = Flask(__name__)
CORS(app)

# インスタンス作成
r = sr.Recognizer()

@app.route('/api/voice_input')
def voice_input():
  with sr.Microphone() as source:
    print("話してください")
    audio = r.listen(source)
    text = r.recognize_google(audio, language="ja-JP")
    print("認証結果", text)

  return jsonify(text)


@app.route('/')
def main():
  return jsonify(message='home')

# このpyファイルが直接実行された時だけこの中の処理を行うという意味。→つまり、直接実行された場合はport: 5000でサーバーを起動する
if __name__ == '__main__':
  app.run(debug=True, port=5000)