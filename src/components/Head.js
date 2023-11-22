import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilities/appBarSlice";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utilities/constants";
import { cacheResults } from "../utilities/searchSlice";
const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions , setShowSuggestinos] = useState(false)
    const searchCache = useSelector(store => store.search)
    const dispatch = useDispatch()
    useEffect(() => {

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setShowSuggestinos(searchCache[searchQuery])
            }
            else{
                getSearchSuggestions()
            }
           }, 200);
        return () => {
            clearTimeout(timer)
        }
            // api call for every keystroke
        // make an api call if the diffrence between 
        // the 2 keystrokes is lessthan 200ms decline the api call
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        // console.log("api" + searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({
                [searchQuery] : json[1]
        }
        ))
        
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col m-2 p-5 shadow-lg">
            <div className="flex col-span-1 ">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 mx-2 cursor-pointer"
                    src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
                    alt="menu"
                />
                <a href="/">
                    <img className="h-8"
                        alt="youtube"
                        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                    />
                </a>
            </div>
            <div className="col-span-10 px-16">
                <div>
                    <input
                        className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={()=>setShowSuggestinos(true)}
                        onBlur={()=>setShowSuggestinos(false)}
                         />
                    <button
                        className=" p-2 border border-gray-400 rounded-r-full bg-gray-100 ">
                        Search
                    </button>
                </div>
               {showSuggestions && <div className="absolute bg-white py-2 px-2 w-[30rem] border border-gray-100 shadow-lg rounded-lg">
                    <ul>
                        {suggestions.map((suggestion,index) => (
                            <li
                                key={suggestion}
                                className="py-2 px-2 shadow-sm hover:bg-gray-100">
                                {suggestion}
                            </li>
                        ))}


                    </ul>

                </div>}
            </div>
            <div className="col-span-1" >
                <img
                    className="h-8"
                    alt="user"
                    src="https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?pid=ImgDet&rs=1" 
                />

            </div>

        </div>
    )
}
export default Head;