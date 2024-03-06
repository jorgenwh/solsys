import Anthropic from "@anthropic-ai/sdk";

class AnthropicClient {
  private client: any;
  private initialized: boolean = false;
  private apiKey: string = "";

  constructor() { }

  async initialize(apiKey: string): Promise<string> {
    this.client = new Anthropic({ apiKey: apiKey });
    return new Promise((resolve, reject) => {
      console.log(this.client);
      this.apiKey = apiKey;
      this.initialized = true;
      resolve("Anthropic client initialized");
    });
  }

  async chatPrompt(messages: any, model: string): Promise<any> {
    const data = {
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: [{"role": "user", "content": "Hello, world"}]
    };

    console.log(this.apiKey);
    console.log(data);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
      },
      body: JSON.stringify(data),
    }).then(x => {
      console.log("FUN");
      console.log(x);
    }).catch(e => {
      console.log("AIDS: " + e);
    });

    /*const response = await this.client.messages.create(data);
    console.log(response);*/

    return new Promise((resolve, reject) => {
      resolve("omg");
    });
  }
}


export default AnthropicClient;