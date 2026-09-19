export default function Home() {
  const myWhatsApp = "2349116438322";
  return (
    <main style={{minHeight: '100vh', background: 'black', color: 'white', fontFamily: 'sans-serif'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #222', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <img src="/logo.png" style={{width: '35px', height: '35px', borderRadius: '5px'}} alt="Grayscale Logo" />
          <h1 style={{fontWeight: 'bold', fontSize: '18px', letterSpacing: '2px'}}>GRAYSCALE</h1>
        </div>
        <a href={`https://wa.me/${myWhatsApp}`} target="_blank" style={{background: '#25D366', color: 'white', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px'}}>WhatsApp</a>
      </nav>

      <div style={{textAlign: 'center', padding: '50px 20px'}}>
        <img src="/logo.png" style={{width: '120px', height: '120px', margin: '0 auto 20px', borderRadius: '15px'}} alt="Grayscale Logo" />
        <p style={{color: '#888', letterSpacing: '3px', fontSize: '12px', fontWeight: 'bold'}}>GRAYSCALE INVESTMENT PLATFORM</p>
        <h2 style={{fontSize: '42px', fontWeight: 'bold', lineHeight: '1.1', marginTop: '15px'}}>Grow Your Wealth<br/>With Crypto</h2>
        <p style={{color: '#aaa', marginTop: '20px', fontSize: '17px', maxWidth: '600px', margin: '20px auto'}}>
          Trusted crypto education and investment guidance.
        </p>
        <div style={{marginTop: '30px'}}>
          <a href={`https://wa.me/${myWhatsApp}?text=Hi%20Grayscale%20I%20want%20to%20invest`} target="_blank" style={{background: '#25D366', color: 'white', padding: '16px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'inline-block'}}>
            Start on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
