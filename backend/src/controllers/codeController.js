import { chatClient } from "../lib/stream.js";

export const runCode = async (req, res) => {
  try {
    const { code, language, callId } = req.body;


    const output = "Hello World";
    const success = true;


    const channel = chatClient.channel("messaging", callId);

    await channel.sendEvent({
      type: "code_run_result",
      output,
      success,
    });

    res.status(200).json({ output, success });
  } catch (error) {
    res.status(500).json({ message: "Execution failed" });
  }
};
