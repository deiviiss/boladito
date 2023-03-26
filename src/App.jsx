import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'

export default function App () {
  return (
    <div className='text-3xl h-full'>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/"/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
