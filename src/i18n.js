import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    EN: {
        translation: {
            Finnish: "Finnish",
            English: "English",
            home: "Home",

            // Not working
            _home: "Home",
            mynotes: "MyNotes",
            note_editor: "NoteEditor",
            create_note: "CreateNote",
            dev: "Dev",
            loading: "Loading",
            trigger_loading: "TriggerLoading",
            settings: "Settings"
        }
    },
    FI: {
        translation: {
            Finnish: "Suomi",
            English: "Englanti",
            home: "Koti",

        // Not working
            _home: "Koti",
            mynotes: "Omat Muistiot",
            note_editor: "Muistion muokkaus",
            create_note: "Luo Muistio",
            dev: "Dev",
            loading: "Lataus",
            trigger_loading: "Lataus Painike",
            settings: "Asetukset"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: "EN",
        interpolation: {
            escapeValue: false
        }
    });