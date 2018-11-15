import React from 'react'

export const student = ({name, _id, customFunction}) => {
  return (
    <React.Fragment>
      <h4 onClick={e => customFunction(e)}>{name}</h4>
      <p>{_id}</p>
    </React.Fragment>
  )
}