import CreateNote from './create-note';
import Home from './home';
import MyNotes from './mynotes';
import NoteEditor from './note-editor';
import Dev from './dev';
import Loading from './loading';
import TriggerLoading from './trigger-loading';

export const screenkeys = [
    'home',
    'mynotes',
    //'note-editor',    // Shows error... using 'mynotes' to edit existing notes
    'create-note',
    'dev',
    'loading',
    'trigger-loading'
];

export const screencomponents = [
    Home,
    MyNotes,
    //NoteEditor, 
    CreateNote,
    Dev,
    Loading,
    TriggerLoading
];

export default screenkeys.map((skey, i) => {
    const screen = {
        key: skey,
        component: screencomponents[i]
    };
    return screen;
})