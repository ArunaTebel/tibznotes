import React, {Component} from 'react';
import './App.css';
import Editor from "./components/Editor";
import NotesList from "./components/NotesList";
import NotesAPI from './services/NotesAPI';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            currentNoteId: '',
            notes: []
        };
        this.loadNotes();
    }

    loadNotes() {
        const context = this;
        NotesAPI.getAll(function (notes) {
            let currentNoteId, content;
            if (notes.length > 0) {
                currentNoteId = notes[0]._id;
                content = notes[0].note;
                context.setState({content: content, currentNoteId: currentNoteId, notes: notes});
            }
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse bg-primary">
                    TIBZ NOTES
                </nav>

                <NotesList
                    addNewNote={this.addNewNote.bind(this)}
                    notes={this.state.notes}
                    className="list-group Notes-list"
                    handleNoteSelection={this.handleNoteSelection.bind(this)}
                    handleNoteDeletion={this.handleNoteDeletion.bind(this)}
                    handleNoteRename={this.handleNoteRename.bind(this)}/>

                <Editor
                    editorContent={this.state.content}
                    setCurrentEditorContent={this.setCurrentEditorContent.bind(this)}
                    saveEditorContent={this.saveEditorContent.bind(this)}
                    className="Editor"/>
            </div>
        );
    }

    handleNoteRename(noteId, newTitle) {
        console.log(noteId, newTitle);
        const note = this.state.notes.find(
            note => note._id === noteId
        );
        let context = this;
        if (note !== 'undefined') {
            note.title = newTitle;
            NotesAPI.update(note, function (response) {
                alert(response.statusText);
                context.loadNotes();
            });
        }
    }

    handleNoteSelection(noteId) {
        const note = this.state.notes.find(
            note => note._id === noteId
        );
        this.setState({content: note.note, currentNoteId: noteId});
    }

    handleNoteDeletion(noteId) {
        const note = this.state.notes.find(
            note => note._id === noteId
        );
        if (note !== 'undefined') {
            const context = this;
            NotesAPI.remove(note, function (response) {
                alert(response.statusText);
                context.loadNotes();
            });
        }
    }

    setCurrentEditorContent(html) {
        this.setState({content: html});
    }

    saveEditorContent() {
        const note = this.state.notes.find(
            note => note._id === this.state.currentNoteId
        );
        if (note !== 'undefined') {
            note.note = this.state.content;
            NotesAPI.update(note, function (response) {
                alert(response.statusText);
            });
        }
    }

    addNewNote(title) {
        let note = {
            "title": title
        };

        const context = this;

        NotesAPI.insert({"title": title}, function (response) {
            //TODO: Select the newly added note in the list and setState
            alert(response.statusText);
            context.loadNotes();
        });
    }
}

export default App;
