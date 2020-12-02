let state = {
    profilePage: {
        posts: [
            {id: 1, massages: "pfsdfdsf", likeCount: 'qwerty'},
            {id: 2, massages: "Верстка от бога", likeCount: 1111},
            {id: 3, massages: "Че кого сучара", likeCount: 2222},
            {id: 4, massages: "Все путем", likeCount: 3333},
            {id: 5, massages: "Все путем", likeCount: 23}
        ]


    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Ruslan"},
            {id: 2, name: "Olga"},
            {id: 3, name: "Dima"}
        ],
        massages: [
            {id: 1, massage: "Hi"},
            {id: 2, massage: "Hello"},
            {id: 3, massage: "How are you"},
            {id: 4, massage: "Fine"}
        ]
    }
}

export let addPost = (postMessage) =>{
debugger;
    let newPost = {
        id: 5,
        massages: postMessage,
        likeCount: 0
    };
debugger;
    state.profilePage.posts.push(newPost);

}

export default state;