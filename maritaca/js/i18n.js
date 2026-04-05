/**
 * Internationalization (i18n) Module for Flat Maritaca
 * Supports: Portuguese (pt), English (en), Hebrew (he)
 */

const translations = {
  pt: {
    // Header
    subtitle: "Sua estadia em Itacaré",

    // Hero
    heroTitle: "Bem-vindo ao Flat Maritaca",
    heroSubtitle: "Seu refúgio aconchegante em Itacaré, Bahia",

    // Navigation
    nav: {
      about: "Sobre",
      gallery: "Galeria",
      rules: "Regras da Casa",
      beaches: "Praias",
      chefs: "Dicas do Chef",
      sports: "Esportes",
      wifi: "Wi-Fi",
      help: "Ajuda"
    },

    // Notice box
    notice: {
      title: "Você sabia?",
      paragraphs: [
        'Apesar do nome <strong>Flat Maritaca</strong>, o belo papagaio no quadro da sala é, na verdade, um <strong>Papagaio-real</strong> — e não uma maritaca! 😱',
        'Enquanto a maritaca grita, voa em bando e rouba fruta sem vergonha, o papagaio-real observa tudo com elegância... e talvez esteja te julgando em silêncio. 👀💅'
      ]
    },

    // About section
    about: {
      title: "Sobre o Flat",
      desc: [
        "<strong>Flat Maritaca</strong>, localizado em Itacaré, é o refúgio perfeito para quem busca conforto e praticidade. Com uma decoração moderna e acolhedora, o flat oferece uma ampla gama de comodidades para garantir uma estadia agradável.",
        "É a escolha ideal para curtir Itacaré com conforto e uma localização privilegiada."
      ],
      amenities: [
        { title: "Ar-condicionado", desc: "Para conforto o ano inteiro." },
        { title: "Quarto", desc: "Cama queen size com roupas de cama de alta qualidade." },
        { title: "Home Office & Wi-Fi", desc: "Espaço de trabalho dedicado com internet rápida." },
        { title: "Cozinha Completa", desc: "Air fryer, geladeira, fogão e utensílios." },
        { title: "Localização", desc: "Área tranquila, perto das praias e do comércio." },
        { title: "Estacionamento Privativo", desc: "Para mais conveniência e segurança." },
        { title: "Varanda", desc: "Com rede para relaxar." },
        { title: "Ambientes Integrados", desc: "Sala, cozinha e varanda em harmonia." }
      ]
    },

    // Gallery
    gallery: {
      title: "Galeria",
      images: [
        { src: "images/apartment/img1.jpg", alt: "Sala de estar do Flat Maritaca" },
        { src: "images/apartment/img2.jpg", alt: "Quarto com cama de casal e ar-condicionado" },
        { src: "images/apartment/img3.jpg", alt: "Banheiro moderno com mármore escuro" },
        { src: "images/apartment/img4.jpg", alt: "Corredor com detalhes decorativos" },
        { src: "images/apartment/img5.jpg", alt: "Cozinha americana e área de serviço" },
        { src: "images/apartment/img7.jpg", alt: "Almofadas tropicais no sofá" },
        { src: "images/apartment/img8.jpg", alt: "QR Code do Flat Maritaca" },
        { src: "images/apartment/img6.jpg", alt: "Varanda com espreguiçadeiras e jardim" }
      ]
    },

    // Rules
    rules: {
      title: "Regras da Casa",
      intro: "Por gentileza, cuide do apartamento como se fosse seu. Estas regras ajudam a garantir uma estadia tranquila para todos:",
      items: [
        { icon: "👥", title: "Hóspedes", desc: "Apenas o número de hóspedes aprovado é permitido. Consulte-nos previamente sobre visitas. Reuniões que causem incômodo aos vizinhos não são permitidas." },
        { icon: "⏰", title: "Check-in e Check-out", desc: "Respeite os horários combinados. Check-in fora do período definido precisa de autorização prévia." },
        { icon: "🚭", title: "Não Fumar Dentro do Apto", desc: "É permitido fumar apenas na varanda. Isso inclui cigarro comum, eletrônico e cannabis." },
        { icon: "🐶", title: "Animais de Estimação", desc: "São bem-vindos, salvo exceções informadas na sua reserva. Avise com antecedência." },
        { icon: "🔇", title: "Silêncio", desc: "Evite barulhos excessivos, especialmente após as 22h. Som alto não é permitido em nenhum horário." },
        { icon: "⚠️", title: "Danos", desc: "Qualquer dano causado deverá ser comunicado. Os hóspedes são responsáveis por reposição ou reparo." },
        { icon: "🔌", title: "Antes de Sair", subitems: [
          "Desligue os eletrônicos (ar-condicionado, eletrodomésticos, luzes).",
          "Deixe o apartamento organizado.",
          "Lave a louça usada e limpe superfícies do banheiro e da cozinha.",
          "Leve o lixo até a lixeira sinalizada próxima à entrada.",
          "Devolva a chave na caixa indicada ao lado da porta."
        ]}
      ]
    },

    // Beaches
    beaches: {
      title: "Praias e Cachoeiras Imperdíveis",
      intro: "Se você veio pra Itacaré, prepare-se: tem natureza pra todos os gostos! Aqui vão nossas dicas imperdíveis de praias e cachoeiras pra curtir ao máximo:",
      items: [
        { name: "🐚 Praia da Concha", desc: "Bem no centrinho, tranquila e ótima pra ver o pôr do sol tomando uma água de coco ou uma caipirinha. Puro charme!", image: "images/must-see/concha.jpg" },
        { name: "🏄 Resende, Tiririca, Costa & Ribeira", desc: "Um combo de praias conectadas por trilhas curtas. Tiririca é point dos surfistas. Ideal pra quem curte explorar e variar o visual.", image: "images/must-see/rezende.jpg" },
        { name: "🌴 Havaizinho, Engenhoca & Itacarezinho", desc: "Mais afastadas, com aquele visual selvagem e lindo. Itacarezinho mistura vibe rústica com beach club chique. Vale cada minuto.", image: "images/must-see/engenhoca.jpg" },
        { name: "🌅 Jeribucaçu", desc: "Natureza total! Uma trilha linda leva até onde o rio encontra o mar. Uma das paisagens mais incríveis da região.", image: "images/must-see/jeri.jpg" },
        { name: "🥾 Prainha", desc: "A queridinha dos aventureiros! Pra chegar, é preciso encarar uma trilha de uns 40 min — mas o visual compensa demais.", image: "images/must-see/prainha.jpg" },
        { name: "💧 Cachoeira do Tijuípe", desc: "Quer trocar o sal por água doce? Essa cachoeira é perfeita! Fácil acesso, restaurante gostoso e águas cristalinas pra relaxar depois da praia.", image: "images/must-see/tijuipe.jpg" }
      ]
    },

    // Chefs / Restaurants
    chefs: {
      title: "Dicas do Chef",
      intro: "Itacaré tem uma cena gastronômica incrível! Aqui estão alguns dos nossos restaurantes favoritos que você não pode perder:",
      items: [
        {
          name: "🍽️ Nuuh Bistrô",
          desc: "Cozinha contemporânea com fusão de sabores do Brasil e do mundo. Saladas, carnes, peixes, massas e opções vegetarianas/veganas. Cafeteria com espresso 100% arábica e carta de vinhos.",
          images: [
            { src: "images/restaurants/Nuuh/logo.jpeg", alt: "Nuuh - Logo" },
            { src: "images/restaurants/Nuuh/peixe-grelhado-com-batatas.jpg", alt: "Nuuh - Peixe grelhado com batatas" },
            { src: "images/restaurants/Nuuh/camaroes-na-mini-moranga.jpg", alt: "Nuuh - Camarões na mini moranga" },
            { src: "images/restaurants/Nuuh/polvo-grelhado-com-pure.jpg", alt: "Nuuh - Polvo grelhado com purê" }
          ],
          mapLink: "https://maps.app.goo.gl/HmY5nLCPUfktjEeu6",
          instagram: "https://www.instagram.com/nuuhbistro",
          instagramHandle: "@nuuhbistro"
        },
        {
          name: "🥟 Esfiharia Itacaré",
          desc: "Culinária árabe-brasileira com esfihas abertas e fechadas em sabores salgados e doces. Também serve kibes tradicional e vegetariano, beirutes e pizzas.",
          images: [
            { src: "images/restaurants/esfiharia/logo.png", alt: "Esfiharia Itacaré - Logo" },
            { src: "images/restaurants/esfiharia/1.png", alt: "Esfiharia Itacaré - Esfihas" },
            { src: "images/restaurants/esfiharia/2.png", alt: "Esfiharia Itacaré - Ambiente" }
          ],
          mapLink: "https://maps.app.goo.gl/d8mAqnn4RvoG5tvQ8",
          instagram: "https://www.instagram.com/esfihariaitacare/",
          instagramHandle: "@esfihariaitacare"
        }
      ]
    },

    // Sports
    sports: {
      title: "Esportes",
      intro: "Itacaré é o destino perfeito para quem curte aventura e esportes! Confira algumas atividades que você pode fazer por aqui:",
      items: [
        { name: "🏄 Aula de Surf", desc: "Conecte-se com o mar, desafie seus limites e viva a sensação única de deslizar sobre as ondas. Surf é liberdade, foco e energia.", image: "images/sports/surf/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept/", instagramHandle: "@itacare_training_concept" },
        { name: "🥋 Baruk Jiu-Jitsu", desc: "Descubra o Jiu-Jitsu: mais confiança, força e controle em cada treino. Comece hoje, evolua no tatame e supere seus próprios limites.", image: "images/sports/jiu-jitsu/image.jpg", mapLink: "https://share.google/pJGovUlxQ0rtjn4xz", instagram: "https://www.instagram.com/barukjiujitsu/", instagramHandle: "@barukjiujitsu" },
        { name: "💪 CrossFit", desc: "Treinos intensos, resultados reais e uma comunidade que puxa você para cima. CrossFit é superação diária, dentro e fora do box.", image: "images/sports/crossfit/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept", instagramHandle: "@itacare_training_concept" },
        { name: "🚣 Canoa Havaiana (Outrigger)", desc: "Força, sintonia e espírito de equipe no ritmo do oceano. A canoa havaiana transforma treino em conexão e performance.", image: "images/sports/outrigger/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept", instagramHandle: "@itacare_training_concept" }
      ]
    },

    // Wi-Fi
    wifi: {
      title: "Wi-Fi",
      networkLabel: "Rede",
      network: "MaritacaGuest",
      passwordLabel: "Senha",
      password: "wifiandwaves",
      showButton: "Mostrar Senha",
      hideButton: "Esconder"
    },

    // Help
    help: {
      title: "Precisa de ajuda?",
      intro: "Para suporte imediato, clique no ícone do WhatsApp no canto inferior direito para iniciar um chat comigo a qualquer momento. Se preferir, você também pode usar o chat do Airbnb.",
      phone: "+5511982964498",
      whatsapp: "https://wa.me/5511982964498",
      callButton: "Ligar",
      whatsappButton: "WhatsApp"
    },

    // Footer
    footer: {
      copyright: "Flat Maritaca Itacaré. Feito com carinho para você."
    },

    // Common
    common: {
      viewOnMap: "Ver no mapa",
      showPassword: "Mostrar senha",
      hidePassword: "Ocultar senha"
    },

    // Weather
    weather: {
      days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      conditions: {
        0: { icon: '☀️', desc: 'Céu limpo' },
        1: { icon: '🌤️', desc: 'Parcialmente nublado' },
        2: { icon: '⛅', desc: 'Parcialmente nublado' },
        3: { icon: '☁️', desc: 'Nublado' },
        45: { icon: '🌫️', desc: 'Neblina' },
        48: { icon: '🌫️', desc: 'Neblina com geada' },
        51: { icon: '🌦️', desc: 'Chuvisco leve' },
        53: { icon: '🌦️', desc: 'Chuvisco moderado' },
        55: { icon: '🌧️', desc: 'Chuvisco forte' },
        61: { icon: '🌧️', desc: 'Chuva leve' },
        63: { icon: '🌧️', desc: 'Chuva moderada' },
        65: { icon: '🌧️', desc: 'Chuva forte' },
        80: { icon: '🌧️', desc: 'Pancadas de chuva' },
        81: { icon: '🌧️', desc: 'Pancadas moderadas' },
        82: { icon: '⛈️', desc: 'Pancadas fortes' },
        95: { icon: '⛈️', desc: 'Tempestade' }
      }
    }
  },

  en: {
    // Header
    subtitle: "Your stay in Itacaré",

    // Hero
    heroTitle: "Welcome to Flat Maritaca",
    heroSubtitle: "Your cozy retreat in Itacaré, Bahia",

    // Navigation
    nav: {
      about: "About",
      gallery: "Gallery",
      rules: "House Rules",
      beaches: "Beaches",
      chefs: "Chef's Picks",
      sports: "Sports",
      wifi: "Wi-Fi",
      help: "Help"
    },

    // Notice box
    notice: {
      title: "Did you know?",
      paragraphs: [
        'Despite the name <strong>Flat Maritaca</strong>, the beautiful parrot in the living room painting is actually a <strong>Blue-fronted Amazon</strong> — not a maritaca! 😱',
        'While the maritaca squawks, flies in flocks, and shamelessly steals fruit, the Blue-fronted Amazon observes everything with elegance... and might be silently judging you. 👀💅'
      ]
    },

    // About section
    about: {
      title: "About the Flat",
      desc: [
        "<strong>Flat Maritaca</strong>, located in Itacaré, is the perfect retreat for those seeking comfort and convenience. With modern and cozy decor, the flat offers a wide range of amenities to ensure a pleasant stay.",
        "It's the ideal choice to enjoy Itacaré with comfort and a prime location."
      ],
      amenities: [
        { title: "Air Conditioning", desc: "For year-round comfort." },
        { title: "Bedroom", desc: "Queen-size bed with high-quality linens." },
        { title: "Home Office & Wi-Fi", desc: "Dedicated workspace with fast internet." },
        { title: "Full Kitchen", desc: "Air fryer, refrigerator, stove, and utensils." },
        { title: "Location", desc: "Quiet area, close to beaches and shops." },
        { title: "Private Parking", desc: "For added convenience and security." },
        { title: "Balcony", desc: "With hammock to relax." },
        { title: "Open Layout", desc: "Living room, kitchen, and balcony in harmony." }
      ]
    },

    // Gallery
    gallery: {
      title: "Gallery",
      images: [
        { src: "images/apartment/img1.jpg", alt: "Living room of Flat Maritaca" },
        { src: "images/apartment/img2.jpg", alt: "Bedroom with double bed and AC" },
        { src: "images/apartment/img3.jpg", alt: "Modern bathroom with dark marble" },
        { src: "images/apartment/img4.jpg", alt: "Hallway with decorative details" },
        { src: "images/apartment/img5.jpg", alt: "Kitchen bar and laundry area" },
        { src: "images/apartment/img7.jpg", alt: "Tropical cushion detail on sofa" },
        { src: "images/apartment/img8.jpg", alt: "Flat Maritaca QR Code" },
        { src: "images/apartment/img6.jpg", alt: "Balcony with deck chairs and garden" }
      ]
    },

    // Rules
    rules: {
      title: "House Rules",
      intro: "Please treat the apartment as your own. These rules help ensure a peaceful stay for everyone:",
      items: [
        { icon: "👥", title: "Guests", desc: "Only the approved number of guests is allowed. Please consult us in advance about visitors. Gatherings that disturb neighbors are not permitted." },
        { icon: "⏰", title: "Check-in & Check-out", desc: "Please respect the agreed times. Check-in outside the defined period requires prior authorization." },
        { icon: "🚭", title: "No Smoking Inside", desc: "Smoking is only allowed on the balcony. This includes regular cigarettes, e-cigarettes, and cannabis." },
        { icon: "🐶", title: "Pets", desc: "Welcome, except as noted in your reservation. Please notify us in advance." },
        { icon: "🔇", title: "Quiet Hours", desc: "Avoid excessive noise, especially after 10 PM. Loud music is not allowed at any time." },
        { icon: "⚠️", title: "Damages", desc: "Any damage must be reported. Guests are responsible for replacement or repair." },
        { icon: "🔌", title: "Before Leaving", subitems: [
          "Turn off electronics (A/C, appliances, lights).",
          "Leave the apartment tidy.",
          "Wash used dishes and clean bathroom and kitchen surfaces.",
          "Take trash to the designated bin near the entrance.",
          "Return the key to the box next to the door."
        ]}
      ]
    },

    // Beaches
    beaches: {
      title: "Must-See Beaches & Waterfalls",
      intro: "If you came to Itacaré, get ready: there's nature for all tastes! Here are our unmissable tips for beaches and waterfalls to enjoy to the fullest:",
      items: [
        { name: "🐚 Concha Beach", desc: "Right downtown, calm and great for watching the sunset with a coconut water or caipirinha. Pure charm!", image: "images/must-see/concha.jpg" },
        { name: "🏄 Resende, Tiririca, Costa & Ribeira", desc: "A combo of beaches connected by short trails. Tiririca is the surfers' spot. Ideal for those who like to explore and change scenery.", image: "images/must-see/rezende.jpg" },
        { name: "🌴 Havaizinho, Engenhoca & Itacarezinho", desc: "More remote, with that wild and beautiful scenery. Itacarezinho mixes rustic vibes with chic beach club. Worth every minute.", image: "images/must-see/engenhoca.jpg" },
        { name: "🌅 Jeribucaçu", desc: "Total nature! A beautiful trail leads to where the river meets the sea. One of the most incredible landscapes in the region.", image: "images/must-see/jeri.jpg" },
        { name: "🥾 Prainha", desc: "The adventurers' favorite! To get there, you need to face a 40-minute trail — but the view makes it totally worth it.", image: "images/must-see/prainha.jpg" },
        { name: "💧 Tijuípe Waterfall", desc: "Want to swap salt for fresh water? This waterfall is perfect! Easy access, nice restaurant, and crystal-clear waters to relax after the beach.", image: "images/must-see/tijuipe.jpg" }
      ]
    },

    // Chefs / Restaurants
    chefs: {
      title: "Chef's Picks",
      intro: "Itacaré has an incredible food scene! Here are some of our favorite restaurants you can't miss:",
      items: [
        {
          name: "🍽️ Nuuh Bistrô",
          desc: "Contemporary cuisine with a fusion of flavors from Brazil and the world. Salads, meats, fish, pasta, and vegetarian/vegan options. Coffee shop with 100% arabica espresso and wine list.",
          images: [
            { src: "images/restaurants/Nuuh/logo.jpeg", alt: "Nuuh - Logo" },
            { src: "images/restaurants/Nuuh/peixe-grelhado-com-batatas.jpg", alt: "Nuuh - Grilled fish with potatoes" },
            { src: "images/restaurants/Nuuh/camaroes-na-mini-moranga.jpg", alt: "Nuuh - Shrimp in mini pumpkin" },
            { src: "images/restaurants/Nuuh/polvo-grelhado-com-pure.jpg", alt: "Nuuh - Grilled octopus with puree" }
          ],
          mapLink: "https://maps.app.goo.gl/HmY5nLCPUfktjEeu6",
          instagram: "https://www.instagram.com/nuuhbistro",
          instagramHandle: "@nuuhbistro"
        },
        {
          name: "🥟 Esfiharia Itacaré",
          desc: "Arab-Brazilian cuisine with open and closed esfihas in savory and sweet flavors. Also serves traditional and vegetarian kibes, beirutes, and pizzas.",
          images: [
            { src: "images/restaurants/esfiharia/logo.png", alt: "Esfiharia Itacaré - Logo" },
            { src: "images/restaurants/esfiharia/1.png", alt: "Esfiharia Itacaré - Esfihas" },
            { src: "images/restaurants/esfiharia/2.png", alt: "Esfiharia Itacaré - Ambiance" }
          ],
          mapLink: "https://maps.app.goo.gl/d8mAqnn4RvoG5tvQ8",
          instagram: "https://www.instagram.com/esfihariaitacare/",
          instagramHandle: "@esfihariaitacare"
        }
      ]
    },

    // Sports
    sports: {
      title: "Sports",
      intro: "Itacaré is the perfect destination for adventure and sports lovers! Check out some activities you can do here:",
      items: [
        { name: "🏄 Surf Lessons", desc: "Connect with the sea, challenge your limits, and experience the unique feeling of gliding over waves. Surfing is freedom, focus, and energy.", image: "images/sports/surf/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept/", instagramHandle: "@itacare_training_concept" },
        { name: "🥋 Baruk Jiu-Jitsu", desc: "Discover Jiu-Jitsu: more confidence, strength, and control in every training session. Start today, evolve on the mat, and surpass your own limits.", image: "images/sports/jiu-jitsu/image.jpg", mapLink: "https://share.google/pJGovUlxQ0rtjn4xz", instagram: "https://www.instagram.com/barukjiujitsu/", instagramHandle: "@barukjiujitsu" },
        { name: "💪 CrossFit", desc: "Intense workouts, real results, and a community that pushes you up. CrossFit is daily overcoming, inside and outside the box.", image: "images/sports/crossfit/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept", instagramHandle: "@itacare_training_concept" },
        { name: "🚣 Hawaiian Canoe (Outrigger)", desc: "Strength, harmony, and team spirit to the rhythm of the ocean. Hawaiian canoe transforms training into connection and performance.", image: "images/sports/outrigger/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept", instagramHandle: "@itacare_training_concept" }
      ]
    },

    // Wi-Fi
    wifi: {
      title: "Wi-Fi",
      networkLabel: "Network",
      network: "MaritacaGuest",
      passwordLabel: "Password",
      password: "wifiandwaves",
      showButton: "Show Password",
      hideButton: "Hide"
    },

    // Help
    help: {
      title: "Need help?",
      intro: "For immediate support, click the WhatsApp icon in the bottom right corner to start a chat with me anytime. You can also use the Airbnb chat if you prefer.",
      phone: "+5511982964498",
      whatsapp: "https://wa.me/5511982964498",
      callButton: "Call",
      whatsappButton: "WhatsApp"
    },

    // Footer
    footer: {
      copyright: "Flat Maritaca Itacaré. Made with love for you."
    },

    // Common
    common: {
      viewOnMap: "View on map",
      showPassword: "Show password",
      hidePassword: "Hide password"
    },

    // Weather
    weather: {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      conditions: {
        0: { icon: '☀️', desc: 'Clear sky' },
        1: { icon: '🌤️', desc: 'Partly cloudy' },
        2: { icon: '⛅', desc: 'Partly cloudy' },
        3: { icon: '☁️', desc: 'Cloudy' },
        45: { icon: '🌫️', desc: 'Fog' },
        48: { icon: '🌫️', desc: 'Freezing fog' },
        51: { icon: '🌦️', desc: 'Light drizzle' },
        53: { icon: '🌦️', desc: 'Moderate drizzle' },
        55: { icon: '🌧️', desc: 'Heavy drizzle' },
        61: { icon: '🌧️', desc: 'Light rain' },
        63: { icon: '🌧️', desc: 'Moderate rain' },
        65: { icon: '🌧️', desc: 'Heavy rain' },
        80: { icon: '🌧️', desc: 'Rain showers' },
        81: { icon: '🌧️', desc: 'Moderate showers' },
        82: { icon: '⛈️', desc: 'Heavy showers' },
        95: { icon: '⛈️', desc: 'Thunderstorm' }
      }
    }
  },

  he: {
    // Header
    subtitle: "השהייה שלך באיטקרה",

    // Hero
    heroTitle: "ברוכים הבאים לפלט מריטקה",
    heroSubtitle: "המפלט הנעים שלך באיטקרה, באהיה",

    // Navigation
    nav: {
      about: "על הדירה",
      gallery: "גלריה",
      rules: "כללי הבית",
      beaches: "חופים",
      chefs: "המלצות השף",
      sports: "ספורט",
      wifi: "אינטרנט אלחוטי",
      help: "עזרה"
    },

    // Notice box
    notice: {
      title: "ידעת?",
      paragraphs: [
        'המילה <strong>"Maritaca"</strong> משמשת בברזיל לתיאור תוכים קטנים — ציפורים רועשות, חברותיות ושובבות. 😱',
        'אבל שימו לב — למרות השם <strong>Flat Maritaca</strong>, התוכי שבתמונה בסלון הוא למעשה <strong>תוכי אמזון מצח-כחול</strong>, ולא מריטקה! 👀💅'
      ]
    },

    // About section
    about: {
      title: "על הדירה",
      desc: [
        "<strong>Flat Maritaca</strong>, הממוקמת באיטאקרה, היא המקום המושלם למי שמחפש נוחות ונעימות. עם עיצוב מודרני וחמים, הדירה מציעה מגוון שירותים שיהפכו את השהות שלכם לנעימה במיוחד.",
        "זוהי הבחירה האידיאלית ליהנות מאיטאקרה עם נוחות ומיקום מצוין."
      ],
      amenities: [
        { title: "מיזוג אוויר", desc: "לנוחות בכל עונות השנה." },
        { title: "חדר שינה", desc: "מיטה זוגית עם מצעים איכותיים." },
        { title: "עבודה מהבית ואינטרנט", desc: "פינת עבודה עם אינטרנט מהיר." },
        { title: "מטבח מאובזר", desc: "כולל טיגון אוויר, מקרר, כיריים וכלי מטבח." },
        { title: "מיקום", desc: "אזור שקט, קרוב לחופים ולחנויות." },
        { title: "חניה פרטית", desc: "לנוחות ובטיחות נוספת." },
        { title: "מרפסת", desc: "עם ערסל להירגעות." },
        { title: "עיצוב פתוח", desc: "סלון, מטבח ומרפסת בהרמוניה." }
      ]
    },

    // Gallery
    gallery: {
      title: "גלריה",
      images: [
        { src: "images/apartment/img1.jpg", alt: "סלון של דירת מריטקה" },
        { src: "images/apartment/img2.jpg", alt: "חדר שינה עם מיטה זוגית ומיזוג אוויר" },
        { src: "images/apartment/img3.jpg", alt: "חדר רחצה מודרני עם שיש כהה" },
        { src: "images/apartment/img4.jpg", alt: "מסדרון עם פרטים עיצוביים" },
        { src: "images/apartment/img5.jpg", alt: "מטבח ואזור כביסה" },
        { src: "images/apartment/img7.jpg", alt: "פרט כריות טרופיות על הספה" },
        { src: "images/apartment/img8.jpg", alt: "קוד QR של דירת מריטקה" },
        { src: "images/apartment/img6.jpg", alt: "מרפסת עם כיסאות נוח וגינה" }
      ]
    },

    // Rules
    rules: {
      title: "כללי הבית",
      intro: "אנא התייחסו לדירה כאילו הייתה שלכם. הכללים הבאים עוזרים לשמור על חוויה נעימה ונוחה לכולם:",
      items: [
        { icon: "👥", title: "אורחים", desc: "רק מספר האורחים המאושר מותר. אנא התייעצו איתנו מראש לגבי מבקרים. מפגשים שמפריעים לשכנים אסורים." },
        { icon: "⏰", title: "צ'ק-אין וצ'ק-אאוט", desc: "אנא כבדו את השעות המוסכמות. צ'ק-אין מחוץ לזמן המוגדר דורש אישור מראש." },
        { icon: "🚭", title: "אסור לעשן בפנים", desc: "מותר לעשן רק במרפסת. זה כולל סיגריות רגילות, אלקטרוניות וקנאביס." },
        { icon: "🐶", title: "חיות מחמד", desc: "ברוכים הבאים, למעט כפי שצוין בהזמנה. אנא הודיעו לנו מראש." },
        { icon: "🔇", title: "שעות שקטות", desc: "הימנעו מרעש מוגזם, במיוחד אחרי 22:00. מוזיקה רועשת אסורה בכל שעה." },
        { icon: "⚠️", title: "נזקים", desc: "יש לדווח על כל נזק. האורחים אחראים להחלפה או תיקון." },
        { icon: "🔌", title: "לפני היציאה", subitems: [
          "כבו מכשירים חשמליים (מזגן, מכשירי חשמל, אורות).",
          "השאירו את הדירה מסודרת.",
          "שטפו כלים משומשים ונקו משטחים בחדר האמבטיה והמטבח.",
          "קחו את האשפה לפח המיועד ליד הכניסה.",
          "החזירו את המפתח לתיבה ליד הדלת."
        ]}
      ]
    },

    // Beaches
    beaches: {
      title: "חופים ומפלים שחובה לראות",
      intro: "אם הגעתם לאיטאקרה, התכוננו: יש טבע לכל טעם! הנה הטיפים שלנו לחופים ומפלים שאי אפשר לפספס:",
      items: [
        { name: "🐚 חוף קונשה", desc: "ממש במרכז העיר, שקט ומעולה לצפייה בשקיעה עם מי קוקוס או קייפיריניה. קסם טהור!", image: "images/must-see/concha.jpg" },
        { name: "🏄 רזנדה, טיריריקה, קוסטה וריביירה", desc: "קומבו של חופים מחוברים בשבילים קצרים. טיריריקה הוא מקום הגולשים. אידיאלי למי שאוהב לחקור ולשנות נוף.", image: "images/must-see/rezende.jpg" },
        { name: "🌴 הוואיזיניו, אנג'ניוקה ואיטקרזיניו", desc: "יותר מרוחקים, עם הנוף הפראי והיפה הזה. איטקרזיניו משלב אווירה כפרית עם ביץ' קלאב שיק. שווה כל דקה.", image: "images/must-see/engenhoca.jpg" },
        { name: "🌅 ג'ריבוקאסו", desc: "טבע מוחלט! שביל יפהפה מוביל למקום שבו הנהר פוגש את הים. אחד הנופים המדהימים ביותר באזור.", image: "images/must-see/jeri.jpg" },
        { name: "🥾 פראיניה", desc: "האהוב על הרפתקנים! כדי להגיע, צריך להתמודד עם שביל של 40 דקות — אבל הנוף שווה את זה לגמרי.", image: "images/must-see/prainha.jpg" },
        { name: "💧 מפל טיג'ואיפה", desc: "רוצים להחליף מלח במים מתוקים? המפל הזה מושלם! גישה קלה, מסעדה נחמדה ומים צלולים להירגע אחרי החוף.", image: "images/must-see/tijuipe.jpg" }
      ]
    },

    // Chefs / Restaurants
    chefs: {
      title: "המלצות השף",
      intro: "לאיטאקרה יש סצנת אוכל מדהימה! הנה כמה מהמסעדות האהובות עלינו שאי אפשר לפספס:",
      items: [
        {
          name: "🍽️ נווה ביסטרו",
          desc: "מטבח עכשווי עם מיזוג טעמים מברזיל ומהעולם. סלטים, בשרים, דגים, פסטה ואפשרויות צמחוניות/טבעוניות. בית קפה עם אספרסו ערביקה 100% ורשימת יינות.",
          images: [
            { src: "images/restaurants/Nuuh/logo.jpeg", alt: "נווה - לוגו" },
            { src: "images/restaurants/Nuuh/peixe-grelhado-com-batatas.jpg", alt: "נווה - דג צלוי עם תפוחי אדמה" },
            { src: "images/restaurants/Nuuh/camaroes-na-mini-moranga.jpg", alt: "נווה - שרימפס בדלעת מיני" },
            { src: "images/restaurants/Nuuh/polvo-grelhado-com-pure.jpg", alt: "נווה - תמנון צלוי עם פירה" }
          ],
          mapLink: "https://maps.app.goo.gl/HmY5nLCPUfktjEeu6",
          instagram: "https://www.instagram.com/nuuhbistro",
          instagramHandle: "@nuuhbistro"
        },
        {
          name: "🥟 אספיהריה איטקרה",
          desc: "מטבח ערבי-ברזילאי עם אספיהות פתוחות וסגורות בטעמים מלוחים ומתוקים. מגישים גם קיבה מסורתית וצמחונית, ביירוטס ופיצות.",
          images: [
            { src: "images/restaurants/esfiharia/logo.png", alt: "אספיהריה איטקרה - לוגו" },
            { src: "images/restaurants/esfiharia/1.png", alt: "אספיהריה איטקרה - אספיהות" },
            { src: "images/restaurants/esfiharia/2.png", alt: "אספיהריה איטקרה - אווירה" }
          ],
          mapLink: "https://maps.app.goo.gl/d8mAqnn4RvoG5tvQ8",
          instagram: "https://www.instagram.com/esfihariaitacare/",
          instagramHandle: "@esfihariaitacare"
        }
      ]
    },

    // Sports
    sports: {
      title: "ספורט",
      intro: "איטאקרה היא היעד המושלם לחובבי הרפתקאות וספורט! בדקו כמה פעילויות שאפשר לעשות כאן:",
      items: [
        { name: "🏄 שיעורי גלישה", desc: "התחברו לים, אתגרו את הגבולות שלכם וחוו את התחושה הייחודית של גלישה על הגלים. גלישה היא חופש, ריכוז ואנרגיה.", image: "images/sports/surf/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept/", instagramHandle: "@itacare_training_concept" },
        { name: "🥋 ברוק ג'יו-ג'יטסו", desc: "גלו ג'יו-ג'יטסו: יותר ביטחון, כוח ושליטה בכל אימון. התחילו היום, התפתחו על המזרן והתגברו על הגבולות שלכם.", image: "images/sports/jiu-jitsu/image.jpg", mapLink: "https://share.google/pJGovUlxQ0rtjn4xz", instagram: "https://www.instagram.com/barukjiujitsu/", instagramHandle: "@barukjiujitsu" },
        { name: "💪 קרוספיט", desc: "אימונים אינטנסיביים, תוצאות אמיתיות וקהילה שדוחפת אתכם קדימה. קרוספיט היא התגברות יומית, בתוך ומחוץ לקופסה.", image: "images/sports/crossfit/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept", instagramHandle: "@itacare_training_concept" },
        { name: "🚣 קאנו הוואי (אאוטריגר)", desc: "כוח, הרמוניה ורוח צוות בקצב האוקיינוס. הקאנו ההוואי הופך אימון לחיבור וביצועים.", image: "images/sports/outrigger/image.png", mapLink: "https://maps.app.goo.gl/xypM3ULvkojkQXhA9", instagram: "https://www.instagram.com/itacare_training_concept", instagramHandle: "@itacare_training_concept" }
      ]
    },

    // Wi-Fi
    wifi: {
      title: "אינטרנט אלחוטי",
      networkLabel: "שם הרשת",
      network: "MaritacaGuest",
      passwordLabel: "סיסמה",
      password: "wifiandwaves",
      showButton: "הצג סיסמה",
      hideButton: "הסתר"
    },

    // Help
    help: {
      title: "צריכים עזרה?",
      intro: "לתמיכה מיידית, לחצו על אייקון הוואטסאפ בפינה הימנית התחתונה כדי להתחיל צ'אט איתי בכל זמן. אתם יכולים גם להשתמש בצ'אט של Airbnb אם אתם מעדיפים.",
      phone: "+5511982964498",
      whatsapp: "https://wa.me/5511982964498",
      callButton: "התקשר",
      whatsappButton: "וואטסאפ"
    },

    // Footer
    footer: {
      copyright: "Flat Maritaca Itacaré. נוצר באהבה עבורכם."
    },

    // Common
    common: {
      viewOnMap: "צפה במפה",
      showPassword: "הצג סיסמה",
      hidePassword: "הסתר סיסמה"
    },

    // Weather
    weather: {
      days: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
      conditions: {
        0: { icon: '☀️', desc: 'שמיים בהירים' },
        1: { icon: '🌤️', desc: 'מעונן חלקית' },
        2: { icon: '⛅', desc: 'מעונן חלקית' },
        3: { icon: '☁️', desc: 'מעונן' },
        45: { icon: '🌫️', desc: 'ערפל' },
        48: { icon: '🌫️', desc: 'ערפל קופא' },
        51: { icon: '🌦️', desc: 'טפטוף קל' },
        53: { icon: '🌦️', desc: 'טפטוף בינוני' },
        55: { icon: '🌧️', desc: 'טפטוף חזק' },
        61: { icon: '🌧️', desc: 'גשם קל' },
        63: { icon: '🌧️', desc: 'גשם בינוני' },
        65: { icon: '🌧️', desc: 'גשם חזק' },
        80: { icon: '🌧️', desc: 'ממטרים' },
        81: { icon: '🌧️', desc: 'ממטרים בינוניים' },
        82: { icon: '⛈️', desc: 'ממטרים חזקים' },
        95: { icon: '⛈️', desc: 'סופת רעמים' }
      }
    }
  }
};

// Current language
let currentLang = 'pt';

// Get translation by key path (e.g., "about.title")
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      console.warn(`Translation not found: ${key}`);
      return key;
    }
  }
  return value;
}

// Set language
function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    localStorage.setItem('language', lang);
    // Note: App.js handles the rendering via App.setLanguage()
  }
}

// Get current language
function getLanguage() {
  return currentLang;
}

// Initialize language from localStorage or default
function initLanguage() {
  const saved = localStorage.getItem('language');
  if (saved && translations[saved]) {
    currentLang = saved;
  }
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
}

// Export for use in other modules
window.i18n = {
  t,
  setLanguage,
  getLanguage,
  initLanguage,
  translations
};
