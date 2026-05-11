import { CheckCircle, Download, Eye, Truck, Package, AlertTriangle, Shield, Lock, BarChart3 } from 'lucide-react'

const deliveries = [
  { org: 'Sunshine Orphanage', partner: 'Helping Hands NGO', date: 'Oct 24, 2026', volume: 450, category: 'Pediatric Care', status: 'Delivered', verified: true },
  { org: 'Grace Elder Care Home', partner: 'CareBridge Foundation', date: 'Oct 24, 2026', volume: 320, category: 'Elderly Care', status: 'Delivered', verified: true },
  { org: 'Hope Rehabilitation Centre', partner: 'Life Support Trust', date: 'Oct 22, 2026', volume: 280, category: 'Adult Care', status: 'Delivered', verified: true },
  { org: 'St. Mary Orphanage', partner: 'New Life Trust', date: 'Oct 20, 2026', volume: 180, category: 'Pediatric Care', status: 'In Transit', verified: false },
  { org: 'Prayas Child Home', partner: 'Helping Hands NGO', date: 'Oct 18, 2026', volume: 240, category: 'Special Needs', status: 'Delivered', verified: true },
]

const activityLog = [
  { type: 'donation', msg: 'Donation received: â‚¹250 from Anonymous', time: '14 min ago', color: 'success' },
  { type: 'delivery', msg: 'Distribution: 48 packs sent to Westside Center', time: '1 hr ago', color: 'primary' },
  { type: 'system', msg: 'Monthly impact report generated', time: '3 hr ago', color: 'slate' },
  { type: 'verification', msg: 'Profile verified: Karthik, 8 years', time: '5 hr ago', color: 'success' },
  { type: 'flag', msg: 'Flagged profile reviewed and cleared', time: '1 day ago', color: 'warm' },
]

export default function TransparencyPage() {
  return (
    <div className="min-h-screen pt-20 bg-amber-50/60">
      <div className="relative overflow-hidden bg-stone-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1720] via-[#17212b] to-[#2a1a12]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[340px] h-[340px] bg-amber-400/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-orange-300 font-bold text-sm uppercase tracking-[0.2em] mb-3">Full Accountability</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Transparency Report
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every delivery, every donation, every rupee â€” audited and published. Because you deserve to know exactly where your money goes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="inline-flex items-center gap-2 bg-white text-orange-700 font-bold py-3 px-6 rounded-2xl hover:bg-orange-50 transition-all shadow-lg text-sm">
              <Download className="w-4 h-4" /> Download Full Report (PDF)
            </button>
            <button className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:border-white py-3 px-6 rounded-2xl transition-all font-semibold text-sm">
              <Eye className="w-4 h-4" /> View Audit Logs
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { icon: Package, value: '8,400', label: 'Diapers Distributed', bg: 'bg-orange-50', text: 'text-orange-600' },
            { icon: Truck, value: '156', label: 'Deliveries Completed', bg: 'bg-amber-50', text: 'text-amber-700' },
            { icon: CheckCircle, value: '98%', label: 'Verified Profiles', bg: 'bg-green-50', text: 'text-green-600' },
            { icon: AlertTriangle, value: '3', label: 'Flagged & Removed', bg: 'bg-red-50', text: 'text-red-600' },
          ].map((stat) => (
            <div key={stat.label} className="card p-5 text-center">
              <div className={`w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.text}`} />
              </div>
              <p className="text-2xl font-bold text-stone-800 mb-1">{stat.value}</p>
              <p className="text-xs text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Recent Deliveries
            </h2>
            <div className="space-y-4">
              {deliveries.map((item, index) => (
                <div key={index} className="card p-5 hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-stone-800">{item.org}</h3>
                        {item.verified && <span className="badge-verified text-xs"><CheckCircle className="w-3 h-3" /> Verified</span>}
                      </div>
                      <p className="text-xs text-stone-400">Partner: {item.partner}</p>
                    </div>
                    <span className="text-xs text-stone-400">{item.date}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 text-center">
                      <p className="text-xs text-stone-400 mb-0.5">Volume</p>
                      <p className="font-bold text-orange-700">{item.volume} Units</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-2 text-center">
                      <p className="text-xs text-stone-400 mb-0.5">Category</p>
                      <p className="font-bold text-stone-800 text-xs">{item.category}</p>
                    </div>
                    <div className={`rounded-xl p-2 text-center border ${item.status === 'Delivered' ? 'bg-success-50 border-success-100' : 'bg-warm-50 border-warm-100'}`}>
                      <p className="text-xs text-stone-400 mb-0.5">Status</p>
                      <p className={`font-bold text-xs ${item.status === 'Delivered' ? 'text-success-700' : 'text-warm-700'}`}>{item.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Activity Log
            </h2>
            <div className="card p-5">
              <div className="space-y-4">
                {activityLog.map((log, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      log.color === 'success' ? 'bg-success-500' :
                      log.color === 'primary' ? 'bg-orange-500' :
                      log.color === 'warm' ? 'bg-warm-500' : 'bg-slate-300'
                    }`} />
                    <div>
                      <p className="text-sm text-stone-800">{log.msg}</p>
                      <p className="text-xs text-stone-400 mt-0.5">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-5 text-orange-600 text-sm font-semibold hover:text-orange-700 transition-colors">
                View All Logs â†’
              </button>
            </div>

            <div className="card p-5 mt-5">
              <h3 className="font-bold text-stone-800 mb-4">Certifications</h3>
              <div className="space-y-3">
                {[
                  { label: '12A & 80G Registration', status: 'Active' },
                  { label: 'FCRA License', status: 'Active' },
                  { label: 'NITI Aayog DARPAN', status: 'Registered' },
                  { label: 'ISO 9001:2015', status: 'Certified' },
                ].map((cert) => (
                  <div key={cert.label} className="flex justify-between items-center">
                    <span className="text-sm text-stone-600">{cert.label}</span>
                    <span className="text-xs font-bold text-success-600 bg-success-50 px-2 py-0.5 rounded-full">{cert.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5 mt-5 bg-stone-900 text-white border-0">
              <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Trust Signals</h3>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3"><Shield className="w-4 h-4 text-orange-400" /> Beneficiary verification is partner-reviewed.</div>
                <div className="flex items-center gap-3"><Lock className="w-4 h-4 text-orange-400" /> Donor conversations are handled securely.</div>
                <div className="flex items-center gap-3"><BarChart3 className="w-4 h-4 text-orange-400" /> Reports and updates remain shareable on request.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
