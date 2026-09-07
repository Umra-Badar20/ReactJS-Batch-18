import React from 'react'
import { useState } from 'react'


const App = () => {


  const [title, setTitle] = useState("Write Your title here..")
  const [desc, setDesc] = useState("Write Your description here..")
  const [post, setPost] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const copyPost = [...post]
    copyPost.push({ title, desc })
    console.log("copy", copyPost);
    console.log("post", post);
    setPost(copyPost)

    setTitle('')
    setDesc('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='write your goal'
          onChange={(e) => {
            setTitle(e.target.value)
          }
          } />
        <input type="text" placeholder='write your description'
          onChange={(e) => {
            setDesc(e.target.value)

          }
          } />
        <button>Post</button>

      </form>
      {
        post.map((elem,ids)=>{
          return <div key={ids}>
            <h2 >{elem.title}</h2>
          <p>{elem.desc}</p>
          </div>
        })
      }
    </div>
  )
  // const [goal, setGoal] = useState("Write Your Goal")
  // return (
  //   <div>
  //     <form>
  //       <input type="text" placeholder='write your goal' 
  //         onChange={(e) => {
  //           setGoal(e.target.value)
  //           console.log(e.target.value);

  //         }
  //         } />

  //     </form>
  //     <h2>{goal}</h2>
  //   </div>
  // )
}

export default App
