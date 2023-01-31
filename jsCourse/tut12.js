const url = "https://www.omdbapi.com/?apikey=c933217d&s=jumanji";
const url1 = "https://www.omdbapi.com/?apikey=c933217d&s=prison break";

fetch(url)
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })

async function mypromise(){
    const response = await fetch(url1);
    const data = await response.json()
    return data;
}
mypromise().then((data)=>{
    console.log(data)
})

// tt10872600
// tt10648342