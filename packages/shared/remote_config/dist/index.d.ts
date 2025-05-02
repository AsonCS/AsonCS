import { Lang } from '@ason_cs_ts/i18n';
import { Fetch } from '@ason_cs_ts/shared';

interface AboutMe {
    text: string;
    title: string;
}

interface Certificate {
    title: string;
    issuer: string;
    issuerLink: string;
    dateDay: number;
    dateMonth: number;
    dateYear: number;
    description: string;
    image: string;
    pdf: string;
    url: string;
}

interface RemoteConfig {
    getAboutMe(lang: Lang): AboutMe;
    getResourcesCertificates(): string;
}

interface RemoteConfigProvider {
    getAboutMe(lang: Lang): AboutMe;
    getResourcesCertificates(): string;
}

interface ResourcesCertificatesRepository {
    getCertificates(defaultCertificates: Certificate[]): Promise<Certificate[]>;
}
declare function defaultResourcesCertificatesRepository(fetch: Fetch, remoteConfigProvider: RemoteConfigProvider): ResourcesCertificatesRepository;

export { type AboutMe, type Certificate, type RemoteConfig, type RemoteConfigProvider, type ResourcesCertificatesRepository, defaultResourcesCertificatesRepository };
