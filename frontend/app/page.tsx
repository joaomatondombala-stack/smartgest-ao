'use client';

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const login = async (e: React.FormEvent) => {
  e.preventDefault();
console.log("Botão clicado");

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.access_token);


      alert("Login realizado com sucesso!");
      window.location.href = "/dashboard";

      console.log(data);

      // Em seguida vamos criar esta página
      window.location.href = "/dashboard";
    } else {
      alert(data.message || "Email ou palavra-passe inválidos.");
    }
  } catch (error) {
    console.error(error);
    alert("Não foi possível ligar ao servidor.");
  }
};
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-center text-3xl font-bold text-blue-700">
          SmartGest AO
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Faça login para continuar
        </p>

        <form onSubmit={login} className="space-y-4">

          <div>
            <label className="mb-1 block">Email</label>

            <input
  type="email"
  placeholder="Digite o seu email"
  className="w-full rounded-lg border p-3"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

          </div>

          <div>
            <label className="mb-1 block">Palavra-passe</label>

            <input
  type="password"
  placeholder="Digite a sua palavra-passe"
  className="w-full rounded-lg border p-3"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 p-3 font-semibold text-white hover:bg-blue-800"
          >
            Entrar
          </button>

        </form>

      </div>
    </main>
  );
}