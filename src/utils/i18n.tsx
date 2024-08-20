import i18n  from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './../utils/en.json';
import pt from './../utils/pt.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
        pt: { 
            ...pt 
        },
        en: {
            ...en 
        }
    },
    lng: 'pt',
    react:{
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    }
});