import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  // return(
  //   <h1>Hello World </h1>
  // );


  // const [name,setName]= useState("Hanifa");
  // return(
  //   <div>
  //     <h1>Hello{name}</h1>
  //     <button onClick={()=> setName("React Student")}>Change name</button>
  //   </div>
  // )


  // fetch("https://jsonplaceholder.typicode.com/users")


  // .then(response => response.json())
  // .then(data=> {
  //   console.log(data);
  // });

  // return(
  //   <h1>Check Console </h1>
  // )



  // useEffect (() => {
  //   console.log('Component loaded');
  // },[]);
  // return(
  //   <h1>hello world</h1>
  // )

  const [users,setUsers]= useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data)=> {
      console.log(data);
      setUsers(data);
      setLoading(false);
 });
 
  },[]);
  if(loading){
    return <h1>Loading....</h1>
  }

  return(
   
    <div>
    <h1>Users</h1>
    {users.map((user) => (
      <p key={user.id}>
        {user.name}
      </p>
    ))}
  </div>

  );
}




export default App
