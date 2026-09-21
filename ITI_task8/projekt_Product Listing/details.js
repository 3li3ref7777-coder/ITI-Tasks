let productDetails = document.getElementById("productDetails");

let params = new URLSearchParams(window.location.search);

let id = params.get("id");

fetch(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (product) {

        productDetails.innerHTML = `
            <div class="details-image">
                <img src="${product.thumbnail}" alt="${product.title}">
            </div>

            <div class="details-info">

                <h1>${product.title}</h1>

                <p>
                    <strong>Brand:</strong>
                    ${product.brand || "N/A"}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${product.category}
                </p>

                <p>
                    <strong>Price:</strong>
                    $${product.price}
                </p>

                <p>
                    <strong>Rating:</strong>
                    ⭐ ${product.rating}
                </p>

                <p>
                    <strong>Stock:</strong>
                    ${product.stock}
                </p>

                <p>
                    <strong>Discount:</strong>
                    ${product.discountPercentage}%
                </p>

                <p>
                    <strong>Description:</strong>
                    ${product.description}
                </p>

                <p>
                    <strong>Warranty:</strong>
                    ${product.warrantyInformation}
                </p>

                <p>
                    <strong>Shipping:</strong>
                    ${product.shippingInformation}
                </p>

                <p>
                    <strong>Availability:</strong>
                    ${product.availabilityStatus}
                </p>

                <button onclick="goBack()">
                    Back to Products
                </button>

            </div>
        `;
    })
    .catch(function (error) {

        productDetails.innerHTML =
            "<h2>Product not found!</h2>";

        console.log(error);
    });


function goBack() {
    window.location.href = "index.html";
}