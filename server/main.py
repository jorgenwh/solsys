from flask import Flask, json, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/")
def root():
    return """
    <h1>its coming for u</h1>
    <img src='https://oaidalleapiprodscus.blob.core.windows.net/private/org-n7LmbJsw3UEYjlZ3a24wXhmp/user-wKwOZ1jnK1QkmrUrHoyQ5Osg/img-ALNF7apFn6Xdk83aVH8hKVag.png?st=2024-03-06T18%3A56%3A00Z&se=2024-03-06T20%3A56%3A00Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-03-06T17%3A47%3A40Z&ske=2024-03-07T17%3A47%3A40Z&sks=b&skv=2021-08-06&sig=C2BsNPu%2BEvdaS62MRS%2BzQ6sfWQqWOMenS0PIhNhjGpg%3D'>
    """


@app.route("/prompt_chat/", methods=["POST"])
def prompt_chat():
    data = request.get_json()
    print(data)
    return jsonify({"response": "Hello, World!"})


if __name__ == "__main__":
    app.run(debug=True)
