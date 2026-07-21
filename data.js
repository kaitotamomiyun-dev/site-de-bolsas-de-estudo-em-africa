/**
 * Fonte única dos artigos do site — usada tanto por home.js (página inicial)
 * como por article.js (página de artigo individual).
 *
 * Antes, este array estava duplicado em ambos os ficheiros; qualquer
 * alteração num deles (editar um artigo, adicionar um novo) exigia lembrar
 * de repetir a mudança no outro. Agora só existe aqui.
 *
 * Cada "image" é uma foto real (Unsplash, uso livre) relacionada ao tópico
 * do artigo, para o leitor perceber do que se trata só de bater o olho —
 * em vez do placeholder genérico com o nome da categoria escrito por cima.
 */
const articles = [
  {
    id: 1,
    title: 'Bolsas de estudo para a Europa em 2026',
    category: 'Bolsas de Estudo',
    date: '2026-07-10',
    description: 'Descobre os programas de mobilidade e bolsas que podem facilitar a tua entrada em universidades europeias.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=70',
    featured: true,
    content: 'As bolsas para África continuam a abrir portas para universidades europeias, principalmente em áreas de tecnologia, saúde e inovação. O segredo é começar cedo, preparar documentos sólidos e mostrar clareza sobre o teu objetivo académico.\n\nMuitos programas oferecem apoio parcial ou total em propinas, deslocação e alojamento, tornando a experiência muito mais acessível para estudantes que partem de países com menos recursos.'
  },
  {
    id: 2,
    title: 'Como usar IA para melhorar o teu perfil académico',
    category: 'Tecnologia',
    date: '2026-07-08',
    description: 'Ferramentas de IA podem ajudar a organizar aplicações, redações e estudos para quem quer estudar no exterior.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=70',
    featured: true,
    content: 'A inteligência artificial já é uma aliada para quem quer preparar candidaturas internacionais. Desde resumir artigos até criar planos de estudo, estas ferramentas ajudam a ganhar tempo e a apresentar um perfil mais forte.\n\nA melhor forma de usar a IA é combiná-la com reflexão pessoal, uma vez que as instituições valorizam autenticidade e visão de futuro.'
  },
  {
    id: 3,
    title: 'Programas de voluntariado internacional para jovens africanos',
    category: 'Oportunidades Internacionais',
    date: '2026-07-05',
    description: 'Voluntariado é uma forma excelente de ganhar experiência, rede e confiança para a tua carreira global.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=70',
    featured: true,
    content: 'Participar em programas de voluntariado ajuda a construir um portefólio sólido e a desenvolver liderança, comunicação e senso de comunidade.'
  },
  {
    id: 4,
    title: 'Notícias: novas vagas para programas de intercâmbio',
    category: 'Notícias',
    date: '2026-06-29',
    description: 'Várias instituições expandiram as vagas para estudantes africanos em programas de intercâmbio.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=70',
    featured: false,
    content: 'Os últimos anúncios mostram crescimento nas vagas para mobilidade internacional. Estudantes podem encontrar oportunidades para estudo, estágios e networking em várias regiões.'
  },
  {
    id: 5,
    title: 'A importância de um plano financeiro antes de partir',
    category: 'Bolsas de Estudo',
    date: '2026-06-22',
    description: 'Conhece as estratégias simples para gerir despesas, contingência e investimento na tua ida para o exterior.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=70',
    featured: false,
    content: 'Um bom plano financeiro reduz o stress de quem parte para estudar. Desde orçamento mensal até poupança para imprevistos, cada detalhe conta para construir uma experiência segura.'
  },
  {
    id: 6,
    title: 'Tecnologia e liderança: caminhos para o futuro',
    category: 'Tecnologia',
    date: '2026-06-18',
    description: 'Aprender tecnologia pode tornar-te competitivo em mercados globais e abrir portas para desafios internacionais.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=70',
    featured: false,
    content: 'Programação, análise de dados e gestão de produtos são áreas com forte procura. Para quem deseja viver e trabalhar no exterior, estes conhecimentos tornam-se ativos estratégicos.'
  }
];
