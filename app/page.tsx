"use client";
import { useState } from "react";

export default function Page() {
  const [wallet, setWallet] = useState<string | null>(null);

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        setWallet(accounts[0]);
      } catch (e) { alert("Connection rejected"); }
    } else {
      // If no MetaMask, just show connected mock and open WhatsApp for help
      setWallet("0x71...9A3F");
      alert("Install MetaMask or contact WhatsApp 09116438322 for help");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="font-black tracking-widest text-sm">GRAYSCALE<span className="text-yellow-500"> INVESTMENT PLATFORM</span></div>
        <div className="flex gap-2">
          <button onClick={connectWallet} className="bg-white text-black px-5 py-2 rounded-full text-xs font-black">
            {wallet? wallet.slice(0,6)+"..."+wallet.slice(-4) : "CONNECT"}
          </button>
          <a href="https://wa.me/919116438322" target="_blank" className="bg-green-500 text-black px-5 py-2 rounded-full text-xs font-black">09116438322</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center">
        <div className="border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black p-10 rounded-[2rem] max-w-3xl w-full">
          <div className="border border-yellow-500/30 text-yellow-500 text-xs tracking-widest px-4 py-1 rounded-full mb-6 inline-block">EST 2026 • SECURE INVESTMENT</div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-700 bg-clip-text text-transparent mb-3 leading-none">GRAYSCALE</h1>
          <h2 className="text-2xl font-bold tracking-[0.2em] mb-6">INVESTMENT PLATFORM</h2>
          <p className="text-zinc-400 text-xl mb-10">Luxury Crypto Investment - Elite Yield Infrastructure</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={connectWallet} className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black px-10 py-4 rounded-full">
              {wallet? "VAULT UNLOCKED" : "CONNECT WALLET"}
            </button>
            <a href="https://wa.me
