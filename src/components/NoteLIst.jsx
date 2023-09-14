import React from "react"
import { NoteItem } from "./NoteItem"
export function NoteList({
  title,
  notes,
  onDelete,
  onArchiveToggle,
}){
  return (
    <>
      <h2>{title}</h2>
      <div className="notes-list">
        {
          notes.map((note) => (
            <NoteItem
              key={note.id}
              onDelete={onDelete}
              onArchiveToggle={onArchiveToggle}
              {...note}
            />
          ))
        }
      </div>
      {
        notes.length === 0 && (
          <p className="notes-list__empty-message">
            Tidak ada catatan
          </p>
        )
      }
      
    </>
  )
}