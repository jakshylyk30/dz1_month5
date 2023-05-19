import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";


const SendPosts = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const navigate = useNavigate()
    const back = () => navigate(-1)

    const senPost = async (e) => {
        e.preventDefault()

        const post = {
            title,
            body,
            userId: 10
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
        console.log(res.data)
        navigate('/posts' , {state: post})
    }

    return (
        <div>
            <button onClick={back}>back</button>
            <form onSubmit={senPost} action="">
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input id="body" value={body} onChange={e => setBody(e.target.value)}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default SendPosts;