import { Component, OnInit } from '@angular/core';
import { RadioOption } from "app/shared/radio/radio.option.model";
import { OrderService } from "app/order/order.service";
import { CartItem } from "app/restaurants/restaurant-detail/shopping-cart/cart-item.model";

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {value: 'MON', label: 'Dinheiro'},
    {value: 'DEB', label: 'Cartão de Débito'},
    {value: 'REF', label: 'Cartão Refeição'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

}
