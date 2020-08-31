import React, {createContext, useState} from 'react'

const ViewVideoContext = createContext()

const ViewVideoProvider = (props) => {
  const [viewVideo, setViewVideo] = useState('')
  
  return(
    <ViewVideoContext.Provider value={[viewVideo, setViewVideo]}>
      {props.children}
    </ViewVideoContext.Provider>
  )
}
