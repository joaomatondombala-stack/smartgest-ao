'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Customers() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    carregarClientes();
  }, []);

  async function carregarClientes() {
    try {
      setCarregando(true);
      setErro(null);

      // 1. Pegar o token de autenticação (ajuste a chave se usou outro nome no localStorage/cookies)
      const token = localStorage.getItem("token");

      // 2. Fazer a requisição enviando o token no Header
      const response = await fetch("http://localhost:3000/customer", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Passa o token para o JwtAuthGuard do NestJS
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Sessão expirada ou usuário não autenticado.");
        }
        throw new Error(`Erro ao buscar clientes (${response.status})`);
      }

      const data = await response.json();

      // 3. Garantir que os dados salvos sejam estritamente um Array
      if (Array.isArray(data)) {
        setClientes(data);
      } else if (data && Array.isArray(data.data)) {
        // Caso a API retorne algo como { data: [...] }
        setClientes(data.data);
      } else {
        setClientes([]);
      }
    } catch (err: any) {
      console.error("Erro na busca de clientes:", err);
      setErro(err.message || "Erro ao carregar lista de clientes.");
      setClientes([]); // Garante que clientes continue sendo array para não quebrar o .map
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">Clientes</h1>

        <Link href="/customers/new">
          <button className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition">
            + Novo Cliente
          </button>
        </Link>
      </div>

      {erro && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {erro}
        </div>
      )}

      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="border-b text-black">
            <th className="p-4 text-left">Nome</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Telefone</th>
          </tr>
        </thead>

        <tbody>
          {carregando ? (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-500">
                Carregando clientes...
              </td>
            </tr>
          ) : Array.isArray(clientes) && clientes.length > 0 ? (
            clientes.map((cliente) => (
              <tr key={cliente.id} className="border-b text-black hover:bg-gray-50">
                <td className="p-4">{cliente.nome || cliente.name}</td>
                <td className="p-4">{cliente.email}</td>
                <td className="p-4">{cliente.telefone || cliente.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-500">
                Nenhum cliente encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}

/*
'use client';
import Link from "next/link";
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

        <Link href="/customers/new">
  <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
    + Novo Cliente
  </button>
</Link>
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
}*/