import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/ignite-pomodoro" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
