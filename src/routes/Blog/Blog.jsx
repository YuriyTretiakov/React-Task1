
import {useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Blog.css'

export default function Blog() {

	const [blogs, setBlogs] = useState([])
		
 	useEffect(() => {
	
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => {
					console.log(json);
                    return json;
					})
                .then ((res) => setBlogs(res))

	}, [])
	
	return (
		<div className="blog">
           <h2>Посты</h2>
        <ul className="blog-list"> {
             blogs.map((blog) => (<Link key={blog.id} className="list-item" to={`/blog/${blog.id}`}>
           <li> {blog.title}</li></Link>))
           } </ul>

        </div>
    )
}