'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NovoCliente() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nif, setNif] = useState("");

  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function salvar(e: React.FormEvent) {
    e.preventDefault();
    setCarregando(true);
    setErro(null);

    try {
      // 1. Pegar o token guardado no localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        setErro("Sessão expirada. Faça login novamente.");
        setCarregando(false);
        return;
      }

      // 2. Enviar a requisição POST com o Token de Autorização
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Passa o token exigido pelo NestJS
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          endereco,
          nif,
        }),
      });

      if (response.ok) {
        alert("Cliente criado com sucesso!");
        router.push("/customers"); // Navegação mais fluida no Next.js
      } else {
        const dadosErro = await response.json().catch(() => null);
        
        if (response.status === 401) {
          setErro("Sem permissão. Por favor, faça login de novo.");
        } else if (dadosErro && dadosErro.message) {
          // Se for erro de validação do DTO (NestJS)
          const mensagem = Array.isArray(dadosErro.message) 
            ? dadosErro.message.join(", ") 
            : dadosErro.message;
          setErro(`Erro na validação: ${mensagem}`);
        } else {
          setErro("Erro ao criar cliente. Verifique os dados introduzidos.");
        }
      }
    } catch (err) {
      console.error("Erro ao salvar cliente:", err);
      setErro("Não foi possível conectar ao servidor.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Novo Cliente</h1>

      {erro && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-lg">
          {erro}
        </div>
      )}

      <form onSubmit={salvar} className="space-y-4 max-w-lg">
        <input
          required
          className="w-full rounded border p-3 text-black"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          required
          className="w-full rounded border p-3 text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full rounded border p-3 text-black"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <input
          className="w-full rounded border p-3 text-black"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />

        <input
          className="w-full rounded border p-3 text-black"
          placeholder="NIF"
          value={nif}
          onChange={(e) => setNif(e.target.value)}
        />

        <button
          type="submit"
          disabled={carregando}
          className="rounded bg-blue-700 px-6 py-3 text-white hover:bg-blue-800 disabled:bg-gray-400 transition"
        >
          {carregando ? "A guardar..." : "Guardar Cliente"}
        </button>
      </form>
    </main>
  );
}