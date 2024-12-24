import { ChatMessageHistory } from "langchain/stores/message/in_memory";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import { Ollama } from "@langchain/ollama";

const mainChatMessageHistory = new ChatMessageHistory();

export async function POST(req) {
    try {
        const { question, personality } = await req.json();

        // Construct a dynamic system message based on user inputs
        const systemMessage = `You are a ${personality}. You will not introduce yourself immediately, but instead respond conversationally as questions are asked.`;

        // Add system message to history if not already set
        if (mainChatMessageHistory.messages.length === 0) {
            mainChatMessageHistory.addMessage(new SystemMessage(systemMessage));
        }

        const model = new Ollama({
            model: "llama3.2",
            baseUrl: "http://localhost:11434",
            stream: true,
        });

        // Add the user's question to message history
        await mainChatMessageHistory.addMessage(new HumanMessage(question));

        // Generate the complete prompt from the message history
        const completePrompt = mainChatMessageHistory.messages.map(message => {
            if (message instanceof HumanMessage) {
                return `User: ${message.text}`;
            } else if (message instanceof AIMessage) {
                return `AI: ${message.text}`;
            } else if (message instanceof SystemMessage) {
                return `${message.text}`;
            }
        }).join('\n');

        let fullResponse = "";

        for await (const chunk of await model.stream(completePrompt)) {
            fullResponse += chunk;
            console.log(chunk);
        }

        // Add AI response to the message history
        await mainChatMessageHistory.addMessage(new AIMessage(fullResponse));

        return new Response(JSON.stringify({ text: fullResponse }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}