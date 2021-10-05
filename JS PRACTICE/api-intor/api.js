function loadData(){
    
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response  => response.json())
  .then(data=> console.log(data))
}

function loadUsers(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data =>  displayUser(data))
}


function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(dataa =>  displayPost(dataa))
}


function displayUser(data){
    const ul = document.getElementById('users')
    for(const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `User name: ${user.name}, Email address: ${user.email}`
        ul.appendChild(li)
    }
}

/* function displayPost(dataa){
    const div = document.getElementById('post')
    for(const post of dataa){
        const p = document.createElement('p');
        p.innerText = post.body
        div.appendChild(p)
    }
}
 */