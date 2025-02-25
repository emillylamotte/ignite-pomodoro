import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { Layout } from '../pages/Layout'

export function Router() {
  return (
    <Routes>
      <Route path="/ignite-pomodoro" element={<Layout />}>
        <Route path="/ignite-pomodoro" element={<Home />} />
        <Route path="/ignite-pomodoro/home" element={<Home />} />
        <Route path="/ignite-pomodoro/history" element={<History />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
