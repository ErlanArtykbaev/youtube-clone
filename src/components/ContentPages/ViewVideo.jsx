import React, {useState, useEffect} from 'react';

const ViewVideo = (props) => {
  const [videoUrl, setVideoUrl] = useState('')

  useEffect(() => {
    console.log(props)
  },[])

  return (
    <div className='viewVideo'>
      <div className='video'>

        {videoUrl}
      </div>
      <div className="recomended">

      </div>
    </div>
  );
}

export default ViewVideo