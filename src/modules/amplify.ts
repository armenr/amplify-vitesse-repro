import { Amplify as AmplifySingleton /* Hub */ } from '@aws-amplify/core'
// import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components'
import {
  applyPolyfills,
  // defineCustomElements
} from '@aws-amplify/ui-components/loader'
import { defineCustomElements } from '@aws-amplify/ui-components/dist/components/index'

// @ts-expect-error missing types
import awsmobile from '../aws_exports'
import { UserModule } from '~/types'

export const install: UserModule = async (/* { app, router } */) => {
  // app.config.globalProperties.$amplifyAuthRequiredFields = amplifyAuthRequiredFields
  await AmplifySingleton.configure(awsmobile)
  await applyPolyfills()
  await defineCustomElements(window)

  // const authMessageChannel = 'UI Auth'
  // const noAuthMessage = 'user is undefined'

  // app.config.compilerOptions.isCustomElement = tag => tag.startsWith('amplify-')
}
