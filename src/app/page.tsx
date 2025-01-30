'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

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
          <tr>
            <td className="border border-gray-300 px-4 py-2">Ejemplo</td>
            <td className="border border-gray-300 px-4 py-2">Usuario</td>
            <td className="border border-gray-300 px-4 py-2">25</td>
            <td className="border border-gray-300 px-4 py-2">Masculino</td>
            <td className="border border-gray-300 px-4 py-2">Pikachu</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
