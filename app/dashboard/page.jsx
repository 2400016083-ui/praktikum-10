"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { pb } from "../lib/pocketbase";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!pb.authStore.isValid) {
      router.push("/login");
    }
  }, [router]);

  const logout = () => {
    pb.authStore.clear();
    router.push("/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>DASHBOARD</h1>
      <p>Login berhasil</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
