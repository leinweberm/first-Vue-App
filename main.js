var app = new Vue({
   el: '#app',
   data: {
      brand: 'Leinweber',
      products: 'Ponožky',
      image: './images//vmSocks-green-onWhite.jpg',
      altText: 'velmi pohodlný pár ponožek',
      urlAddress: './index.html',
      inStock: 11,
      onSale: true,
      details: ['velmi pohodlné funkční ponožky', '80% bavlna', 'lze prát vysoké teploty', 'český výrobek'],
      variants: [
         {
            variantId: 2234,
            variantColor: "green",
            variantImage: './images/vmSocks-green-onWhite.jpg'
         },
         {
            variantId: 2235,
            variantColor: "blue",
            variantImage: './images/vmSocks-blue-onWhite.jpg'
         }
      ],
      sizes: ['35-38', '39-42', '43-46'],
      cart: 0
   },
   methods: {
      addToCart: function(){
         if(this.inStock >= 1){
            this.inStock--;
            this.cart++;
         }  
      },
      removeFromCart: function(){
         
         if(this.cart >= 1){
            this.cart--;
            this.inStock++;
         }
      },
      updateProduct: function(variantImage){
         this.image = variantImage;
      }
   },
   computed: {
      title(){
         return this.brand + ' ' + this.products;
      }
   }
})