import OpenAIApiHandler from './openAiapiHandler';
import { 
  OPENAI_TEXT_MODELS,
  OPENAI_IMAGE_MODELS 
} from '../models/modelLists';

type ApiKey = [string, string];

class ApiHandler {
  private openAiApiHandler: OpenAIApiHandler = new OpenAIApiHandler();

  constructor() { }

  async initialize(apiKey: ApiKey) {
    const [label, key] = apiKey;

    if (label === 'openai') {
      this.openAiApiHandler.initialize(key);
    }
  }

  async generateText(messages: any, model: string): Promise<any> {
    if (OPENAI_TEXT_MODELS.includes(model)) {
      return this.openAiApiHandler.generateText(messages, model);
    }

    return new Promise((reject) => {
      reject("Model '" + model + "' is not supported for text generation");
    });
  }

  async generateImage(
    prompt: string, 
    size: string, 
    quality: string, 
    model: string
  ): Promise<any> {
    if (OPENAI_IMAGE_MODELS.includes(model)) {
      return this.openAiApiHandler.generateImage(prompt, size, quality, model);
    }

    return new Promise((reject) => {
      reject("Model '" + model + "' is not supported for image generation");
    });
  }
}


export default ApiHandler;