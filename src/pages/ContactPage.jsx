import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen pt-20 bg-amber-50/60">
      <div className="relative overflow-hidden bg-stone-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1720] via-[#17212b] to-[#2a1a12]" />
        <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-orange-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[340px] h-[340px] bg-amber-400/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-orange-300 font-bold text-sm uppercase tracking-[0.2em] mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h1>
          <p className="text-white/70 text-lg">We'd love to hear from you. Reach out to partner, volunteer, or inquire about donations.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Send us a Message
            </h2>
            {submitted ? (
              <div className="card p-10 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="font-bold text-stone-800 text-xl mb-2">Message Sent!</h3>
                <p className="text-stone-500">Thank you for reaching out. We'll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="input-field" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                      className="input-field" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">Subject</label>
                    <select value={form.subject} onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))} className="input-field">
                      <option value="">Select subject</option>
                      <option>General Inquiry</option>
                      <option>NGO Partnership</option>
                      <option>Donation Query</option>
                      <option>Volunteer</option>
                      <option>Media / Press</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Message *</label>
                  <textarea required value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="input-field resize-none" rows={5} placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h2>
            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, title: 'Address', lines: ['Guardian Diaper Foundation', '45 Anna Salai, Thousand Lights', 'Chennai â€“ 600006, Tamil Nadu'] },
                { icon: Phone, title: 'Phone', lines: ['+91 44 2345 6789', '+91 98765 43210 (WhatsApp)'] },
                { icon: Mail, title: 'Email', lines: ['info@guardiandiaper.org', 'donations@guardiandiaper.org'] },
                { icon: Clock, title: 'Office Hours', lines: ['Mondayâ€“Friday: 9am â€“ 6pm', 'Saturday: 10am â€“ 2pm', 'Sunday: Closed'] },
              ].map((contact) => (
                <div key={contact.title} className="card p-5 flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 mb-1">{contact.title}</p>
                    {contact.lines.map((line, index) => <p key={index} className="text-sm text-stone-500">{line}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white border-0">
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Partner With Us</h3>
              <p className="text-white/80 text-sm mb-4">Are you an NGO, hospital, orphanage, or care home? Register as a partner to receive monthly diaper supplies for your residents.</p>
              <a href="mailto:partners@guardiandiaper.org" className="inline-flex items-center gap-2 bg-white text-orange-700 font-bold py-2 px-5 rounded-xl text-sm hover:bg-orange-50 transition-colors">
                <Mail className="w-4 h-4" /> Email Us to Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
