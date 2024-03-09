
class ApiHandler {
  _baseUrl: string = 'http://192.168.0.87:5000/';

  constructor() { }

  async promptServer(parameters: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const response = fetch(this._baseUrl + "prompt/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ parameters, })
      });
      response.then(response => response.json()).then((data) => {
        if (data.status === "error") {
          console.log("Server responded with an error: " + data.response);
          reject("Server responded with an error: " + data.response);
        }
        else if (data.status === "success") {
          console.log("Server responded with success: " + data.response);
          resolve(data.response);
        }
        else {
          console.log("Server responded with an unknown status: " + data.status);
          resolve("Server responded with an unknown status: " + data.status);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  }
}

export default ApiHandler;