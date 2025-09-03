import './App.css';
import { Button} from './components/Button';
import { Input } from './components/Input';

function App() {

  return (
    <>
    <div className='h-screen bg-[#012d59]'>
      <br /> <br />
      <Button disabled={true}>Continue</Button><br /> <br />
      <Input type="text" placeholder={"Username"}/>
    </div>
    </>
  )
}

export default App
