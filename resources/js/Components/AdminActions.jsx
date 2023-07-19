import React, { useState } from 'react'
import AdminAction from './AdminAction'

export default function AdminActions() {
/*
  const [component, setComponent] = useState("Empty");

  const SelectAction = (value) => {
    setComponent(value);
  }
  const LoadComponent = () => {
      if (component === "Empty") return "Elija una acción";
      if (component === "GE") return "Componente de empleados";
      if (component === "GC") return "Componente de clientes";
      if (component === "GP") return "Componente de productos";
  }
*/

  return (
    <> 
      <div className='flex flex-wrap justify-around p-8 w-full ' >
          <AdminAction route={"/admin-panel/employees"} text={"Gestión Empleados"} /*SelectAction = {SelectAction}*//>
          <AdminAction route={"/admin-panel/clients"} text={"Gestión Clientes"} /*SelectAction = {SelectAction}/*//>
          <AdminAction value={"/"} text={"Gestión Productos"} /*SelectAction = {SelectAction}*//>
      </div>
      <div className='w-full h-screen'>
        {/*
          LoadComponent()
        */}
      </div>
    </>
  )
}
