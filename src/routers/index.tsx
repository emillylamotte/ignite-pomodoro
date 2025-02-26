import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { Layout } from '../pages/Layout'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
