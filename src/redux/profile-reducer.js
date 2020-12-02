

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState ={
    posts: [
        {id: 1, messages: "привет", likeCount: 'qwerty'},
        {id: 2, messages: "Верстка от бога", likeCount: 1111},
        {id: 3, messages: "Че кого сучара", likeCount: 2222},
        {id: 4, messages: "Все путем", likeCount: 3333},
        {id: 5, messages: "Все путем", likeCount: 23}
    ],
    newPostText: 'enter new message',
    profile: null

}

const profileReducer = (state = initialState ,action)  => {

    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                messages: state.newPostText,
                likeCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts , newPost],
                newPost : ''
            }


        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
            ...state ,
            newPostText:  action.newText
            };




        }

        case SET_USER_PROFILE: {
            return  {
                ...state ,profile : action.profile

            };




        }

        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE ,profile})
export  const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



export  default profileReducer;