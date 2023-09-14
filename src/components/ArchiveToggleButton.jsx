import React from "react"

export function ArchiveToggleButton({id, text, onArchiveToggle}){
  return (
    <button
      className='note-item__archive-button'
      onClick={() => onArchiveToggle(id)}
    >
      {text}
    </button>
  )
}