const PRODUCTS = [];
const FAVORITES = [];

function _fetch() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "assets/files/products.json", true);
    xhttp.send();
    xhttp.addEventListener('load', function() {
        let result = JSON.parse(xhttp.responseText);
        
        for (const product of result)
            PRODUCTS.push(product);

        _drawCards(PRODUCTS);
    });
    
}

function _drawCards(mapped_products) {

    let ProductsHtml = mapped_products.map( (product) => {

        const {itemSku, itemType, itemName, itemBrand, itemPrice, itemQty, itemImage, brandLink} = product;
        return `
                <div class='col-md-3 mt-3'>
                    <div class="card">
                        <img src="${itemImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
                        <div class="card-body">
                            <h5 class="card-title">${itemName}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${itemType.toUpperCase()}</h6>
                            <p class="card-text"><b>${itemQty}</b> pcs. available - Price: <b>$${itemPrice.toFixed(2)}</b></p>
                            <a href="${brandLink}" target="_blank" class="card-link text-decoration-none">${itemBrand}</a>
                            <a href="#" onclick="_view('${encodeURIComponent(JSON.stringify(product))}');" class="card-link text-decoration-none"
                            type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"
                            >View More</a>
                        </div>
                    </div>
                </div>`;
    });

    if (ProductsHtml.length > 0)
        document.getElementById("sect-products").innerHTML = ProductsHtml.join('');
    else 
    document.getElementById("sect-products").innerHTML = "<h1>Item not found!!!</h1>";
}

document.querySelector("#txt-search").addEventListener('keyup', function() {
    let SearchValue = this.value;

    let ProductFiltered = PRODUCTS.filter( (product) => {
        if (product.itemName.toLowerCase().indexOf(SearchValue.toLowerCase()) > -1)
            return product;
    });

    _drawCards(ProductFiltered);
    
});


function _view(product_info) {
    
    const {itemSku, itemType, 
        itemName, itemBrand, itemPrice, 
        itemQty, itemImage, brandLink
    } = JSON.parse(decodeURIComponent(product_info));

    document.querySelector("#modal-heading").innerHTML = itemName + " - " + itemType.toUpperCase();
    document.querySelector("#div-image").innerHTML = `<img src='${itemImage}' height='300px;'>`;

    document.querySelector("#div-info").innerHTML = `
        <p>SKU No: ${itemSku}</p>
        <p>Brand: <a href='${brandLink}' target='_blank'>${itemBrand}</a></p>
        <p>Available: ${itemQty}</p>
        <p>Price: ${itemPrice}</p>
    `;
    document.querySelector("#btn-add-favorite").setAttribute("data-sku", itemSku);
}


document.querySelector("#btn-add-favorite").addEventListener("click", function() {
    let SkuNo = this.getAttribute("data-sku");
    if (FAVORITES.indexOf(SkuNo) < 0)
        FAVORITES.push(SkuNo);

    document.querySelector("#spn-badge").textContent = FAVORITES.length;
});

document.querySelector("#btn-show-favorites").addEventListener('click', function() {
    let FilteredFavorites = [];
    for(const sku of FAVORITES) {
        for(const product of PRODUCTS) {
            const {itemSku, itemType, itemName, itemBrand, itemPrice, itemQty, itemImage, brandLink} = product;
            if (itemSku == sku) {
                FilteredFavorites.push(
                    `
                        <div class='col-md-3 mt-3'>
                            <div class="card">
                                <img src="${itemImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
                                <div class="card-body">
                                    <h5 class="card-title">${itemName}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${itemType.toUpperCase()}</h6>
                                    <p class="card-text"><b>${itemQty}</b> pcs. available - Price: <b>$${itemPrice.toFixed(2)}</b></p>
                                    <a href="${brandLink}" target="_blank" class="card-link text-decoration-none">${itemBrand}</a>
                                    <a href="#" onclick="_view('${encodeURIComponent(JSON.stringify(product))}');" class="card-link text-decoration-none"
                                    type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"
                                    >View More</a>
                                </div>
                            </div>
                        </div>`
                );
            }
        }
    }

    document.querySelector("#modal-body-favorites").innerHTML = FilteredFavorites.join('');
});
// let SearchText = "LLO";
// let SearchValue = "Hello World";

// if (SearchValue.toLowerCase().indexOf(SearchText.toLowerCase()) > -1) {
//     console.log("The text was found");
// } else {
//     console.log("The text is not existing");
// }