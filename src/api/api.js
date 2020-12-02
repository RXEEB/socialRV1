import * as axios from "axios";



// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '608fe950-d301-450d-a3b0-3fdbd05de1d8'
    }
});
export const usersAPI = {
    getUsers  (currentPage , pageSize)  {
        return (
            instance.get( `users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return(
                        response.data
                    )
                })
        )

    }

}




export const getUsers2 = (currentPage , pageSize) => {
    return (
        instance.get( `users?page=${currentPage}&count=${pageSize}`,{
            withCredentials: true
        })
            .then(response => {
                return(
                    response.data
                )
            })
    )

}

