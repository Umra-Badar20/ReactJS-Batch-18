import React, { createContext } from 'react'
//Create context and export it
//Provide data
//Use Data
export const PostDataContext= createContext()
const ThemeContext = (props) => {
    console.log(props);
  return (
    <div>
        <PostDataContext.Provider value={["SMIT","SIT", "dark"]}>
         {props.children}
        </PostDataContext.Provider>

    </div>
  )
}

export default ThemeContext
