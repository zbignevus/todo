import React, {Component} from 'react';
import './NoteForm.css'

class NoteForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			newNoteContent: ''
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.writeNote = this.writeNote.bind(this);
	}

	//When the user input changes, set the newNoteContent to the
	//value of what's in the input field.
	handleUserInput(e){
		this.setState({
			newNoteContent: e.target.value
		})
	}

	writeNote(){
		//call a method that sets the noteContent for a note
		//to value the input
		this.props.addNote(this.state.newNoteContent);
		//Set newNoteContent back to empty string
		this.setState({
			newNoteContent: ''
		})
	}
	render(){
		return(
			<div className="formWrapper">
				<input className="noteInput" placeholder="Create a new note..." 
				value={this.state.newNoteContent}
				onChange={this.handleUserInput}
				/>
				<button className="noteButton" onClick={this.writeNote}>Add Note</button>
			</div>
			)
	}
}

export default NoteForm;