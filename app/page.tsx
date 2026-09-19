export default function Home() {
  return (
    <main style={{minHeight: '100vh', background: 'black', color: 'white', padding: '20px'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', maxWidth: '1100px', margin: '0 auto'}}>
        <h1 style={{fontWeight: 'bold'}}>MyCryptoSite</h1>
        <a href="#contact" style={{background: 'white', color: 'black', padding: '8px 20px', borderRadius: '20px'}}>Contact</a>
      </nav>

      <div style={{textAlign: 'center', marginTop: '80px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
        <h2 style={{fontSize: '48px', fontWeight: 'bold'}}>Secure Crypto Investment Solutions</h2>
        <p style={{color: '#aaa', marginTop: '20px', fontSize: '18px'}}>
          We provide education, portfolio guidance and secure crypto management.
        </p>
        <div style={{marginTop: '30px'}}>
          <a href="#contact" style={{background: 'white', color: 'black', padding: '14px 30px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none'}}>Get Started</a>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', maxWidth: '1100px', margin: '80px auto', textAlign: 'center'}}>
        <div style={{background: '#1a1a1a', padding: '30px', borderRadius: '20px'}}>
          <h3>Secure</h3><p style={{color: '#888', fontSize: '14px', marginTop: '10px'}}>Protected with best practices</p>
        </div>
        <div style={{background: '#1a1a1a', padding: '30px', borderRadius: '20px'}}>
          <h3>Expert Guidance</h3><p style={{color: '#888', fontSize: '14px', marginTop: '10px'}}>Learn from professionals</p>
        </div>
        <div style={{background: '#1a1a1a', padding: '30px', borderRadius: '20px'}}>
          <h3>24/7 Support</h3><p style={{color: '#888', fontSize: '14px', marginTop: '10px'}}>WhatsApp support</p>
        </div>
      </div>

      <div id="contact" style={{textAlign: 'center', marginTop: '80px'}}>
        <h2>Ready to start?</h2>
        <a href="https://wa.me/2348000000000" style={{display: 'inline-block', marginTop: '20px', background: '#25D366', color: 'black', padding: '16px 40px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none'}}>Chat on WhatsApp</a>
        <p style={{fontSize: '10px', color: '#666', marginTop: '40px'}}>© 2026 MyCryptoSite. Not affiliated with Grayscale.</p>
      </div>
    </main>
  );
}
