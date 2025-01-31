'use client'

import { User } from '@/types';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Home() {

  const [users, setUsers] = useState<User[]>([]);

  const router = useRouter();

  useEffect(() => loadData(), []);

  const loadData = () => {
    fetch("/api/users", { method: "GET" })
      .then(async response => await response.json())
      .then(({ data }) => setUsers(data))
      .catch(error => console.error(error))
  };

  return (
    <div className="m-auto w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Lista de Usuarios</h2>
      <button type="button" onClick={() => router.push('/analytics')} className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600  mb-4">Analiticos</button>
      <button type="button" onClick={() => router.push('/add')} className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600  mb-4">Nuevo Usuario</button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">Apellidos</th>
            <th className="border border-gray-300 px-4 py-2">Edad</th>
            <th className="border border-gray-300 px-4 py-2">Género</th>
            <th className="border border-gray-300 px-4 py-2">Pokémon</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, key) => {
            return (
              <tr key={`key-${key}`}>
                <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.age}</td>
                <td className="border border-gray-300 px-4 py-2">{user.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{user.pokemon}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
