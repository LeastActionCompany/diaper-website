import { useState } from 'react'
import { Heart, Shield, CheckCircle, CreditCard, Smartphone, Building2, ArrowRight, Lock } from 'lucide-react'

const amounts = [250, 500, 1000, 2500, 5000, 10000]
const frequencies = ['One-Time', 'Monthly']

export default function DonatePage() {
  const [amount, setAmount] = useState(500)
  const [customAmount, setCustomAmount] = useState('')
  const [frequency, setFrequency] = useState('One-Time')
  const [paymentMethod, setPaymentMethod] = useState('razorpay')
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', phone: '', pan: '', message: '', anonymous: false })

  const finalAmount = customAmount ? parseInt(customAmount) : amount

  const handleNext = () => {
    if (step === 1 && finalAmount >= 10) setStep(2)
    else if (step === 2 && form.name && form.email) setStep(3)
  }

  const handleDonate = () => {
    alert(`Thank you ${form.name}! Your donation of â‚¹${finalAmount.toLocaleString('en-IN')} is being processed. 80G receipt will be emailed to ${form.email}.`)
    setStep(1)
  }

  return (
    <div className="min-h-screen pt-20 bg-amber-50/60">
      <div className="relative overflow-hidden bg-stone-900 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1720] via-[#17212b] to-[#2a1a12]" />
        <div className="absolute top-0 left-0 w-[380px] h-[380px] bg-orange-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[340px] h-[340px] bg-amber-400/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full mb-5 border border-white/20">
            <Shield className="w-4 h-4" /> 80G Tax Exemption â€¢ Secure Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Make a Donation
          </h1>
          <p className="text-white/75 text-lg">â‚¹250 = 1 month of diapers for one child in need.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-center mb-12">
          {['Choose Amount', 'Your Details', 'Pay & Confirm'].map((label, idx) => (
            <div key={label} className="flex items-center">
              <div className={`flex items-center gap-2 ${step > idx + 1 ? 'text-success-600' : step === idx + 1 ? 'text-orange-600' : 'text-stone-300'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  step > idx + 1 ? 'bg-success-500 border-success-500 text-white' :
                  step === idx + 1 ? 'border-orange-500 text-orange-600' : 'border-orange-100 text-stone-300'
                }`}>
                  {step > idx + 1 ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                </div>
                <span className="text-sm font-semibold hidden sm:block">{label}</span>
              </div>
              {idx < 2 && <div className={`w-12 sm:w-24 h-0.5 mx-2 rounded-full ${step > idx + 1 ? 'bg-success-400' : 'bg-orange-100'}`} />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Choose Amount</h2>
                <p className="text-stone-500 mb-6">Select a preset or enter a custom amount</p>

                <div className="flex gap-3 mb-6">
                  {frequencies.map((item) => (
                    <button key={item} onClick={() => setFrequency(item)}
                      className={`flex-1 py-3 rounded-2xl font-semibold text-sm border-2 transition-all ${
                        frequency === item ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-orange-100 text-stone-500 hover:border-orange-200'
                      }`}>
                      {item}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {amounts.map((value) => (
                    <button key={value} onClick={() => { setAmount(value); setCustomAmount('') }}
                      className={`py-4 rounded-2xl font-bold text-sm border-2 transition-all hover:-translate-y-0.5 ${
                        amount === value && !customAmount ? 'border-orange-500 bg-orange-500 text-white shadow-blue-md' : 'border-orange-100 text-stone-800 hover:border-orange-300'
                      }`}>
                      â‚¹{value.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                <div className="relative mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 font-bold">â‚¹</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(0) }}
                    className="input-field pl-8"
                    min="10"
                  />
                </div>

                {finalAmount >= 250 && (
                  <div className="bg-success-50 border border-success-200 rounded-2xl p-4 mb-6">
                    <p className="text-success-700 text-sm font-semibold">
                      âœ“ â‚¹{finalAmount.toLocaleString('en-IN')} provides approximately {Math.floor(finalAmount / 250)} month(s) of diaper supply for {Math.ceil(finalAmount / 500)} child(ren).
                    </p>
                  </div>
                )}

                <button onClick={handleNext} disabled={finalAmount < 10}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  Continue to Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Your Details</h2>
                <p className="text-stone-500 mb-6">For your 80G tax exemption certificate</p>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-2">Full Name *</label>
                      <input type="text" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                        className="input-field" placeholder="As per PAN card" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-2">Email *</label>
                      <input type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                        className="input-field" placeholder="receipt@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-2">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                        className="input-field" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-2">PAN Number <span className="text-stone-400 font-normal">(for 80G)</span></label>
                      <input type="text" value={form.pan} onChange={(e) => setForm((prev) => ({ ...prev, pan: e.target.value.toUpperCase() }))}
                        className="input-field" placeholder="ABCDE1234F" maxLength={10} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">Message <span className="text-stone-400 font-normal">(optional)</span></label>
                    <textarea value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                      className="input-field resize-none" rows={3} placeholder="A message for the beneficiary..." />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.anonymous} onChange={(e) => setForm((prev) => ({ ...prev, anonymous: e.target.checked }))}
                      className="w-4 h-4 rounded text-orange-600" />
                    <span className="text-sm text-stone-600">Donate anonymously (name won't be displayed publicly)</span>
                  </label>
                </div>

                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
                  <button onClick={handleNext} disabled={!form.name || !form.email}
                    className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    Review & Pay <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Payment</h2>
                <p className="text-stone-500 mb-6">Choose your preferred payment method</p>

                <div className="space-y-3 mb-6">
                  {[
                    { id: 'razorpay', label: 'Razorpay', sub: 'UPI, Cards, Net Banking', icon: CreditCard },
                    { id: 'upi', label: 'UPI Direct', sub: 'GPay, PhonePe, Paytm', icon: Smartphone },
                    { id: 'bank', label: 'Bank Transfer / NEFT', sub: 'HDFC, SBI, etc.', icon: Building2 },
                  ].map((pm) => (
                    <button key={pm.id} onClick={() => setPaymentMethod(pm.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                        paymentMethod === pm.id ? 'border-orange-500 bg-orange-50' : 'border-orange-100 hover:border-orange-200'
                      }`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === pm.id ? 'bg-orange-500 text-white' : 'bg-orange-50 text-stone-500'}`}>
                        <pm.icon className="w-5 h-5" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-semibold text-dark-900 text-sm">{pm.label}</p>
                        <p className="text-xs text-stone-500">{pm.sub}</p>
                      </div>
                      {paymentMethod === pm.id && <CheckCircle className="w-5 h-5 text-orange-600" />}
                    </button>
                  ))}
                </div>

                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-500">Donation Amount</span>
                    <span className="font-semibold">â‚¹{finalAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-500">Type</span>
                    <span className="font-semibold">{frequency}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-stone-500">Payment Processing</span>
                    <span className="font-semibold text-success-600">Free (0%)</span>
                  </div>
                  <div className="border-t border-orange-100 pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-orange-700 text-lg">â‚¹{finalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-400 mb-6">
                  <Lock className="w-4 h-4" />
                  <span>Secured by 256-bit SSL encryption. Your payment is 100% safe.</span>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="btn-secondary">Back</button>
                  <button onClick={handleDonate} className="btn-primary flex-1 flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 fill-white" />
                    Donate â‚¹{finalAmount.toLocaleString('en-IN')}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="card p-6">
              <h3 className="font-bold text-dark-900 mb-4">Your Impact</h3>
              <div className="space-y-3">
                {[
                  { amount: 'â‚¹250', impact: '1 month diaper supply for 1 child' },
                  { amount: 'â‚¹500', impact: '2 months for 1 elderly person' },
                  { amount: 'â‚¹1,000', impact: '4 months for a special-needs child' },
                  { amount: 'â‚¹5,000', impact: 'Full monthly supply for 10 families' },
                ].map((item) => (
                  <div key={item.amount} className="flex gap-3 items-start">
                    <span className="font-bold text-orange-600 text-sm whitespace-nowrap min-w-[50px]">{item.amount}</span>
                    <span className="text-sm text-stone-500">{item.impact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-dark-900 mb-4">Why Give to Us?</h3>
              <div className="space-y-3">
                {[
                  { icon: CheckCircle, text: '80G Tax Exemption' },
                  { icon: Shield, text: '100% Verified Beneficiaries' },
                  { icon: Lock, text: 'Secure Payments' },
                  { icon: Heart, text: 'Monthly Impact Reports' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-success-500 flex-shrink-0" />
                    <span className="text-sm text-stone-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 bg-orange-50 border border-orange-100">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">DARPAN / FCRA Registered</p>
              <p className="text-sm text-stone-600">Guardian Diaper Foundation is a registered NGO with full audit trail and FCRA compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
