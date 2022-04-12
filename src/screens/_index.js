import CreateNote from './create-note';
import Home from './home';
import MyNotes from './mynotes';
import NoteEditor from './note-editor';
import Dev from './dev';
import Loading from './loading';

export const screenkeys = [
    'home',
    'mynotes',
    'note-editor',
    'create-note',
    'dev',
    'loading'
];

export const screencomponents = [
    Home,
    MyNotes,
    NoteEditor,
    CreateNote,
    Dev,
    Loading
];

export default screenkeys.map((skey, i) => {
    const screen = {
        key: skey,
        component: screencomponents[i]
    };
    return screen;
})