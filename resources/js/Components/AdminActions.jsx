import React, { useState } from 'react'
import AdminAction from './AdminAction'
import AdminEmployeeList from './AdminEmployeeList';
import AdminClientList from './AdminClientList';

export default function AdminActions(props) {
  const { users } = props;
  let employeeList = [];
  const [cliList, setCliList] = useState([]);

  const [linkes, setLinkes] = useState(users.links);
  
  const [component, setComponent] = useState();

  const employList = () => {
    employeeList = users.data.filter(e => e.userType_id === 1);
    setComponent(<AdminEmployeeList employeeList={employeeList} linkes={linkes} />)
  }

  const selectedAction = (option) => {
    if (option === "e") return employList();
    if (option === "c") return setComponent(<AdminClientList />);
  }

  return (
    <> 
      <div className='flex flex-wrap justify-around p-8 w-full ' >
        <AdminAction text={"Gestión Empleados"} option={"e"} selectedAction={selectedAction} />
        <AdminAction text={"Gestión Clientes"} option={"c"} selectedAction={selectedAction} />
      </div>
      <div className='p-11 w-screen'>
        {component}
    </div>
    </>
    
  )
}
