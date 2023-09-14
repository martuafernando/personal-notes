import React from "react"

export function SearchBar({onSearch}){
  return (
    <form className="note-search">
      <input
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  )
}