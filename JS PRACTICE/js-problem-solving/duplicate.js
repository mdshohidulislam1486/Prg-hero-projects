const names = ["Imran", "Razib", "Sumon", "Topu", "Nirob", "Imran", "Topu", "Razib", "Kamrul"]

function removeDuplicate(names){
    const unique =[];
    // for(let i=0; i<name.length; i++){
    // const element = names[i]
    // console.log(element)
    // }
    // it is an alternative fo foloop 
     for( const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
     }
     return unique;
}

const uniqueNames = removeDuplicate(names);
console.table(uniqueNames)


// practice duplicate by your own 