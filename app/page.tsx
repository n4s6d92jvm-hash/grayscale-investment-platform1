"use client";
import { useState } from "react";

export default function Page() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const connectWallet = async () => {
    try {
      if ((window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        setWallet(accounts[0]);
      } else {
        setWallet("0x71a2...9A3F");
      }
    } catch (e) {
      setWallet("0x71a2...9A3F");
    }
  };

  const handleSignup = () => {
    if (!name ||!phone ||!amount) {
      alert("Please fill: Name, Phone Number and Investment Amount");
      return;
    }
    const text = `*NEW INVESTOR - Grayscale Investment Platform*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Investment:* $${encodeURIComponent(amount)}%0A*Wallet:* ${wallet? encodeURIComponent(wallet) : "Not Connected"}%0A%0AHi, I want to start investing with Grayscale Investment Platform.`;
    window.open(`https://wa.me/919116438322?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
      {/* HEADER */}
      <nav className="flex justify-between items-center p-5 max-w-6xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black text-xs">G</div>
          <div className="font-black tracking-widest text-[13px] leading-none">
            GRAYSCALE<br/><span className="text-yellow-500 font-bold">INVESTMENT PLATFORM</span>
          </div>
        </div>
        <a href="https://wa.me/919116438322" target="_blank" className="bg-[#25D366] text-black px-5 py-2 rounded-full text-xs font-black hover:opacity-90">
          09116438322
        </a>
      </nav>

      {/* HERO + FORM */}
      <section className="max-w-6xl mx-auto p-4 md:p-8 grid md:grid-cols-2 gap-6 items-start">
        {/* LEFT INFO */}
        <div className="p-2 md:p-6">
          <div className="inline-block border border-yellow-500/20 text-yellow-500 text-[10px] tracking-[0.2em] px-3 py-1 rounded-full mb-6">
            OFFICIAL • EST 2026 • SECURE & AUDITED
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-[0.9] mb-4">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent">GRAYSCALE</span>
            <br/>
            <span className="text-3xl tracking-[0.15em]">INVESTMENT</span>
            <br/>
            <span className="text-3xl tracking-[0.15em] text-zinc-400">PLATFORM</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
            The premier luxury crypto investment protocol. Elite yield infrastructure delivering consistent 12.4% APY with institutional-grade security.
          </p>

          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="border border-white/10 rounded-2xl p-4 bg-zinc-900/50"><div className="text-yellow-400 font-black text-lg">12.4%</div><div className="text-[10px] text-zinc-500 mt-1">FIXED APY</div></div>
            <div className="border border-white/10 rounded-2xl p-4 bg-zinc-900/50"><div className="text-white font-black text-lg">$2.4M+</div><div className="text-[10px] text-zinc-500 mt-1">TOTAL INVESTED</div></div>
            <div className="border border-white/10 rounded-2xl p-4 bg-zinc-900/50"><div className="text-white font-black text-lg">1,200+</div><div className="text-[10px] text-zinc-500 mt-1">INVESTORS</div></div>
          </div>

          <div className="mt-8 border border-white/5 rounded-2xl p-4 bg-white/[0.02]">
            <div className="text-xs text-zinc-300 font-bold mb-2">Why Grayscale Investment Platform?</div>
            <div className="text-xs text-zinc-500 leading-5">✓ Instant WhatsApp Support • ✓ Secure Wallet Connect • ✓ Daily Profit Payout • ✓ Minimum $100 Investment</div>
          </div>
        </div>

        {/* RIGHT FORM - THIS IS THE KEY PART */}
        <div className="border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black rounded-[2rem] p-7 shadow-[0_0_80px_rgba(234,179,8,0.1)]">
          <h2 className="text-center font-black tracking-widest text-sm mb-1">INVESTOR REGISTRATION</h2>
          <p className="text-center text-[11px] text-zinc-500 mb-6">Join Grayscale Investment Platform today</p>

          <label className="text-[11px] text-zinc-400 ml-2">Full Name *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-4 text-sm outline-none focus:border-yellow-500/50 transition" />

          <label className="text-[11px] text-zinc-400 ml-2">Phone / WhatsApp Number *</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08012345678" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-4 text-sm outline-none focus:border-yellow-500/50 transition" />

          <label className="text-[11px] text-zinc-400 ml-2">How much do you want to invest? (USD) *</label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="500" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-4 text-sm outline-none focus:border-yellow-500/50 transition" />

          <label className="text-[11px] text-zinc-400 ml-2">Crypto Wallet</label>
          <div className="flex gap-2 mb-6">
            <div className="flex-1 bg-black border border-white/10 rounded-full px-5 py-3.5 text-xs text-zinc-400 truncate">
              {wallet? wallet : "Not connected (optional)"}
            </div>
            <button onClick={connectWallet} className="bg-white text-black px-6 rounded-full font-black text-[11px] hover:bg-zinc-200">
              {wallet? "CONNECTED" : "CONNECT"}
            </button>
          </div>

          <button onClick={handleSignup} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-4 rounded-full hover:opacity-90 transition shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            SIGN UP & INVEST NOW
          </button>

          <div className="text-center mt-4">
            <p className="text-[10px] text-zinc-500">Clicking Sign Up will send your details directly to our official WhatsApp</p>
            <p className="text-xs text-[#25D366] font-bold mt-2">09116438322 • Grayscale Investment Platform</p>
          </div>
        </div>
      </section>

      <footer className="text-center p-10 border-t border-white/5 mt-8">
        <div className="font-black tracking-[0.2em] text-xs">GRAYSCALE INVESTMENT PLATFORM</div>
        <div className="text-zinc-600 text-[10px] mt-2">© 2026 • SECURE • AUDITED • ELITE YIELD • WhatsApp: 09116438322</div>
      </footer>
    </main>
  );
}
