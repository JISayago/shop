import React from 'react'

export default function AdminAction(props) {
  const { text, option, selectedAction } = props;

  const func = (e) => {
    e.preventDefault();
    selectedAction(option);
  }
  
  return (
    <button onClick={e=> {func(e)} } className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
    >{text}</button>
  )
}