import { useState } from 'react';
import './App.css';
import jsonData from './data/data.json';
import Folder from './components/Folder';
import Search from './components/Search';

function App() {
  const [toggle, setToggle] = useState(false)
  const [adminData] = useState(jsonData)
  
  const handleToggle = () => {
    setToggle(!toggle)
  }

  // const handleFolders = () => {
  //   jsonData.filter(data => data.type === "folder").map(filteredFolder => (
  //     filteredFolder.files?.map(file => {
  //       console.log(file.name)
  //       return (
  //         <div key={file.id}>SubFile: {file.name}</div>
  //       )
  //     })
  //   ))
  // }
  
  return (
    <div className="App">
      <Search />
      {jsonData.map((item, index) => {
        return (
          <>
            <div key={index}>
              <p>Name: {item.name} </p>
              <p>File Type: {item.type}</p>
              {item.files?.map(subItem => (
              <p key={subItem.id}>SubFile: {subItem.name}</p>
              ))}
            </div>
          </>
        )
      })}
      <button onClick={handleToggle}>Open folders</button>
      <div>
        {toggle ? <Folder data={adminData} /> : ''}
      </div>
      
    </div>
  );
}

export default App;
