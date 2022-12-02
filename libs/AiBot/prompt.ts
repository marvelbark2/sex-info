export interface IPrompt {
  generatePrompt: (req: string) => string;
}

export class ChatBot implements IPrompt {
  constructor() { }

  private custom_req(req: string): string {
    let question_styled = req.trim();
    question_styled =
      question_styled[0].toLocaleUpperCase() +
      question_styled.slice(1).toLocaleLowerCase()
    return question_styled;
  }

  public generatePrompt(req: string): string {

    const prompt = `
    You: Bonjour
    VIH chatbot: Bonjour, je suis VIH chatbot, je suis là pour vous aider à mieux comprendre le VIH et le SIDA. Comment puis-je vous aider ?
    You: ${this.custom_req(req)}
    VIH chatbot:
  `
    return prompt;
  }
}

