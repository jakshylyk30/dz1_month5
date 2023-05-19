import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

const PostsPage = () => {
    const [ arr, setArr ] = useState([])
    const [ load, setLoad ] = useState(false)
    const navigate = useNavigate()
    const {state} = useLocation()
    const back = () => navigate(-1)
    const getPosts = async () => {
        setLoad(false)
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setLoad(true)
        return setArr(data)
    }

    useEffect(() => {
        getPosts()
    },[])
    return (
        <div>
            <h2>Posts</h2>
            <button onClick={back}>back</button>
            {
                state?.title
                &&
                <div>
                    <h2>title: {state?.title}</h2>
                    <h2>Body: {state?.body}</h2>
                    <h2>UserId: {state?.userId}</h2>
                </div>
            }
            <ul>
                {
                    load
                    ?
                    arr.map(e => <li key={e?.id}>{e?.title}</li>)
                    :
                    <h2>Loading....</h2>
                }
            </ul>
        </div>
    );
};

export default PostsPage;