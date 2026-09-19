export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center">
        <div className="border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black p-10 rounded-[2rem] max-w-3xl">
          <div className="border border-yellow-500/30 text-yellow-500 text-xs tracking-widest px-4 py-1 rounded-full mb-6 inline-block">EST 2026 ELITE PROTOCOL</div>
          <h1 className="text-6xl font-black bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-700 bg-clip-text text-transparent mb-6">GRAYSCALE V2</h1>
          <p className="text-zinc-400 text-xl mb-10">Luxury Crypto Protocol - Elite Yield Infrastructure</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black px-10 py-4 rounded-full">ENTER PROTOCOL</button>
            <button className="border border-white/20 px-10 py-4 rounded-full font-bold">WHITEPAPER</button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="border border-white/10 p-5 rounded-2xl bg-white/5"><div className="text-yellow-400 font-bold text-xl">12.4%</div><div className="text-zinc-500 text-xs mt-1">APY</div></div>
            <div className="border border-white/10 p-5 rounded-2xl bg-white/5"><div className="text-yellow-400 font-bold text-xl">2.4M</div><div className="text-zinc-500 text-xs mt-1">TVL</div></div>
            <div className="border border-white/10 p-5 rounded-2xl bg-white/5"><div className="text-yellow-400 font-bold text-xl">AUDITED</div><div className="text-zinc-500 text-xs mt-1">SECURE</div></div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 border border-yellow-500/10 p-8 rounded-3xl bg-zinc-900/50">
          <h2 className="text-yellow-500 text-xs mb-4">TOKENOMICS</h2>
          <div className="space-y-4">
            <div className="flex justify-between"><span className="text-zinc-400">Total Supply</span><span className="font-bold">100M GRAY</span></div>
            <div className="w-full bg-white/10 h-2 rounded-full"><div className="bg-yellow-500 h-2 w-[70%] rounded-full"></div></div>
          </div>
        </div>
        <div className="border border-white/10 p-8 rounded-3xl bg-yellow-500/10">
          <h3 className="font-bold mb-2">Start Earning Now</h3>
          <p className="text-zinc-400 text-sm mb-6">Connect wallet to access elite vaults.</p>
          <button className="w-full bg-white text-black font-bold py-3 rounded-full">CONNECT WALLET</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto p-8 mt-8">
        <h2 className="text-center text-3xl font-bold mb-10">ROADMAP</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-yellow-500/20 p-6 rounded-2xl"><div className="text-yellow-500 text-sm mb-2">Q1 2026</div><div className="font-bold">Protocol Launch</div></div>
          <div className="border border-white/10 p-6 rounded-2xl"><div className="text-zinc-400 text-sm mb-2">Q2 2026</div><div className="font-bold">Elite Vaults</div></div>
          <div className="border border-white/10 p-6 rounded-2xl"><div className="text-zinc-400 text-sm mb-2">Q3 2026</div><div className="font-bold">DAO Expansion</div></div>
        </div>
      </section>
      <footer className="text-center p-12 text-zinc-600 text-xs border-t border-white/5 mt-12">2026 GRAYSCALE V2</footer>
    </main>
  )
}
