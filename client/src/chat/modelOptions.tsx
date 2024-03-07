type ModelOptions = {
  [key: string]: string;
};

export const modelOptions: ModelOptions = {
  'gpt-3.5-turbo': 'openai', 
  'gpt-4-turbo-preview': 'openai',
  'claude-3-opus-20240229': 'anthropic',
};

type ModelNameMap = {
  [key: string]: string;
};

export const modelNameMap: ModelNameMap = {
  'gpt-3.5-turbo': 'GPT-3.5',
  'gpt-4-turbo-preview': 'GPT-4',
  'claude-3-opus-20240229': 'Claude-3',
};