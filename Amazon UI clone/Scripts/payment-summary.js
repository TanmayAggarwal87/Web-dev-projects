import {cart} from "../data/cart.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";
import { getProduct } from "../data/products.js";
import { addOrders } from "../data/order.js";

export function renderPaymentSummary(){
    let productPriceCents = 0
    let productShippingPrice = 0
    let cartQuantity = 0
    cart.forEach((item) => {
        cartQuantity+= item.quantity
        const product = getProduct(item.productId)
        productPriceCents += product.priceCents * item.quantity

        const deliveryOption = getDeliveryOption(item.deliveryOptionId)
        productShippingPrice += deliveryOption.priceCents

        let productTotal = ((productShippingPrice)/100 +(productPriceCents)/100).toFixed(2)

        let productTax = (productTotal*0.1).toFixed(2)

        let paymentSummaryHtml = `<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div class="js-items">Items (${cartQuantity})</div>
            <div class="payment-summary-money payment-total">$${(productPriceCents/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money payment-handling">$${(productShippingPrice/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money payment-before-tax">$${productTotal}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money payment-tax">$${productTax}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money payment-total-amt">$${(Math.round(productTotal)+Math.round(productTax)).toFixed(2)}</div>
          </div>
          
          <button class="place-order-button button-primary place-order">
            Place your order
          </button>`


          document.querySelector(".payment-summary").innerHTML = paymentSummaryHtml
          document.querySelector(".place-order")
          .addEventListener("click",async ()=>{
            const response = await fetch("https://supersimplebackend.dev/orders",{
              method:"POST",
              headers: {
                'Content-Type': 'application/json'
              },

              body: JSON.stringify({
              cart:cart
          })
        }
      
      )
      const order= await response.json()
      addOrders(order)

        window.location.href = "orders.html"


          }
    )

        
        

       

})

}
