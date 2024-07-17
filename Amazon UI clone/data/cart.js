export let cart = JSON.parse(localStorage.getItem("cart"))
import {renderPaymentSummary} from "../Scripts/payment-summary.js";

if(!cart){
  cart =
  [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2,
        deliveryOptionId:'1',
        priceCents : 1090
        },
        {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1,
        deliveryOptionId:'2',
        priceCents : 2095
        },
        
        
]
}




function saveToCart(){
  localStorage.setItem("cart", JSON.stringify(cart))
}
export function addtoCart(productId){
    let matchingItem;
  
        cart.forEach((item) => {
          if (productId === item.productId) {
            matchingItem = item;
          }
        });
  
        if (matchingItem) {
          matchingItem.quantity += 1;
        } else {
          cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId:'1'
          });
        }
        saveToCart()
  }

export function removeFromCart(productId){
  const newCart = [];
    

  cart.forEach((item)=>{
    
    
    if (item.productId !== productId ){
      newCart.push(item);
      
    }
    
  });
  
  


  cart = newCart;

  saveToCart()
  renderPaymentSummary()
}


export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;
  
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;}})

      matchingItem.deliveryOptionId = deliveryOptionId

      saveToCart()

    


}




