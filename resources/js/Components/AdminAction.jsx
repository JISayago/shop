import { Link } from '@inertiajs/react'
import React from 'react'

export default function AdminAction(props) {
  const { text,route } = props;
 /* const { text, SelectAction, value } = props;
  const setComp = (e) => {
    e.preventDefault();
    SelectAction(value);
  }
  */
  return (
    /*<button onClick={ e => setComp(e)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
    {text}
   </button>*/
    <Link href={route} method="get" as="button" type="button"
    className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
    >{text}</Link>
  )
}