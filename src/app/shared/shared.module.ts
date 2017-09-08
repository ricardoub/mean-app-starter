import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ShoppingCartService } from "app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service";
import { OrderService } from "app/order/order.service";

import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component'
import { NotificationService } from './messages/notifications.service'
@NgModule({
  declarations: [
    InputComponent, 
    RadioComponent, 
    RatingComponent, SnackbarComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent, 
    RadioComponent, 
    RatingComponent,
    SnackbarComponent,
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        RestaurantsService,
        ShoppingCartService,
        OrderService,
        NotificationService
      ]
    }
  }
}