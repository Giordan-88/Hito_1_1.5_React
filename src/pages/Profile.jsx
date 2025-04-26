import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

import { Link } from "react-router-dom";

function Profile() {
  const { logout, getUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser(); // Llamar a getUser y esperar los datos
      // Agregar información fija al usuario
      const fixedData = {
        ...data,
        nombre: "Carlos",
        apellido: "Rodríguez",
        telefono: "555-123-4567",
        direccion: {
          calle: "Av. de las Pizzas",
          numero: "42",
          ciudad: "Madrid",
          codigoPostal: "28001",
        },
        fotoPerfil: "/imgs/caradepizza.jpg",
        favoritas: ["Pepperoni", "Cuatro quesos", "Hawaiana"],
      };
      setUserData(fixedData); // Actualizar el estado con los datos del usuario
    };

    fetchUserData();
  }, [getUser]); // Ejecutar useEffect cuando getUser cambie

  if (!userData) {
    return <p className="text-center">Cargando datos del usuario...</p>; // Mostrar un mensaje mientras se cargan los datos
  }

  return (
    <div className="perfil bg-gray-100 min-h-screen p-4">
      <div className="rounded-lg max-w-md w-full">
        <div className="bg-red-500 p-6 flex items-center rounded-t-lg">
          <img
            src={userData.fotoPerfil}
            alt="Foto de perfil"
            className="w-20 h-20 rounded-full border-4 border-white mb-4"
          />
          <h1 className="font-bold text-xl text-center">
            {userData.nombre} {userData.apellido}
          </h1>
          <p className="text-sm text-center">Email: {userData.email}</p>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <p className="text-gray-700 text-center">
              <span className="font-bold">Teléfono:</span> {userData.telefono}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-center">
              <span className="font-bold">Dirección:</span>{" "}
              {userData.direccion.calle}, {userData.direccion.numero}
            </p>
            <p className="text-gray-700 text-center">
              {userData.direccion.ciudad}, {userData.direccion.codigoPostal}
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-700 text-center mb-2">
              Pizzas favoritas:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {userData.favoritas.map((pizza, index) => (
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            paddingBottom: "2rem",
          }}
        >
          <Link to="/">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Hacer pedido
            </button>
          </Link>
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            🔒 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
