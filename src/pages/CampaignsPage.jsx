import { Link } from 'react-router-dom'
import { Clock, Target, Users, TrendingUp } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const campaigns = [
  { id: 1, title: 'Downtown Relief Drive', desc: 'Emergency diapers for 50 families affected by recent flooding in the city. Urgent supplies needed.', goal: 100000, raised: 85000, daysLeft: 3, diaperTarget: 2000, category: 'Emergency', donors: 142, status: 'active', featured: true },
  { id: 2, title: 'Summer Supply Pack', desc: 'Beat the summer heat â€” provide breathable hypoallergenic diapers for special-needs children across Chennai.', goal: 100000, raised: 42000, daysLeft: 12, diaperTarget: 5000, category: 'Seasonal', donors: 78, status: 'active', featured: true },
  { id: 3, title: 'Elderly Home Support', desc: 'Supporting 30 elderly residents at Grace Care Home with adult diapers for Julyâ€“September.', goal: 80000, raised: 63000, daysLeft: 7, diaperTarget: 1800, category: 'Monthly', donors: 94, status: 'active', featured: false },
  { id: 4, title: 'Monsoon Diaper Drive', desc: 'Prepare 100 children for the monsoon season with waterproof and hypoallergenic supplies.', goal: 150000, raised: 30000, daysLeft: 25, diaperTarget: 6000, category: 'Seasonal', donors: 45, status: 'active', featured: false },
  { id: 5, title: 'Special Kids September', desc: 'Monthly diaper allocation for 20 specially-abled children across 4 NGO partner locations.', goal: 60000, raised: 18000, daysLeft: 30, diaperTarget: 1200, category: 'Special', donors: 30, status: 'upcoming', featured: false },
  { id: 6, title: 'Rural Outreach Q3', desc: 'Extending our reach to rural districts â€” 500 diapers to 3 new villages in Tamil Nadu.', goal: 40000, raised: 40000, daysLeft: 0, diaperTarget: 800, category: 'Monthly', donors: 67, status: 'completed', featured: false },
]

function CampaignCard({ title, desc, goal, raised, daysLeft, diaperTarget, category, donors, status, featured }) {
  const pct = Math.round((raised / goal) * 100)
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div className={`bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${featured ? 'ring-2 ring-orange-200' : ''}`}>
      {featured && (
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs font-bold px-4 py-2 text-center tracking-wide uppercase">
          Featured Campaign
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
            status === 'completed' ? 'bg-green-50 text-green-700 border-green-100' :
            status === 'upcoming' ? 'bg-amber-50 text-amber-700 border-amber-100' :
            category === 'Emergency' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-orange-50 text-orange-700 border-orange-100'
          }`}>
            {status === 'completed' ? 'Completed' : status === 'upcoming' ? 'Upcoming' : category}
          </span>
          {status === 'active' && daysLeft > 0 && (
            <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full">
              <Clock className="w-3 h-3" /> {daysLeft}d left
            </div>
          )}
        </div>

        <h3 className="font-bold text-stone-800 text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
        <p className="text-sm text-stone-500 mb-5 leading-relaxed">{desc}</p>

        <div ref={ref} className="mb-5">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold text-orange-700">â‚¹{raised.toLocaleString('en-IN')}</span>
            <span className="text-stone-400">of â‚¹{goal.toLocaleString('en-IN')}</span>
          </div>
          <div className="progress-bar mb-1">
            <div className="progress-fill" style={{ width: inView ? `${Math.min(pct, 100)}%` : '0%', transition: 'width 1.5s cubic-bezier(0.16,1,0.3,1)' }} />
          </div>
          <p className="text-right text-xs text-stone-400">{pct}% raised</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5 text-center">
          {[
            { icon: Target, value: `${diaperTarget.toLocaleString('en-IN')}`, label: 'Diapers' },
            { icon: Users, value: `${donors}`, label: 'Donors' },
            { icon: TrendingUp, value: `${pct}%`, label: 'Funded' },
          ].map((stat, index) => (
            <div key={stat.label} className={`rounded-xl p-2 border ${index === 0 ? 'bg-orange-50 border-orange-100' : index === 1 ? 'bg-amber-50 border-amber-100' : 'bg-stone-50 border-stone-100'}`}>
              <stat.icon className="w-4 h-4 text-orange-500 mx-auto mb-1" />
              <p className="font-bold text-stone-800 text-sm">{stat.value}</p>
              <p className="text-xs text-stone-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {status !== 'completed' ? (
          <Link to="/donate" className="btn-primary w-full text-center text-sm py-2.5 block">
            Support This Campaign
          </Link>
        ) : (
          <div className="bg-green-50 border border-green-100 rounded-2xl py-3 text-center text-green-700 text-sm font-bold">
            Successfully Completed
          </div>
        )}
      </div>
    </div>
  )
}

export default function CampaignsPage() {
  const active = campaigns.filter((item) => item.status === 'active')
  const upcoming = campaigns.filter((item) => item.status === 'upcoming')
  const completed = campaigns.filter((item) => item.status === 'completed')

  return (
    <div className="min-h-screen pt-20 bg-amber-50/60">
      <div className="relative overflow-hidden bg-stone-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1720] via-[#17212b] to-[#2a1a12]" />
        <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-orange-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[340px] h-[340px] bg-amber-400/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-orange-300 font-bold text-sm uppercase tracking-[0.2em] mb-3">Active Drives</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Campaigns
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Every campaign has a specific goal, timeline, and beneficiary list. Pick one that resonates with you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {active.length > 0 && (
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft" />
              Active Campaigns
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {active.map((item) => <CampaignCard key={item.id} {...item} />)}
            </div>
          </div>
        )}
        {upcoming.length > 0 && (
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Upcoming Campaigns</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((item) => <CampaignCard key={item.id} {...item} />)}
            </div>
          </div>
        )}
        {completed.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Completed Campaigns</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completed.map((item) => <CampaignCard key={item.id} {...item} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
