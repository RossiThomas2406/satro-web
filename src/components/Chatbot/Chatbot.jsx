import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import styles from './Chatbot.module.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "¡Hola! Soy el asistente virtual de Yamanil S.A. 👋 ¿En qué puedo ayudarte hoy?", 
      sender: 'bot' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Opciones rápidas para el usuario
  const options = [
    { label: "📦 Zonas de Reparto", value: "zonas" },
    { label: "📄 Lista de Precios", value: "precios" },
    { label: "💼 Trabajar con ustedes", value: "rrhh" },
    { label: "⏰ Horarios de Atención", value: "horarios" },
    { label: "📞 Contacto Humano", value: "contacto" },
  ];

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Lógica de respuestas
  const handleOptionClick = (optionValue, optionLabel) => {
    // 1. Agregar mensaje del usuario
    const userMsg = { id: Date.now(), text: optionLabel, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Simular tiempo de pensamiento del bot
    setTimeout(() => {
      let botResponse = "";

      switch (optionValue) {
        case "zonas":
          botResponse = "Cubrimos toda la Zona Oeste y Noroeste de Buenos Aires, incluyendo Tres de Febrero, San Martín, San Miguel y alrededores con flota propia.";
          break;
        case "precios":
          botResponse = "Por políticas de la empresa, las listas de precios se envían a clientes dados de alta. Si ya sos cliente, contactá a tu preventista. Si no, elegí 'Contacto Humano'.";
          break;
        case "rrhh":
          botResponse = "¡Nos encanta crecer! Podés enviarnos tu CV a rrhh@yamanil.com.ar o visitar nuestra sección de 'Nosotros' en esta web.";
          break;
        case "horarios":
          botResponse = "Nuestras oficinas y depósito operan de Lunes a Viernes de 08:00 a 17:00 hs y Sábados de 08:00 a 13:00 hs.";
          break;
        case "contacto":
          botResponse = "Entiendo. Podés escribirnos directamente al WhatsApp haciendo click en el botón verde de la esquina, o llamar al +54 11 4769-XXXX.";
          break;
        default:
          botResponse = "No tengo información sobre eso, pero podés contactarnos por WhatsApp.";
      }

      const botMsg = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000); // 1 segundo de delay
  };

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      <button 
        className={`${styles.toggleButton} ${isOpen ? styles.hidden : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={28} />
        <span className={styles.pulse}></span>
      </button>

      {/* Ventana del Chat */}
      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <Bot size={24} />
            <span>Asistente Yamanil</span>
          </div>
          <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>

        {/* Área de Mensajes */}
        <div className={styles.messagesArea}>
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`${styles.messageRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}
            >
              {msg.sender === 'bot' && <div className={styles.avatar}><Bot size={16}/></div>}
              
              <div className={styles.bubble}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className={styles.messageRow}>
              <div className={styles.avatar}><Bot size={16}/></div>
              <div className={styles.typingBubble}>
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Opciones (En lugar de input libre, guiamos al usuario) */}
        <div className={styles.optionsArea}>
            <p className={styles.optionsTitle}>Seleccioná una opción:</p>
            <div className={styles.optionsGrid}>
                {options.map((opt) => (
                    <button 
                        key={opt.value} 
                        className={styles.optionBtn}
                        onClick={() => handleOptionClick(opt.value, opt.label)}
                        disabled={isTyping}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>

      </div>
    </>
  );
};

export default Chatbot;