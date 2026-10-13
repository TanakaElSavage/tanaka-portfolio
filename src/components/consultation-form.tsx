"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { brand, whatsappUrl } from "@/lib/brand";
export default function ConsultationForm() {
  const [message, setMessage] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "").trim();
    setMessage(`Hi Tanaka, I'd like a free consultation.\n\nName: ${value("name")}\nBusiness: ${value("business") || "Not provided"}\nService: ${value("service")}\n\nWhat I need help with:\n${value("brief")}`);
  }
  return <form className="consultation-form" onSubmit={prepare} onChange={()=>setMessage("")}>
    <div className="form-pair"><label>Your name <input name="name" autoComplete="name" required maxLength={80} placeholder="e.g. Sarah" /></label><label>Business / organisation <input name="business" autoComplete="organization" maxLength={120} placeholder="Your business name" /></label></div>
    <label>What can we help you with?<select name="service" defaultValue="Not sure — advise me"><option>Not sure — advise me</option><option>Website & digital presence</option><option>Business system & automation</option><option>Branding & graphic design</option><option>Website updates & support</option></select></label>
    <label>Tell us a little about your project<textarea name="brief" required minLength={10} maxLength={1800} rows={4} placeholder="What do you want to improve? Tell us about your idea, customers or current process." /></label>
    <button className="button primary" type="submit">Prepare my enquiry <ArrowUpRight size={18}/></button>
    <p className="form-note">We’ll prepare a message for you to review and send through WhatsApp. This form does not submit or store your details.</p>
    <noscript><p>To enquire, please use the phone or email links alongside this form. The message builder needs JavaScript.</p></noscript>
    {message && <div className="message-ready" role="status"><p><Check size={18}/> Your message is ready.</p><pre>{message}</pre><a className="button primary" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Open WhatsApp to send <ArrowUpRight size={18}/></a><a className="email-fallback" href={`mailto:${brand.email}?subject=${encodeURIComponent("New project enquiry — TPD")}&body=${encodeURIComponent(message)}`}>Prefer email? Open this enquiry in your email app</a></div>}
  </form>;
}
