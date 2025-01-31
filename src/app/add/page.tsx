'use client'

import { RequestUser } from '@/types';
import { useRouter } from 'next/navigation'

export default function AddPage() {
  const router = useRouter()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement
    const formData = new FormData(target);
    const newUser: RequestUser = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      pokemon: formData.get("pokemon")
    };
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => {
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
    }).catch(() => {
      alert("Oops! Lo sentimos, intena mas tarde.")
    }).finally(() => {
      target.reset();
      router.back();
      alert("Usuario creado!")
    })
  }

  return (
    <div className="m-auto w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Agregar Usuario</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input name="first_name" type="text" required={true} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellidos</label>
          <input name="last_name" type="text" required={true} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Edad</label>
          <input name="age" type="number" required={true} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Género</label>
          <select name="gender" required={true} className="w-full px-3 py-2 border rounded-lg">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pokémon</label>
          <select name="pokemon" required={true} className="w-full px-3 py-2 border rounded-lg">
            <option value="Bulbasaur">Bulbasaur</option>
            <option value="Charmander">Charmander</option>
            <option value="Squirtle">Squirtle</option>
          </select>
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 mb-4">Agregar</button>
        <button type="button" onClick={() => router.back()} className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">Volver</button>
      </form>
    </div>
  );
} 