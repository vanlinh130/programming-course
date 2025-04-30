'use client'

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Đăng ký thành công");
      router.push("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.error || "Lỗi đăng ký");
      } else {
        alert("Lỗi không xác định");
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Đăng ký</h2>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="border p-2 w-full"
        value={form.name}
        onChange={handleChange}
        required
      />
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Đăng ký</button>
    </form>
  );
}
