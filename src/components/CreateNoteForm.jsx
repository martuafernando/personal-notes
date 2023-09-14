import React from "react";

export class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onChangeEventHandler = this.onChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  render() {
    const maxLength = 50
    return (
      <div className="note-input">
        <h2 className="note-input__title">
          Buat Catatan
        </h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter {maxLength - this.state.title.length}
        </p>
        <form
          className="note-input__body"
          onSubmit={this.onSubmitEventHandler}
        >
          <input
            maxLength={maxLength}
            type="text"
            name="title"
            id="title"
            placeholder="Ini adalah judul ..."
            onChange={this.onChangeEventHandler}
          />
          <textarea
            name="body"
            id="body"
            rows={10}
            placeholder="Tuliskan catatanmu di sini ..."
            onChange={this.onChangeEventHandler}
          />
          <button
            type="submit"
          >
            Buat
          </button>
        </form>
      </div>
    );
  }

  onChangeEventHandler(event){
    const { name, value } = event.target
    this.setState(previousState => {
      return {
        ...previousState,
        [name]: value
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
}
