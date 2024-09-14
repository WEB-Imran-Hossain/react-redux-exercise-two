import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/posts/postsSlice';

const Posts = () => {
    const { posts, isLoading, isError, error } = useSelector((state) => state.posts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // decide what to render
    let content;

    switch (true) {
        case isLoading:
            content = <h1>Loading posts ...</h1>;
            break;
        case !isLoading && isError:
            content = <h1>{error}</h1>;
            break;
        case !isLoading && !isError && posts.length === 0:
            content = <h1>No posts found!</h1>;
            break;
        case !isLoading && !isError && posts.length > 0:
            content = (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            );
            break;
        default:
            content = null; // Handle any unexpected cases gracefully
    }
    
    
  return (
    <div>{content}</div>
  )
}

export default Posts





