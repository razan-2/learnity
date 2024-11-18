import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    let { id } = useParams();
    return (  
        <div>{id}</div>
    );
}
 
export default Post;