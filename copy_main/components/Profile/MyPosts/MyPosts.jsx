import React from "react";
import Posts from "./Post/Posts";
import classes from './MyPosts.module.css'



function MyPosts(props) {

    let PostsElement = props.posts.map( p => <Posts massages={p.massages} id={p.id} linkCount={p.likeCount}/>)

    let newPostElement = React.createRef();

     let addPost = () =>{
debugger;
         let text = newPostElement.current.value;

         props.addPost(text)
     };


    return (
        <div className={classes.PostsWrapper} >
            <div className={classes.form}>
                <textarea className={classes.form_style} ref={newPostElement}></textarea>

                <button onClick={addPost}>Add post</button>
                
            </div>

            <div className="item">
                {PostsElement}




            </div>
        </div>

    )

}
export default MyPosts;