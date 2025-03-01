import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './BlogPost.css';



export default function BlogPost() {
   const {id} = useParams();
   const [post, setPost] = useState(1);
  useEffect(() => {
          fetch(`https://dummyjson.com/posts/${id}`)
          .then((res) => {return res.json()})
          .then(data => setPost(data))
      }, [id])

    return (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
    )
}