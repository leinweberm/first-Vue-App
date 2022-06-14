Vue.component('product-details', {
   props: {
      details: {
         type: Array,
         required: true
      }
   },
   template: `
      <ul>
         <li v-for="detail in details">{{ detail }}</li>
      </ul>
   `
})

Vue.component('product', {
   props: {
      premium: {
         type: Boolean,
         required: true
      }
   },
   template: `
      <div class="product">

         <div class="product-image">
            <img :src="image" :alt="altText" />
            <h3 class="sale" v-if="onSale">VÝPRODEJ</h3>
         </div>

         <div class="product-info">
            <h1 style="margin: 0;">{{ title }}</h1>

            <product-details :details="details"></product-details>

            <div  v-for="variant in variants" :key="variant.variantId">
               <p @mouseover="updateProduct(variant.variantImage)" style="margin: 5px; text-decoration: underline; cursor: pointer;">{{ variant.variantColor }}</p>
            </div>
            <b style="margin-top: 10px;">Velikosti:</b>
            <ul>
               <li v-for="size in sizes">{{ size }}</li>
             </ul>

            <b v-if="inStock > 10">Skladem</b>
            <b v-else-if="inStock <= 10 && inStock > 0">Posledních 10 kusů</b>
            <b v-else>Vyprodáno</b>

            <div class="buttons">
               <button 
                  v-on:click="addToCart" 
                  :disabled="!inStock"
                  :class="{addToCart}">
                     Koupit
               </button>
               <div class="cart">
                  <p style="margin: 0;">Cart({{ cart }})</p>
               </div>
               <div class="addRemoveFromCart">
                  <div v-on:click="addToCart" :disabled="!inStock" class="addItem">
                     <p style="margin: 0; padding: 0;">+</p>
                  </div>
                  <div v-on:click="removeFromCart" class="removeItem">
                     <p style="margin: 0; padding: 0;">-</p>
                  </div>
               </div>
            </div>
         </div>

      </div>
   `,
   data(){
      return {
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
      }
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
      },
      shipping() {
         if (this.premium) {
           return "Free"
         }
           return 2.99
       }
   },
   computed: {
      title(){
         return this.brand + ' ' + this.products;
      }
   }
})

var app = new Vue({
   el: '#app'
})