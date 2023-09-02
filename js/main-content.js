{/* <div class="main-content">
                <div class="element1">
                    <div class="title-element1">
                        <span>Pralka SANSUNG WW80TA02341FAE/EA Ecobubble</span> <span>SANSUNG</span> 
                        <div class="stars-element1">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <span>(3 opinie)</span> <span>nr kat. 1424448</span>
                        </div>
                        <div class="big-info">
                            <div class="big-info-title">Wielka wyprzedaż. Tysiące produktów TANIEJ</div>
                        </div>
                        <div class="device">
                            <div class="device-img">
                                <img src="img/sansung1.webp" alt="">
                            </div>
                            <div class="device-info">
                                Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
                                Wsad [kg]: <b>8</b> <br>
                                Kolor: <b>Biały, Czarne drzwi</b> <br>
                                Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
                                Wyświetlacz elektroniczny: <b>TAK</b> <br>
                                Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
                                Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>
                            </div>
                        </div>
                        
                    </div>

                   
                </div>
                <div class="element2">
                    <p>1979,-</p>
                </div>
</div> */}

const currentProducts = products;

const productsSection = document.querySelector(".right-content");

const renderProducts = (items) => {
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
                            <span>(3 opinie)</span> <span>nr kat. ${items[i].category}</span>
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
                    <button>DO KOSZYKA</button>
                    </div>
        </div>
        `

        productsSection.appendChild(newProduct);
    }
};

document.onload = renderProducts(currentProducts);