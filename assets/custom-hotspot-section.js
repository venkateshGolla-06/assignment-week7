let buttonEl = document.querySelectorAll(".add-to-cart-button")

    buttonEl.forEach(button=>{
    button.addEventListener("click",(event)=>{
        let val = event.target.dataset.product
        console.log(val)
        let formData = {
            'items': [{
             'id': val,
             'quantity': 1
             }]
           };
           fetch(window.Shopify.routes.root + 'cart/add.js', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(formData)
           })
           .then(response => {
             return response.json();
           })
           .then(response => {
             //Replace the below line with ajax cart open and update code
              document.location.href = '/cart';
            let cartEl = document.querySelector("cart-drawer.drawer");
            cartEl.classList.add("active") 
           })
           .catch((error) => {
             console.error('Error:', error);
           });
    })
})