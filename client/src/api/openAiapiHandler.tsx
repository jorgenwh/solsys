import OpenAI from 'openai';

class OpenAIApiHandler {
  private client: any;
  private initialized: boolean = false;
  private initializationError: string = 'initialize(apiKey: string) with API key has not been called';

  constructor() { }

  async initialize(apiKey: string) {
    this.client = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

    this.client.models.list().then(() => {
      this.initialized = true;
    }).catch((error: any) => {
      this.client = null;
      this.initialized = false;
      this.initializationError = error.message;
    });
  }

  async generateText(messages: any, model: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject("OpenAI client has not been initialized. Error message: " + this.initializationError);
      }
      const response = this.client.chat.completions.create({
        messages: messages,
        model: model
      });
      response.then((result: any) => {
        resolve(result);
      }).catch((error: any) => {
        reject("OpenAI text generation failed. Error message: " + error.message);
      });
    });
  }

  async generateImage(prompt: string, size: string, quality: string, model: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.initialized) {
        reject("OpenAI client has not been initialized. Error message: " + this.initializationError);
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
        reject("OpenAI image generation failed. Error message: " + error.message);
      });
    });
  }
}


export default OpenAIApiHandler;