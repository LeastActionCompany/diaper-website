import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart, Shield, Users, Package, ChevronRight, Star,
  CheckCircle, ArrowRight, TrendingUp, Globe, Phone,
  Mail, MapPin, Quote, UserCheck, Truck, BarChart3, Lock
} from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

/* ─── Stat Card ─── */
function StatCard({ icon: Icon, value, suffix = '', prefix = '', label, iconBg, iconColor, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <div
      ref={ref}
      className="bg-white rounded-3xl p-7 flex flex-col items-center text-center shadow-sm border border-orange-100 hover:-translate-y-1 transition-transform duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${iconBg}`}>
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
      <div className="text-3xl font-bold text-stone-800 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
        {prefix}{inView ? <CountUp end={value} duration={2.5} separator="," /> : '0'}{suffix}
      </div>
      <p className="text-sm text-stone-500 font-medium">{label}</p>
    </div>
  )
}

/* ─── Campaign Card ─── */
function CampaignCard({ title, raised, goal, daysLeft, category, progress }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const urgent = daysLeft <= 5
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-orange-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between mb-4 gap-3">
        <div>
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            {category}
          </span>
          <h3 className="mt-2.5 text-lg font-bold text-stone-800" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
        </div>
        <span className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full ${urgent ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
          {daysLeft}d left
        </span>
      </div>

      <div className="mb-3 flex-1">
        <div className="w-full h-2.5 bg-orange-100 rounded-full overflow-hidden mb-2" ref={ref}>
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-[1500ms] ease-out"
            style={{ width: inView ? `${progress}%` : '0%' }}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-orange-600">₹ {raised.toLocaleString('en-IN')} raised</span>
          <span className="text-stone-400 font-medium">{progress}%</span>
        </div>
        <p className="text-xs text-stone-400 mt-1">Goal: ₹ {goal.toLocaleString('en-IN')}</p>
      </div>

      <a href="#donate" className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-bold shadow-sm shadow-orange-300/30 hover:shadow-orange-300/50 hover:-translate-y-0.5 transition-all duration-200">
        <Heart className="w-4 h-4 fill-white" /> Support Campaign
      </a>
    </div>
  )
}

/* ─── Beneficiary Card ─── */
function BeneficiaryCard({ name, age, category, story, progress, supporters, diaperCount, diaperType }) {
  const avatarLabel = category === 'pediatric' || category === 'special_needs' ? '🧒' : category === 'elderly' ? '👵' : '🧑'
  const categoryLabel = category.replace('_', ' ')
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-orange-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Card top */}
      <div className="h-44 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 flex items-center justify-center relative overflow-hidden">
        <div className="text-5xl select-none z-10">{avatarLabel}</div>
        {/* subtle pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #c8622a22 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-green-500 text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-full">
            <CheckCircle className="w-3 h-3" /> Verified
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-xl px-2.5 py-1 text-xs font-bold text-orange-700">
          ₹ {(progress * 6).toLocaleString('en-IN')} / ₹600
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-stone-800 text-lg mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h3>
        <p className="text-xs text-stone-500 mb-3 capitalize font-medium">{age} yrs · {categoryLabel}</p>
        <p className="text-sm text-stone-600 leading-relaxed line-clamp-2 mb-4">{story}</p>

        <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden mb-2">
          <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between text-xs text-stone-500 mb-4">
          <span className="font-semibold text-orange-600">{progress}% funded</span>
          <span>{supporters} guardians</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-orange-50 rounded-xl p-3 text-center border border-orange-100">
            <p className="text-[0.65rem] text-stone-500 mb-0.5">Monthly Need</p>
            <p className="font-bold text-stone-800 text-sm">{diaperCount} Units</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 text-center border border-amber-100">
            <p className="text-[0.65rem] text-stone-500 mb-0.5">Type</p>
            <p className="font-bold text-stone-800 text-sm">{diaperType}</p>
          </div>
        </div>

        <a href="#donate" className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border-2 border-orange-300 text-orange-600 text-sm font-bold hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-md hover:shadow-orange-300/30 transition-all duration-200">
          Become a Guardian
        </a>
      </div>
    </div>
  )
}

/* ─── Testimonial Card ─── */
function TestimonialCard({ quote, name, role, rating }) {
  return (
    <div className="bg-white rounded-3xl p-7 shadow-sm border border-orange-100 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-orange-200 mb-3 flex-shrink-0" />
      <p className="text-stone-600 leading-relaxed text-sm italic flex-1 mb-6">{quote}</p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-orange-50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center font-bold text-orange-700 text-sm flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-stone-800 text-sm">{name}</p>
          <p className="text-xs text-stone-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── How It Works Step ─── */
function HowItWorksStep({ step, icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-300/40">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
          {step}
        </span>
      </div>
      <h3 className="font-bold text-stone-800 text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

/* ─── Section Label ─── */
function SectionLabel({ text }) {
  return (
    <span className="inline-flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-[0.18em] mb-3">
      <span className="w-6 h-0.5 bg-orange-400 rounded-full" />
      {text}
      <span className="w-6 h-0.5 bg-orange-400 rounded-full" />
    </span>
  )
}

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el))
    return () => { clearTimeout(t); observer.disconnect() }
  }, [])

  const campaigns = [
    { title: 'Downtown Relief Drive', raised: 85000, goal: 100000, daysLeft: 3, category: 'Emergency', progress: 85 },
    { title: 'Summer Supply Pack', raised: 42000, goal: 100000, daysLeft: 12, category: 'Seasonal', progress: 42 },
    { title: 'Elderly Home Support', raised: 63000, goal: 80000, daysLeft: 7, category: 'Monthly', progress: 79 },
  ]

  const beneficiaries = [
    { name: 'Aarav', age: 10, category: 'special_needs', story: 'Aarav needs uninterrupted access to hygiene support during treatment and therapy.', progress: 75, supporters: 18, diaperCount: 240, diaperType: 'Hypoallergenic' },
    { name: 'Rahul', age: 9, category: 'pediatric', story: 'Rahul is supported through school, home care, and medical follow-up with monthly supplies.', progress: 60, supporters: 12, diaperCount: 180, diaperType: 'Standard' },
    { name: 'Kamala Devi', age: 78, category: 'elderly', story: 'Kamala receives dignified elderly care support through a trusted partner home.', progress: 90, supporters: 24, diaperCount: 300, diaperType: 'Adult Premium' },
  ]

  const testimonials = [
    { quote: 'Guardian Diaper reduced a major monthly burden for our family and helped us care with dignity.', name: 'Priya Krishnan', role: 'Mother, Chennai', rating: 5 },
    { quote: 'The transparency is what stood out. We always knew how support was being translated into real care.', name: 'Rajesh Mehta', role: 'Monthly Donor, Mumbai', rating: 5 },
    { quote: 'Their NGO coordination is thoughtful, reliable, and practical for the families we serve.', name: 'Sr. Mary Francis', role: 'Director, Sunshine Orphanage', rating: 5 },
  ]

  return (
    <div className="font-['Plus_Jakarta_Sans',system-ui,sans-serif]">

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}


      <section className="relative min-h-screen overflow-hidden    bg-[#0f1720] pt-[80px] flex items-center">
      
        {/* Background */}
        <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f1720] via-[#17212b] to-[#2a1a12]" />

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-400/10 blur-3xl rounded-full" />

    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />
        </div>
      
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8       py-16 grid lg:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div
      className={`transition-all duration-1000 ${
        heroVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8">
        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
        <span className="text-xs tracking-[0.25em] uppercase text-white/80 font-semibold">
          Trusted NGO • 80G Tax Benefit
        </span>
      </div>

      {/* Heading */}
      <h1
        className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Every Child
        <br />
        Deserves
        <br />
        <span className="text-orange-400">
          Comfort & Care
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
        Guardian Diaper supports children, elders, and struggling
        families with essential hygiene care across India through
        transparent donation programs and community partnerships.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link
          to="/donate"
          className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-orange-500/20 transition-all duration-300"
        >
          <Heart className="w-5 h-5 fill-white" />
          Donate Now
        </Link>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/90 hover:text-white px-8 py-4 rounded-2xl backdrop-blur-md transition-all duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8">

        {[
          {
            value: "8.4K+",
            label: "Diapers Donated",
          },
          {
            value: "450+",
            label: "Families Helped",
          },
          {
            value: "12+",
            label: "NGO Partners",
          },
        ].map((item) => (
          <div key={item.label}>
            <h3
              className="text-3xl font-bold text-white mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {item.value}
            </h3>

            <p className="text-sm text-white/50">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div
      className={`relative transition-all duration-1000 delay-300 ${
        heroVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* Main Image */}
      <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">

        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1400&auto=format&fit=crop"
          alt="Helping children"
          className="w-full h-[650px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Floating Card */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest">
                Monthly Impact
              </p>

              <h3 className="text-3xl font-bold text-white">
                1,200+
              </h3>
            </div>

            <div className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Verified
            </div>
          </div>

          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-3">
            <div className="w-[82%] h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">
              Campaign Progress
            </span>

            <span className="text-orange-300 font-semibold">
              82% Completed
            </span>
          </div>
        </div>
      </div>

      {/* Floating Small Card */}
      <div className="absolute -top-5 -left-5 bg-white text-gray-900 px-5 py-3 rounded-2xl shadow-2xl">
        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
          Active Supporters
        </p>

        <h4 className="text-2xl font-bold">
          2,840+
        </h4>
      </div>
    </div>
        </div>
      
        {/* Bottom Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2       flex flex-col items-center opacity-60 animate-bounce">
    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
      Scroll
    </span>

    <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ════════════════════════════════
          IMPACT STATS
      ════════════════════════════════ */}
      <section id="impact" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="scroll-animate text-center mb-14">
            <SectionLabel text="Our Impact" />
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Numbers That Tell<br /><em className="not-italic text-orange-500">Real Stories</em>
            </h2>
          </div>
          <div className="scroll-animate grid grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard icon={Package} value={8400} suffix="+" label="Diapers Distributed" iconBg="bg-orange-100" iconColor="text-orange-600" delay={0} />
            <StatCard icon={Users} value={452} label="Families Supported" iconBg="bg-amber-100" iconColor="text-amber-700" delay={100} />
            <StatCard icon={Globe} value={12} label="Partner NGOs" iconBg="bg-stone-100" iconColor="text-stone-600" delay={200} />
            <StatCard icon={TrendingUp} value={98} suffix="%" label="Delivery Success Rate" iconBg="bg-green-100" iconColor="text-green-600" delay={300} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════ */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="scroll-animate text-center mb-16">
            <SectionLabel text="The Process" />
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              How Guardian Diaper Works
            </h2>
            <p className="text-stone-500 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
              A clear mission, verified partners, and transparent delivery — every step of the way.
            </p>
          </div>

          <div className="scroll-animate relative">
            {/* Connector line */}
            <div className="absolute top-8 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 hidden md:block" style={{ left: '12.5%', right: '12.5%' }} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <HowItWorksStep step={1} icon={Heart} title="Support Arrives" desc="Donors and partners reach out through the website and contribute to active needs." />
              <HowItWorksStep step={2} icon={UserCheck} title="Profiles Verified" desc="Families and care homes are validated with on-ground partners before support is assigned." />
              <HowItWorksStep step={3} icon={Truck} title="Supplies Delivered" desc="Diaper support is routed to families, children, and elders through trusted networks." />
              <HowItWorksStep step={4} icon={BarChart3} title="Impact Shared" desc="Updates, reports, and campaign progress are shared with all supporters." />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          BENEFICIARIES
      ════════════════════════════════ */}
      <section id="beneficiaries" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="scroll-animate flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <SectionLabel text="Who We Serve" />
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Meet the Families<br />You Support
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm whitespace-nowrap bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4" /> Verified on-ground profiles
            </span>
          </div>
          <div className="scroll-animate grid md:grid-cols-3 gap-6">
            {beneficiaries.map(b => <BeneficiaryCard key={b.name} {...b} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CAMPAIGNS
      ════════════════════════════════ */}
      <section id="campaigns" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="scroll-animate flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <SectionLabel text="Active Campaigns" />
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Support a Campaign<br />That Matters
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm whitespace-nowrap">
              Current fundraising focus <ChevronRight className="w-4 h-4" />
            </span>
          </div>
          <div className="scroll-animate grid md:grid-cols-3 gap-6">
            {campaigns.map(c => <CampaignCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TRANSPARENCY
      ════════════════════════════════ */}
      <section id="transparency" className="py-24 bg-stone-900 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="scroll-animate text-center mb-16">
            <SectionLabel text="Full Transparency" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Every Rupee<br /><em className="not-italic text-orange-400">Accounted For</em>
            </h2>
            <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
              Trust is built through openness. We share our processes, reports, and impact with every supporter.
            </p>
          </div>

          <div className="scroll-animate grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Shield, title: 'Beneficiary Verification', desc: 'Profiles are reviewed with partner NGOs and local teams before campaigns are highlighted.', badge: 'Anti-Fraud System', color: 'bg-orange-500/20 border-orange-400/20', iconBg: 'bg-orange-500' },
              { icon: Lock, title: 'Secure Contributions', desc: 'Support conversations and contribution handling happen directly and securely with our team.', badge: 'Trusted Process', color: 'bg-amber-500/15 border-amber-400/20', iconBg: 'bg-amber-500' },
              { icon: BarChart3, title: 'Impact Reports', desc: 'Supporters can request summaries, photos, and campaign updates directly from our team.', badge: 'Open Audit Trail', color: 'bg-green-500/15 border-green-400/20', iconBg: 'bg-green-600' },
            ].map(item => (
              <div key={item.title} className={`${item.color} border backdrop-blur-sm rounded-3xl p-7 hover:bg-white/10 transition-all duration-300`}>
                <div className={`w-12 h-12 ${item.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-md`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[0.65rem] font-bold text-orange-400 uppercase tracking-wider mb-3 block">{item.badge}</span>
                <h3 className="font-bold text-white text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate text-center">
            <a href="#contact" className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:-translate-y-0.5">
              Request Full Report <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════ */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="scroll-animate text-center mb-14">
            <SectionLabel text="Voices of Impact" />
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              What They Say
            </h2>
          </div>
          <div className="scroll-animate grid md:grid-cols-3 gap-6">
            {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PARTNER ORGS
      ════════════════════════════════ */}
      <section className="py-16 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-center text-stone-400 text-xs font-bold uppercase tracking-[0.18em] mb-10">Our Partner Organisations</p>
          <div className="scroll-animate flex flex-wrap justify-center gap-4 items-center">
            {['Sunshine Orphanage', 'Grace Elder Care', 'Hope Rehab Centre', 'CareBridge Foundation', 'Helping Hands NGO', 'New Life Trust'].map(org => (
              <div key={org} className="bg-amber-50 border border-orange-100 rounded-2xl px-5 py-2.5 text-sm font-semibold text-stone-500 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-200 transition-all duration-200 cursor-default">
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          DONATE CTA
      ════════════════════════════════ */}
      <section id="donate" className="py-28 relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-800/20 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <div className="scroll-animate">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-8">
              <Heart className="w-4 h-4 fill-white" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">80G Tax Exemption Available</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Be a Guardian.<br />Change a Life Today.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Reach out to our team directly — every rupee goes towards essential hygiene care for those who need it most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:donations@guardiandiaper.org" className="inline-flex items-center gap-2.5 bg-white text-orange-600 font-bold py-4 px-10 rounded-2xl hover:bg-orange-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-base">
                <Mail className="w-5 h-5" /> Email to Donate
              </a>
              <a href="tel:+914423456789" className="inline-flex items-center gap-2.5 text-white border-2 border-white/40 hover:border-white py-4 px-8 rounded-2xl transition-all duration-200 font-semibold text-base">
                <Phone className="w-5 h-5" /> Call Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CONTACT
      ════════════════════════════════ */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <SectionLabel text="Contact" />
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Reach the Guardian<br />Diaper Team
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
              We're always happy to answer questions, share reports, or discuss how you can support families in need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: 'Visit Us', lines: ['Guardian Diaper Foundation', '45 Anna Salai, Thousand Lights', 'Chennai — 600006'], color: 'bg-orange-50 border-orange-100', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
              { icon: Phone, title: 'Call Us', lines: ['+91 44 2345 6789', '+91 98765 43210'], color: 'bg-amber-50 border-amber-100', iconBg: 'bg-amber-100', iconColor: 'text-amber-700' },
              { icon: Mail, title: 'Email Us', lines: ['info@guardiandiaper.org', 'donations@guardiandiaper.org'], color: 'bg-stone-50 border-stone-100', iconBg: 'bg-stone-100', iconColor: 'text-stone-600' },
            ].map(item => (
              <div key={item.title} className={`${item.color} border rounded-3xl p-7 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300`}>
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="font-bold text-stone-800 text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                {item.lines.map(line => (
                  <p key={line} className="text-sm text-stone-500 leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
