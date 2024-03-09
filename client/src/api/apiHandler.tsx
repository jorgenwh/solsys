
class ApiHandler {
  _baseUrl: string = 'http://127.0.0.1:5000/';

  constructor() { }

  async chatPrompt(model: string, messages: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const response = fetch(this._baseUrl + "chat_prompt/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: model,
          messages: messages,
        })
      });
      response.then(response => response.json()).then((data) => {
        console.log(data.response);
        resolve(data.response);
      }).catch((error) => {
        reject(error.response);
      });
    });
  }

  async imagePrompt(model: string, prompt: string, parameters: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const response = fetch(this._baseUrl + "image_prompt/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: model,
          prompt: prompt,
          parameters: parameters,
        })
      });
      response.then(response => response.json()).then((data) => {
        console.log(data.response);
        resolve(data.response);
      }).catch((error) => {
        reject(error.response);
      });
    });
  }
}

export default ApiHandler;