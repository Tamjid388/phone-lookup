const loadAllPhones=async()=>{
    document.getElementById('spinner').classList.add('hidden');
//     fetch(` https://openapi.programming-hero.com/api/phones?search=iphone`)
// .then(res=> res.json())
// .then(data=>console.log(data))
const response=await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
const data =await response.json()
console.log(data.data);
}

function handleSearch(){
   
    document.getElementById('spinner').classList.remove('hidden')

    setTimeout(function(){
        loadAllPhones()
    },3000)
}
loadAllPhones()