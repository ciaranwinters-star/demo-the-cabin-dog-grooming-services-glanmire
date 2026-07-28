"use client"
import { useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const upd = (k: string) => (e: any) => setForm({ ...form, [k]: e.target.value })
  if (sent) {
    return (
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 text-center">
        <p className="text-3xl mb-3">✅</p>
        <p className="font-bold text-lg text-gray-900">Thanks — we come back to you fast.</p>
        <p className="text-gray-500 text-sm mt-1">For anything urgent, tap WhatsApp or give us a call.</p>
      </div>
    )
  }
  return (
    <form onSubmit={(e: any) => { e.preventDefault(); setSent(true) }} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 md:p-8 space-y-4">
      <input required value={form.name} onChange={upd("name")} placeholder="Your name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2" />
      <input required type="email" value={form.email} onChange={upd("email")} placeholder="Your email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2" />
      <textarea required value={form.message} onChange={upd("message")} placeholder="How can we help?" rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2" />
      <button type="submit" className="w-full text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition" style={{ background: "#7FAF7A" }}>Send message</button>
    </form>
  )
}
