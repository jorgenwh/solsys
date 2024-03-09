type String2String = {
  [key: string]: string;
};

type String2StringArray = {
  [key: string]: string[];
};

export const modelOptions: String2String = {
  'dall-e-2': 'openai', 
  'dall-e-3': 'openai',
};

export const modelNameMap: String2String = {
  'dall-e-2': 'DALL-E-2',
  'dall-e-3': 'DALL-E-3',
};

export const modelSizeOptions: String2StringArray = {
  'dall-e-2': ['256x256', '512x512', '1024x1024'],
  'dall-e-3': ['1024x1024', '1024x1792', '1792x1024'],
};

export const modelQualityOptions: String2StringArray = {
  'dall-e-2': ['standard'],
  'dall-e-3': ['standard', 'hd'],
};