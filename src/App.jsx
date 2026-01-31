import './App.css'
import ColorSchemesExample from './components/NavBar/NavBar/'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
      <div>
        <ColorSchemesExample />
        <ItemListContainer label={'Bienvenidos a la taza de la abuela'}  />
      </div>
  )
}

export default App

