import './App.css';
import Card from './component/card'
import Footer from './component/footer'
import Header from './component/header'
import Data from './component/loadData'
const App =()=> {
  // console.log(Data)
  // let items = [];
  // Data.forEach((i, index)=> items.push(<Card key = {index} title = {i.title} author = {i.author} desc = {i.desc}/>))
  return (
  <div>
    <Header />
    <div className='card'>
      {Data.map((i, index)=> <Card key = {index} title = {i.title} author = {i.author} desc = {i.desc}/>)}
    </div>
    <Footer />
  </div>
      
  );
}

export default App;