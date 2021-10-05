// how to get cookies write a function
// how to get a cookie by name 

const getCookie = name =>{
    const cookie = document.cookie;
    const allCookie = cookie.split('; ')
    const findCookie = allCookie.find(c =>{c.includes(name)});
    if(findCookie){
        const cookeiNamevalue = findCookie.split('=');
        return cookeiNamevalue[1];
    }
}

// different between sectin storage vs local storage 