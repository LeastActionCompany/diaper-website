// import { useEffect, useState } from 'react'
// import {
//   Heart, Shield, Users, Package, ChevronRight, Star, CheckCircle,
//   ArrowRight, TrendingUp, Globe, Phone, Mail, MapPin, Quote,
//   UserCheck, Truck, BarChart3, Lock
// } from 'lucide-react'
// import CountUp from 'react-countup'
// import { useInView } from 'react-intersection-observer'

// function StatCard({ icon: Icon, value, suffix = '', prefix = '', label, color = 'primary', delay = 0 }) {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
//   return (
//     <div ref={ref} className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: `${delay}ms` }}>
//       <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-${color === 'primary' ? 'primary' : color}-50`}>
//         <Icon className={`w-7 h-7 text-${color === 'primary' ? 'primary' : color}-600`} />
//       </div>
//       <div className="text-3xl font-bold text-dark-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
//         {prefix}
//         {inView ? <CountUp end={value} duration={2.5} separator="," /> : '0'}
//         {suffix}
//       </div>
//       <p className="text-sm text-slate-500 font-medium">{label}</p>
//     </div>
//   )
// }

// function CampaignCard({ title, raised, goal, daysLeft, category, progress }) {
//   const { ref, inView } = useInView({ triggerOnce: true })
//   return (
//     <div className="card p-6 hover:-translate-y-1 transition-all duration-300">
//       <div className="flex items-start justify-between mb-4">
//         <div>
//           <span className="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full">
//             {category}
//           </span>
//           <h3 className="mt-2 text-lg font-semibold text-dark-900">{title}</h3>
//         </div>
//         <span className="text-sm font-bold text-warm-600 bg-warm-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
//           {daysLeft}d left
//         </span>
//       </div>
//       <div className="mb-3">
//         <div ref={ref} className="progress-bar mb-2">
//           <div
//             className="progress-fill"
//             style={{ width: inView ? `${progress}%` : '0%', transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
//           />
//         </div>
//         <div className="flex justify-between text-sm">
//           <span className="font-semibold text-primary-600">Rs. {raised.toLocaleString('en-IN')} raised</span>
//           <span className="text-slate-400 font-medium">{progress}%</span>
//         </div>
//       </div>
//       <p className="text-xs text-slate-400 mb-4">Goal: Rs. {goal.toLocaleString('en-IN')}</p>
//       <a href="#donate" className="btn-primary w-full text-center text-sm py-2.5 block">
//         Support Campaign
//       </a>
//     </div>
//   )
// }

// function BeneficiaryCard({ name, age, category, story, progress, supporters, diaperCount, diaperType }) {
//   return (
//     <div className="card overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
//       <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center relative overflow-hidden">
//         <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur flex items-center justify-center text-4xl shadow-inner">
//           {category === 'pediatric' || category === 'special_needs' ? 'CH' : category === 'elderly' ? 'SR' : 'AD'}
//         </div>
//         <div className="absolute top-3 left-3 badge-verified text-xs">
//           <CheckCircle className="w-3 h-3" /> Verified
//         </div>
//         <div className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-xl px-2.5 py-1 text-xs font-bold text-primary-700">
//           Rs. {(progress * 6).toLocaleString('en-IN')} / Rs. 600
//         </div>
//       </div>
//       <div className="p-5">
//         <h3 className="font-bold text-dark-900 text-lg">{name}</h3>
//         <p className="text-sm text-slate-500 mb-2">{age} Years • {category.replace('_', ' ')}</p>
//         <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">{story}</p>
//         <div className="progress-bar mb-2">
//           <div className="progress-fill" style={{ width: `${progress}%` }} />
//         </div>
//         <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
//           <span className="font-medium text-primary-600">{progress}% funded</span>
//           <span>{supporters} guardians</span>
//         </div>
//         <div className="grid grid-cols-2 gap-2 mb-4">
//           <div className="bg-surface-100 rounded-xl p-3 text-center">
//             <p className="text-xs text-slate-500 mb-0.5">Monthly Need</p>
//             <p className="font-bold text-dark-900 text-sm">{diaperCount} Units</p>
//           </div>
//           <div className="bg-surface-100 rounded-xl p-3 text-center">
//             <p className="text-xs text-slate-500 mb-0.5">Type</p>
//             <p className="font-bold text-dark-900 text-sm">{diaperType}</p>
//           </div>
//         </div>
//         <a href="#donate" className="btn-primary w-full text-center text-sm py-2.5 block">
//           Become a Guardian
//         </a>
//       </div>
//     </div>
//   )
// }

// function TestimonialCard({ quote, name, role, rating }) {
//   return (
//     <div className="card p-6 h-full">
//       <div className="flex mb-4">
//         {[...Array(rating)].map((_, i) => (
//           <Star key={i} className="w-4 h-4 text-warm-500 fill-warm-400" />
//         ))}
//       </div>
//       <Quote className="w-8 h-8 text-primary-200 mb-3" />
//       <p className="text-slate-600 leading-relaxed text-sm mb-5 italic">{quote}</p>
//       <div className="flex items-center gap-3 mt-auto">
//         <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-700 text-sm">
//           {name.charAt(0)}
//         </div>
//         <div>
//           <p className="font-semibold text-dark-900 text-sm">{name}</p>
//           <p className="text-xs text-slate-500">{role}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// function HowItWorksStep({ step, icon: Icon, title, desc }) {
//   return (
//     <div className="flex flex-col items-center text-center px-4">
//       <div className="relative mb-6">
//         <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center shadow-blue-md">
//           <Icon className="w-8 h-8 text-white" />
//         </div>
//         <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
//           {step}
//         </span>
//       </div>
//       <h3 className="font-bold text-dark-900 text-lg mb-2">{title}</h3>
//       <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
//     </div>
//   )
// }

// export default function HomePage() {
//   const [heroVisible, setHeroVisible] = useState(false)

//   useEffect(() => {
//     setHeroVisible(true)
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
//       { threshold: 0.15 }
//     )
//     document.querySelectorAll('.scroll-animate').forEach((element) => observer.observe(element))
//     return () => observer.disconnect()
//   }, [])

//   const campaigns = [
//     { title: 'Downtown Relief Drive', raised: 85000, goal: 100000, daysLeft: 3, category: 'Emergency', progress: 85 },
//     { title: 'Summer Supply Pack', raised: 42000, goal: 100000, daysLeft: 12, category: 'Seasonal', progress: 42 },
//     { title: 'Elderly Home Support', raised: 63000, goal: 80000, daysLeft: 7, category: 'Monthly', progress: 79 },
//   ]

//   const beneficiaries = [
//     { name: 'Aarav', age: 10, category: 'special_needs', story: 'Aarav needs uninterrupted access to hygiene support during treatment and therapy.', progress: 75, supporters: 18, diaperCount: 240, diaperType: 'Hypoallergenic' },
//     { name: 'Rahul', age: 9, category: 'pediatric', story: 'Rahul is supported through school, home care, and medical follow-up with monthly supplies.', progress: 60, supporters: 12, diaperCount: 180, diaperType: 'Standard' },
//     { name: 'Kamala Devi', age: 78, category: 'elderly', story: 'Kamala receives dignified elderly care support through a trusted partner home.', progress: 90, supporters: 24, diaperCount: 300, diaperType: 'Adult Premium' },
//   ]

//   const testimonials = [
//     { quote: 'Guardian Diaper reduced a major monthly burden for our family and helped us care with dignity.', name: 'Priya Krishnan', role: 'Mother, Chennai', rating: 5 },
//     { quote: 'The transparency is what stood out. We always knew how support was being translated into real care.', name: 'Rajesh Mehta', role: 'Monthly Donor, Mumbai', rating: 5 },
//     { quote: 'Their NGO coordination is thoughtful, reliable, and practical for the families we serve.', name: 'Sr. Mary Francis', role: 'Director, Sunshine Orphanage', rating: 5 },
//   ]

//   return (
//     <div className="font-body">
//       <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-800 to-accent-700 pt-20">
//         <div className="absolute inset-0 bg-grid opacity-10" />
//         <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
//           <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
//               <Heart className="w-4 h-4 fill-accent-400 text-accent-400" />
//               Registered NGO • 80G Tax Exemption
//             </div>
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
//               Dignity
//               <br />
//               <em className="not-italic text-accent-300">Through</em>
//               <br />
//               Care
//             </h1>
//             <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
//               Guardian Diaper is a simple public-facing website that shares our mission, impact, and ways to support families with essential hygiene care.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <a href="#donate" className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold py-4 px-8 rounded-2xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base">
//                 <Heart className="w-5 h-5 fill-primary-600 text-primary-600" />
//                 Support Now
//               </a>
//               <a href="#beneficiaries" className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-white/60 py-4 px-8 rounded-2xl transition-all font-semibold text-base">
//                 Meet Beneficiaries
//                 <ArrowRight className="w-4 h-4" />
//               </a>
//             </div>
//             <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
//               {[
//                 { value: '8,400+', label: 'Diapers Delivered' },
//                 { value: '452', label: 'Families Impacted' },
//                 { value: '12', label: 'Partner NGOs' },
//               ].map((stat) => (
//                 <div key={stat.label}>
//                   <p className="text-2xl font-bold text-white">{stat.value}</p>
//                   <p className="text-white/60 text-sm">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={`hidden lg:block transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="relative">
//               <div className="glassmorphism rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
//                 <div className="grid grid-cols-2 gap-3 mb-4">
//                   <div className="bg-surface-100 rounded-2xl p-4">
//                     <p className="text-xs text-slate-500 mb-1">MONTHLY SUPPORT</p>
//                     <p className="text-xl font-bold text-dark-900">Rs. 12,840</p>
//                     <p className="text-xs text-success-600 font-semibold mt-1">Growing month over month</p>
//                   </div>
//                   <div className="bg-primary-50 rounded-2xl p-4">
//                     <p className="text-xs text-slate-500 mb-1">IMPACTED</p>
//                     <p className="text-xl font-bold text-primary-700">452 Families</p>
//                     <p className="text-xs text-primary-500 font-medium mt-1">8,400 Diapers</p>
//                   </div>
//                 </div>
//                 <div className="bg-blue-50 rounded-2xl p-4 mb-3">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="text-xs font-bold text-primary-600 uppercase tracking-wide">VERIFIED PROFILES</p>
//                       <p className="text-2xl font-bold text-primary-700">98%</p>
//                     </div>
//                     <span className="bg-primary-600 text-white text-xs font-bold px-4 py-2 rounded-xl">
//                       Trusted
//                     </span>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="font-bold text-dark-900 text-sm">Active Campaigns</h4>
//                   {[
//                     { name: 'Downtown Relief Drive', pct: 85 },
//                     { name: 'Summer Supply Pack', pct: 42 },
//                   ].map((campaign) => (
//                     <div key={campaign.name} className="bg-white rounded-2xl p-3 shadow-card">
//                       <div className="flex justify-between text-sm mb-2">
//                         <span className="font-semibold text-dark-900">{campaign.name}</span>
//                         <span className="text-primary-600 font-bold">{campaign.pct}%</span>
//                       </div>
//                       <div className="progress-bar">
//                         <div className="progress-fill" style={{ width: `${campaign.pct}%` }} />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute -top-4 -right-6 bg-success-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
//                 100% Verified
//               </div>
//               <div className="absolute -bottom-4 -left-6 bg-white shadow-card px-4 py-2 rounded-full text-sm font-semibold text-dark-900 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-success-500 rounded-full animate-pulse-soft" />
//                 Community backed
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="impact" className="py-20 bg-surface-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="scroll-animate text-center mb-12">
//             <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-3">Our Impact</p>
//             <h2 className="section-title">Numbers That Tell Real Stories</h2>
//           </div>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
//             <StatCard icon={Package} value={8400} suffix="+" label="Diapers Distributed" delay={0} />
//             <StatCard icon={Users} value={452} label="Families Supported" color="accent" delay={100} />
//             <StatCard icon={Globe} value={12} label="Partner NGOs" delay={200} />
//             <StatCard icon={TrendingUp} value={98} suffix="%" label="Delivery Success Rate" color="accent" delay={300} />
//           </div>
//         </div>
//       </section>

//       <section id="how-it-works" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="scroll-animate text-center mb-16">
//             <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-3">The Process</p>
//             <h2 className="section-title">How Guardian Diaper Works</h2>
//             <p className="section-subtitle mt-4 max-w-xl mx-auto">
//               This website keeps the story simple: mission, trust, impact, and a clear path to reach the team.
//             </p>
//           </div>
//           <div className="scroll-animate grid grid-cols-2 md:grid-cols-4 gap-8 relative">
//             <div className="absolute top-8 h-0.5 bg-primary-100 hidden md:block" style={{ left: '12.5%', right: '12.5%' }} />
//             <HowItWorksStep step={1} icon={Heart} title="Support Arrives" desc="Donors and partners reach out through the website and contribute to active needs." />
//             <HowItWorksStep step={2} icon={UserCheck} title="Profiles Verified" desc="Families and care homes are validated with on-ground partners before support is assigned." />
//             <HowItWorksStep step={3} icon={Truck} title="Supplies Delivered" desc="Diaper support is routed to families, children, and elders through trusted networks." />
//             <HowItWorksStep step={4} icon={BarChart3} title="Impact Shared" desc="Updates, reports, and campaign progress are shared with supporters." />
//           </div>
//         </div>
//       </section>

//       <section id="beneficiaries" className="py-24 bg-surface-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="scroll-animate flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
//             <div>
//               <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-3">Who We Serve</p>
//               <h2 className="section-title">Meet the Families You Support</h2>
//             </div>
//             <span className="inline-flex items-center gap-2 text-primary-600 font-semibold whitespace-nowrap">
//               Verified on-ground profiles <ChevronRight className="w-4 h-4" />
//             </span>
//           </div>
//           <div className="scroll-animate grid md:grid-cols-3 gap-6">
//             {beneficiaries.map((beneficiary) => <BeneficiaryCard key={beneficiary.name} {...beneficiary} />)}
//           </div>
//         </div>
//       </section>

//       <section id="campaigns" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="scroll-animate flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
//             <div>
//               <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-3">Active Campaigns</p>
//               <h2 className="section-title">Support a Campaign That Matters</h2>
//             </div>
//             <span className="inline-flex items-center gap-2 text-primary-600 font-semibold whitespace-nowrap">
//               Current fundraising focus <ChevronRight className="w-4 h-4" />
//             </span>
//           </div>
//           <div className="scroll-animate grid md:grid-cols-3 gap-6">
//             {campaigns.map((campaign) => <CampaignCard key={campaign.title} {...campaign} />)}
//           </div>
//         </div>
//       </section>

//       <section id="transparency" className="py-24 bg-gradient-to-br from-primary-950 to-primary-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid opacity-10" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="scroll-animate text-center mb-16">
//             <p className="text-accent-400 font-bold text-sm uppercase tracking-widest mb-3">Full Transparency</p>
//             <h2 className="section-title text-white">Every Rupee Accounted For</h2>
//             <p className="text-white/70 mt-4 max-w-xl mx-auto">
//               The website now presents transparency as trust content, not as a backend-driven donor dashboard.
//             </p>
//           </div>
//           <div className="scroll-animate grid md:grid-cols-3 gap-6">
//             {[
//               { icon: Shield, title: 'Beneficiary Verification', desc: 'Profiles are reviewed with partner NGOs and local teams before campaigns are highlighted.', badge: 'Anti-Fraud System' },
//               { icon: Lock, title: 'Secure Contributions', desc: 'Support conversations and contribution handling can happen directly with the foundation team.', badge: 'Trusted Process' },
//               { icon: BarChart3, title: 'Impact Reports', desc: 'Supporters can request impact summaries, photos, and campaign updates from the team.', badge: 'Open Audit Trail' },
//             ].map((item) => (
//               <div key={item.title} className="bg-white/10 backdrop-blur rounded-3xl p-7 border border-white/10 hover:bg-white/15 transition-all">
//                 <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center mb-5">
//                   <item.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-xs font-bold text-accent-400 uppercase tracking-wider mb-3 block">{item.badge}</span>
//                 <h3 className="font-bold text-white text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
//                 <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="scroll-animate text-center mt-12">
//             <a href="#contact" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5">
//               Contact for Full Reports
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-surface-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="scroll-animate text-center mb-14">
//             <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-3">Voices of Impact</p>
//             <h2 className="section-title">What They Say</h2>
//           </div>
//           <div className="scroll-animate grid md:grid-cols-3 gap-6">
//             {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-white border-y border-slate-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">Our Partner Organisations</p>
//           <div className="scroll-animate flex flex-wrap justify-center gap-8 items-center">
//             {['Sunshine Orphanage', 'Grace Elder Care', 'Hope Rehab Centre', 'CareBridge Foundation', 'Helping Hands NGO', 'New Life Trust'].map((org) => (
//               <div key={org} className="bg-surface-100 rounded-2xl px-6 py-3 text-sm font-semibold text-slate-500 hover:text-primary-600 hover:bg-primary-50 transition-all cursor-default">
//                 {org}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="donate" className="py-28 bg-gradient-to-r from-primary-600 to-accent-500 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid opacity-10" />
//         <div className="max-w-3xl mx-auto px-4 text-center relative">
//           <div className="scroll-animate">
//             <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/30">
//               <Heart className="w-4 h-4 fill-white" /> 80G Tax Exemption Available
//             </div>
//             <h2 className="section-title text-white mb-6">Be a Guardian. Change a Life Today.</h2>
//             <p className="text-white/85 text-lg leading-relaxed mb-10">
//               Since this is a landing page only, the clearest donation path is direct contact with the team.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <a href="mailto:donations@guardiandiaper.org" className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold py-4 px-10 rounded-2xl hover:bg-primary-50 transition-all shadow-lg hover:-translate-y-0.5 text-base">
//                 <Heart className="w-5 h-5 fill-primary-600 text-primary-600" />
//                 Email to Donate
//               </a>
//               <a href="tel:+914423456789" className="inline-flex items-center gap-2 text-white border-2 border-white/40 hover:border-white py-4 px-8 rounded-2xl transition-all font-semibold text-base">
//                 Call Our Team
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-3">Contact</p>
//             <h2 className="section-title">Reach the Guardian Diaper Team</h2>
//             <p className="section-subtitle mt-4 max-w-2xl mx-auto">
//               This website is now positioned as a clean public landing page, separate from your mobile-app backend flows.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { icon: MapPin, title: 'Visit', lines: ['Guardian Diaper Foundation', '45 Anna Salai, Thousand Lights', 'Chennai - 600006'] },
//               { icon: Phone, title: 'Call', lines: ['+91 44 2345 6789', '+91 98765 43210'] },
//               { icon: Mail, title: 'Email', lines: ['info@guardiandiaper.org', 'donations@guardiandiaper.org'] },
//             ].map((item) => (
//               <div key={item.title} className="card p-6 text-center">
//                 <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <item.icon className="w-6 h-6 text-primary-600" />
//                 </div>
//                 <h3 className="font-bold text-dark-900 text-xl mb-3">{item.title}</h3>
//                 {item.lines.map((line) => (
//                   <p key={line} className="text-sm text-slate-500">{line}</p>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
