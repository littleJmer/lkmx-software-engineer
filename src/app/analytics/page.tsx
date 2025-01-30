export default function AddPage() {
  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Agregar Usuario</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellidos</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Edad</label>
          <input type="number" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Género</label>
          <select className="w-full px-3 py-2 border rounded-lg">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pokémon</label>
          <select className="w-full px-3 py-2 border rounded-lg">
            <option value="Bulbasaur">Bulbasaur</option>
            <option value="Charmander">Charmander</option>
            <option value="Squirtle">Squirtle</option>
          </select>
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Agregar</button>
      </form>
    </div>
  );
} 