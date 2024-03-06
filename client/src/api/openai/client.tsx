import OpenAI from 'openai';

class OpenAIClient {
  private client: any;
  private initialized: boolean = false;

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

  async chatPrompt(messages: any, model: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject("OpenAI client not initialized");
      }
      const response = this.client.chat.completions.create({
        messages: messages,
        model: model
      });
      response.then((result: any) => {
        resolve(result);
      }).catch((error: any) => {
        reject("OpenAI prompt failed: " + error.message);
      });
    });
  }

  async imagePrompt(prompt: string, size: string, quality: string, model: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject("OpenAI client not initialized");
      }
      const response = this.client.images.generate({
        model: model,
        prompt: prompt,
        size: size,
        quality: quality,
      });
      response.then((result: any) => {
        resolve(result);
      }).catch((error: any) => {
        reject("OpenAI prompt failed: " + error.message);
      });
    });
  }
}


export default OpenAIClient;