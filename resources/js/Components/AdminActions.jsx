import React, { useState } from 'react'
import AdminAction from './AdminAction'

export default function AdminActions() {

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


  return (
    <> 
      <div className='flex flex-wrap justify-around p-8 w-full ' >
          <AdminAction value={"GE"} text={"Gestión Empleados"} SelectAction = {SelectAction}/>
          <AdminAction value={"GC"} text={"Gestión Clientes"} SelectAction = {SelectAction}/>
          <AdminAction value={"GP"} text={"Gestión Productos"} SelectAction = {SelectAction}/>
      </div>
      <div className='w-full h-screen'>
        {
          LoadComponent()
        }
      </div>
    </>
  )
}
