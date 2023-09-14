import React from "react"
import { CreateNoteForm } from "./CreateNoteForm"
import { NoteList } from "./NoteList";
import { getInitialData } from "../utils";
import { SearchBar } from "./SearchBar";

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData(),
      keyword: ''
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveToggleHandler = this.onArchiveToggleHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this);
  }

  render(){
    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <SearchBar
            onSearch={this.onSearchNotesHandler}
          />
        </div>
        <div className="note-app__body">
          <CreateNoteForm
            addNote={this.onAddNoteHandler}
          />
          <NoteList
            title="Catatan Aktif"
            notes={
              this.state.notes
                .filter((it) => it.archived == false)
                .filter((it)=> it.title
                  .toLowerCase()
                  .includes(this.state.keyword.toLowerCase()))
            }
            onDelete={this.onDeleteHandler}
            onArchiveToggle={this.onArchiveToggleHandler}
          />
          <NoteList
            title="Arsip"
            notes={
              this.state.notes
                .filter((it) => it.archived == true)
                .filter((it)=> it.title
                  .toLowerCase()
                  .includes(this.state.keyword))
            }
            onDelete={this.onDeleteHandler}
            onArchiveToggle={this.onArchiveToggleHandler}
          />
        </div>
      </>
    )
  }

  onDeleteHandler(id) {
    this.setState(previousState => {
      return {
        ...previousState,
        notes: previousState.notes.filter((it) => it.id !== id),
      }
    })
  }

  onArchiveToggleHandler(id) {
    this.setState(previousState => {
      const note = previousState.notes.find((it) => it.id === id)
      note.archived = !note.archived
      return previousState
    })
  }

  onAddNoteHandler({ title, body }) {
    this.setState(previousState => {
      const notes = previousState.notes
      const newNote = {
        id: notes.length + 1,
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      }

      return {
        ...previousState,
        notes: [
          ...notes,
          newNote
        ]
      }
    })
  }

  onSearchNotesHandler(keyword) {
    this.setState(previousState => {
      return {
        ...previousState,
        keyword
      }
    })
  }
}