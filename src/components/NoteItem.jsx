import React from "react"
import { ArchiveToggleButton } from "./ArchiveToggleButton"
import { DeleteButton } from "./DeleteButton"

export function NoteItem({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchiveToggle
}){
  return (
    <div className="note-item">
      <div className="note-item__content">
      <h4 className="note-item__title">
        {title}
      </h4>
      <p className="note-item__date">
        {createdAt}
      </p>
      <p className="note-item__body">
        {body}
      </p>
      </div>
      <div className="note-item__action">
        <DeleteButton
          id={id}
          onDelete={onDelete}
        />
        <ArchiveToggleButton
          id={id}
          onArchiveToggle={onArchiveToggle}
          text={
            archived
              ? 'Pindahkan'
              : 'Arsipkan'
          }
        />
      </div>
    </div>
  )
}