"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { pb } from "../lib/pocketbase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await pb.collection("users").authWithPassword(email, password);
      router.push("/dashboard");
    } catch {
      alert("Login gagal");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button>Login</button>
      </form>
    </div>
  );
}
