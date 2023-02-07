import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite'

import counter from './store/counter'
import './App.css'
import TodoList from './TodoList'

const App = observer(() => {
  return (
    <div className="App">
      {`Count = ${counter.count}`}
      <br />
      <Button onClick={() => counter.increment()}>+</Button>
      <Button onClick={() => counter.decrement()}>-</Button>

      <TodoList></TodoList>
    </div>
  )
})

export default App
