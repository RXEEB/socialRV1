import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const NEW_MESSAGE_BODY = 'NEW_MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: "привет", likeCount: 'qwerty'},
                {id: 2, messages: "Верстка от бога", likeCount: 1111},
                {id: 3, messages: "Че кого сучара", likeCount: 2222},
                {id: 4, messages: "Все путем", likeCount: 3333},
                {id: 5, messages: "Все путем", likeCount: 23}
            ],
            newPostText: ''

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Ruslan"},
                {id: 2, name: "Olga"},
                {id: 3, name: "Dima"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hello"},
                {id: 3, message: "How are you"},
                {id: 4, message: "Fine"}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');

    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage , action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage , action)
        this._state.sidebar = sidebarReducer(this._state.sidebar , action)
        this._callSubscriber(this._state);


        // if (action.type === 'ADD-POST') {
        //     let newPost = {
        //         id: 5,
        //         messages: this._state.profilePage.newPostText,
        //         likeCount: 0
        //     };
        //
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(this._state)
        // }
        // else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // }
        // else  if (action.type === NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber(this._state);
        // }
        // else  if (action.type === SEND_MESSAGE) {
        //    let body = this._state.dialogsPage.newMessageBody ;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messages.push({id: 5, message: body})
        //     this._callSubscriber(this._state);
        // }
    }


}






export default store;
    window.state = store;