import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App(){
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  useEffect(()=>{
    getData()
  },[index])

  async function getData(){
    let response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    console.log(response.data);
    setUserData(response.data)
  }
  let printUserData = "No User Available"
  if(userData.length >0){
    printUserData = userData.map((elem,ids)=>{
      return <a href={elem.url} target='_blank' className='h-45 w-45' key={ids}>
        <img className='h-full w-full rounded' src={elem.download_url} alt="" />
        <h2>{elem.author}</h2>
      </a>
    })
  }

  return(
    <div className='bg-black p-5 '>
      <h2 className='text-6xl text-white font-bold text-center'>Gallery</h2>
      {/* <button className='bg-gray-500 px-6 py-3 rounded' onClick={()=>{getData()}}>Get Data</button> */}
      <div className='text-white flex flex-wrap gap-7 mt-4'>
        {printUserData}
      </div>
      <div className="flex justify-center gap-4">
      <button className='bg-gray-500 px-6 py-3 rounded mt-10' onClick={()=>{
        if(index >1){
          setIndex(index-1)
        }
      }}>Prev</button>
      <div className='text-white text-5xl mt-10'>
        {index}
      </div>
      <button className='bg-gray-500 px-6 py-3 rounded mt-10' onClick={()=>{
        setIndex(index+1)
      }}>Next</button>
      </div>
    </div>
  )
}















// function App() {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   function changeNum1(){
//     console.log("Num 1 changing");
//   }
//   function changeNum2(){
//     console.log("Num 2 changing");
//   }
//   useEffect(()=>{
//     changeNum1()
//   },[num])
//   useEffect(()=>{
//     changeNum2()
//   },[num2])

//   return (

//       <div>
//         <h2>NUM 1:{num}</h2>
//         <h2>NUM 2:{num2}</h2>
//         <button onClick={() => {
//           setNum(num + 1)
//         }}>Increment</button>
//         <button onClick={() => {
//           setNum2(num2 - 1)
//         }}>Decrement</button>
//       </div>
//   )
// }
// const App = () => {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)
//  useEffect(()=>{
//   console.log("UseEffect running...");
//  },[num2])

//   return (
//     <div>
//       <h2>{num}</h2>
//       <h2>{num2}</h2>
//       <button onMouseOver={()=>{
//         setNum(num+1)
//       }} onMouseOut={()=>{
//         setNum2(num2+10)
//       }}>Increment</button>
//     </div>
//   )
// }

export default App
