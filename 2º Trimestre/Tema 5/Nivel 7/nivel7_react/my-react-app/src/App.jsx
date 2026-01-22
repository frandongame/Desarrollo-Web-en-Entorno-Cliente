function App() {
  return (
    <div className="p-10 flex justify-center">

      <div className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-xs">
        
        <h2 className="text-xl md:text-3xl font-bold mb-2">
          Título de la tarjeta
        </h2>

        <p className="text-gray-600 mb-4">
          Descripción corta. En el móvil el título es pequeño y en PC se hace grande
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Púlsame
        </button>

      </div>

    </div>
  )
}

export default App