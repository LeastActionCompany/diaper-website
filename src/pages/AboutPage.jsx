import { Heart, Target, Eye } from 'lucide-react'

const team = [
  { name: 'Priya Nair', role: 'Founder & CEO', emoji: 'ðŸ‘©', bio: 'Social entrepreneur with 15 years in child welfare and NGO management.' },
  { name: 'Dr. Ramesh Kumar', role: 'Medical Advisor', emoji: 'ðŸ‘¨â€âš•ï¸', bio: 'Pediatrician providing clinical expertise on diaper-related health needs.' },
  { name: 'Anitha Srinivasan', role: 'Operations Head', emoji: 'ðŸ‘©â€ðŸ’¼', bio: 'Logistics expert managing our 12-city distribution network.' },
  { name: 'Vijay Menon', role: 'Technology Lead', emoji: 'ðŸ‘¨â€ðŸ’»', bio: 'Full-stack developer who built the transparent tracking platform.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-amber-50/60">
      <div className="relative overflow-hidden bg-stone-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1720] via-[#17212b] to-[#2a1a12]" />
        <div className="absolute top-0 left-0 w-[380px] h-[380px] bg-orange-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[340px] h-[340px] bg-amber-400/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-orange-300 font-bold text-sm uppercase tracking-[0.2em] mb-3">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Guardian Diaper
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Founded in 2019, Guardian Diaper bridges the gap between compassionate donors and families who need essential diaper supplies to preserve dignity and health.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Target, title: 'Our Mission', text: 'To ensure every child, elderly person, and differently-abled individual in India has access to essential diaper supplies, regardless of economic status.', bg: 'bg-orange-50', textColor: 'text-orange-600' },
            { icon: Eye, title: 'Our Vision', text: 'A dignified India where no family is burdened by the cost of essential hygiene supplies. We envision a network of 1,000 partner NGOs by 2030.', bg: 'bg-amber-50', textColor: 'text-amber-700' },
            { icon: Heart, title: 'Our Values', text: 'Transparency, dignity, accountability, and compassion. We never compromise on verifying beneficiaries or publishing full financial reports.', bg: 'bg-green-50', textColor: 'text-green-600' },
          ].map((item) => (
            <div key={item.title} className="card p-7 text-center hover:-translate-y-1 transition-transform">
              <div className={`w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center ${item.bg}`}>
                <item.icon className={`w-7 h-7 ${item.textColor}`} />
              </div>
              <h3 className="font-bold text-stone-800 text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="card p-10 mb-16 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-800 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Story
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Guardian Diaper was born out of a simple observation: thousands of families across India were spending 30-40% of their household income on diapers for special-needs children and elderly relatives â€” often at the cost of food and medicine.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Our founder Priya Nair, while volunteering at a Chennai orphanage in 2018, saw children going to school in wet clothes because the orphanage couldn't afford proper diaper supplies. That one moment changed everything.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Today, we serve 452+ families across 8 cities, distribute over 8,400 diapers monthly, and have built a transparent platform where every donor can trace exactly how their contribution makes a difference.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card p-6 text-center hover:-translate-y-1 transition-transform">
                <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center text-4xl mb-4">
                  {member.emoji}
                </div>
                <h3 className="font-bold text-stone-800 mb-1">{member.name}</h3>
                <p className="text-xs text-orange-600 font-semibold uppercase tracking-wide mb-3">{member.role}</p>
                <p className="text-sm text-stone-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-8 bg-dark-gradient text-white border-0">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Presence
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '8', label: 'Cities Covered' },
              { value: '12', label: 'Partner NGOs' },
              { value: '5+', label: 'Years Active' },
              { value: '3,200+', label: 'Total Donors' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
