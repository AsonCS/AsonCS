import { RemoteConfig, RemoteConfigProvider, ResourcesCertificatesRepository } from '@ason_cs_ts/shared-remote_config';
import { Fetch } from '@ason_cs_ts/shared';

declare class App {
    private readonly firebaseApp;
    private readonly remoteConfig;
    constructor();
    getRemoteConfig(): Promise<RemoteConfig>;
    private buildFirebaseApp;
    private buildCredential;
    private buildRemoteConfig;
    private isErrorFirebaseDoesNotExist;
}

declare const app: App;

declare function firebaseRemoteConfigProvider(getRemoteConfig?: () => Promise<RemoteConfig>): Promise<RemoteConfigProvider>;

declare function firebaseResourcesCertificatesRepository(fetch: Fetch, getRemoteConfig?: () => Promise<RemoteConfig>): Promise<ResourcesCertificatesRepository>;

export { app, firebaseRemoteConfigProvider, firebaseResourcesCertificatesRepository };
