from firebase import firebase

firebase = firebase.FirebaseApplication('https://floraldatabase-default-rtdb.firebaseio.com/', None)
# result = firebase.get('/users/-N3Huj4lpl0nZnxyJPGK/', '')
result = firebase.get('/users/', '')
print(result['-N3Huj4lpl0nZnxyJPGK']["email"])
