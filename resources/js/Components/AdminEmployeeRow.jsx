import React from 'react'

export default function AdminEmployeeRow(props) {
    const { employee, bg,count } = props;
    console.log(employee)
  return (
    <tr className={count % 2 === 0 ? "bg-gray-200" : bg  }>
    <td>{employee.name }</td>
    <td>{employee.email }</td>
    <td>{employee.usertype.nombre }</td>
    <td>{employee.roles.length }</td>
    <td><button>x</button><button>0</button></td>
 </tr>
    )
}
