import React, { useEffect, useState } from 'react'

export default function AdminEmployeeList(props) {
   const { employeeList,linkes } = props;
   const [emplos, setEmplos] = useState([]);
   let count =1;
   const bg = "bg-orange-100";
   useEffect(() => {
      setEmplos(employeeList);
   }, [])
   console.log(linkes);
   const renderLi = () => {
     
      
   }
   
    return (
             <table className="table-fixed w-2/3 text-center border-2 border-black">
                <thead className='bg-yellow-500 radius border-b-2 border-black'>
                   <tr>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Tipo de Usuario</th>
                      <th>Roles Asignados</th>
                <th>Acciones</th>

             </tr>
                </thead>
          <tbody>
             {
               emplos.map(e => {
         count++;
         return (
   <tr className={count % 2 === 0 ? "bg-gray-200" : bg  }>
            <td>{e.name }</td>
            <td>{e.email }</td>
            <td>{e.usertype.nombre }</td>
            <td>{e.roles.length }</td>
            <td><button>x</button><button>0</button></td>
         </tr>)
         })
               }
                </tbody>
             </table>
          ) 
  
}


