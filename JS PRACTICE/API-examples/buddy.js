const loadbuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data));
}

loadbuddies()
const displayBuddy= data =>{
    const buddies = data.results
    const buddiesContainer = document.getElementById('buddy')
   for(const buddy of buddies){
       const  p = document.createElement('p');
       p.innerText =`Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} ---- email: ${buddy.email}`;
       buddiesContainer.appendChild(p)
   }

}