import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MyCol, MyContainer, MyRow, defineCustomElements } from 'react-library';
import './App.css'
import ContactForm from './components/ContactForm';

defineCustomElements();

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Stencil component library</h1>
      <MyContainer>
        <MyRow>
          <MyCol size={6}>
            <ContactForm />
          </MyCol>
        </MyRow>
      </MyContainer>
    </>
  )
}

export default App
