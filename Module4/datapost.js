async function fetchPosts() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if(!response.ok){
        throw new Error(`Failed to fetch post: ${response.status}`)
    }

    return response.json();

}