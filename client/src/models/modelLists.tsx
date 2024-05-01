type StringDict = {
  [key: string]: any;
};

// ------- ADD NEW MODELS TO THE FOLLOW SECTION -------
export const OPENAI_TEXT_MODELS = [
  'gpt-3.5-turbo',
  'gpt-4-turbo',
];

export const OPENAI_IMAGE_MODELS = [
  'dall-e-2',
  'dall-e-3',
];

export const MODEL_DISPLAY_NAMES: StringDict = {
  'gpt-3.5-turbo': 'GPT-3.5',
  'gpt-4-turbo': 'GPT-4',
  'dall-e-2': 'DALL-E 2',
  'dall-e-3': 'DALL-E 3',
};
// ----------------------------------------------------

export const IMAGE_SIZE_OPTIONS: StringDict = {
  'dall-e-2': ['256x256', '512x512', '1024x1024'],
  'dall-e-3': ['1024x1024', '1024x1792', '1792x1024'],
};

export const IMAGE_QUALITY_OPTIONS: StringDict = {
  'dall-e-2': ['standard'],
  'dall-e-3': ['standard', 'hd'],
};

// ---- ADD NEW MODEL GROUPS TO THE FOLLOW SECTION ----
export const OPENAI_MODELS = [
  ...OPENAI_TEXT_MODELS,
  ...OPENAI_IMAGE_MODELS,
];

export const TEXT_MODELS = [
  ...OPENAI_TEXT_MODELS,
];

export const IMAGE_MODELS = [
  ...OPENAI_IMAGE_MODELS,
];
// ----------------------------------------------------