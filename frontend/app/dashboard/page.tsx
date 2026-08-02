'use client';

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [clientes, setClientes] = useState<any[]>([]);

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/";
    return;
  }

  carregarClientes();
}, []);

 async function carregarClientes() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    console.log("Resposta da API:", data);

    if (Array.isArray(data)) {
      setClientes(data);
    } else {
      console.error("A API não devolveu um array:", data);
      setClientes([]);
    }
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div className="flex min-h-screen">

      <aside className="w-64 bg-blue-700 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          SmartGest AO
        </h1>

        <nav className="space-y-4">
          <p>🏠 Dashboard</p>
          <p>👥 Clientes</p>
          <p>📦 Produtos</p>
          <p>🛒 Vendas</p>
          <p>📄 Faturas</p>
          <p>📊 Relatórios</p>
          <p>⚙️ Configurações</p>
          <button
  className="mt-8 w-full rounded-lg bg-red-600 p-3"
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }}
>
  🚪 Terminar sessão
</button>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-8 text-black">
        <h2 className="text-3xl font-bold">
          Bem-vindo ao SmartGest AO
        </h2>

        <div className="grid grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6 text-black">
            <h3>Total de Clientes</h3>
            
<p className="text-3xl font-bold mt-2">
  {clientes.length}
</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-black">
            <h3>Produtos</h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-black">
            <h3>Vendas Hoje</h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-black">
            <h3>Receita</h3>
            <p className="text-3xl font-bold mt-2">0 Kz</p>
          </div>

        </div>
      </main>

    </div>
  );
}