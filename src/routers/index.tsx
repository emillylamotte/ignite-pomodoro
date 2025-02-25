import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { Layout } from '../pages/Layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />{' '}
        <Route path="home" element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
