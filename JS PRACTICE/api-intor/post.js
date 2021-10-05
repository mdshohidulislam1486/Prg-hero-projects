function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPost(data))
}
loadPost();

function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML= `
        <h3>${post.title}</h3>
        <p> ${post.body}</p>
        `
        div.style.border = '2px solid red'
        div.style.margin = "10px"
        div.style.padding = "10px"
        div.style.backgroundColor= "lightblue"
        div.style.color = ''
        div.style.borderRadius ='10px'
        postContainer.appendChild(div)
        
    }
}

function addApost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : "POST",
        body: JSON.stringify({
            title:'My New Post',
            body:"This the first post",
            userId: 1,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res => res.json())
    .then(data => console.log())
}

// http get vs post  *** Important for
// crud operation als see the details 
// difference between curd vs rest api 
// http status code 
