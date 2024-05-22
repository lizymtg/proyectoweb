document.getElementById('chatbotInput').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Enter key
        getChatbotResponse();
    }
});

function toggleChatbot() {
    var chatbotContainer = document.getElementById('chatbotContainer');
    chatbotContainer.classList.toggle('hidden');
}

document.getElementById('chatbotToggle').addEventListener("click", toggleChatbot);

function getChatbotResponse() {
    var inputField = document.getElementById('chatbotInput');
    var userInput = inputField.value;
    inputField.value = ""; // Clear the input field after sending
    showChatbotUserMessage(userInput);
    var response = generateBotResponse(userInput);
    showChatbotBotMessage(response);
}

function showChatbotUserMessage(message) {
    let chatLogs = document.getElementById('chatbotLogs');
    let userMessage = document.createElement('div');
    userMessage.className = 'chatbot-chat user-message';
    userMessage.innerText = message;
    chatLogs.appendChild(userMessage);
    chatLogs.scrollTop = chatLogs.scrollHeight;
}

function showChatbotBotMessage(message) {
    let chatLogs = document.getElementById('chatbotLogs');
    let botMessage = document.createElement('div');
    botMessage.className = 'chatbot-chat bot-message';
    botMessage.innerText = message;
    chatLogs.appendChild(botMessage);
    chatLogs.scrollTop = chatLogs.scrollHeight;
}

function generateBotResponse(input) {
    input = input.toLowerCase().trim();

    // Condicionales para diferentes respuestas según el input del usuario
    if (input.includes("hola") || input.includes("buenas")) {
        return "¡Hola! ¿En qué puedo ayudarte hoy sobre Big Data y análisis de datos?";
    } else if (input.includes("cómo estás") || input.includes("qué tal tu día")) {
        return "¡Gracias por preguntar! Soy un chatbot, así que no tengo días buenos o malos, pero estoy aquí para ayudarte. ¿Tienes alguna pregunta sobre Big Data o análisis de datos?";
    } else if (input.includes("adiós") || input.includes("hasta luego")) {
        return "¡Gracias por visitarnos! Espero haberte sido de ayuda. ¡Hasta la próxima!";
    } 
     // Respuestas detalladas para cada sección principal de la información proporcionada
     if (input.includes("big data") && (input.includes("qué es") || input.includes("definición"))) {
        return "Big Data se refiere a grandes volúmenes de datos que no pueden ser procesados eficazmente con las aplicaciones tradicionales. Las características principales de Big Data incluyen volumen, velocidad y variedad, conocidas como las tres 'Vs'.";
    } else if (input.match(/historia de big data|origen de big data/)) {
        return "Los conceptos de Big Data se originaron en las décadas de 1960 y 1970 con los primeros usos de grandes bases de datos. En los años 90, la 'minería de datos' se popularizó, y en 2001, Doug Laney definió las tres 'Vs' que caracterizan a Big Data.";
    } else if (input.includes("cómo funciona")) {
        return "Big Data funciona a través de tecnologías especializadas diseñadas para manejar enormes volúmenes de datos. Estas incluyen sistemas de bases de datos NoSQL, plataformas como Apache Hadoop y Apache Spark, y soluciones de almacenamiento en la nube.";
    } else if (input.includes("desafíos")) {
        return "Los principales desafíos de Big Data incluyen la integración de datos de diversas fuentes y formatos, la necesidad de talento especializado, y la gestión de la privacidad y seguridad de los datos.";
    }

    // Información sobre análisis de datos
    if (input.includes("análisis de datos") && (input.includes("qué es") || input.includes("definición"))) {
        return "El análisis de datos implica examinar, limpiar y modelar datos para descubrir información útil y apoyar la toma de decisiones. Se utiliza para interpretar grandes cantidades de datos y convertirlos en información valiosa.";
    } else if (input.includes("tipos de análisis")) {
        return "Los tipos principales de análisis de datos son: Descriptivo, que analiza datos pasados para entender qué ha ocurrido; Diagnóstico, que determina por qué algo ha ocurrido; Predictivo, que usa modelos para prever eventos futuros; y Prescriptivo, que sugiere acciones basadas en los datos.";
    }

    // Usos específicos y aplicaciones de Big Data y análisis de datos
    if (input.includes("uso en empresas") || input.includes("aplicaciones de big data")) {
        return "Big Data y el análisis de datos se usan en empresas para tomar decisiones basadas en datos, innovar en el desarrollo de productos, mejorar la eficiencia operacional y personalizar la experiencia del cliente. Estas técnicas también son cruciales en áreas como la detección de fraude y la optimización de la cadena de suministro.";
    }

    // Visiones a futuro y avances actuales
    if (input.includes("futuro de big data") || input.includes("avances en big data")) {
        return "El futuro del Big Data incluye una integración más profunda con IoT, mejoras en la tecnología de almacenamiento y procesamiento, avances en la inteligencia artificial y aprendizaje automático, y un crecimiento de la analítica predictiva. Se espera también un mayor enfoque en la privacidad y seguridad de los datos.";
    }

    
    // Respuesta por defecto para preguntas no cubiertas específicamente
    return "Lo siento, no tengo información sobre eso. Por favor, intenta con otra pregunta relacionada con Big Data y análisis de datos.";
}