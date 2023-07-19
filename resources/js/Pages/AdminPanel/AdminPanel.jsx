import AdminActions from '@/Components/AdminActions'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'

export default function AdminPanel({ auth, employees, clients }) {

  console.log("em",employees);
  console.log("cl",clients);
  return (
    <Authenticated user={auth.user}>
      <section className="w-screen">
        <AdminActions />        
        {  }
      </section>

    </Authenticated>
  )
}
