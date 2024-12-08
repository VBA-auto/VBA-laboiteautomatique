import levenshtein from "fast-levenshtein";

// Helper function to create structured responses
const createResponse = (text, options = {}) => {
  return {
    text, // Main text of the response
    link: options.link || null, // Optional link
    image: options.image || null, // Optional image
  };
};

const fuzzyMatch = (input, target, threshold = 2) => {
  return levenshtein.get(input, target) <= threshold;
};

export const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase();

  // --- Greeting and Conversational Responses (English) ---
  if (
    fuzzyMatch(message, "hello") ||
    fuzzyMatch(message, "hi") ||
    fuzzyMatch(message, "hey") ||
    fuzzyMatch(message, "good morning") ||
    fuzzyMatch(message, "good afternoon") ||
    fuzzyMatch(message, "good evening")
  ) {
    return createResponse(
      "Hello! It's great to see you. How can I help you today?"
    );
  }

  if (
    fuzzyMatch(message, "how are you") ||
    fuzzyMatch(message, "how's it going") ||
    fuzzyMatch(message, "what's up")
  ) {
    return createResponse("I'm doing great, thank you! How about you?");
  }

  if (
    fuzzyMatch(message, "nice to meet you") ||
    fuzzyMatch(message, "pleased to meet you") ||
    fuzzyMatch(message, "it's nice to meet you")
  ) {
    return createResponse("Nice to meet you too! How can I assist you today?");
  }

  // --- Greeting and Conversational Responses (French) ---
  if (
    fuzzyMatch(message, "bonjour") ||
    fuzzyMatch(message, "salut") ||
    fuzzyMatch(message, "bonsoir")
  ) {
    return createResponse(
      "Bonjour ! C'est un plaisir de vous voir. Comment puis-je vous aider ?"
    );
  }

  if (
    fuzzyMatch(message, "ça va") ||
    fuzzyMatch(message, "comment ça va") ||
    fuzzyMatch(message, "comment vas-tu")
  ) {
    return createResponse("Je vais très bien, merci ! Et vous ?");
  }

  if (
    fuzzyMatch(message, "ravie de vous rencontrer") ||
    fuzzyMatch(message, "enchanté") ||
    fuzzyMatch(message, "heureux de vous rencontrer")
  ) {
    return createResponse(
      "Enchanté également ! Comment puis-je vous aider aujourd'hui ?"
    );
  }

  // --- Who are you (English) ---
  if (
    fuzzyMatch(message, "who are you") ||
    fuzzyMatch(message, "what are you") ||
    fuzzyMatch(message, "who ares you") ||
    fuzzyMatch(message, "what's your name") ||
    fuzzyMatch(message, "tell me about yourself") ||
    fuzzyMatch(message, "can you tell me about your self?") ||
    fuzzyMatch(message, "what do you do")
  ) {
    return createResponse(
      "I am VBA AI, a virtual assistant designed to help you. Ask me a question to get started!"
    );
  }

  // --- Who are you (French) ---
  if (
    fuzzyMatch(message, "qui es-tu") ||
    fuzzyMatch(message, "c'est quoi") ||
    fuzzyMatch(message, "c'est qui") ||
    fuzzyMatch(message, "comment tu t'appelles") ||
    fuzzyMatch(message, "quel est ton nom") ||
    fuzzyMatch(message, "que fais-tu") ||
    fuzzyMatch(message, "qu'est-ce que tu fais")
  ) {
    return createResponse(
      "Je suis VBA AI, un assistant virtuel conçu pour vous aider. Posez-moi une question pour commencer !"
    );
  }

  // Services Offered
  if (
    fuzzyMatch(message, "what services do you provide") ||
    fuzzyMatch(message, "services for renault") ||
    fuzzyMatch(message, "what do you offer")
  ) {
    return createResponse(
      "We provide programming, installation, and repair services for Renault calculators (boîte EDC). Feel free to ask more!"
    );
  }

  // Models Supported
  if (
    fuzzyMatch(message, "which renault models") ||
    fuzzyMatch(message, "supported renault models") ||
    fuzzyMatch(message, "what models do you support")
  ) {
    return createResponse(
      "We support Renault Captur, Clio IV, Scenic, Fluence, Mégane, and more! Search for your model on our website."
    );
  }

  // Contact Information
  if (
    fuzzyMatch(message, "how do I contact you") ||
    fuzzyMatch(message, "contact details") ||
    fuzzyMatch(message, "how can I reach you") ||
    fuzzyMatch(message, "contact info") ||
    fuzzyMatch(message, "contact information") ||
    fuzzyMatch(message, "contact")
  ) {
    return createResponse(
      "You can reach us at contact@laboiteautomatique.com or call us at 01 45 14 72 54."
    );
  }

  // Regional Services
  if (
    fuzzyMatch(message, "do you provide services in") ||
    fuzzyMatch(message, "services in Lyon") ||
    fuzzyMatch(message, "regional services")
  ) {
    return createResponse(
      "Yes, we provide services in Lyon, Paris, Marseille, Toulouse, and more. Check our website for the full list of cities."
    );
  }

  // User Reviews
  if (
    fuzzyMatch(message, "what do customers say") ||
    fuzzyMatch(message, "user reviews") ||
    fuzzyMatch(message, "do you have reviews")
  ) {
    return createResponse(
      "Our customers love our quick and efficient service! Check out the reviews on our website."
    );
  }

  // FAQ
  if (
    fuzzyMatch(message, "do you have a faq") ||
    fuzzyMatch(message, "faq page") ||
    fuzzyMatch(message, "where is your faq")
  ) {
    return createResponse(
      "Yes, we have a FAQ section under the 'Resource' menu. Check it out for common questions!"
    );
  }

  // Warranty Information
  if (
    fuzzyMatch(message, "what is the warranty") ||
    fuzzyMatch(message, "warranty on services") ||
    fuzzyMatch(message, "do you offer a warranty")
  ) {
    return createResponse(
      "We offer a manufacturer warranty on our services with a 'satisfied or refunded' guarantee."
    );
  }

  // Availability
  if (
    fuzzyMatch(message, "how can I find availability") ||
    fuzzyMatch(message, "availability for repairs") ||
    fuzzyMatch(message, "check availability")
  ) {
    return createResponse(
      "You can check availability on our website by clicking the 'Availability' button."
    );
  }

  // Services Offered
  if (
    fuzzyMatch(message, "quels services proposez-vous") ||
    fuzzyMatch(message, "services pour renault") ||
    fuzzyMatch(message, "que proposez-vous")
  ) {
    return createResponse(
      "Nous proposons des services de programmation, installation et réparation pour les calculateurs Renault (boîte EDC). N'hésitez pas à poser vos questions !"
    );
  }

  // Models Supported
  if (
    fuzzyMatch(message, "quels modèles Renault") ||
    fuzzyMatch(message, "modèles Renault pris en charge") ||
    fuzzyMatch(message, "modèles supportés")
  ) {
    return createResponse(
      "Nous prenons en charge Renault Captur, Clio IV, Scenic, Fluence, Mégane, et bien plus encore ! Recherchez votre modèle sur notre site."
    );
  }

  // Contact Information
  if (
    fuzzyMatch(message, "comment vous contacter") ||
    fuzzyMatch(message, "coordonnées") ||
    fuzzyMatch(message, "comment puis-je vous joindre")
  ) {
    return createResponse(
      "Vous pouvez nous joindre à contact@laboiteautomatique.com ou par téléphone au 01 45 14 72 54."
    );
  }

  // Regional Services
  if (
    fuzzyMatch(message, "proposez-vous des services à") ||
    fuzzyMatch(message, "services à Lyon") ||
    fuzzyMatch(message, "services régionaux")
  ) {
    return createResponse(
      "Oui, nous proposons des services à Lyon, Paris, Marseille, Toulouse, et plus encore. Consultez notre site pour la liste complète des villes."
    );
  }

  // User Reviews
  if (
    fuzzyMatch(message, "que disent les avis") ||
    fuzzyMatch(message, "avis clients") ||
    fuzzyMatch(message, "avez-vous des avis")
  ) {
    return createResponse(
      "Nos clients adorent notre service rapide et efficace ! Consultez les avis sur notre site."
    );
  }

  // FAQ
  if (
    fuzzyMatch(message, "avez-vous une FAQ") ||
    fuzzyMatch(message, "page FAQ") ||
    fuzzyMatch(message, "où est la FAQ")
  ) {
    return createResponse(
      "Oui, nous avons une section FAQ dans le menu 'Ressource'. Consultez-la pour les questions fréquentes !"
    );
  }

  // Warranty Information
  if (
    fuzzyMatch(message, "quelle est la garantie") ||
    fuzzyMatch(message, "garantie sur vos services") ||
    fuzzyMatch(message, "offrez-vous une garantie")
  ) {
    return createResponse(
      "Nous offrons une garantie constructeur sur nos services avec une garantie 'satisfait ou remboursé'."
    );
  }

  // Availability
  if (
    fuzzyMatch(message, "comment trouver la disponibilité") ||
    fuzzyMatch(message, "disponibilité pour les réparations") ||
    fuzzyMatch(message, "vérifier la disponibilité")
  ) {
    return createResponse(
      "Vous pouvez vérifier la disponibilité sur notre site en cliquant sur le bouton 'Disponibilité'."
    );
  }
  // Services Offered
  if (
    fuzzyMatch(message, "quels services proposez-vous") ||
    fuzzyMatch(message, "services pour renault") ||
    fuzzyMatch(message, "que proposez-vous")
  ) {
    return createResponse(
      "Nous proposons des services de programmation, installation et réparation pour les calculateurs Renault (boîte EDC). N'hésitez pas à poser vos questions !"
    );
  }

  // Models Supported
  if (
    fuzzyMatch(message, "quels modèles Renault") ||
    fuzzyMatch(message, "modèles Renault pris en charge") ||
    fuzzyMatch(message, "modèles supportés")
  ) {
    return createResponse(
      "Nous prenons en charge Renault Captur, Clio IV, Scenic, Fluence, Mégane, et bien plus encore ! Recherchez votre modèle sur notre site."
    );
  }

  // Contact Information
  if (
    fuzzyMatch(message, "comment vous contacter") ||
    fuzzyMatch(message, "coordonnées") ||
    fuzzyMatch(message, "comment puis-je vous joindre")
  ) {
    return createResponse(
      "Vous pouvez nous joindre à contact@laboiteautomatique.com ou par téléphone au 01 45 14 72 54."
    );
  }

  // Regional Services
  if (
    fuzzyMatch(message, "proposez-vous des services à") ||
    fuzzyMatch(message, "services à Lyon") ||
    fuzzyMatch(message, "services régionaux")
  ) {
    return createResponse(
      "Oui, nous proposons des services à Lyon, Paris, Marseille, Toulouse, et plus encore. Consultez notre site pour la liste complète des villes."
    );
  }

  // User Reviews
  if (
    fuzzyMatch(message, "que disent les avis") ||
    fuzzyMatch(message, "avis clients") ||
    fuzzyMatch(message, "avez-vous des avis")
  ) {
    return createResponse(
      "Nos clients adorent notre service rapide et efficace ! Consultez les avis sur notre site."
    );
  }

  // FAQ
  if (
    fuzzyMatch(message, "avez-vous une FAQ") ||
    fuzzyMatch(message, "page FAQ") ||
    fuzzyMatch(message, "où est la FAQ")
  ) {
    return createResponse(
      "Oui, nous avons une section FAQ dans le menu 'Ressource'. Consultez-la pour les questions fréquentes !"
    );
  }

  // Warranty Information
  if (
    fuzzyMatch(message, "quelle est la garantie") ||
    fuzzyMatch(message, "garantie sur vos services") ||
    fuzzyMatch(message, "offrez-vous une garantie")
  ) {
    return createResponse(
      "Nous offrons une garantie constructeur sur nos services avec une garantie 'satisfait ou remboursé'."
    );
  }

  // Availability
  if (
    fuzzyMatch(message, "comment trouver la disponibilité") ||
    fuzzyMatch(message, "disponibilité pour les réparations") ||
    fuzzyMatch(message, "vérifier la disponibilité")
  ) {
    return createResponse(
      "Vous pouvez vérifier la disponibilité sur notre site en cliquant sur le bouton 'Disponibilité'."
    );
  }

  //   About this website and info about VBA start
  // ======================================
  if (
    fuzzyMatch(message, "what is this website about") ||
    fuzzyMatch(message, "tell me about this website") ||
    fuzzyMatch(message, "tell about this website") ||
    fuzzyMatch(message, "what does this website do") ||
    fuzzyMatch(message, "purpose of this website") ||
    fuzzyMatch(message, "what can I find here")
  ) {
    return createResponse(
      "This website specializes in providing programming, installation, and repair services for Renault automatic gearbox calculators (EDC). It's designed to help Renault owners find high-quality solutions for their transmission needs. Explore more through our detailed product pages.",
      { link: "/produits" }
    );
  }
  if (
    fuzzyMatch(message, "what features does this website have") ||
    fuzzyMatch(message, "what can I do here") ||
    fuzzyMatch(message, "what services are offered on this website") ||
    fuzzyMatch(message, "how does this website help me")
  ) {
    return createResponse(
      "This website offers services including calculator programming, pre-programmed and blank module installations, stock checks, and repair services for Renault models. You can also find detailed product pages and easy order options.",
      { link: "/" }
    );
  }

  if (
    fuzzyMatch(message, "who created this AI") ||
    fuzzyMatch(message, "who is behind this AI") ||
    fuzzyMatch(message, "who built this AI") ||
    fuzzyMatch(message, "who made this chatbot") ||
    fuzzyMatch(message, "who is the creator of you") ||
    fuzzyMatch(message, "who is the creator of this AI")
  ) {
    return createResponse(
      "This AI model was created by Chowon Hasan, a dedicated developer who designed this chatbot to provide personalized assistance and seamless support for VBA users.",
      { link: "chowonhasan.com" }
    );
  }
  if (
    fuzzyMatch(message, "what features does this website have") ||
    fuzzyMatch(message, "what can I do here") ||
    fuzzyMatch(message, "what services are offered on this website") ||
    fuzzyMatch(message, "how does this website help me")
  ) {
    return createResponse(
      "This website offers services including calculator programming, pre-programmed and blank module installations, stock checks, and repair services for Renault models. You can also find detailed product pages and easy order options.",
      { link: "/" }
    );
  }
  if (
    fuzzyMatch(message, "qui a créé cette IA") ||
    fuzzyMatch(message, "qui est derrière cette IA") ||
    fuzzyMatch(message, "qui a conçu ce chatbot") ||
    fuzzyMatch(message, "qui est le créateur de cette IA") ||
    fuzzyMatch(message, "qui a développé cette intelligence artificielle")
  ) {
    return createResponse(
      "Ce modèle d'intelligence artificielle a été créé par Chowon Hasan, un développeur dédié qui a conçu ce chatbot pour fournir une assistance personnalisée et un support fluide aux utilisateurs Renault.",
      { link: "chowonhasan.com" }
    );
  }
  if (
    fuzzyMatch(message, "do they have captur diesel") ||
    fuzzyMatch(message, "is captur diesel available") ||
    fuzzyMatch(message, "can I buy captur diesel calculator") ||
    fuzzyMatch(message, "renault captur diesel products")
  ) {
    return createResponse(
      "Yes, we have calculators and other parts for Renault Captur Diesel models. Visit here for more details.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "do they sell calculators for renault megane") ||
    fuzzyMatch(message, "is megane calculator available") ||
    fuzzyMatch(message, "renault megane calculator parts") ||
    fuzzyMatch(message, "megane calculator details")
  ) {
    return createResponse(
      "Yes, calculators for Renault Mégane models are available. Visit here for more details.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "is this website selling renault parts") ||
    fuzzyMatch(message, "what does this website sell") ||
    fuzzyMatch(message, "is this website about renault calculators") ||
    fuzzyMatch(message, "renault parts and services")
  ) {
    return createResponse(
      "Yes, this website specializes in calculators and transmission-related parts for Renault models. Explore more here.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "do they have captur essence products") ||
    fuzzyMatch(message, "is captur essence available") ||
    fuzzyMatch(message, "renault captur essence parts") ||
    fuzzyMatch(message, "captur essence calculator")
  ) {
    return createResponse(
      "Yes, we have calculators for Renault Captur Essence. For more information, visit here.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(
      message,
      "are captur diesel calculators compatible with 1.5 engines"
    ) ||
    fuzzyMatch(message, "captur diesel calculator 1.5 compatibility") ||
    fuzzyMatch(message, "can I use captur diesel calculator with 1.5 engine")
  ) {
    return createResponse(
      "Yes, calculators for Renault Captur Diesel 1.5 engines are available. Check here for more details.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "what renault products do you sell") ||
    fuzzyMatch(message, "available renault products") ||
    fuzzyMatch(message, "renault parts and calculators list") ||
    fuzzyMatch(message, "renault supported products")
  ) {
    return createResponse(
      "We offer calculators and parts for Renault Captur, Mégane, Clio, Scenic, Fluence, and more. Learn more here.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "do you have products for renault fluence") ||
    fuzzyMatch(message, "fluence calculator availability") ||
    fuzzyMatch(message, "can I buy parts for renault fluence")
  ) {
    return createResponse(
      "Yes, calculators for Renault Fluence models are available. Visit here for details.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "can I find calculator for renault clio iv") ||
    fuzzyMatch(message, "clio iv calculator availability") ||
    fuzzyMatch(message, "clio iv renault products")
  ) {
    return createResponse(
      "Absolutely, calculators for Renault Clio IV are available. Learn more here.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "are calculators compatible with renault scenic") ||
    fuzzyMatch(message, "scenic calculator compatibility") ||
    fuzzyMatch(message, "can I use calculator for renault scenic")
  ) {
    return createResponse(
      "Yes, calculators for Renault Scenic are compatible. For details, visit here.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "can I buy parts for renault megane iv") ||
    fuzzyMatch(message, "megane iv calculator availability") ||
    fuzzyMatch(message, "is megane iv calculator available")
  ) {
    return createResponse(
      "Yes, we have calculators and related parts for Renault Mégane IV. More details here.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "avez-vous des produits pour captur diesel") ||
    fuzzyMatch(message, "produits disponibles pour captur diesel") ||
    fuzzyMatch(message, "pièces pour captur diesel")
  ) {
    return createResponse(
      "Oui, nous avons des calculateurs et d'autres pièces pour Renault Captur Diesel. Cliquez ici pour plus de détails.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "ce site vend-il des pièces pour renault megane") ||
    fuzzyMatch(message, "calculateurs disponibles pour megane") ||
    fuzzyMatch(message, "megane pièces renault")
  ) {
    return createResponse(
      "Oui, des calculateurs pour Renault Mégane sont disponibles. Cliquez ici pour plus d'informations.",
      { link: "/produits" }
    );
  }

  if (
    fuzzyMatch(message, "ce site vend-il des pièces renault") ||
    fuzzyMatch(message, "ce site propose des calculateurs") ||
    fuzzyMatch(message, "qu'est-ce que ce site vend")
  ) {
    return createResponse(
      "Oui, nous sommes spécialisés dans les calculateurs et pièces liées à la transmission pour les modèles Renault. Découvrez plus ici.",
      { link: "/produits" }
    );
  }

  //   About this website and info about VBA End
  // ======================================

  // --- Renault Captur Products Section Starts ---
  // ====================================================

  // English Queries and Responses
  if (
    fuzzyMatch(message, "what is renault captur edc calculator") ||
    fuzzyMatch(message, "tell me about captur edc calculator") ||
    fuzzyMatch(message, "what does the calculator do") ||
    fuzzyMatch(message, "describe renault captur edc") ||
    fuzzyMatch(message, "what is captur edc module")
  ) {
    return createResponse(
      "The Renault Captur EDC calculator is an automatic gearbox control module used to manage and ensure proper functioning of your Renault Captur's transmission system.",
      { link: "/captur" }
    );
  }

  if (
    fuzzyMatch(message, "can I use this for renault captur 1.2 essence") ||
    fuzzyMatch(message, "is it compatible with captur 1.2 essence") ||
    fuzzyMatch(message, "does this work for captur essence") ||
    fuzzyMatch(message, "captur essence") ||
    fuzzyMatch(message, "captur 1.2") ||
    fuzzyMatch(message, "captur 1.2 essence") ||
    fuzzyMatch(message, "what is captur 1.2 essence module")
  ) {
    return createResponse(
      "Yes, the Renault Captur 1.2 Essence calculator is compatible with models starting from 2012. Visit the page for more details:",
      { link: "/captur/essence" }
    );
  }

  if (
    fuzzyMatch(message, "is it compatible with renault captur diesel") ||
    fuzzyMatch(message, "does it work for captur diesel") ||
    fuzzyMatch(message, "can I use it for captur 1.5 diesel") ||
    fuzzyMatch(message, "captur diesel") ||
    fuzzyMatch(message, "renault captur 1.5 diesel") ||
    fuzzyMatch(message, "is captur 1.5 diesel available") ||
    fuzzyMatch(message, "captur diesel 1.5  available") ||
    fuzzyMatch(message, "captur 1.5 diesel available") ||
    fuzzyMatch(message, "captur 1.5 available") ||
    fuzzyMatch(message, "is captur diesel compatible")
  ) {
    return createResponse(
      "Yes, there is a specific calculator available for Renault Captur 1.5 Diesel models. Check out the product page for details.",
      { link: "/captur/diesel" }
    );
  }

  if (
    fuzzyMatch(message, "what's the stock for captur 1.2 essence") ||
    fuzzyMatch(message, "do you have stock for captur 1.2 essence") ||
    fuzzyMatch(
      message,
      "how many calculators for captur 1.2 essence are in stock"
    ) ||
    fuzzyMatch(message, "captur essence stock") ||
    fuzzyMatch(message, "check captur stock availability") ||
    fuzzyMatch(message, "live stock for captur 1.2")
  ) {
    return createResponse(
      "Stock availability is dynamic. Please check the live stock status here:",
      { link: "/captur/essence" }
    );
  }

  if (
    fuzzyMatch(message, "how do I order a captur calculator") ||
    fuzzyMatch(message, "can I buy this online for captur") ||
    fuzzyMatch(message, "how can I purchase captur module") ||
    fuzzyMatch(message, "order captur essence module") ||
    fuzzyMatch(message, "how to order captur diesel calculator")
  ) {
    return createResponse(
      "You can place an order directly on the product page. Click the 'Order' button to proceed.",
      { link: "/captur" }
    );
  }

  if (
    fuzzyMatch(message, "what is the delivery time for captur module") ||
    fuzzyMatch(message, "how long does delivery take for renault captur") ||
    fuzzyMatch(message, "what's the shipping time for captur diesel")
  ) {
    return createResponse(
      "Delivery times vary depending on your location. Please contact us for detailed shipping information.",
      { link: "/contact" }
    );
  }

  // French Queries and Responses
  if (
    fuzzyMatch(message, "qu'est-ce qu'un calculateur edc renault captur") ||
    fuzzyMatch(message, "parlez-moi du calculateur captur edc") ||
    fuzzyMatch(message, "à quoi sert le calculateur captur") ||
    fuzzyMatch(message, "décrire le module captur edc") ||
    fuzzyMatch(message, "décrire le module captur")
  ) {
    return createResponse(
      "Le calculateur EDC Renault Captur est un module de commande pour boîte automatique, utilisé pour assurer le bon fonctionnement de la transmission de votre Renault Captur.",
      { link: "/captur" }
    );
  }

  if (
    fuzzyMatch(
      message,
      "puis-je utiliser ce calculateur pour une captur 1.2 essence"
    ) ||
    fuzzyMatch(message, "est-ce compatible avec captur 1.2 essence") ||
    fuzzyMatch(message, "ce produit fonctionne-t-il pour captur essence") ||
    fuzzyMatch(message, "captur essence compatible") ||
    fuzzyMatch(message, "module captur essence 1.2")
  ) {
    return createResponse(
      "Oui, le calculateur Renault Captur 1.2 Essence est compatible avec les modèles à partir de 2012. Consultez la page produit pour plus de détails.",
      { link: "/captur/essence" }
    );
  }

  if (
    fuzzyMatch(
      message,
      "est-ce compatible avec les moteurs diesel renault captur"
    ) ||
    fuzzyMatch(message, "ce produit fonctionne-t-il pour captur diesel") ||
    fuzzyMatch(message, "puis-je l'utiliser pour captur 1.5 diesel") ||
    fuzzyMatch(message, "captur diesel compatible") ||
    fuzzyMatch(message, "module captur 1.5 diesel")
  ) {
    return createResponse(
      "Oui, un calculateur spécifique est disponible pour les modèles Renault Captur 1.5 Diesel. Consultez la page produit pour plus de détails.",
      { link: "/captur/diesel" }
    );
  }

  if (
    fuzzyMatch(
      message,
      "combien de calculateurs pour captur essence sont en stock"
    ) ||
    fuzzyMatch(message, "quel est le stock pour captur essence") ||
    fuzzyMatch(message, "avez-vous du stock pour captur 1.2 essence") ||
    fuzzyMatch(message, "stock captur essence disponible") ||
    fuzzyMatch(message, "disponibilité en stock captur essence")
  ) {
    return createResponse(
      "La disponibilité des stocks est dynamique. Veuillez consulter l'état des stocks en direct ici.",
      { link: "/captur/essence" }
    );
  }

  if (
    fuzzyMatch(message, "comment commander un module captur") ||
    fuzzyMatch(message, "puis-je acheter en ligne captur essence") ||
    fuzzyMatch(message, "comment puis-je acheter captur diesel module")
  ) {
    return createResponse(
      "Vous pouvez passer une commande directement sur la page produit. Cliquez sur le bouton 'Commander' pour continuer.",
      { link: "/captur" }
    );
  }

  if (
    fuzzyMatch(message, "quel est le délai de livraison pour captur essence") ||
    fuzzyMatch(message, "combien de temps pour la livraison captur diesel") ||
    fuzzyMatch(message, "temps d'expédition pour captur 1.2 essence")
  ) {
    return createResponse(
      "Les délais de livraison varient en fonction de votre localisation. Veuillez nous contacter pour plus de détails.",
      { link: "/contact" }
    );
  }

  // --- Renault Captur Products Section Ends ---
  // ====================================================

  // --- Default Fallback (French) ---
  if (/[a-zàâçéèêëîïôûùüÿñæœ]/i.test(message)) {
    return createResponse(
      "Je suis désolé, je n'ai pas compris. Pouvez-vous fournir plus de détails ?"
    );
  }

  // --- Default Fallback (English) ---
  return createResponse(
    "I'm sorry, I didn't understand. Could you provide more details?"
  );
};
