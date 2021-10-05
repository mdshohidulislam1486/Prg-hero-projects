
function doSomething(){
    console.log('I am coding JavaScript')
}
console.log('I am the first person ')
console.log('I am the second person')
// setTimeout(doSomething, 10000)
setTimeout(function(){
console.log('I am using vs code')
},5000)

setTimeout(()=>{
    console.log('Exploring MDN articles')
},4000)

console.log('Third person')
console.log('I am the fourht person')

