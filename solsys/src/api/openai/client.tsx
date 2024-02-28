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

  destroy() {
    this.client = null;
    this.initialized = false;
  }
}

export default OpenAIClient;