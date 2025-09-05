const fetchData = async (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("network response was not ok")
        }
        const data = await response.json()
        return data
    }
    catch(error){
       console.error("problem fetching",error)
    }
}
    
    (async ()=>{
        const post = await fetchData(1)
        console.log(post)
    })();