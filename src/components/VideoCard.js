import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const {snippet,statistics} = info;
    const {thumbnails,title,channelTitle} = snippet;

  return (
    <div className="p-2 m-2 w-72 rounded-lg shadow-lg">
        <img src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}
export const AdVideoCard = ({info})=>{
  return <div className="m-3 p-2 border border-red-300">
    <VideoCard info={info}/>
  </div>
}
export default VideoCard