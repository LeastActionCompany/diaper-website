// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Menu, X, Heart } from 'lucide-react'

// const navLinks = [
//   { label: 'Impact', href: '#impact' },
//   { label: 'How It Works', href: '#how-it-works' },
//   { label: 'Beneficiaries', href: '#beneficiaries' },
//   { label: 'Campaigns', href: '#campaigns' },
//   { label: 'Transparency', href: '#transparency' },
//   { label: 'Contact', href: '#contact' },
// ]

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       scrolled ? 'glassmorphism shadow-lg py-3' : 'bg-transparent py-5'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <nav className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="w-10 h-10 bg-primary-600 rounded-2xl flex items-center justify-center shadow-blue-sm group-hover:shadow-blue-md transition-shadow">
//               <Heart className="w-5 h-5 text-white fill-white" />
//             </div>
//             <div>
//               <span className="block font-bold text-xl text-dark-900 leading-none" style={{fontFamily:"'Playfair Display',serif"}}>
//                 Guardian
//               </span>
//               <span className="block text-xs font-semibold text-primary-600 tracking-widest uppercase leading-none">
//                 Diaper
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map(link => (
//               <a key={link.href} href={link.href} className="nav-link font-semibold text-sm">
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="hidden lg:flex items-center gap-3">
//             <a href="#donate" className="btn-primary flex items-center gap-2 py-2.5 px-6 text-sm">
//               <Heart className="w-4 h-4 fill-white" />
//               Support Now
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden p-2 rounded-xl text-dark-900 hover:bg-primary-50 transition-colors"
//           >
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="lg:hidden absolute left-0 right-0 top-full mt-2 mx-4 bg-white rounded-3xl shadow-card-hover p-6 border border-slate-100">
//             <div className="flex flex-col gap-3">
//               {navLinks.map(link => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors text-slate-600 hover:bg-slate-50"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//               <a
//                 href="#donate"
//                 onClick={() => setMenuOpen(false)}
//                 className="btn-primary text-center text-sm mt-2"
//               >
//                 <Heart className="inline w-4 h-4 mr-2 fill-white" />
//                 Support Now
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }


import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Heart, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Beneficiaries', to: '/beneficiaries' },
  { label: 'Campaigns', to: '/campaigns' },
  { label: 'Transparency', to: '/transparency' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── NAVBAR ── */}
      {/* <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-amber-50/95 backdrop-blur-xl border-b border-orange-100 shadow-sm'
              : 'bg-black/90 backdrop-blur-md'
        }`}
      > */}
      <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-amber-50/95 backdrop-blur-xl border-b border-orange-100 shadow-sm'
      : 'bg-gradient-to-r from-black/95 via-stone-900/95 to-black/95 backdrop-blur-md border-b border-white/10'
  }`}
>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[79px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-md shadow-orange-300/40 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="leading-none">
              <p
                className={`font-bold text-xl leading-none tracking-tight transition-colors duration-300 ${scrolled ? 'text-stone-800' : 'text-white'}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Guardian
              </p>
              <p className={`text-[0.6rem] font-bold tracking-[0.15em] uppercase mt-0.5 transition-colors duration-300 ${scrolled ? 'text-orange-500' : 'text-orange-300'}`}>
                Diaper · NGO
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  scrolled
                    ? isActive
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-stone-600 hover:text-orange-600 hover:bg-orange-50'
                    : isActive
                      ? 'text-white bg-white/12'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                scrolled
                  ? 'border-stone-200 text-stone-600 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50'
                  : 'border-white/25 text-white/80 hover:border-white/60 hover:text-white'
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/donate"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-bold shadow-md shadow-orange-400/30 hover:shadow-orange-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              Donate Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden p-2.5 rounded-xl border transition-all duration-200 ${
              scrolled
                ? 'border-stone-200 text-stone-600 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50'
                : 'border-white/25 text-white hover:bg-white/10'
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── BACKDROP ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-stone-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* ── SLIDE-IN DRAWER ── */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[300px] bg-amber-50 shadow-2xl flex flex-col transition-transform duration-500 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-orange-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-md shadow-orange-300/30">
              <Heart className="w-4 h-4 fill-white text-white" />
            </div>
            <div className="leading-none">
              <p className="font-bold text-stone-800 text-base leading-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Guardian</p>
              <p className="text-[0.58rem] font-bold tracking-[0.14em] uppercase text-orange-500 mt-0.5">Diaper · NGO</p>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-stone-200 text-stone-500 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Badge */}
        <div className="px-6 pt-4">
          <span className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Registered NGO · 80G Exempt
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-0.5 px-4 pt-4 flex-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `flex items-center justify-between px-4 py-3.5 rounded-xl font-medium group text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-stone-700 hover:bg-orange-100 hover:text-orange-700'
              }`}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 text-orange-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </NavLink>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="px-6 pb-10 pt-5 border-t border-orange-100">
          <Link
            to="/donate"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold text-sm shadow-lg shadow-orange-300/40 hover:shadow-orange-400/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Heart className="w-4 h-4 fill-white" />
            Donate Now
          </Link>
          <p className="text-center text-[0.68rem] text-stone-400 mt-3 font-medium">Tax deductible · 80G Certificate issued</p>
        </div>
      </aside>
    </>
  )
}
