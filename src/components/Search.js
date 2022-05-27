import React, { useState } from 'react'
import jsonData from '../data/data.json';

const Search = () => {
  const [userInput, setUserInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault()
    setUserInput(e.target.value)
  }
  const getByName = () => {

    jsonData.filter((item) => {
      if(userInput === item.name.toLowerCase()) {
        
        return (
          console.log(item.name)
          // item.name.map(filteredItem => (
          //   <div key={filteredItem.id}>
          //     <strong>{filteredItem.name}</strong>
          //   </div>
          // ))
        )
      }
      console.log(item.name)
    })
    
  }
  return (
    <div>
      <form onSubmit={getByName}>
        <input value={userInput} onChange={handleSearch}/>
      </form>
    
    </div>
  )
}

export default Search;