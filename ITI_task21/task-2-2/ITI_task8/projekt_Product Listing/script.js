let productsContainer = document.getElementById("productsContainer");
// Fetch products from the API
 fetch("https://dummyjson.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(product) {
        console.log(product);
    }); 


fetch("https://dummyjson.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        data.products.forEach(function (product) {

            let card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <img 
                    src="${product.thumbnail}" 
                    alt="${product.title}"
                    onclick="showDetails(${product.id})"
                >

                <div class="product-info">
                    <h2>${product.title}</h2>

                    <p class="category">
                        Category: ${product.category}
                    </p>

                    <p class="price">
                        $${product.price}
                    </p>

                    <p class="rating">
                        ⭐ ${product.rating}
                    </p>

                    <p class="description">
                        ${product.description}
                    </p>
                </div>
            `;

            productsContainer.appendChild(card);
        });
    })
    .catch(function (error) {
        productsContainer.innerHTML =
            "<h2>Something went wrong!</h2>";

        console.log(error);
    });


function showDetails(id) {
    window.location.href = `details.html?id=${id}`;
}