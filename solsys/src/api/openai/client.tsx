import OpenAI from 'openai';

class OpenAIClient {
  private client: any;
  private initialized: boolean = false;
  private model: string = "gpt-3.5-turbo";

  constructor() { }

  async initialize(apiKey: string): Promise<string> {
    this.client = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
    return new Promise((resolve, reject) => {
      this.client.models.list().then(() => {
        this.initialized = true;
        resolve("OpenAI client initialized successfully");
      }).catch((error: any) => {
        this.client = null;
        reject("OpenAI client initialization failed: " + error.message);
      });
    });
  }

  destroy() {
    this.client = null;
    this.initialized = false;
  }

  setModel(model: string) {
    this.model = model;
  }

  async prompt(messages: any): Promise<any> {
    console.log("Prompting OpenAI:")
    console.log(messages);
    const response = this.client.chat.completions.create({
      messages: messages,
      model: this.model
    });
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject("OpenAI client not initialized");
      }
      response.then((result: any) => {
        resolve(result);
      }).catch((error: any) => {
        reject("OpenAI prompt failed: " + error.message);
      });
    });
  }
}

export default OpenAIClient;