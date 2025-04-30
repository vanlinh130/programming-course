'use client'

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Đăng nhập thành công");
      router.push("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.error || "Lỗi đăng nhập");
      } else {
        alert("Lỗi không xác định");
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Đăng nhập</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border p-2 w-full"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        Đăng nhập
      </button>
    </form>
  );
}
