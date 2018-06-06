let inventory = [
  ['LA-LG-STICKER', 300, 'Large Sticker', 'images/la-large-sticker-256px.png', 'Show your Launch pride by plastering your laptop with these beautiful die-cut stickers.'],
  ['LA-SM-STICKER', 200, 'Small Sticker', 'images/la-small-sticker-128px.png', "It\'s a tiny Launch sticker. How cute!"],
  ['LA-T-SHIRT', 50, 'T-Shirt', 'images/la-t-shirt-200px.png', '100% Cotton. Makes a great gift.']
];

// your code, here

class Product{
  constructor(id, quantiy, name, image, description) {
    this.id = id;
    this.quantiy = quantiy;
    this.name = name;
    this.image = image;
    this.description = description;
  }

  sell(){
    this.quantity-- ;
  }

  toHTML(){
    // let productDiv = document.createElement('div');
    //     productDiv.className = 'product';
    //     productDiv.innerHTML = `<h1>Product Name: {this.name}</h1>
    //     <h5>{this.quantity} In Stock</h5>
    //     <img src="{this.image}" alt="Large Launch Academy Sticker" />
    //
    //     <h3>Description</h3>
    //     <p>
    //       {this.description}
    //     </p>`;
  return`<div class="product">
      <h1>Product Name: ${this.name}</h1>
      <h5>${this.quantity} In Stock</h5>
      <img src="${this.image}" alt="${this.name}" />

      <h3>Description</h3>
      <p>
        ${this.description}
       </p>
    </div>`;
  }

}

let element = document.getElementById('all-products');
let products = [];

for (let i = 0; i < (inventory.length); i++) {
  item = new Product(inventory[i][0], inventory[i][1], inventory[i][2], inventory[i][3], inventory[i][4]);
  products.push(item);
}

for (let i = 0; i < (products.length); i++) {
  console.log(products[i].name);
  element.innerHTML += (products[i].toHTML());
}

// products.forEach((product) => {
//   let element = document.getElementById('all-products');
//   element.appendChild(product.toHTML());
// });

// products.forEach((product) {

//   console.log('foo');
//   element.innerHTML += (product.toHTML);
// });
