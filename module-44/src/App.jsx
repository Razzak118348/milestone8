

import './App.css'
import LineChartAdd from './Component/LineChartAdd/LineChartAdd'
import NavBar from './Component/NavBar/NavBar'
import PriceOptions from './Component/PriceOptions/PriceOptions'
// import DaisyNav from './Component/DaisyNav/DaisyNav'

function App() {


  return (
    <>
     {/* <DaisyNav></DaisyNav> */}

     <NavBar></NavBar>
     <PriceOptions></PriceOptions>
     <LineChartAdd></LineChartAdd>
    </>
  )
}

export default App
