document.addEventListener('DOMContentLoaded', () => {
    const addProductButton = document.querySelector('.add-product button');
    const productList = document.querySelector('.product-list');

 
    addProductButton.addEventListener('click', () => {
        const productName = document.querySelector('.add-product input[type="text"]:nth-child(1)').value;
        const productPrice = document.querySelector('.add-product input[type="text"]:nth-child(2)').value;
        
        if (productName && productPrice) {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';

            productItem.innerHTML = `
                <span>Image</span>
                <span>${productName}</span>
                <span>Rs/- ${productPrice}</span>
                <span>
                    <button class="delete-btn">Delete</button>
                    <button class="update-btn">Update</button>
                </span>
            `;
            
            productList.appendChild(productItem);

          
            document.querySelector('.add-product input[type="text"]:nth-child(1)').value = '';
            document.querySelector('.add-product input[type="text"]:nth-child(2)').value = '';
        } else {
            alert('Please enter product name and price.');
        }
    });


    productList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            event.target.closest('.product-item').remove();
        } else if (event.target.classList.contains('update-btn')) {
            const productItem = event.target.closest('.product-item');
            const productName = prompt('Enter new product name:', productItem.children[1].innerText);
            const productPrice = prompt('Enter new product price:', productItem.children[2].innerText.replace('Rs/- ', ''));
            
            if (productName && productPrice) {
                productItem.children[1].innerText = productName;
                productItem.children[2].innerText = `Rs/- ${productPrice}`;
            }
        }
    });
});
