export default function NotFound() {
  return (
    <html lang="nl">
      <body
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1>404</h1>
          <p>
            Pagina niet gevonden. <a href="/nl">Terug naar home</a>
          </p>
        </div>
      </body>
    </html>
  );
}
