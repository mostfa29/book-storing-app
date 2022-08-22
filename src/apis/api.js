export const getAllBooks = async () => {
    const response = await fetch(`${process.env.React_APP_API_SERVER}/books`)
    if (!response.ok) {
        throw new Error('somehing wrong with the server')
    }
    return response.json()
}


export const updateBook = async ({id,...data}) => {
    
  
    const response = await fetch(`${process.env.React_APP_API_SERVER}/books/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type":'application/json'
        },
        body:JSON.stringify(data)
    }
    )

    if (!response.ok) {
        return new Error(response.json().message)
    }
    
    return response.json()
}



export const getBook = async ({ queryKey }) => {
    console.log(queryKey)
    
    const [_key,{id}] = queryKey
    const response = await fetch(`${process.env.React_APP_API_SERVER}/books/${id}`
    )

    if (!response.ok) {
        return new Error(response.json().message)
    }
    
    return response.json()
}

export const addBook = async (data) => {
    
    const response = await fetch(`${process.env.React_APP_API_SERVER}/books/`, {
        method: 'POST',
        headers: {
            "Content-Type":'application/json'
        },
        body:JSON.stringify(data)
    }
    )

    if (!response.ok) {
        return new Error(response.json().message)
    }

    return response.json()
}



export const  removeBook = async (id) => {
    const response = await fetch(`${process.env.React_APP_API_SERVER}/books/${id}`,
    {method:'DELETE'}
    )

    if (!response.ok) {
        return new Error(response.json().message)
    }
    
    return true
}
