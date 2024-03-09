type String2String = {
  [key: string]: string;
};

export const modelOptions: String2String = {
  'gpt-3.5-turbo': 'openai', 
  'gpt-4-turbo-preview': 'openai',
  'claude-3-opus-20240229': 'anthropic',
};

export const modelNameMap: String2String = {
  'gpt-3.5-turbo': 'GPT-3.5',
  'gpt-4-turbo-preview': 'GPT-4',
  'claude-3-opus-20240229': 'Claude-3',
};