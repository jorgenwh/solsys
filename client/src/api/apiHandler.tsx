
class ApiHandler {
  _baseUrl: string = 'http://127.0.0.1:5000/';

  constructor() { }

  async promptChat(prompt: any, modelsList: any, messagesList: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const response = fetch(this._baseUrl + "prompt_chat/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt
        })
      });
      response.then(response => response.json()).then((data) => {
        console.log(data);
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}

export default ApiHandler;