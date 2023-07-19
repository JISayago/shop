import AdminActions from '@/Components/AdminActions'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'

export default function AdminPanel({ auth }) {
  return (
    <Authenticated user={auth.user}>
      <section className="w-screen">
        <AdminActions />
        
      </section>

    </Authenticated>
  )
}
