import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.services';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishservice: DishService, 
    private promotionservice: PromotionService  
  ) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);
    this.promotion = this.promotionservice.getFeaturedPromotion().subscribe((pro) => pro.featured)[0];
  }
}
