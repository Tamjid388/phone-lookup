const loadAllPhones = async (status,searchtext) => {
    document.getElementById('spinner').classList.add('hidden');
    
    const response = 
    await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext?searchtext:"iphone"}`);
    const data = await response.json()
    if (status)

        displayAllPhones(data.data);

    else
        displayAllPhones(data.data.slice(0, 6));
    console.log(status);



}






const displayAllPhones = (phones) => {
   const phoneContainer=document.getElementById('phone-container')
   phoneContainer.innerHTML=''
   
   phones.forEach(phone => {
    console.log(phone);
    const {brand,slug,image,phone_name}=phone
    const div=document.createElement('div')
 
    div.innerHTML=`
    <div class="card bg-base-100 w-auto shadow-xl border">
  <figure class="px-10 pt-10">
    <img
      src="${image}"
      alt="image"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
    
    `
    phoneContainer.appendChild(div)
  
   });
}
let phone={
    "brand": "Apple ",
    "phone_name": "iPhone 12 Pro Max",
    "slug": "apple_iphone_12_pro_max-10237",
    "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg"
}





// click event on ShowAlll Button
function handleSearch() {

    document.getElementById('spinner').classList.remove('hidden')
const searchtext=document.getElementById('search-box').value;
    setTimeout(function () {
        loadAllPhones(false,searchtext)
    }, 3000)
}


// For show all button
loadAllPhones(false,"iphone")

const handleShowALL = () => {
    loadAllPhones(true)

}