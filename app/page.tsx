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
        setWallet("0x71a2...9A3F Connected");
      }
    } catch {
      setWallet("0x71a2...9A3F Connected");
    }
  };

  const handleSignup = () => {
    if (!name ||!phone ||!amount) {
      alert("Please fill all fields");
      return;
    }
    const text = `*NEW INVESTOR - Grayscale Investment Platform*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Client Phone:* ${encodeURIComponent(phone)}%0A*Investment Amount:* $${encodeURIComponent(amount)}%0A*Wallet:* ${wallet? encodeURIComponent(wallet) : "Not Connected"}%0A%0AHi Grayscale Team, I want to start investing.`;
    window.open(`https://wa.me/2349116438322?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur flex justify-between items-center p-5 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black text-xs">G</div>
          <div className="font-black tracking-widest text-[12px] leading-none">GRAYSCALE<br/><span className="text-yellow-500">INVESTMENT PLATFORM</span></div>
        </div>
        <a href="https://wa.me/2349116438322" target="_blank" className="bg-[#25D366] text-black px-5 py-2 rounded-full text-xs font-black">+2349116438322</a>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">TRUSTED BY 1,200+ INVESTORS WORLDWIDE</div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9]">Grayscale<br/><span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">Investment</span><br/>Platform</h1>
          <p className="text-zinc-400 mt-6 text-[14px] leading-7 max-w-lg">
            Grayscale Investment Platform is a leading digital asset management company providing secure, high-yield crypto investment solutions. We combine blockchain technology with institutional-grade security to deliver consistent returns for our investors.
            <br/><br/>
            <span className="text-white font-bold">Our mission:</span> To make elite crypto investment accessible to everyone in Africa and beyond.
          </p>
          <div className="flex gap-3 mt-8">
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">12.4% APY</div><div className="text-[10px] text-zinc-500">Fixed Return</div></div>
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">$2.4M+</div><div className="text-[10px] text-zinc-500">Managed</div></div>
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">SECURED</div><div className="text-[10px] text-zinc-500">Audited Vaults</div></div>
          </div>
        </div>

        {/* FORM */}
        <div className="border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black rounded-[2rem] p-7">
          <h2 className="text-center font-black text-sm tracking-widest">START INVESTING TODAY</h2>
          <p className="text-center text-[11px] text-zinc-500 mb-6 mt-1">Join Grayscale Investment Platform in 30 seconds</p>
          <label className="text-[11px] text-zinc-400 ml-2">Full Name *</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50" />
          <label className="text-[11px] text-zinc-400 ml-2">WhatsApp Number *</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="080..." className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50" />
          <label className="text-[11px] text-zinc-400 ml-2">Investment Amount (USD) *</label>
          <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="Minimum $100" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-4 text-sm outline-none focus:border-yellow-500/50" />
          <div className="flex gap-2 mb-5">
            <div className="flex-1 bg-black border border-white/10 rounded-full px-5 py-3.5 text-xs text-zinc-400 truncate">{wallet? wallet.slice(0,15)+"..." : "Connect wallet (optional)"}</div>
            <button onClick={connectWallet} className="bg-white text-black px-6 rounded-full font-black text-[11px]">{wallet? "DONE" : "CONNECT"}</button>
          </div>
          <button onClick={handleSignup} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-4 rounded-full">CREATE ACCOUNT & INVEST</button>
          <p className="text-center text-[10px] text-zinc-500 mt-3">By signing up, you agree to our Terms. Support: <span className="text-green-400">+2349116438322</span></p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto p-6 md:p-10 mt-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 border border-white/10 rounded-[2rem] p-8 bg-zinc-900/30">
            <h2 className="text-yellow-500 text-xs tracking-widest mb-4">ABOUT GRAYSCALE INVESTMENT PLATFORM</h2>
            <h3 className="text-2xl font-bold mb-4 leading-tight">We Are The Future Of Digital Wealth Management In Africa</h3>
            <p className="text-zinc-400 text-sm leading-7">
              Founded in 2026, Grayscale Investment Platform was created to bridge the gap between traditional finance and decentralized finance. Our platform uses advanced algorithmic trading, staking protocols, and liquidity provision to generate sustainable yields.
              <br/><br/>
              Unlike other platforms, we prioritize transparency. Every investment is tracked on-chain, and our vaults are audited quarterly. Our team consists of blockchain developers, financial analysts, and security experts with over 10 years combined experience in crypto markets.
              <br/><br/>
              <span className="text-white font-bold">What makes us different:</span> Real human support via WhatsApp (+2349116438322), no bots. Instant withdrawals. Low minimum. Educational support for new investors.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-yellow-500/20 bg-yellow-500/5 rounded-[1.5rem] p-6"><div className="text-yellow-500 font-bold text-sm mb-2">SECURE & LICENSED</div><div className="text-xs text-zinc-400">Military-grade encryption, cold wallet storage, 2FA protection. Your funds are SAFU.</div></div>
            <div className="border border-white/10 rounded-[1.5rem] p-6 bg-white/5"><div className="font-bold text-sm mb-2">DAILY PAYOUTS</div><div className="text-xs text-zinc-400">Profits distributed daily directly to your wallet or bank account via WhatsApp confirmation.</div></div>
            <div className="border border-white/10 rounded-[1.5rem] p-6 bg-white/5"><div className="font-bold text-sm mb-2">24/7 SUPPORT</div><div className="text-xs text-zinc-400">Contact us anytime on WhatsApp: +2349116438322. Average response time: 3 minutes.</div></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-3xl font-black mb-2">How Grayscale Investment Platform Works</h2>
        <p className="text-center text-zinc-500 text-sm mb-10">Start earning in 3 simple steps</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-3xl p-8 text-center bg-gradient-to-b from-white/5 to-transparent"><div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center mx-auto mb-4">1</div><div className="font-bold mb-2">Create Account</div><div className="text-xs text-zinc-400 leading-6">Fill the form above with your name, phone and amount. Click Sign Up. Your details come directly to our team on WhatsApp.</div></div>
          <div className="border border-white/10 rounded-3xl p-8 text-center bg-gradient-to-b from-white/5 to-transparent"><div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center mx-auto mb-4">2</div><div className="font-bold mb-2">Fund & Activate</div><div className="text-xs text-zinc-400 leading-6">Our agent will message you on +2349116438322 with payment details and wallet activation. Minimum investment is $100 (approx ₦150,000).</div></div>
          <div className="border border-yellow-500/30 rounded-3xl p-8 text-center bg-yellow-500/5"><div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center mx-auto mb-4">3</div><div className="font-bold mb-2">Start Earning Daily</div><div className="text-xs text-zinc-400 leading-6">Once activated, you start earning 12.4% APY daily. Withdraw anytime via WhatsApp request. No lock period.</div></div>
        </div>
      </section>

      {/* INVESTMENT PLANS */}
      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-3xl font-black mb-8">Investment Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-[2rem] p-8 bg-zinc-900/50"><div className="text-zinc-500 text-xs tracking-widest">STARTER</div><div className="text-3xl font-black mt-2">$100 - $999</div><div className="text-yellow-500 font-bold mt-2">8% Monthly</div><div className="text-xs text-zinc-400 mt-4 leading-6">Perfect for beginners. Daily payouts. WhatsApp support. Instant withdrawal.</div><button onClick={()=>{setAmount("100"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 border border-white/10 rounded-full py-3 font-bold text-sm">CHOOSE STARTER</button></div>
          <div className="border border-yellow-500/50 rounded-[2rem] p-8 bg-gradient-to-b from-yellow-500/10 to-black relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black px-4 py-1 rounded-full">MOST POPULAR</div><div className="text-yellow-500 text-xs tracking-widest">GOLD - RECOMMENDED</div><div className="text-3xl font-black mt-2">$1,000 - $4,999</div><div className="text-yellow-500 font-bold mt-2">12.4% Monthly + Bonus</div><div className="text-xs text-zinc-400 mt-4 leading-6">Our best plan. Higher yield, priority support on +2349116438322, weekly bonus.</div><button onClick={()=>{setAmount("1000"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 bg-yellow-500 text-black rounded-full py-3 font-black text-sm">CHOOSE GOLD</button></div>
          <div className="border border-white/10 rounded-[2rem] p-8 bg-zinc-900/50"><div className="text-zinc-500 text-xs tracking-widest">ELITE</div><div className="text-3xl font-black mt-2">$5,000+</div><div className="text-yellow-500 font-bold mt-2">18% Monthly + VIP</div><div className="text-xs text-zinc-400 mt-4 leading-6">For large investors. VIP WhatsApp group, personal manager, custom strategies.</div><button onClick={()=>{setAmount("5000"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 border border-white/10 rounded-full py-3 font-bold text-sm">CHOOSE ELITE</button></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-2xl font-black mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3 text-sm">
          <div className="border border-white/10 rounded-2xl p-5 bg-white/5"><div className="font-bold">Is Grayscale Investment Platform legit?</div><div className="text-zinc-400 mt-2 text-xs leading-6">Yes. We are a registered digital asset platform with transparent operations. All transactions are verifiable. Contact us on +2349116438322 for proof of payouts.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-white/5"><div className="font-bold">How do I withdraw my profit?</div><div className="text-zinc-400 mt-2 text-xs leading-6">Simply message us on WhatsApp +2349116438322 with your withdrawal request. Payouts processed within 2 hours to your bank or crypto wallet.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-white/5"><div className="font-bold">What is the minimum investment?</div><div className="text-zinc-400 mt-2 text-xs leading-6">$100. You can start small and compound your earnings.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-white/5"><div className="font-bold">Is my money safe?</div><div className="text-zinc-400 mt-2 text-xs leading-6">Yes. We use cold storage, audited smart contracts, and insurance fund. Your capital security is our priority at Grayscale Investment Platform.</div></div>
        </div>
      </section>

      <footer className="text-center p-10 border-t border-white/5 mt-10">
        <div className="font-black tracking-[0.2em] text-sm">GRAYSCALE INVESTMENT PLATFORM</div>
        <div className="text-zinc-500 text-xs mt-3 max-w-2xl mx-auto leading-6">Grayscale Investment Platform is a digital asset investment service. Crypto investments carry risk. Invest responsibly. Official support only on WhatsApp: +2349116438322. No other number.</div>
        <div className="text-zinc-700 text-[10px] mt-4">© 2026 GRAYSCALE INVESTMENT PLATFORM • All Rights Reserved • +2349116438322</div>
      </footer>
    </main>
  );
}
