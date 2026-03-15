import { useState } from 'react'

function App() {
  const [userId, setUserId] = useState('')
  const [userPass, setUserPass] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setError('')
    setResult(null)

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          userPass
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      console.error(err)
      setError('로그인 요청 중 오류가 발생했습니다.')
    }
  }

  return (
    <div style={{ maxWidth: '420px', margin: '40px auto', padding: '20px' }}>
      <h2>React Login Test</h2>

      <div style={{ marginBottom: '12px' }}>
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ width: '100%', padding: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <input
          type="password"
          placeholder="비밀번호"
          value={userPass}
          onChange={(e) => setUserPass(e.target.value)}
          style={{ width: '100%', padding: '10px' }}
        />
      </div>

      <button onClick={handleLogin}>로그인</button>

      {error && (
        <p style={{ color: 'red', marginTop: '16px' }}>{error}</p>
      )}

      {result && (
        <pre style={{ marginTop: '16px', background: '#f4f4f4', padding: '12px' }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default App