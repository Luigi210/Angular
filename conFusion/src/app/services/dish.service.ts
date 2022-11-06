import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Promise<Dish[]> {
    return new Promise(res => {
      setTimeout(() => res(DISHES), 2000);
    });
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(res => {
      setTimeout(() => res(DISHES.filter((dish) => dish.id === id)[0]), 2000);
    }); 
  }
  getFeaturedDish(): Promise<Dish> {
    return new Promise((res) => {
      setTimeout(() => res(DISHES.filter((dish) => dish.featured)[0]), 2000);
    })
  }

}
