import { PublicClientApplication } from '@azure/msal-browser'
import type { Configuration } from '@azure/msal-browser'

const getMsalInstance = (config: any) => {
  const msalConfig: Configuration = {
    auth: {
      clientId: config.AZURE_CLIENT_ID,
      authority: `https://login.microsoftonline.com/${config.AZURE_TENANT_ID}`,
      redirectUri: window.location.origin
    }
  }
  return new PublicClientApplication(msalConfig)
}

const config = {
  API_PATH: process.env.API_PATH,
  AZURE_ENABLE: process.env.AZURE_ENABLE as unknown as boolean,
  AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
  AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
  VERSION: process.env.VERSION,
  GENERATED_TIME: process.env.GENERATED_TIME
}

export const msalInstance = getMsalInstance(config)

export default config
