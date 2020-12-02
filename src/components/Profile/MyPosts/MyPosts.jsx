import React from "react";
import Posts from "./Post/Posts";
import classes from './MyPosts.module.css'





function MyPosts(props) {

    let PostsElement = props.posts.map( p => <Posts messages={p.messages} id={p.id} key={p.id} linkCount={p.likeCount}/>)

    let newPostElement = React.createRef();

     let onAddPost = () =>{
         props.addPost();
         // props.dispatch(addPostActionCreator());
     };

     let onPostChange = () =>{
         let text = newPostElement.current.value;
         props.updateNewPosText(text);

     };


    return (
        <div className={classes.PostsWrapper} >

            <div className={classes.form}>
                <textarea  className={classes.form_style}
                           onChange={onPostChange} ref={newPostElement}
                           // placeholder="Enter your message"
                                value={props.newPostText}/>

                <button onClick = {onAddPost}>Add post</button>
                
            </div>

            <div className="item">
                {PostsElement}




            </div>
        </div>

    )

}
export default MyPosts;