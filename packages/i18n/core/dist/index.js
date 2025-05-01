"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Lang: () => Lang,
  defaultI18nProvider: () => defaultI18nProvider,
  en: () => en_default,
  es: () => es_default,
  getStringsUsecase: () => getStringsUsecase,
  langs: () => langs,
  notTranslatable: () => notTranslatable,
  pt: () => pt_default
});
module.exports = __toCommonJS(index_exports);

// src/model/i18n.ts
var notTranslatable = {
  docker_hub: "https://hub.docker.com/repositories/asoncs",
  email: "asoncsts@gmail.com",
  email2: "acsgsa92@gmail.com",
  github: "https://github.com/AsonCS",
  name: "Anderson Costa da Silva",
  phone: "+55 (11) 98220-2014",
  phone2: "+55 (11) 91045-3711",
  projects: {
    card: {
      demo: "Demo"
    }
  },
  place: "https://maps.app.goo.gl/yd8YaCoTKneBD8Bp9",
  username: "AsonCS"
};

// src/model/lang.ts
var Lang = /* @__PURE__ */ ((Lang3) => {
  Lang3["EN"] = "en";
  Lang3["ES"] = "es";
  Lang3["PT"] = "pt";
  return Lang3;
})(Lang || {});
function langs() {
  return Object.values(Lang);
}

// src/resources/index.ts
var resources_exports = {};
__export(resources_exports, {
  en: () => en_default,
  es: () => es_default,
  pt: () => pt_default
});

// src/resources/en.json
var en_default = {
  certificates: {
    card: {
      view: "View Certificate"
    },
    subtitle: "Professional certifications and courses I've completed",
    title: "My Certificates"
  },
  contact: {
    info: {
      detail: "Business Details",
      info: "Contact Information",
      name: "Business Name",
      subtitle: "My official business details",
      title: "Business Information"
    },
    form: {
      message: "Message",
      message_placeholder: "Your message",
      name: "Name",
      name_placeholder: "Your name",
      send: "Send message",
      subject: "Subject",
      subject_placeholder: "What is this regarding?",
      subtitle: "Fill out the form below to get in touch",
      title: "Send a Message"
    },
    subtitle: "Get in touch for business inquiries or project collaboration",
    title: "Contact Me"
  },
  home: {
    layout: {
      "# Nav Reflects navigation bar order": "",
      nav: {
        home: "Home",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact"
      }
    },
    metadata: {
      description: "My portfolio website, showcasing projects, certificates, and business information.",
      generator: "v0.dev",
      title: "Anderson Costa da Silva - Portfolio - AsonCS TS"
    },
    rights: "All rights reserved",
    subtitle: "Software Developer & Technology Enthusiast",
    view_certificates: "View Certificates",
    view_projects: "View Projects"
  },
  projects: {
    card: {
      code: "Code",
      no_description: "No description available"
    },
    empty: {
      check_later: "Check back later or visit my GitHub profile directly",
      not_found: "No repositories found",
      visit_github: "Visit GitHub Profile"
    },
    subtitle: "Explore my latest projects and contributions on GitHub",
    title: "My GitHub Projects"
  }
};

// src/resources/es.json
var es_default = {
  certificates: {
    card: {
      view: "Ver Certificado"
    },
    subtitle: "Certificaciones profesionales y cursos que he completado",
    title: "Mis Certificados"
  },
  contact: {
    info: {
      detail: "Detalles del Negocio",
      info: "Informaci\xF3n de Contacto",
      name: "Nombre del Negocio",
      subtitle: "Mis detalles oficiales del negocio",
      title: "Informaci\xF3n del Negocio"
    },
    form: {
      message: "Mensaje",
      message_placeholder: "Tu mensaje",
      name: "Nombre",
      name_placeholder: "Tu nombre",
      send: "Enviar mensaje",
      subject: "Asunto",
      subject_placeholder: "\xBFDe qu\xE9 se trata?",
      subtitle: "Rellena el formulario a continuaci\xF3n para ponerte en contacto",
      title: "Enviar un Mensaje"
    },
    subtitle: "Ponte en contacto para consultas comerciales o colaboraci\xF3n en proyectos",
    title: "Cont\xE1ctame"
  },
  home: {
    layout: {
      "# Nav Reflects navigation bar order": "",
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        certificates: "Certificados",
        contact: "Contacto"
      }
    },
    metadata: {
      description: "Mi sitio web de portafolio, mostrando proyectos, certificados e informaci\xF3n comercial.",
      generator: "v0.dev",
      title: "Anderson Costa da Silva - Portafolio - AsonCS TS"
    },
    rights: "Todos los derechos reservados",
    subtitle: "Desarrollador de Software y Entusiasta de la Tecnolog\xEDa",
    view_certificates: "Ver Certificados",
    view_projects: "Ver Proyectos"
  },
  projects: {
    card: {
      code: "C\xF3digo",
      no_description: "No hay descripci\xF3n disponible"
    },
    empty: {
      check_later: "Vuelve m\xE1s tarde o visita mi perfil de GitHub directamente",
      not_found: "No se encontraron repositorios",
      visit_github: "Visitar Perfil de GitHub"
    },
    subtitle: "Explora mis \xFAltimos proyectos y contribuciones en GitHub",
    title: "Mis Proyectos de GitHub"
  }
};

// src/resources/pt.json
var pt_default = {
  certificates: {
    card: {
      view: "Ver Certificado"
    },
    subtitle: "Certifications processionais e cursos que completei",
    title: "Meus Certificados"
  },
  contact: {
    info: {
      detail: "Detalhes do neg\xF3cio",
      info: "Informa\xE7\xF5es de contacto",
      name: "Nome do neg\xF3cio",
      subtitle: "Detalhes oficiais do neg\xF3cio",
      title: "Informa\xE7\xF5es do neg\xF3cio"
    },
    form: {
      message: "Mensagem",
      message_placeholder: "Sua mensagem",
      name: "Nome",
      name_placeholder: "Seu nome",
      send: "Enviar mensagem",
      subject: "Assunto",
      subject_placeholder: "Do que se trata?",
      subtitle: "Preencha o formul\xE1rio abaixo para entrar em contacto",
      title: "Enviar uma Mensagem"
    },
    subtitle: "Contacte para consultas comerciais ou colabora\xE7\xE3o em projetos",
    title: "Entre em contacto comigo"
  },
  home: {
    layout: {
      "# Nav Reflects navigation bar order": "",
      nav: {
        home: "In\xEDcio",
        projects: "Projetos",
        certificates: "Certificados",
        contact: "Contato"
      }
    },
    metadata: {
      description: "Meu site de portf\xF3lio, exibindo projetos, certificados e informa\xE7\xF5es comerciais.",
      generator: "v0.dev",
      title_bkp: "Test",
      title: "Anderson Costa da Silva - Portf\xF3lio - AsonCS TS"
    },
    rights: "Todos os direitos reservados",
    subtitle: "Desenvolvedor de Software & Entusiasta de Tecnologia",
    view_certificates: "Ver Certificados",
    view_projects: "Ver Projetos"
  },
  projects: {
    card: {
      code: "C\xF3digo",
      no_description: "Nenhuma descri\xE7\xE3o dispon\xEDvel"
    },
    empty: {
      check_later: "Volte mais tarde ou visite meu perfil do GitHub diretamente",
      not_found: "Nenhum reposit\xF3rio encontrado",
      visit_github: "Visitar perfil do GitHub"
    },
    subtitle: "Explore meus projetos e contribui\xE7\xF5es mais recentes no GitHub",
    title: "Meus projetos no GitHub"
  }
};

// src/provider/i18n.provider.ts
function defaultI18nProvider() {
  return {
    get(lang) {
      return resources_exports[lang ?? "pt" /* PT */] ?? resources_exports["pt" /* PT */];
    }
  };
}

// src/usecase/get-strings.usecase.ts
function getStringsUsecase(i18nProvider) {
  return {
    async execute(lang) {
      const response = i18nProvider.get(lang);
      const projectsCard = { ...notTranslatable.projects.card, ...response.projects.card };
      const projects = {
        ...notTranslatable.projects,
        ...response.projects,
        card: projectsCard
      };
      return { ...notTranslatable, ...response, projects };
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Lang,
  defaultI18nProvider,
  en,
  es,
  getStringsUsecase,
  langs,
  notTranslatable,
  pt
});
