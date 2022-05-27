import React from 'react'


const Folder = (props) => {
  return (
    <div className='folder'>
        
        {props.data.filter(data => data.type === "folder")
        .map(filteredFolder => ( filteredFolder.files?.map(file => {
        console.log(file)
            return (
                <div key={file.id}>SubFile: {file.name}</div>
            )
            })
        ))}
    </div>
  )
}

export default Folder