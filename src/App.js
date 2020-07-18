import React,{   useState, useEffect} from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Superhero from './component/superhero';
import Navbar from './component/navbat';
import Form from './component/form';
import Popup from './component/popup';
//import Hero from './component/hero';

//import './Action Core.png';


function App()  {

  const [result,setResult] = useState([]);
  const [selectedid,setSelectedid] = useState('');
  const [query,setQuery] = useState('');
  const [search,setSearch] = useState('');
  const [hero,setHero] = useState({});
  const [appear,setAppear]=useState({});
  const [power,setPower] =useState({});
  const [image,setImage] =useState({});
  //const [error,setError] =useState(false);
  useEffect((e)=>{
    if(query!=="")
      getHeroes();
  },[query]);
  
  //let ans=[];
  const api_id='1558144997677325';

  const getHeroes = async() =>{
    //console-.log(query);
    const api_call =await (fetch(`https://superheroapi.com/api/${api_id}/search/${query}`));
      //.then(response => response.json())
      //.then(data => setResult(data.results));

    const response = await api_call.json();
    // ans = response.results;
     
   setResult(response.results);
   console.log(response,result,query);
  }

 
  const updateSearch = e =>{
    
    let s=e.target.value;
    
    setSearch(s);
    console.log(search);
  }

  const submit = (e) =>{
    
    e.preventDefault();
    setQuery(search);
    setSelectedid('0');
    //getHeroes();
    
  }

  const popup = async(id) =>{
    const api =await fetch(`https://superheroapi.com/api/${api_id}/${id}`);
    const data =await api.json();
    setSelectedid(id);
    
    //ourhero(id);
    //console.log(id);
    setHero(data);
    setAppear(data.appearance);
    setPower(data.powerstats);
    setImage(data.image);
    console.log(data,hero,power,appear);
  }

  const closepopup = () =>{
   setSelectedid('0');
  }

  
  return (
    <div className="App" >
      
      <Navbar/>
      <div className='bg'></div>
      <Form updateSearch={updateSearch} submit={submit} search={search}/>
      <div className='bg1 container'>
        <h1 className='caption'>Welcome To The World<br/> Of Superheroes</h1>
        <p>Find stats about your favourite<br/> Superheroes and Villains!!! </p>
      </div>
      <div className=' '>
      {(Number(selectedid)===0) ? <Superhero heroes={result} openpopup={popup}/>:false}</div>
      <div className=''>
      {(Number(selectedid)!==0) ? <Popup hero={hero} power={power} appear={appear}  image={image}closepopup={closepopup} />:false}
      </div>
    </div>
  );
  
}
//
//{result.map(hero=>(
 // <Hero item={hero} openpopup={popup}/>
  //))}
// function Error(){
//   return(
//     <div class="alert alert-warning" role="alert">
//         Something Went Wrong!
//         Please Try Again.....
//     </div>
//   );
// }

export default App;
