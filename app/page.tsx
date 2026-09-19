export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* NAV */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">MyCryptoSite</h1>
        <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold">Contact Us</a>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Secure Crypto<br/>Investment Solutions
        </h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          We provide education, portfolio guidance and secure crypto management for beginners and professionals.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full font-bold">Get Started</a>
          <a href="https://my-crypto-site1.vercel.app" className="border border-white/20 px-8 py-3 rounded-full">View Site</a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        <div className="bg-[#161616] p-8 rounded-2xl border border-white/10
