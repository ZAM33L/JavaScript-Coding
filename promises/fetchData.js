function fetchData (postId){
    const url =`https://jsonplaceholder.typicode.com/posts/${postId}`

    return fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error("network response was not ok")
        }
        else{
            return response.json()
        }
    })
    .then(data =>{
        return data
    }
    )
    .catch(error =>{
        console.error("problem with fetching",error)
    })
}

(fetchData(1)).then(data =>{
    console.log(data)
})