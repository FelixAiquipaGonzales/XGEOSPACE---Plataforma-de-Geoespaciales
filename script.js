document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    const icon = mobileBtn.querySelector('i');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Toggle icon between bars and times (X)
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileBtn.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
});

// Function to toggle flip card animation
function toggleFlip(element) {
    if (element.classList.contains('flipped')) {
        element.classList.remove('flipped');
    } else {
        element.classList.add('flipped');
    }
}

/* ============================================
   PREMIUM FEATURES - JavaScript
   ============================================ */

// Preloader Logic with Sequence
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const statusText = document.getElementById('loaderStatus');
    const heroTitle = document.querySelector('.hero-title');

    if (preloader) {
        // Fast sequence - Default or Custom
        let messages = [
            "Conectando...",
            "Sistema Online."
        ];

        // Check for custom messages in data attribute
        if (preloader.dataset.messages) {
            try {
                messages = JSON.parse(preloader.dataset.messages);
            } catch (e) {
                console.warn('Error parsing preloader messages', e);
            }
        }

        let step = 0;
        // Faster interval (300ms)
        const interval = setInterval(() => {
            if (statusText && step < messages.length) {
                statusText.textContent = messages[step];
                step++;
            } else {
                clearInterval(interval);
                finishLoading();
            }
        }, 400);

        // Safety Force Hide (Max 2s)
        setTimeout(() => {
            clearInterval(interval);
            finishLoading();
        }, 2000);

        function finishLoading() {
            if (preloader.classList.contains('fade-out')) return; // Already finished

            preloader.classList.add('fade-out');
            if (heroTitle) heroTitle.classList.add('hero-reveal');
            setTimeout(() => preloader.style.display = 'none', 500);
        }
    }

    // Link Navigation Interceptor (Thematic Exit Transitions)
    const links = document.querySelectorAll('.link-card');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // If it's a direct anchor or empty, ignore
            if (!href || href === '#') return;
            // If it's Base de Datos or Geovisor, skip custom preloader (Direct Navigation)
            if (link.classList.contains('db') || link.classList.contains('geovisor')) {
                return;
            }

            e.preventDefault();

            const loaderTitle = preloader.querySelector('.loader-text');

            // Reset Preloader State & Classes
            preloader.className = 'preloader'; // Reset to base class
            preloader.style.display = 'flex';
            statusText.style.opacity = '1';

            // Customize Theme & Text ONLY for Metadata and Docs
            if (link.classList.contains('docu')) {
                preloader.classList.add('docu-theme'); // Custom Purple Theme
                if (loaderTitle) loaderTitle.textContent = "DOCUMENTACIÓN TÉCNICA";
                statusText.textContent = "Accediendo a Biblioteca Técnica...";
            } else if (link.classList.contains('metadatos')) {
                preloader.classList.add('meta-theme'); // Custom Green Theme
                if (loaderTitle) loaderTitle.textContent = "SERVIDOR DE METADATOS";
                statusText.textContent = "Conectando con Servidor de Metadatos...";
            } else {
                // Should not happen given checks above, but safety fallback
                if (loaderTitle) loaderTitle.textContent = "PROCESANDO";
                statusText.textContent = "Procesando Solicitud...";
            }

            // Small delay for effect, then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 1500);
        });
    });
});

// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(backToTop);

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll Animations - Observe elements
    const animateElements = document.querySelectorAll('.service-card, .product-card, .news-card, .info-card, .team-card, .value-card, .mv-card, .feature-card, .stat-item, .process-step');

    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay based on index within viewport
                    setTimeout(() => {
                        entry.target.classList.add('animate-on-scroll', 'animated');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    /* ============================================
       JARBIS AI LOGIC
       ============================================ */
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const closeChat = document.querySelector('.close-chat');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    if (chatbotContainer && chatbotToggle) {
        // Knowledge Base - Jarbis AI (Updated with Thesis S012 Details)
        const responses = {
            // Saludos
            'hola': '¡Hola! Soy Jarbis. Puedo resumirte los capítulos clave de la tesis S012: Antecedentes, Marco Legal, Metodología o Datos Satelitales. ¿Por dónde empezamos?',
            'jarbis': 'Soy la IA del proyecto "Determinación de áreas idóneas para piscigranjas en Ingenio". Mi base de conocimiento incluye la tesis de Felix Aiquipa.',

            // 2.4.1 Antecedentes
            'antecedentes': '<strong>Antecedentes:</strong><br><em>Nacionales:</em> La piscicultura es estratégica para el PBI y empleo (Escobar, 2024). Clave: calidad del agua (Zanolo, 2022).<br><em>Internacionales:</em> Auge de Geoportales para gestión territorial (Smith et al., 2023) y Geovisores para democratizar el acceso a datos (Jones & Martínez, 2022).',

            // 2.4.3 Marco Legal
            'legal': '<strong>Marco Legal:</strong><br>Se rige por la Ley General de Acuicultura (Dec. Leg. 1195) y su Reglamento (DS 003-2016-PRODUCE).<br>Norma Técnica: NTP-ISO 19115:2011 para estandarización de metadatos geográficos.',

            // 2.4.4 Bases Teóricas / Epistemológico
            'teorico': '<strong>Marco Teórico:</strong><br>Se basa en la <em>Geomática Aplicada</em> y los SIG como herramientas de decisión (FAO, 2024). <br><em>Epistemología:</em> Las IDE son entornos colaborativos para el intercambio de datos (Iniesto y Núñez, 2015).',

            // 2.5 Metodología
            'metodologia': '<strong>Marco Metodológico:</strong><br><em>Enfoque:</em> Mixto (Cuantitativo/Cualitativo).<br><em>Nivel:</em> Descriptivo y Correlacional.<br><em>Objeto:</em> Centro Piscícola Ingenio. Análisis multiescalar de variables ambientales y socioeconómicas.',

            // Satélite Sentinel-2B
            'satelite': '<strong>Datos Satelitales:</strong><br>Producto: Sentinel-2B (ESA).<br>Fecha: 02/08/2025.<br>Nivel: 1C (Ortorrectificado).<br>Nubosidad: <12%.<br>Instrumento: MSI (MultiSpectral Instrument).',

            // Términos Básicos
            'definiciones': '<strong>Conceptos Clave:</strong><br><em>SIG:</em> Gestión de datos georreferenciados.<br><em>Geoportal:</em> Acceso a datos distribuidos.<br><em>Zona Idónea:</em> Área evaluada bajo criterios técnicos y ambientales para piscicultura sostenible.',

            // Originales Mantenidos
            'titulo': 'Tesis: "Determinar las áreas idóneas para la construcción de piscigranjas en el centro Piscícola Ingenio de la provincia de Huancayo". Autor: Felix Aldimar Aiquipa Gonzales.',
            'referencias': 'Referencias: Lee et al. (2024) sobre visualización, Zhang & Wang (2024) sobre integración, Li et al. (2020) sobre geoportales.',
            'librerias': 'R Dashboard stack: `flexdashboard`, `leaflet`, `sf`, `dplyr`, `plotly`.',
            'colores': 'Semáforo de idoneidad: Verde (Bueno), Ámbar (Regular), Rojo (Malo).',

            // Nuevos
            'servicios': '<strong>Servicios:</strong> Ofrecemos análisis geoespacial, modelamiento hidrológico, cartografía digital y consultoría en sistemas de información geográfica (SIG).',
            'contacto': '<strong>Contacto:</strong> Puedes escribirnos a través del formulario en la sección "Contacto" o a nuestro correo corporativo info@xgeospace.com.',

            'default': 'No estoy seguro de entender eso. Intenta preguntar sobre: <b>Antecedentes</b>, <b>Marco Legal</b>, <b>Metodología</b>, <b>Autor</b> o <b>Servicios</b>.'
        };

        // Helper to add suggestion chips
        function addSuggestions() {
            // Check if suggestions already exist to avoid duplicates
            if (chatMessages.querySelector('.chat-suggestions')) return;

            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.className = 'chat-suggestions';

            // Pick 3 random topics from JARBIS_DATA
            const shuffled = JARBIS_DATA.sort(() => 0.5 - Math.random());
            const displaySuggestions = shuffled.slice(0, 3);

            displaySuggestions.forEach(item => {
                const label = item.palabras_clave[0]; // Use first keyword as label
                const btn = document.createElement('button');
                btn.className = 'suggestion-chip';
                // Capitalize first letter
                btn.textContent = label.charAt(0).toUpperCase() + label.slice(1);

                btn.onclick = () => {
                    // Auto-send the message on click
                    handleUserMessage(label);
                };
                suggestionsDiv.appendChild(btn);
            });

            // Append after the last message
            chatMessages.appendChild(suggestionsDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function toggleChat() {
            chatbotContainer.classList.toggle('active');
            if (chatbotContainer.classList.contains('active')) {
                setTimeout(() => {
                    chatInput.focus();
                    // Show suggestions if it's the first open or empty
                    if (chatMessages.children.length <= 1) { // 1 is the initial greeting
                        addSuggestions();
                    }
                }, 300);
            }
        }

        chatbotToggle.addEventListener('click', toggleChat);
        closeChat.addEventListener('click', toggleChat);

        function addMessage(text, isUser = false) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            contentDiv.innerHTML = text;
            msgDiv.appendChild(contentDiv);

            const timeSpan = document.createElement('span');
            timeSpan.className = 'message-time';
            const now = new Date();
            timeSpan.textContent = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
            msgDiv.appendChild(timeSpan);

            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Función de Inteligencia "Fuzzy Match" (Búsqueda Aproximada)
        function findBestMatch(userText) {
            userText = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            let bestMatch = null;
            let highestScore = 0;

            // Umbral mínimo de confianza (0 a 1). 0.4 es moderado.
            const THRESHOLD = 0.35;

            JARBIS_DATA.forEach(item => {
                let maxItemScore = 0;

                item.palabras_clave.forEach(keyword => {
                    const normalizedKeyword = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const score = calculateSimilarity(userText, normalizedKeyword);
                    if (score > maxItemScore) maxItemScore = score;
                });

                if (maxItemScore > highestScore) {
                    highestScore = maxItemScore;
                    bestMatch = item;
                }
            });

            if (highestScore >= THRESHOLD) {
                return bestMatch.respuesta;
            } else {
                return null; // No entendió
            }
        }

        // Algoritmo simple de similitud (Token overlap + Includes)
        function calculateSimilarity(text, keyword) {
            // 1. Coincidencia Exacta
            if (text === keyword) return 1.0;

            // 2. Contiene la frase exacta
            if (text.includes(keyword)) return 0.9;

            // 3. Palabras compartidas
            const textWords = text.split(/\s+/);
            const keywordWords = keyword.split(/\s+/);

            let matchCount = 0;
            keywordWords.forEach(kw => {
                if (textWords.some(tw => tw.includes(kw) || kw.includes(tw))) {
                    matchCount++;
                }
            });

            return matchCount / keywordWords.length; // Porcentaje de palabras clave encontradas
        }

        function handleUserMessage(msgText = null) {
            const text = msgText || chatInput.value.trim();
            if (!text) return;

            addMessage(text, true);
            chatInput.value = '';

            // Remove suggestions
            const oldSuggestions = chatMessages.querySelector('.chat-suggestions');
            if (oldSuggestions) oldSuggestions.remove();

            // Simulate thinking delay
            setTimeout(() => {
                // 1. Intentar buscar en la base de conocimiento local
                const localResponse = findBestMatch(text);

                if (localResponse) {
                    addMessage(localResponse);
                } else {
                    // Respuesta por defecto si no entiende
                    addMessage("Lo siento, no tengo información específica sobre eso en mi base de datos. ¿Podrías intentar preguntar de otra forma? (Prueba con: 'Servicios', 'Tesis', 'Contacto')");
                }

                setTimeout(() => addSuggestions(), 500);
            }, 600);
        }

        sendMessage.addEventListener('click', () => handleUserMessage());

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleUserMessage();
        });
    }
});
