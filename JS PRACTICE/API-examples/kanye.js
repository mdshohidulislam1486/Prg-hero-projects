

const loadCodes = () =>{
 fetch('https://api.kanye.rest/')
 .then(res =>res.json())
 .then(data => displayQuoe(data));
}



const displayQuoe= quote =>{

    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote
}

