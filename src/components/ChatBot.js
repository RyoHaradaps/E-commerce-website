function initChatBot() {
  const chatbotElement = document.getElementById('chatbot');
  if (!chatbotElement) return;


  // Create chat toggle button
  chatbotElement.innerHTML = `
    <button class="chat-toggle" id="chat-toggle">
      <i class="fas fa-comment"></i>
    </button>
  `;


  // Add event listener to toggle button
  document.getElementById('chat-toggle').addEventListener('click', toggleChat);


  // Initialize chat state
  let isOpen = false;
  let messages = [];


  // Toggle chat function
  function toggleChat() {
    isOpen = !isOpen;


    if (isOpen) {
      // Create chat window
      const chatWindow = document.createElement('div');
      chatWindow.className = 'chat-window';
      chatWindow.id = 'chat-window';


      chatWindow.innerHTML = `
        <div class="chat-header">
          <h3>STORENEX Support</h3>
          <button class="close-chat" id="close-chat">
            <i class="fas fa-times"></i>
          </button>
        </div>


        <div class="chat-messages" id="chat-messages">
          <!-- Messages will be rendered here -->
        </div>


        <form class="chat-input" id="chat-form">
          <input
            type="text"
            id="chat-input"
            placeholder="Type a message"
          />
          <button type="submit">
            <i class="fas fa-paper-plane"></i>
            <span>Send</span>
          </button>
        </form>
      `;


      chatbotElement.appendChild(chatWindow);


      // Add event listeners
      document.getElementById('close-chat').addEventListener('click', toggleChat);
      document.getElementById('chat-form').addEventListener('submit', handleChatSubmit);


      // Add welcome message if no messages exist
      if (messages.length === 0) {
        addBotMessage("Welcome to STORENEX Support! How can I assist you today?");
      }


      // Render existing messages
      renderMessages();


      // Focus input
      document.getElementById('chat-input').focus();
    } else {
      // Remove chat window
      const chatWindow = document.getElementById('chat-window');
      if (chatWindow) {
        chatWindow.remove();
      }
    }
  }


  // Handle chat form submission
  async function handleChatSubmit(e) {
    e.preventDefault();


    const input = document.getElementById('chat-input');
    const message = input.value.trim();


    if (message === '') return;


    // Add user message
    addUserMessage(message);


    // Clear input
    input.value = '';


    // Generate bot response
    const response = await generateResponse(message);


    // Add bot response after a delay
    setTimeout(() => {
      addBotMessage(response.text);
    }, 600);
  }


  // Add user message
  function addUserMessage(text) {
    messages.push({
      type: 'user',
      text,
    });


    renderMessages();
  }


  // Add bot message
  function addBotMessage(text) {
    messages.push({
      type: 'bot',
      text,
    });


    renderMessages();
  }


  // Generate response using Ollama Llama 3.2 API
  async function generateResponse(message) {
    try {
      const apiUrl = "http://localhost:11434/api/generate"; // Ollama's default local API endpoint
 
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3.2', // Specify the Llama model
          prompt: ' You are an AI chatbot powered by the Ollama Llama 3.2 model. I have provided you with specific key-value pairs. If a user asks anything related to a key, respond strictly with the corresponding value. If the question does not match any key, provide a normal AI chatbot response based on the message. Here are the key-value pairs: greeting: "Hi there! Welcome to STORENEX. How can I help you today?", productInfo: "STORENEX offers quality products across electronics, furniture, home decor, and more. Is there anything specific you are looking for?", pricing: "Our products range from $49.99 to $249.99, with options for every budget.", shipping: "We offer free shipping on all orders over $50. Standard delivery takes 2-3 business days, and express shipping options are available.", returns: "STORENEX has a 30-day return policy. If you are not satisfied with your purchase, you can return it for a full refund.", discount: "Use code WELCOME15 for 15% off your first STORENEX purchase!", help: "I am here to help! You can ask me about our products, shipping, returns, or anything else about STORENEX."' + "my question is :" + message
        }),
      });
 
      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`); // Fixed template literal
        const errorText = await response.text();
        console.error('Error details:', errorText);
        throw new Error('Failed to fetch response from Ollama API');
      }
 
      // Process the streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let botMessage = '';
 
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
 
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter((line) => line.trim() !== '');
 
        for (const line of lines) {
          try {
            const data = JSON.parse(line);
            if (data.response) {
              botMessage += data.response; // Append the response text
            }
          } catch (error) {
            console.error('Failed to parse JSON line:', line);
          }
        }
      }
 
      return { type: 'bot', text: botMessage || "I'm sorry, I couldn't process your request." };
    } catch (error) {
      console.error('Error fetching API response:', error);
      return { type: 'bot', text: "I'm sorry, I couldn't process your request. Please try again later." };
    }
  }


  // Render messages
  function renderMessages() {
    const messagesContainer = document.getElementById('chat-messages');
    if (!messagesContainer) return;


    messagesContainer.innerHTML = messages
      .map((message) => {
        if (message.type === 'bot') {
          return `
            <div class="bot-message">
              <p>${message.text}</p>
            </div>
          `;
        } else if (message.type === 'user') {
          return `
            <div class="user-message">
              <p>${message.text}</p>
            </div>
          `;
        }
        return '';
      })
      .join('');


    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}


// export { initChatBot };
