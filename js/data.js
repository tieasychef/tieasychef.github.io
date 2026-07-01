/* =========================================================
   data.js — Todo o CONTEÚDO do site fica aqui.
   É só editar os textos abaixo para atualizar o site.
   Não precisa mexer em nenhum outro arquivo.
   ========================================================= */

const SITE_DATA = {

  // Frases que aparecem digitando no topo (hero)
  typedPhrases: [
    "resultados reais.",
    "sistemas integrados.",
    "processos automatizados.",
    "soluções Salesforce.",
    "aplicativos sob medida."
  ],

  // Tecnologias / palavras-chave (aparecem como "tags")
  skillTags: [
    "Apex", "Lightning Web Components", "SOQL/SOSL", "Salesforce Flows",
    "Sales Cloud", "Service Cloud", "Experience Cloud", "REST API", "SOAP",
    "MuleSoft", "OAuth 2.0", "Webhooks", "JavaScript", "Node.js", "SQL",
    "Git", "CI/CD", "Scrum", "Kanban", "Integração de sistemas"
  ],

  // Projetos do portfólio
  // category deve bater com um dos filtros gerados automaticamente
  projects: [
    {
      icon: "🔗",
      category: "Integração",
      title: "Integração Salesforce ↔ ERP",
      desc: "Sincronização em tempo real de pedidos, clientes e faturamento entre Salesforce e o ERP corporativo.",
      result: "−40% de retrabalho manual",
      stack: ["Apex", "REST API", "MuleSoft"]
    },
    {
      icon: "🧭",
      category: "Salesforce",
      title: "Portal de Autoatendimento",
      desc: "Portal em Experience Cloud onde clientes acompanham chamados e acessam a base de conhecimento.",
      result: "−30% de tickets de suporte",
      stack: ["Experience Cloud", "LWC", "Flows"]
    },
    {
      icon: "📱",
      category: "Aplicativos",
      title: "App de Força de Vendas",
      desc: "Aplicativo mobile offline-first para a equipe comercial registrar visitas e pedidos em campo.",
      result: "+25% de produtividade em campo",
      stack: ["JavaScript", "Node.js", "REST API"]
    },
    {
      icon: "⚙️",
      category: "Automação",
      title: "Automação de Processos",
      desc: "Reengenharia de processos com Salesforce Flow e Apex, eliminando etapas manuais e planilhas.",
      result: "120+ horas/mês economizadas",
      stack: ["Flows", "Apex", "SOQL"]
    },
    {
      icon: "💳",
      category: "Integração",
      title: "Gateway de Pagamentos",
      desc: "Integração de meios de pagamento com sistemas legados via API REST e conciliação automática.",
      result: "Conciliação 100% automática",
      stack: ["REST API", "OAuth", "Webhooks"]
    },
    {
      icon: "📊",
      category: "Salesforce",
      title: "Dashboards Executivos",
      desc: "Painéis de indicadores em tempo real para diretoria acompanhar vendas, metas e SLA.",
      result: "Decisões baseadas em dados",
      stack: ["Sales Cloud", "Reports", "SOQL"]
    }
  ],

  // Linha do tempo / experiência
  timeline: [
    {
      year: "2018 — Hoje",
      role: "Consultor & Desenvolvedor Sênior Salesforce",
      desc: "Consultoria independente: projetos de integração, automação e apps para empresas de diversos setores, do diagnóstico à sustentação."
    },
    {
      year: "2012 — 2018",
      role: "Arquiteto de Integrações",
      desc: "Liderança técnica em projetos de integração entre CRM, ERP e sistemas legados, com foco em performance e confiabilidade."
    },
    {
      year: "2007 — 2012",
      role: "Desenvolvedor Full-Stack Sênior",
      desc: "Desenvolvimento de aplicações corporativas e APIs, atuando em toda a stack e mentoria de desenvolvedores."
    },
    {
      year: "2003 — 2007",
      role: "Analista / Desenvolvedor de Sistemas",
      desc: "Início da carreira em análise e desenvolvimento, construindo a base sólida de 20+ anos de experiência."
    }
  ],

  // Serviços da consultoria
  services: [
    {
      icon: "☁️",
      title: "Consultoria Salesforce",
      desc: "Implementação, customização e otimização de Sales, Service e Experience Cloud alinhadas ao seu negócio."
    },
    {
      icon: "🔗",
      title: "Integração de Sistemas",
      desc: "Conecto Salesforce, ERPs, gateways e sistemas legados com integrações seguras e escaláveis."
    },
    {
      icon: "📱",
      title: "Aplicativos Sob Medida",
      desc: "Desenvolvimento de aplicações web e mobile personalizadas para os desafios específicos da sua empresa."
    },
    {
      icon: "⚙️",
      title: "Automação de Processos",
      desc: "Elimino tarefas manuais e planilhas, reduzindo erros e liberando o time para o que importa."
    },
    {
      icon: "🚀",
      title: "Otimização & Performance",
      desc: "Diagnóstico e melhoria de soluções existentes para ganhar velocidade, estabilidade e reduzir custos."
    },
    {
      icon: "🤝",
      title: "Mentoria & Suporte",
      desc: "Acompanhamento próximo do seu time, transferência de conhecimento e suporte contínuo pós-entrega."
    }
  ],

  // WhatsApp (só números, com DDI 55). Usado pelo formulário e botões.
  whatsappNumber: "5554991347184"
};
