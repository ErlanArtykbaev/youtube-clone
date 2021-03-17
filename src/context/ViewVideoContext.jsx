import React, {createContext, useState} from 'react'

export const ViewVideoContext = createContext()

export const ViewVideoProvider = (props) => {
  const [viewVideo, setViewVideo] = useState('')
  
  return(
    <ViewVideoContext.Provider value={[viewVideo, setViewVideo]}>
      {props.children}
    </ViewVideoContext.Provider>
  )
}
