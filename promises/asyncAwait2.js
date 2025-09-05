const fetchPosts = async (postIds) => {
    
    const promises = postIds.map(async postId =>{
    const url =`https://jsonplaceholder.typicode.com/posts/${postId}`
    const response = await fetch(url)
        if (!response.ok) {
            throw new Error("network response was not ok")
        }
        return await response.json()
    })

    return Promise.all(promises)
}

const postIds = [1,2,3]

fetchPosts(postIds)
.then(posts =>{
    console.log(posts)
})
.catch(error =>{
    console.error("problem fetching",error)
})