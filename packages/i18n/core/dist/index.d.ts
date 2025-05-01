import { Usecase } from '@ason_cs_ts/shared';

declare const notTranslatable: {
    docker_hub: string;
    email: string;
    email2: string;
    github: string;
    name: string;
    phone: string;
    phone2: string;
    projects: {
        card: {
            demo: string;
        };
    };
    place: string;
    username: string;
};
type TranslatableCertificates = {
    card: {
        view: string;
    };
    subtitle: string;
    title: string;
};
type TranslatableContactForm = {
    message: string;
    message_placeholder: string;
    name: string;
    name_placeholder: string;
    send: string;
    subject: string;
    subject_placeholder: string;
    subtitle: string;
    title: string;
};
type TranslatableContact = {
    info: {
        detail: string;
        info: string;
        name: string;
        subtitle: string;
        title: string;
    };
    form: TranslatableContactForm;
    subtitle: string;
    title: string;
};
type Translatable = {
    certificates: TranslatableCertificates;
    contact: TranslatableContact;
    home: {
        layout: {
            nav: {
                home: string;
                projects: string;
                certificates: string;
                contact: string;
            };
        };
        metadata: {
            description: string;
            generator: string;
            title: string;
        };
        rights: string;
        subtitle: string;
        view_certificates: string;
        view_projects: string;
    };
    projects: {
        card: {
            code: string;
            no_description: string;
        };
        empty: {
            check_later: string;
            not_found: string;
            visit_github: string;
        };
        subtitle: string;
        title: string;
    };
};
type Strings = Translatable & typeof notTranslatable;

declare enum Lang {
    EN = "en",
    ES = "es",
    PT = "pt"
}
declare function langs(): Lang[];

interface I18nProvider {
    get(lang: Lang | undefined): Translatable;
}
declare function defaultI18nProvider(): I18nProvider;

var certificates$2 = {
	card: {
		view: "View Certificate"
	},
	subtitle: "Professional certifications and courses I've completed",
	title: "My Certificates"
};
var contact$2 = {
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
};
var home$2 = {
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
};
var projects$2 = {
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
};
var en = {
	certificates: certificates$2,
	contact: contact$2,
	home: home$2,
	projects: projects$2
};

var certificates$1 = {
	card: {
		view: "Ver Certificado"
	},
	subtitle: "Certificaciones profesionales y cursos que he completado",
	title: "Mis Certificados"
};
var contact$1 = {
	info: {
		detail: "Detalles del Negocio",
		info: "Información de Contacto",
		name: "Nombre del Negocio",
		subtitle: "Mis detalles oficiales del negocio",
		title: "Información del Negocio"
	},
	form: {
		message: "Mensaje",
		message_placeholder: "Tu mensaje",
		name: "Nombre",
		name_placeholder: "Tu nombre",
		send: "Enviar mensaje",
		subject: "Asunto",
		subject_placeholder: "¿De qué se trata?",
		subtitle: "Rellena el formulario a continuación para ponerte en contacto",
		title: "Enviar un Mensaje"
	},
	subtitle: "Ponte en contacto para consultas comerciales o colaboración en proyectos",
	title: "Contáctame"
};
var home$1 = {
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
		description: "Mi sitio web de portafolio, mostrando proyectos, certificados e información comercial.",
		generator: "v0.dev",
		title: "Anderson Costa da Silva - Portafolio - AsonCS TS"
	},
	rights: "Todos los derechos reservados",
	subtitle: "Desarrollador de Software y Entusiasta de la Tecnología",
	view_certificates: "Ver Certificados",
	view_projects: "Ver Proyectos"
};
var projects$1 = {
	card: {
		code: "Código",
		no_description: "No hay descripción disponible"
	},
	empty: {
		check_later: "Vuelve más tarde o visita mi perfil de GitHub directamente",
		not_found: "No se encontraron repositorios",
		visit_github: "Visitar Perfil de GitHub"
	},
	subtitle: "Explora mis últimos proyectos y contribuciones en GitHub",
	title: "Mis Proyectos de GitHub"
};
var es = {
	certificates: certificates$1,
	contact: contact$1,
	home: home$1,
	projects: projects$1
};

var certificates = {
	card: {
		view: "Ver Certificado"
	},
	subtitle: "Certifications processionais e cursos que completei",
	title: "Meus Certificados"
};
var contact = {
	info: {
		detail: "Detalhes do negócio",
		info: "Informações de contacto",
		name: "Nome do negócio",
		subtitle: "Detalhes oficiais do negócio",
		title: "Informações do negócio"
	},
	form: {
		message: "Mensagem",
		message_placeholder: "Sua mensagem",
		name: "Nome",
		name_placeholder: "Seu nome",
		send: "Enviar mensagem",
		subject: "Assunto",
		subject_placeholder: "Do que se trata?",
		subtitle: "Preencha o formulário abaixo para entrar em contacto",
		title: "Enviar uma Mensagem"
	},
	subtitle: "Contacte para consultas comerciais ou colaboração em projetos",
	title: "Entre em contacto comigo"
};
var home = {
	layout: {
		"# Nav Reflects navigation bar order": "",
		nav: {
			home: "Início",
			projects: "Projetos",
			certificates: "Certificados",
			contact: "Contato"
		}
	},
	metadata: {
		description: "Meu site de portfólio, exibindo projetos, certificados e informações comerciais.",
		generator: "v0.dev",
		title_bkp: "Test",
		title: "Anderson Costa da Silva - Portfólio - AsonCS TS"
	},
	rights: "Todos os direitos reservados",
	subtitle: "Desenvolvedor de Software & Entusiasta de Tecnologia",
	view_certificates: "Ver Certificados",
	view_projects: "Ver Projetos"
};
var projects = {
	card: {
		code: "Código",
		no_description: "Nenhuma descrição disponível"
	},
	empty: {
		check_later: "Volte mais tarde ou visite meu perfil do GitHub diretamente",
		not_found: "Nenhum repositório encontrado",
		visit_github: "Visitar perfil do GitHub"
	},
	subtitle: "Explore meus projetos e contribuições mais recentes no GitHub",
	title: "Meus projetos no GitHub"
};
var pt = {
	certificates: certificates,
	contact: contact,
	home: home,
	projects: projects
};

interface GetStringsUsecase extends Usecase<Lang | undefined, Strings> {
}
declare function getStringsUsecase(i18nProvider: I18nProvider): GetStringsUsecase;

export { type GetStringsUsecase, type I18nProvider, Lang, type Strings, type Translatable, type TranslatableCertificates, type TranslatableContact, type TranslatableContactForm, defaultI18nProvider, en, es, getStringsUsecase, langs, notTranslatable, pt };
