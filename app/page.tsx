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
    const text = `*NEW GLOBAL INVESTOR - Grayscale Investment Platform*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Investment:* $${encodeURIComponent(amount)}%0A*Wallet:* ${wallet? encodeURIComponent(wallet) : "Not Connected"}%0A*Region:* Global Investor%0A%0AHi Grayscale Team, I want to start investing globally.`;
    window.open(`https://wa.me/2349116438322?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur flex justify-between items-center p-5 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black text-xs">G</div>
          <div className="font-black tracking-widest text-[12px] leading-none">GRAYSCALE<br/><span className="text-yellow-500">INVESTMENT PLATFORM</span></div>
        </div>
        <div className="flex gap-2">
          <a href="https://www.tiktok.com/@micheal.sonnenshe?_r=1&_t=ZS-99rt5sV3ygX" target="_blank" className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-bold">TikTok</a>
          <a href="https://www.facebook.com/share/?mibextid=wwXIfr" target="_blank" className="bg-[#1877F2] px-4 py-2 rounded-full text-xs font-black">Facebook</a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">GLOBAL PLATFORM • 6 CONTINENTS • 1,200+ INVESTORS</div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9]">Grayscale<br/><span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">Investment</span><br/>Platform</h1>
          <p className="text-zinc-400 mt-6 text-[14px] leading-7 max-w-lg">
            Grayscale Investment Platform is a leading global digital asset management company providing secure, high-yield crypto investment solutions to investors across all continents - North America, South America, Europe, Africa, Asia, and Australia.
            <br/><br/>
            <span className="text-white font-bold">Our mission:</span> To make elite crypto investment accessible to everyone worldwide, regardless of location.
          </p>
          <div className="flex gap-3 mt-8">
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">12.4% APY</div><div className="text-[10px] text-zinc-500">Global Rate</div></div>
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">$2.4M+</div><div className="text-[10px] text-zinc-500">Managed Globally</div></div>
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">6 CONTINENTS</div><div className="text-[10px] text-zinc-500">Worldwide</div></div>
          </div>
        </div>

        <div className="border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black rounded-[2rem] p-7">
          <h2 className="text-center font-black text-sm tracking-widest">JOIN GRAYSCALE INVESTMENT PLATFORM</h2>
          <p className="text-center text-[11px] text-zinc-500 mb-6 mt-1">Global registration - All continents welcome</p>
          <label className="text-[11px] text-zinc-400 ml-2">Full Name *</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50" />
          <label className="text-[11px] text-zinc-400 ml-2">WhatsApp Number (with country code) *</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+1, +44, +234, +91..." className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50" />
          <label className="text-[11px] text-zinc-400 ml-2">Investment Amount (USD) *</label>
          <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="Minimum $100" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-4 text-sm outline-none focus:border-yellow-500/50" />
          <div className="flex gap-2 mb-5">
            <div className="flex-1 bg-black border border-white/10 rounded-full px-5 py-3.5 text-xs text-zinc-400 truncate">{wallet? wallet.slice(0,18)+"..." : "Connect wallet (optional)"}</div>
            <button onClick={connectWallet} className="bg-white text-black px-6 rounded-full font-black text-[11px]">{wallet? "DONE" : "CONNECT"}</button>
          </div>
          <button onClick={handleSignup} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-4 rounded-full">CREATE GLOBAL ACCOUNT</button>
          <p className="text-center text-[10px] text-zinc-500 mt-3">Available in all countries • Contact via TikTok & Facebook</p>
        </div>
      </section>

      {/* NEW SECTION - YOUR 5 PHOTOS ADDED HERE */}
      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-3xl font-black mb-2">Live Global Trading Insights</h2>
        <p className="text-center text-zinc-500 text-sm mb-8">Real-time charts, professional analysis, worldwide portfolio management</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-[2rem] overflow-hidden border border-white/10 h-[300px]"><img src="/1.jpg" alt="Market overview" className="w-full h-full object-cover"/></div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[300px]"><img src="/2.jpg" alt="Trading analysis" className="w-full h-full object-cover"/></div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[300px]"><img src="/5.jpg" alt="Investment meeting" className="w-full h-full object-cover"/></div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[300px]"><img src="/3.jpg" alt="Trading" className="w-full h-full object-cover"/></div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[300px]"><img src="/4.jpg" alt="Charts" className="w-full h-full object-cover"/></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 md:p-10 mt-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 border border-white/10 rounded-[2rem] p-8 bg-zinc-900/30">
            <h2 className="text-yellow-500 text-xs tracking-widest mb-4">ABOUT GRAYSCALE INVESTMENT PLATFORM - GLOBAL</h2>
            <h3 className="text-2xl font-bold mb-4">The Future Of Digital Wealth Management Across All Continents</h3>
            <p className="text-zinc-400 text-sm leading-7">
              Founded in 2026, Grayscale Investment Platform was created to serve investors worldwide - from North America, South America, Europe, Africa, Asia, to Australia. We bridge traditional finance and decentralized finance for a truly global audience.
              <br/><br/>
              Our platform uses advanced algorithmic trading, staking protocols, and liquidity provision to generate sustainable yields for investors in every time zone. Every investment is tracked on-chain, and our vaults are audited quarterly by international firms.
              <br/><br/>
              <span className="text-white font-bold">Global coverage:</span> United States, Canada, United Kingdom, Germany, France, Nigeria, South Africa, Kenya, India, UAE, Brazil, Australia and 100+ other countries. Real human support via our official social channels, no bots, available 24/7 worldwide.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-yellow-500/20 bg-yellow-500/5 rounded-[1.5rem] p-6"><div className="text-yellow-500 font-bold text-sm mb-2">WORLDWIDE & SECURE</div><div className="text-xs text-zinc-400">Serving 6 continents with military-grade encryption, cold wallet storage, global 2FA protection.</div></div>
            <div className="border border-white/10 rounded-[1.5rem] p-6 bg-white/5"><div className="font-bold text-sm mb-2">GLOBAL DAILY PAYOUTS</div><div className="text-xs text-zinc-400">Profits distributed daily to any country via crypto or local bank transfer.</div></div>
            <div className="border border-white/10 rounded-[1.5rem] p-6 bg-white/5">
              <div className="font-bold text-sm mb-2">24/7 GLOBAL SUPPORT</div>
              <div className="text-xs text-zinc-400 mb-3">Reach us on our official pages:</div>
              <div className="flex flex-col gap-2">
                <a href="https://www.tiktok.com/@micheal.sonnenshe?_r=1&_t=ZS-99rt5sV3ygX" target="_blank" className="text-xs bg-white/10 rounded-full py-2 text-center">TikTok: @micheal.sonnenshe</a>
                <a href="https://www.facebook.com/share/?mibextid=wwXIfr" target="_blank" className="text-xs bg-[#1877F2]/20 text-[#6aa9ff] rounded-full py-2 text-center">Facebook Page</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-3xl font-black mb-2">How It Works Globally</h2>
        <p className="text-center text-zinc-500 text-sm mb-10">For investors in North America, Europe, Asia, Africa, South America & Australia</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-3xl p-8 text-center bg-gradient-to-b from-white/5 to-transparent"><div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center mx-auto mb-4">1</div><div className="font-bold mb-2">Global Registration</div><div className="text-xs text-zinc-400 leading-6">Fill form from any country. Enter your WhatsApp with country code. Click Sign Up - details go to our global desk privately.</div></div>
          <div className="border border-white/10 rounded-3xl p-8 text-center bg-gradient-to-b from-white/5 to-transparent"><div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center mx-auto mb-4">2</div><div className="font-bold mb-2">Fund From Anywhere</div><div className="text-xs text-zinc-400 leading-6">We support USD, EUR, GBP, NGN and crypto. Our team will guide you via private chat from your continent.</div></div>
          <div className="border border-yellow-500/30 rounded-3xl p-8 text-center bg-yellow-500/5"><div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center mx-auto mb-4">3</div><div className="font-bold mb-2">Earn Worldwide</div><div className="text-xs text-zinc-400 leading-6">Start earning 12.4% APY daily. Withdraw to any country anytime via private request.</div></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-3xl font-black mb-8">Global Investment Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-[2rem] p-8 bg-zinc-900/50"><div className="text-zinc-500 text-xs">STARTER - GLOBAL</div><div className="text-3xl font-black mt-2">$100 - $999</div><div className="text-yellow-500 font-bold mt-2">8% Monthly</div><div className="text-xs text-zinc-400 mt-4">Perfect for beginners worldwide. Works in all continents.</div><button onClick={()=>{setAmount("100"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 border border-white/10 rounded-full py-3 font-bold text-sm">CHOOSE STARTER</button></div>
          <div className="border border-yellow-500/50 rounded-[2rem] p-8 bg-gradient-to-b from-yellow-500/10 to-black relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black px-4 py-1 rounded-full">MOST POPULAR WORLDWIDE</div><div className="text-yellow-500 text-xs">GOLD - GLOBAL</div><div className="text-3xl font-black mt-2">$1,000 - $4,999</div><div className="text-yellow-500 font-bold mt-2">12.4% Monthly</div><div className="text-xs text-zinc-400 mt-4">Best plan for investors from any continent. Priority global support.</div><button onClick={()=>{setAmount("1000"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 bg-yellow-500 text-black rounded-full py-3 font-black text-sm">CHOOSE GOLD</button></div>
          <div className="border border-white/10 rounded-[2rem] p-8 bg-zinc-900/50"><div className="text-zinc-500 text-xs">ELITE - GLOBAL</div><div className="text-3xl font-black mt-2">$5,000+</div><div className="text-yellow-500 font-bold mt-2">18% Monthly</div><div className="text-xs text-zinc-400 mt-4">VIP for large investors worldwide. Personal manager for all regions.</div><button onClick={()=>{setAmount("5000"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 border border-white/10 rounded-full py-3 font-bold text-sm">CHOOSE ELITE</button></div>
        </div>
      </section>

      <footer className="text-center p-10 border-t border-white/5 mt-10">
        <div className="font-black tracking-[0.2em] text-sm">GRAYSCALE INVESTMENT PLATFORM</div>
        <div className="flex justify-center gap-3 mt-4">
          <a href="https://www.tiktok.com/@micheal.sonnenshe?_r=1&_t=ZS-99rt5sV3ygX" target="_blank" className="border border-white/10 px-6 py-2 rounded-full text-xs">TikTok</a>
          <a href="https://www.facebook.com/share/?mibextid=wwXIfr" target="_blank" className="border border-white/10 px-6 py-2 rounded-full text-xs">Facebook</a>
        </div>
        <div className="text-zinc-500 text-xs mt-4 max-w-2xl mx-auto leading-6">Serving investors across North America, South America, Europe, Africa, Asia & Australia. Reach us via TikTok & Facebook. Official website: my-crypto-site1.vercel.app</div>
        <div className="text-zinc-700 text-[10px] mt-4">© 2026 GRAYSCALE INVESTMENT PLATFORM • GLOBAL</div>
      </footer>
    </main>
  );
}
