import AdminActions from '@/Components/AdminActions'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'

export default function AdminPanel({ auth, users }) {
  return (
    <Authenticated user={auth.user}>
      <section className="w-screen">
      <AdminActions users={users} />      
      </section>

    </Authenticated>
  )
}
