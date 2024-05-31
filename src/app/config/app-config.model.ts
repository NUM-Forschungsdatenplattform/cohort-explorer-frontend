export interface IAppConfig {
  env: {
    name: string
  }
  api: {
    baseUrl: string
  }
  auth: {
    baseUrl: string
    realm: string
    clientId: string
  }
  legal: {
    copyrightOwner: string
    imprint:  "none" | "html" | "url"
    imprintUrl: string
    dataProtection: "none" | "html" | "url"
    dataProtectionUrl: string
    contact:  "none" | "html" | "url"
    contactUrl: string
  }
  welcomePageTitle: {
    de: string
    en: string
  }
}
