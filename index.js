const data=[
    {
        id:1,
        name:"Fire boult Quantum",
        img:"https://cdn.shopify.com/s/files/1/0137/0292/2286/products/quantum-blue_1_360x.png?v=1675340660",
        price:3999,
        cat:"Formal Watch",
    },
    {
        id:2,
        name:"Fastrack",
        img:"https://sslimages.shoppersstop.com/sys-master/images/hc9/h13/26908966813726/WFT38072AP01_NoColour.jpg_230Wx334H",
        price:3695,
        cat:"Casual Watch",
    },
    {
        id:3,
        name:"Ajio striped shirt",
        img:"https://assets.ajio.com/medias/sys_master/root/20221117/2r8w/6375d715aeb269659c97f84a/-473Wx593H-462152986-green-MODEL.jpg",
        price:899,
        cat:"Dress",
    },
    {
        id:4,
        name:"Ajio pink shirt",
        img:"https://assets.ajio.com/medias/sys_master/root/20230102/R0me/63b30ae3aeb269659c1e4f01/-473Wx593H-462323964-pink-MODEL.jpg",
        price:610,
        cat:"Dress",
    },
    {
        id:5,
        name:"Fossil chronograph black",
        img:"https://m.media-amazon.com/images/I/61lEGRZwG1L._UX679_.jpg",
        price:5845,
        cat:"Casual Watch",
    },
    {
        id:6,
        name:"Fossil Neutra Chronograph Medium Brown Eco Leather Watch",
        img:"https://fossil.scene7.com/is/image/FossilPartners/FS5982_main?$sfcc_fos_large$",
        price:12495,
        cat:"Causal Watch",
    },
    {
        id:7,
        name:"Fossil Blue Three-Hand Date Stainless Steel Watch",
        img:"https://fossil.scene7.com/is/image/FossilPartners/FS5949_main?$sfcc_fos_large$",
        price:11195,
        cat:"Formal Watch",
    },
    {
        id:8,
        name:"Fossil Everett Three-Hand Date Navy Ceramic Watch",
        img:"https://fossil.scene7.com/is/image/FossilPartners/CE5029_main?$sfcc_fos_large$",
        price:11546,
        cat:"Formal Watch",
    },

]

const productsContainer=document.querySelector(".products");
const searchInput=document.querySelector(".search");
const categoriesContainer=document.querySelector(".cats");
const priceRange=document.querySelector(".priceRange");
const priceValue=document.querySelector(".priceValue");


const displayProduct=(filteredProducts)=>{
    productsContainer.innerHTML=filteredProducts.map((product)=>
        `<div class="product">
        <img src=${product.img} alt="">
        <span class="name">${product.name}</span>
        <span class="priceText">₹${product.price}</span>
        </div>`
    ).join("")
}

searchInput.addEventListener("keyup",(e)=>{
    const val=e.target.value.toLowerCase();
    if(val){
        displayProduct(data.filter((item)=>item.name.toLowerCase().indexOf(val)!==-1));
    }
    else{   
        displayProduct(data);
    }
})

const addCategories=(data)=>{
    const cat=new Set();
    cat.add("All")
    data.forEach(element => {
        cat.add(element.cat)
    });

    cat.forEach(element => {
        const tag=document.createElement("span");
        const val=document.createTextNode(element);
        tag.className="cat";
        tag.appendChild(val);
        categoriesContainer.appendChild(tag);
    });
}


categoriesContainer.addEventListener("click",(e)=>{
    const selectedCat=e.target.textContent;
    if(selectedCat==="All"){
        displayProduct(data)
    }    
    else{
        displayProduct(data.filter((item)=>item.cat===selectedCat))
    }
})

const setPrice=()=>{
    const priceList=data.map(item=>item.price);
    let minPrice=Number.MAX_SAFE_INTEGER;
    let maxPrice=Number.MIN_SAFE_INTEGER;

    priceList.forEach((element)=>{
        minPrice=Math.min(minPrice,element);
        maxPrice=Math.max(maxPrice,element);
    })
    console.log(priceList,maxPrice);
}

addCategories(data);
displayProduct(data);
setPrice();