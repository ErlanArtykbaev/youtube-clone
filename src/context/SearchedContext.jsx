import React, {createContext, useState} from 'react'

export const SearchedContext = createContext()

export const SearchedProvider = (props) => {
  const [searchedVideo, setSearchedVideo] = useState('')
  return(
    <SearchedContext.Provider
    value={[
      searchedVideo,
      setSearchedVideo
    ]}>
      {props.children}
    </SearchedContext.Provider>
  )
}