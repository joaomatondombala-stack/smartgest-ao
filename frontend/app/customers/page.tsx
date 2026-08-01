
'use client';

import { useEffect, useState } from "react";

export default function Customers() {

  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    carregarClientes();
  }, []);

  async function carregarClientes() {
    const response = await fetch("http://localhost:3000/customer");
    const data = await response.json();
    setClientes(data);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Clientes
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Novo Cliente
        </button>
      </div>

      <table className="w-full bg-white rounded-xl shadow">

        <thead>
          <tr className="border-b text-black">
            <th className="p-4 text-left">Nome</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Telefone</th>
          </tr>
        </thead>

        <tbody>

          {clientes.map((cliente) => (

            <tr key={cliente.id} className="border-b text-black">

              <td className="p-4">{cliente.nome}</td>

              <td className="p-4">{cliente.email}</td>

              <td className="p-4">{cliente.telefone}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}