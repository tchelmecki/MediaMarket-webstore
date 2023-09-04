let currentProducts = products;
let categories = new Set();
let cart = [];
const productsSection = document.querySelector(".right-content-product");


const renderProducts = (items) => {
    productsSection.innerHTML = "";
    for(let i = 0; i < items.length; i++){
        const newProduct = document.createElement('div');
        newProduct.className = 'main-content';
        newProduct.innerHTML = `
        <div class="element1">
                    <div class="title-element1">
                        <span>${items[i].name}</span>
                        <div class="stars-element1">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <span>(3 opinie)</span> <span>nr kat. ${items[i].nrcategory}</span>
                        </div>
                        <div class="big-info">
                            <div class="big-info-title">Wielka wyprzedaż. Tysiące produktów TANIEJ</div>
                        </div>
                        <div class="device">
                            <div class="device-img">
                                <img src="${items[i].image}" alt="product-image">
                            </div>
                            <div class="device-info">
                               ${items[i].description}
                            </div>
                        </div>
                        
                    </div>

                   
                </div>
                <div class="element2 on-sale" >
                    <p class="price-sale">${items[i].price - items[i].saleAmount},-</p>
                    <p class="price-basic">${items[i].price}zł</p>
                    <p class="days30">Najniższa cena z 30 dni przed obniżką: ${items[i].price},-</p>
                    <div class="element2-btn">
                    <button class="cart">DO KOSZYKA</button>
                    </div>
        </div>
        `

        productsSection.appendChild(newProduct);
    }
};

const renderCategories = (items) => {
    for(let i = 0; i < items.length; i++){
        categories.add(items[i].category)
    }
    const categoriesItems = document.querySelector(".left-bar ul");

    categories = ['Wszystko',...categories];

    categories.forEach((category, index) => {
        const newCategoryli = document.createElement("li");
        const newCategory = document.createElement("button");
        newCategory.innerHTML = category;
        newCategory.dataset.category = category;

        index === 0 ? newCategory.classList.add("active") : "";

        categoriesItems.appendChild(newCategoryli);
        newCategoryli.appendChild(newCategory);

    })

    console.log(categories);

}

document.onload = renderCategories(currentProducts);
document.onload = renderProducts(currentProducts);


const categoriesButtons = document.querySelectorAll(".left-bar ul li button");

categoriesButtons.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const category = e.target.dataset.category;

        categoriesButtons.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");


        currentProducts = products;

        if(category === 'Wszystko'){
            currentProducts = products;
        }
        else{
            currentProducts = currentProducts.filter((
                (product) => product.category === category
            ));
        }
    
        renderProducts(currentProducts);
    })
});

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", (e)=>{
    const search = e.target.value;

    const foundProduct = currentProducts.filter((product) => {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        {
            return product;
        }
    });

    const emptyState = document.querySelector(".empty-state");

    foundProduct.length === 0 ? emptyState.classList.add("active") : emptyState.classList.remove("active");

    renderProducts(foundProduct);
});


//cdn... const addToCartBtns = document.querySelectorAll(".cart");


