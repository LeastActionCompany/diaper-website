import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, ArrowRight, ExternalLink, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const navColumns = [
  {
    heading: 'Organisation',
      links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Mission', href: '/about' },
      { label: 'Team & Partners', href: '/about' },
      { label: 'Press & Media', href: '/contact' },
      { label: 'Careers', href: '/contact' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Impact Stories', href: '/' },
      { label: 'Active Campaigns', href: '/campaigns' },
      { label: 'Beneficiaries', href: '/beneficiaries' },
      { label: 'How It Works', href: '/' },
      { label: 'Transparency', href: '/transparency' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Donate Now', href: '/donate' },
      { label: 'Volunteer', href: '/contact' },
      { label: 'Corporate Giving', href: '/contact' },
      { label: 'Monthly Giving', href: '/donate' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Terms of Use', href: '/contact' },
  { label: 'Cookie Policy', href: '/contact' },
  { label: '80G Certificate', href: '/donate' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white relative overflow-hidden">

      {/* ── Subtle background texture ── */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[300px] bg-amber-600/6 rounded-full blur-3xl pointer-events-none" />

      {/* ════════════════════════
          TOP CTA BANNER
      ════════════════════════ */}
      <div className="relative z-10 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.18em] mb-2">Make a Difference Today</p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Every rupee brings dignity <em className="not-italic text-orange-400">home.</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Heart className="w-4 h-4 fill-white" />
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:border-white/50 hover:text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════
          MAIN FOOTER BODY
      ════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* ── Brand Column (spans 2 cols on lg) ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-md shadow-orange-500/30 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105 shrink-0">
                <Heart className="w-5 h-5 fill-white text-white" />
              </div>
              <div className="leading-none">
                <p
                  className="font-bold text-xl text-white leading-none tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Guardian
                </p>
                <p className="text-[0.6rem] font-bold tracking-[0.16em] uppercase text-orange-400 mt-0.5">
                  Diaper · NGO
                </p>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Providing essential hygiene care to children, elders, and families across India — transparently, compassionately, and with dignity.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {['Registered NGO', '80G Exempt', 'FCRA Compliant'].map(badge => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-white/65 text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-400" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Contact mini-list */}
            <div className="flex flex-col gap-3 mt-1">
              {[
                { icon: MapPin, text: '45 Anna Salai, Chennai — 600006' },
                { icon: Phone, text: '+91 44 2345 6789' },
                { icon: Mail, text: 'info@guardiandiaper.org' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-white/50 text-sm">
                  <Icon className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/12 bg-white/5 flex items-center justify-center text-white/50 hover:border-orange-400/50 hover:bg-orange-500/15 hover:text-orange-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {navColumns.map(col => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-sm uppercase tracking-[0.14em]">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/50 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2.5 h-px bg-orange-400 transition-all duration-200 rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════
          NEWSLETTER STRIP
      ════════════════════════ */}
      <div className="relative z-10 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Stay updated with our impact</p>
            <p className="text-white/45 text-xs">Monthly stories, campaign updates, no spam.</p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 sm:w-64 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-orange-400/60 focus:bg-white/10 transition-all duration-200"
            />
            <button
              type="button"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-bold shrink-0 hover:-translate-y-0.5 hover:shadow-md hover:shadow-orange-500/30 transition-all duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ════════════════════════
          BOTTOM BAR
      ════════════════════════ */}
      <div className="relative z-10 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Guardian Diaper Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {legalLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="text-white/35 hover:text-orange-400 text-xs transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
