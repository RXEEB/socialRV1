const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
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
}

const dialogsReducer = (state = initialState, action)  => {

// let stateCopy;
//
//     switch (action.type) {
//         case UPDATE_NEW_MESSAGE_BODY :
//             stateCopy = {
//                 ...state,
//                 newMessageBody: action.body
//             };
//             return stateCopy;
//         case   SEND_MESSAGE :
//             let body = state.newMessageBody ;
//             stateCopy = {
//                 ...state,
//                 newMessageBody : '',
//                 massages : [...state.messages , {id: 1, message: body}]
//
//             };
//             return stateCopy;
//             default:
//              return state;
//     }

    // let stateCopy = {
    //     ...state ,
    //     massages : [...state.messages]
    // }



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            return  {
                ...state ,
                newMessageBody : action.body

            }



        case   SEND_MESSAGE :
            let body = state.newMessageBody ;
            return  {
                ...state ,
                newMessageBody :'',
                messages : [...state.messages , {id: 3 , message: body}]



            }





        default:
            return state;
    }






}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export  const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;


// let stateCopy = {
//     ...state ,
//     // massages : [...state.messages]
// }
// switch (action.type) {
//     case UPDATE_NEW_MESSAGE_BODY :
//         stateCopy.newMessageBody = action.body;
//
//         return stateCopy
//     case   SEND_MESSAGE :
//         let body = state.newMessageBody ;
//         stateCopy.newMessageBody = '';
//         stateCopy.messages.push({id: 3 , message: body})
//         return stateCopy;
//     default:
//         return state;
// }