import React, { useEffect, useState } from 'react'
import AdminEmployeeRow from './AdminEmployeeRow';

export default function AdminEmployeeList(props) {
   const { employeeList } = props;
   const [employees, setEmployess] = useState([]);
   let count =1;
   const bg = "bg-orange-100";
   useEffect(() => {
      setEmployess(employeeList);
   }, [])
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
               employees.map(employee => {
         count++;
                  return (
                     <AdminEmployeeRow employee={employee} bg={bg} count={ count} />
         )
         })
               }
                </tbody>
             </table>
          ) 
  
}


