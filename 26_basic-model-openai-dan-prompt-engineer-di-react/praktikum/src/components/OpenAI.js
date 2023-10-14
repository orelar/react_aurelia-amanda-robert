import { OpenAI } from 'openai';

const OpenAIChat = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})
export default OpenAIChat;
