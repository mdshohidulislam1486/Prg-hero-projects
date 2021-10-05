import logo from './logo.svg';
import './App.css';

function App() {
  const cinemas =[
    {nayok:'Rajjak', naiyka:"Sabana" , source:"https://i.ytimg.com/vi/l-ydLvufQvY/maxresdefault.jpg"},
    {nayok:'Salman', naiyka:"Sabnur", source:"https://media-eng.dhakatribune.com/uploads/2017/09/Top-10-Best-Songs-of-Salman-Shah-Salman-Shah-Best-Songs-List.jpg"},
    {nayok:'Omorsani', naiyka:"Mousomi", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CwdD96DMZLhIJ9l0UfIlYNa-ozyA59QeCw&usqp=CAU"},
    {nayok:'Sakib Khan', naiyka:"Mouri"},
    {nayok:'Manna', naiyka:"Purnima", source:"https://biographybd.com/wp-content/uploads/2016/02/Manna.gif"},
    {nayok:'Alomgir', naiyka:"Dithi"},
    {nayok:'Nisho', naiyka:"Tanjin Tisha"},
    {nayok:'Apurba', naiyka:"Sabila Nur"},
  ]
  return (
      <div className="App">
        <div>
        <BatteryProperty></BatteryProperty> 
        </div>
        <div>
          {
            cinemas.map(cinema => <Cinema source={cinema.source} nayok={cinema.nayok} naiyka={cinema.naiyka}></Cinema>)
          }
        </div>
      
    </div>
  );
}



const Cinema =(props)=>{

  return(
    <div style={{backgroundColor:"lightblue", margin:'20px', padding:'20px'}}>
      <img style={{width:'200px', height:'150px'}} src={props.source} alt="" />
      <div>Hero Name: {props.nayok}</div>
      <div>Heroine Name: {props.naiyka}</div>

    </div>
  )
}

const BatteryProperty = ()=>{
  return(
    <div>
      <img src="https://thumbs.dreamstime.com/b/print-170801272.jpg" alt="" />
      <div>Battery Status:{}</div>
    </div>
  )


}

export default App;
