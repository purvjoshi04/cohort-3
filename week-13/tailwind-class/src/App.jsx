import './App.css';
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <div className='h-screen bg-[#012d59]'>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
