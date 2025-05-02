import { RemoteConfig, RemoteConfigProvider } from '@ason_cs_ts/shared-remote_config';

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

declare function defaultRemoteConfigProvider(getRemoteConfig?: () => Promise<RemoteConfig>): Promise<RemoteConfigProvider>;

export { app, defaultRemoteConfigProvider };
