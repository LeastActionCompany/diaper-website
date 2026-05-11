import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, CheckCircle, Heart, Package, Users } from 'lucide-react'

const categories = ['All', 'Pediatric', 'Elderly', 'Special Needs', 'Adult', 'Bedridden']

const mockBeneficiaries = [
  { id: 1, name: 'Aarav', age: 10, category: 'special_needs', condition: 'Chronic Heart Condition', story: 'Aarav battles a chronic heart condition requiring high-absorbency diapers every day. Your support keeps him dry and comfortable.', progress: 75, supporters: 18, diaperCount: 240, diaperType: 'Hypoallergenic', partnerNGO: 'Sunshine Orphanage', isVerified: true, monthlyGoal: 600, raised: 420 },
  { id: 2, name: 'Rahul', age: 9, category: 'pediatric', condition: 'Mobility Impairment', story: 'Rahul dreams of going to school every day but his mobility challenges make it difficult without proper supplies.', progress: 60, supporters: 12, diaperCount: 180, diaperType: 'Standard', partnerNGO: 'Hope Rehab Centre', isVerified: true, monthlyGoal: 500, raised: 300 },
  { id: 3, name: 'Kamala Devi', age: 78, category: 'elderly', condition: 'Post-Surgery Recovery', story: 'Kamala lives in Grace Elder Care Home. Monthly diaper supplies ensure her dignity and reduce caretaker burden.', progress: 90, supporters: 24, diaperCount: 300, diaperType: 'Adult Premium', partnerNGO: 'Grace Elder Care', isVerified: true, monthlyGoal: 800, raised: 720 },
  { id: 4, name: 'Karthik', age: 8, category: 'special_needs', condition: 'Cerebral Palsy', story: 'Karthik is a bright child with cerebral palsy. Proper diaper support allows him to attend therapy without interruption.', progress: 50, supporters: 9, diaperCount: 200, diaperType: 'Hypoallergenic', partnerNGO: 'CareBridge Foundation', isVerified: true, monthlyGoal: 550, raised: 275 },
  { id: 5, name: 'Meenakshi', age: 65, category: 'elderly', condition: 'Diabetes & Incontinence', story: 'Meenakshi is a retired school teacher with diabetes-related incontinence. Your donation helps maintain her independence and dignity.', progress: 80, supporters: 20, diaperCount: 280, diaperType: 'Adult Standard', partnerNGO: 'Helping Hands NGO', isVerified: true, monthlyGoal: 700, raised: 560 },
  { id: 6, name: 'Ravi Kumar', age: 45, category: 'adult', condition: 'Spinal Injury', story: 'Ravi suffered a spinal injury in a road accident 3 years ago. Monthly diaper support reduces his family\'s financial burden.', progress: 40, supporters: 7, diaperCount: 220, diaperType: 'Adult Premium', partnerNGO: 'New Life Trust', isVerified: false, monthlyGoal: 600, raised: 240 },
]

export default function BeneficiariesPage() {
  const [selected, setSelected] = useState('All')
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(mockBeneficiaries)

  useEffect(() => {
    let result = mockBeneficiaries
    if (selected !== 'All') {
      result = result.filter((item) => item.category.toLowerCase().includes(selected.toLowerCase().replace(' ', '_')))
    }
    if (search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.condition.toLowerCase().includes(search.toLowerCase())
      )
    }
    setFiltered(result)
  }, [selected, search])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.scroll-animate').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen  pt-20 bg-amber-50/60">
      <div className="relative overflow-hidden bg-stone-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1720] via-[#17212b] to-[#2a1a12]" />
        <div className="absolute top-0 left-0 w-[380px] h-[380px] bg-orange-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[340px] h-[340px] bg-amber-400/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-orange-300 font-bold text-sm uppercase tracking-[0.2em] mb-3">Who We Serve</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Beneficiaries
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every profile here is verified by our team. Choose someone to support and track exactly how your donation helps them.
          </p>
        </div>
      </div>

      <div className="bg-white border-b border-orange-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-10">
          {[
            { icon: Users, value: '452+', label: 'Active Beneficiaries' },
            { icon: CheckCircle, value: '98%', label: 'Profiles Verified' },
            { icon: Package, value: '8,400', label: 'Monthly Diapers' },
            { icon: Heart, value: '12', label: 'Partner NGOs' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-stone-800 text-lg leading-none">{stat.value}</p>
                <p className="text-xs text-stone-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by name or condition..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  selected === cat
                    ? 'bg-orange-500 text-white shadow-blue-sm'
                    : 'bg-white text-stone-600 hover:bg-orange-50 border border-orange-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 scroll-animate">
              <div className="h-48 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-full bg-white/70 flex items-center justify-center text-4xl shadow-inner">
                  {item.category === 'elderly' ? 'ðŸ‘´' : item.age < 12 ? 'ðŸ‘¦' : 'ðŸ§‘'}
                </div>
                {item.isVerified && (
                  <div className="absolute top-3 left-3 badge-verified text-xs">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/80 rounded-xl px-2.5 py-1 text-xs font-bold text-orange-700">
                  â‚¹{item.raised} / â‚¹{item.monthlyGoal}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-800 text-lg mb-0.5">{item.name}</h3>
                <p className="text-sm text-stone-400 mb-1">{item.age} yrs â€¢ {item.category.replace('_', ' ')} â€¢ {item.partnerNGO}</p>
                <p className="text-sm text-stone-500 mb-3 italic text-xs bg-orange-50 border-l-2 border-orange-400 px-3 py-2 rounded-r-xl">{item.condition}</p>
                <p className="text-sm text-stone-600 mb-4 line-clamp-2">{item.story}</p>
                <div className="progress-bar mb-2">
                  <div className="progress-fill" style={{ width: `${item.progress}%` }} />
                </div>
                <div className="flex justify-between text-xs text-stone-500 mb-4">
                  <span className="font-semibold text-orange-600">{item.progress}% funded</span>
                  <span>{item.supporters} guardians supporting</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2.5 text-center">
                    <p className="text-xs text-stone-400 mb-0.5">Monthly Need</p>
                    <p className="font-bold text-sm text-stone-800">{item.diaperCount} units</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-2.5 text-center">
                    <p className="text-xs text-stone-400 mb-0.5">Type</p>
                    <p className="font-bold text-sm text-stone-800">{item.diaperType}</p>
                  </div>
                </div>
                <Link to="/donate" className="btn-primary w-full text-center text-sm py-2.5 block">
                  Become a Guardian
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            <Package className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No beneficiaries found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
