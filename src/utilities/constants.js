
const GOOGLE_API_KEY = "AIzaSyCJlPBSfV3Gr02txEgmXRLiBY83Aq1U8zE"

export const OFFSET_LIVE_CHAT = 100
export const YOUTUBE_VIDEOS_API= 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
+ GOOGLE_API_KEY

export const  YOUTUBE_SEARCH_API =
"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
