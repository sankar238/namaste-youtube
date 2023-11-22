
const commentsData = [
    {
        name : "virat kohli",
        text : "he is an indian cricketer",
        replies : [  {
            name : "virat kohli",
            text : "he is an indian cricketer",
            replies :[]
        },  {
            name : "virat kohli",
            text : "he is an indian cricketer",
            replies :[]
        },  {
            name : "virat kohli",
            text : "he is an indian cricketer",
            replies :[  {
                name : "virat kohli",
                text : "he is an indian cricketer",
                replies :[]
            },  {
                name : "virat kohli",
                text : "he is an indian cricketer",
                replies :[]
            }]
        }]
    },
    {
        name : "virat kohli",
        text : "he is an indian cricketer",
        replies :[]
    },
    {
        name : "virat kohli",
        text : "he is an indian cricketer",
        replies :[]
    },
    {
        name : "virat kohli",
        text : "he is an indian cricketer",
        replies :[]
    }
]
const Comment = ({data})=>{
    const {name,text,replies}= data
    return <div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
        <img
        className="w-8 h-8"
        alt="user"
        src="https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?pid=ImgDet&rs=1"
        />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentsList = ({comments})=>{
    return  comments.map((comment,index) =>(
        <div key={index+1} >
            <Comment data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies}/>
            </div>
        </div>
   ))
}
const CommentsContainer = () => {
    
    return (
        <div className="m-5 p-2">
            <h1 className="font-bold text=2xl">
                Comments:
            </h1>
            <CommentsList comments={commentsData}/>
        </div>
    )
}

export default CommentsContainer