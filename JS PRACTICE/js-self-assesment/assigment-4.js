

const friends = ["Sonjib Das", "Naeem Khan", "Sahadat", "Sobur", "Shakil", "Dejan", "Imran"]

function perfectFriend(friendList){

if(!Array.isArray(friendList)){
    return "You have to enter an valid array to get the output"
}

const firstNameWith5Digit =[]
for(const friend of friendList){
    if(friend.length == 5){
    firstNameWith5Digit.push(friend)
    break;
    }
  }
    return firstNameWith5Digit;
}

const perfect = perfectFriend(friends)
console.log(perfect)