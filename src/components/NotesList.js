/**
 * Created by arunatebel on 7/26/17.
 */
import React, {Component} from 'react';
import notes from '../data/notes.json';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.className = props.className;
        this.handleNoteSelection = props.handleNoteSelection;
        this.handleNoteDeletion = props.handleNoteDeletion;
        this.handleNoteRename = props.handleNoteRename;
        this.state = {newNoteName: '', renameNoteChangeValue: '', renameNoteId: ''};
    }

    addNewNote(event) {
        if (event.key === 'Enter') {
            this.props.addNewNote(event.target.value);
            this.setState({newNoteName: ''});
        }
    }

    handleNewNoteNameChange(event) {
        this.setState({newNoteName: event.target.value});
    }

    handleRenameNote(event) {
        if (event.key === 'Enter') {
            this.handleNoteRename(this.state.renameNoteId, event.target.value);
            this.toggleRenameFields();
        }
    }

    handleNoteRenameSelection(noteId) {
        this.toggleRenameFields();
        document.getElementById('renameTxt_' + noteId).style.display = 'block';
        document.getElementById('noteNameWrapper_' + noteId).style.display = 'none';
        this.setState({renameNoteId: noteId});
    }

    toggleRenameFields() {
        let renameTextInputs = document.getElementsByClassName('renameTxt');
        let noteNameInputs = document.getElementsByClassName('noteNameWrapper');
        for (let i = 0; i < renameTextInputs.length; i++) {
            renameTextInputs[i].style.display = 'none';
            noteNameInputs[i].style.display = 'inline-flex';
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">+</span>
                    <input value={this.state.newNoteName} onChange={this.handleNewNoteNameChange.bind(this)}
                           onKeyUp={this.addNewNote.bind(this)}
                           type="text"
                           placeholder="Create New Note..."
                           className="form-control"/>
                </div>
                <br/>
                <div className="list-group">
                    {this.props.notes.map((note, i) => (
                        <div key={note._id}>
                            <div className="inline-flex noteNameWrapper" id={'noteNameWrapper_' + note._id}>
                                <a href="#" onClick={() => this.handleNoteSelection(note._id)}
                                   className="list-group-item list-group-item-action justify-content-between noteName"
                                   title={note.title}>
                                    {note.title.slice(0, 20)}
                                </a>
                                <div className="btn-group"
                                     id={'btn-group_' + note._id}>
                                    <button type="button"
                                            className="btn-sm btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#" data-toggle="modal"
                                           data-target=".bd-example-modal-sm"
                                           onClick={() => this.handleNoteRenameSelection(note._id)}>Rename</a>
                                        <a className="dropdown-item" href="#"
                                           onClick={() => this.handleNoteDeletion(note._id)}>Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <input onKeyUp={this.handleRenameNote.bind(this)}
                                       defaultValue={note.title}
                                       id={'renameTxt_' + note._id}
                                       className="form-control renameTxt" type="text" style={{display: 'none'}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default NotesList;