var app = new Vue({
   el: '#app',
   data: {
      products: 'Ponožky',
      image: './images//vmSocks-green-onWhite.jpg',
      altText: 'velmi pohodlný pár ponožek',
      urlAddress: './index.html',
      inStock: 9,
      onSale: true,
      details: ['velmi pohodlné funkční ponožky', '80% bavlna', 'lze prát vysoké teploty', 'český výrobek'],
      variants: [
         {
            variantId: 2234,
            variantColor: "green"
         },
         {
            variantId: 2235,
            variantColor: "blue"
         }
      ],
      sizes: ['35-38', '39-42', '43-46'],
      cart: 0
   },
})