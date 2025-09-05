import './App.css';

import { EmailScreen } from './components/EmailVerify';
import { VerifyAge } from './components/VerifyAge';

function App() {

  return (
    <>
    <div className='h-screen bg-[#012d59]'>
      <VerifyAge 
      placeholder={"Your Birth Year"}
      />
      {/* <EmailScreen 
        placeholder={"Email"}
      /> */}
    </div>
    </>
  )
}

export default App
