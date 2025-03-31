import React from "react";

function Profile() {
  const clienteData = {
    nombre: "Carlos",
    apellido: "Rodríguez",
    email: "carlos@ejemplo.com",
    telefono: "555-123-4567",
    fotoPerfil: "./imgs/caradepizza.jpg",
    direccion: {
      calle: "Av. de las Pizzas",
      numero: "42",
      ciudad: "Madrid",
      codigoPostal: "28001",
    },
    favoritas: ["Pepperoni", "Cuatro quesos", "Hawaiana"],
  };

  return (
    <div className="perfil bg-gray-100 min-h-screen  p-4">
      <div className="rounded-lg max-w-md w-full">
        <div className="bg-red-500 p-6 flex  items-center rounded-t-lg">
          <img
            src={clienteData.fotoPerfil || "/images/default-profile.jpg"}
            alt="Foto de perfil"
            className="w-20 h-20 rounded-full border-4 border-white mb-4"
          />
          <h1 className="font-bold text-xl text-center">
            {clienteData.nombre} {clienteData.apellido}
          </h1>
          <p className="text-sm text-center">{clienteData.email}</p>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <p className="text-gray-700 text-center">
              <span className="font-bold">Teléfono:</span>{" "}
              {clienteData.telefono}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-center">
              <span className="font-bold">Dirección:</span>{" "}
              {clienteData.direccion.calle}, {clienteData.direccion.numero}
            </p>
            <p className="text-gray-700 text-center">
              {clienteData.direccion.ciudad},{" "}
              {clienteData.direccion.codigoPostal}
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-700 text-center mb-2">
              Pizzas favoritas:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {clienteData.favoritas.map((pizza, index) => (
                <span
                  key={index}
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                >
                  🍕 {pizza}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t rounded-b-lg">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4">
            Hacer pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
