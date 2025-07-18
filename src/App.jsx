import './App.css'
import DefaultLayout from './components/Layout/DefaultLayout'
import Header from './components/Header'
import StatusContainer from './components/statusComponents/index'
import TaskContainer from './components/TaskComponents'
import { Charts } from './components/Charts'

const App = () => {
  return (
    <DefaultLayout>
      <div className='main-container'>
        <Header />
        <StatusContainer />
        <Charts />
        <TaskContainer />
      </div>
    </DefaultLayout>
  )
}

export default App