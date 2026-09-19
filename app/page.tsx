export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="border border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-black p-12 rounded-2xl max-w-2xl text-center shadow-2xl">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent mb-6">
          GRAYSCALE V2
        </h1>
        <p className="text-zinc-400 mb-8 text-lg">Luxury Crypto Protocol - Elite Yield</p>
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold px-8 py-4 rounded-full w-full">
          ENTER PROTOCOL
        </button>
        <div className="grid grid-cols-3 gap-4 mt-10 text-sm">
          <div className="border border-white/10 p-4 rounded-xl"><div className="text-yellow-500 font-bold">12.4%</div><div className="text-zinc-500">APY</div></div>
          <div className="border border-white/10 p-4 rounded-xl"><div className="text-yellow-500 font-bold">$2.4M</div><div className="text-zinc-500">TVL</div></div>
          <div className="border border-white/10 p-4 rounded-xl"><div className="text-yellow-500 font-bold">AUDITED</div><div className="text-zinc-500">Secure</div></div>
        </div>
      </div>
    </main>
  )
}
