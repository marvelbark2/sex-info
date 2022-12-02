import { Configuration, OpenAIApi } from "openai";
import { IPrompt, ChatBot } from "./prompt";

export class AiBot {
  private configuration;
  private openai;
  private prompt: IPrompt;
  constructor(prompt_strategy: any = ChatBot) {
    this.prompt = new prompt_strategy();
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,

    });
    this.openai = new OpenAIApi(this.configuration);
  }

  public async createCompletion(req: string) {
    try {
      const prompt = this.prompt.generatePrompt(req);
      const completion = await this.openai.createCompletion(
        {
          model: "text-davinci-003",
          prompt,
          temperature: 0,
          max_tokens: 600,
          top_p: 1.0,
          frequency_penalty: 0.5,
          presence_penalty: 0.0,
        }
      );
      const choices = completion.data.choices;
      return choices[0].text;
    } catch (error: any) {
      console.log(error.response.data);
      return "je ne comprends pas ce que vous voulez dire !";
    }
  }
}
