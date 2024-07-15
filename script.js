let chatHistory = [];

function appendMessage(message, className) {
  const chatBox = document.getElementById("chat-area");
  const messageElement = document.createElement("div");
  messageElement.className = "chat-message " + className;
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const prompt = document.getElementById("prompt").value;
  if (prompt.trim() === "") return;

  chatHistory.push({ role: "user", content: "질문:" + prompt });
  appendMessage(prompt, "user-message");
  document.getElementById("prompt").value = "";

  fetch("http://220.69.209.129:5000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ instruction: prompt, chat_history: chatHistory }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      const botMessage = data.generated_text;
      chatHistory.push({ role: "assistant", content: "답변:" + botMessage });
      appendMessage(botMessage, "bot-message");
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
      appendMessage("죄송합니다. 오류가 발생했습니다: " + error.message, "error-message");
    });
}