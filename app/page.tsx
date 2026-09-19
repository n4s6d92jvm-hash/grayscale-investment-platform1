export default function Home() {
  const myWhatsApp = "2349116438322";
  return (
    <main style={{minHeight: '100vh', background: 'black', color: 'white', fontFamily: 'sans-serif'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #222', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <img src="/logo.png" alt="logo" style={{width: '32px', height: '32px'}} />
          <h1 style={{fontWeight: 'bold', fontSize: '16px', letterSpacing: '2px'}}>GRAYSCALE</h1>
        </div>
        <a href={`https://wa.me/${myWhatsApp}`} style={{background: '#25D366', color: 'white', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px'}}>WhatsApp</a>
      </nav>
      <div style={{textAlign: 'center', padding: '60px 20px'}}>
        <img src="/logo.png" alt="logo" style={{width: '110px', height: '110px', margin: '0 auto 20px'}} />
        <p style={{color: '#888', letterSpacing: '3px', fontSize: '11px'}}>GRAYSCALE INVESTMENT PLATFORM</p>
        <h2 style={{fontSize: '42px', fontWeight: 'bold', marginTop: '10px'}}>Grow Your Wealth<br/>With Crypto</h2>
        <a href={`https://wa.me/${myWhatsApp}?text=Hi%20Grayscale`} style={{background: '#25D366', color: 'white', padding: '16px 32px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginTop: '30px'}}>Start on WhatsApp</a>
        <p style={{marginTop: '15px', color: '#555', fontSize: '13px'}}>09116438322</p>
      </div>
    </main>
  );
}
