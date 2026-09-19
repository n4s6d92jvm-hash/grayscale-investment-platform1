"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [amount, setAmount] = useState(500);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [btc, setBtc] = useState(68450.32);
  const WHATSAPP = "https://wa.me/2349116438322?text=";
  useEffect(()=>{ const i=setInterval(()=>setBtc(b=> b + (Math.random()-0.5)*15),3000); return ()=>clearInterval(i); },[]);
  const plans = [
    { name: "STARTER", price: "$100", period: "/month", features: ["Crypto Basics Course", "Weekly Market Analysis", "Portfolio Tracker", "Discord Community"], popular: false, link: "Starter%20$100" },
    { name: "PRO", price: "$500", period: "/3 months", features: ["Everything in Starter", "Daily Research Notes", "1-on-1 Strategy Call", "Risk Management Lab", "Live Q&A"], popular: true, link: "Pro%20$500" },
    { name: "ELITE", price: "$2,000", period: "/year", features: ["Everything in Pro", "Advanced DeFi Course", "Private Mentorship", "Early Research Access"], popular: false, link: "Elite%20$2000" },
  ];
  const reviews = [
    { name: "Michael R.", loc: "Austin, TX", course: "PRO Student", text: "Finally someone who teaches risk first. The position sizing module saved me from blowing my account.", stars: 5 },
    { name: "Sarah Chen", loc: "New York, NY", course: "STARTER Student", text: "Started with zero knowledge. After 3 weeks I can actually read a chart and write my own investment thesis.", stars: 5 },
    { name: "David O.", loc: "Miami, FL", course: "ELITE Student", text: "The DeFi deep dives are worth the Elite price alone. Professional research.", stars: 5 },
  ];
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <div className="bg-[#0a0a0c] border-b border-white/10 py-2 px-6 text-[11px] flex gap-6"><span className="text-gray-500">LIVE:</span><span>BTC ${btc.toFixed(2)}</span><span>ETH $3,421</span><span className="text-gray-600">EDUCATION ONLY</span></div>
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto sticky top-0 bg-[#050507]/90 backdrop-blur z-40 border-b border-white/5">
        <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-black text-xs">G</div><span className="font-black tracking-[0.2em] text-sm">GRAYSCALE RESEARCH</span></div>
        <a href={`${WHATSAPP}Hello`} className="bg-white text-black font-bold px-5 py-2.5 rounded-full text-xs">WhatsApp</a>
      </header>
      <section className="px-6 pt-16 pb-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl md:text-6xl font-black leading-[0.9] mb-5">Learn to Invest in Crypto, <span className="text-gray-500">the Smart Way.</span></h1>
          <p className="text-gray-400 text-[15px] mb-8">We don't promise returns. We teach research, risk management, and long-term strategy.</p>
          <div className="bg-white/[0.04] border border-white/10 rounded-[24px] p-6">
            <div className="flex justify-between mb-2 text-sm"><span className="text-gray-400">Budget</span><span className="font-black">${amount}</span></div>
            <input type="range" min={100} max={5000} step={100} value={amount} onChange={e=>setAmount(Number(e.target.value))} className="w-full accent-white"/>
            <a href={`${WHATSAPP}I%20want%20to%20start%20with%20$${amount}`} className="mt-4 block text-center bg-white text-black font-black py-3.5 rounded-full text-sm">Start with ${amount}</a>
          </div>
        </div>
        <div className="space-y-4">
          {plans.map(p=>(
            <div key={p.name} className={`rounded-[20px] border p-6 ${p.popular? "bg-white text-black" : "bg-white/[0.03] border-white/10"}`}>
              <div className="flex justify-between mb-4"><div><h3 className="font-black text-sm tracking-widest">{p.name}</h3><p className="text-xs opacity-60">{p.price} {p.period}</p></div><p className="text-xl font-black">{p.price}</p></div>
              <ul className="space-y-2 mb-4">{p.features.map(f=> <li key={f} className="text-xs opacity-70">✓ {f}</li>)}</ul>
              <a href={`${WHATSAPP}I%20want%20${p.link}`} className={`block text-center py-3 rounded-full font-bold text-xs ${p.popular? "bg-black text-white" : "bg-white text-black"}`}>Choose {p.name}</a>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-16 max-w-7xl mx-auto bg-white/[0.02] border-y border-white/5">
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {reviews.map(r=>(
            <div key={r.name} className="bg-[#0f0f10] border border-white/10 rounded-2xl p-6">
              <span className="text-yellow-400 text-xs">{"★".repeat(r.stars)}</span>
              <p className="text-sm text-gray-300 my-3">"{r.text}"</p>
              <p className="text-xs font-bold">{r.name} - {r.loc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-white/10 py-8 px-6 text-center text-[10px] text-gray-600">WhatsApp: +234 911 643 8322 • Education only</footer>
    </main>
  );
}
