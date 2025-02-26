import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
