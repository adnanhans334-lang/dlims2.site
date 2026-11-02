import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Welcome to DLIMS 2.1</h1>
        <p>This application is powered by React and includes Vercel Web Analytics.</p>
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h2>✅ Vercel Analytics Configured</h2>
          <p>Web Analytics is now tracking page views and user interactions.</p>
        </div>
      </div>
      <Analytics />
    </>
  )
}

export default App
