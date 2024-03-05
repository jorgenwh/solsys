import Anthropic from "@anthropic-ai/sdk";

class AnthropicClient {
  private client: any;
  private initialized: boolean = false;

  constructor() { }

  async initialize(apiKey: string): Promise<string> {
    this.client = new Anthropic({ apiKey: apiKey });
    return new Promise((resolve, reject) => {
      console.log(this.client);
      this.initialized = true;
      resolve("Anthropic client initialized");
    });
  }

  async chatPrompt(messages: any, model: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject("Anthropic client not initialized");
      }
      console.log("prompting with messages: ", messages);
      const response = this.client.messages.create({
        model: model,
        max_tokens: 4000,
        temperature: 0.0,
        messages: messages,
      });
      response.then((result: any) => {
        resolve(result);
      }).catch((error: any) => {
        if (error instanceof Anthropic.APIError) {
          console.log(error.status);
          console.log(error.name);
          console.log(error.headers);
        } else {
          throw error;
        }
      });
    });
  }
}


export default AnthropicClient;