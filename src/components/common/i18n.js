import i18next from 'i18next';

i18next.init({
  resources: {
    en: {
      translation: {
        username: 'Username',
        password: 'Password',
        login: {
          chooseLanguage: 'Choose your language',
          welcome: 'Welcome to IH+',
          message: 'Login in. To see it in action.',
          googleSignin: 'Sign in with Google',
          orTry: 'Or try',
          sigin: 'Sigin',
          forgotPassword: 'Forgot password?',
          notHaveAccount: 'Do not have an account?',
          createAccount: 'Create an account'
        }
      }
    },
    es: {
      translation: {
        username: 'Usuario',
        password: 'Contrasenia',
        login: {
          chooseLanguage: 'Selecciona tu idioma',
          welcome: 'Bienvenido to IH+',
          message: 'Inicia sesión. Para verlo en acción.',
          googleSignin: 'Inicia sesion con Google',
          orTry: 'O intenta',
          sigin: 'Inicia sesion',
          forgotPassword: 'Olvido su contraseña?',
          notHaveAccount: 'No tiene una cuenta?',
          createAccount: 'Crear cuenta'
        }
      }
    }
  },
  fallbackLng: 'en',
  ns: ['translation'],
  defaultNS: 'translation',
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  },
  lng: 'es'
});

export default i18next;
