import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [ProcessHTTPMsgService]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;
  // selectedDish: Dish;


  constructor(private dishService: DishService,
      @Inject('BaseURL') private baseUrl
    ) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
  }

  // onSelect(dish: Dish){
  //   this.selectedDish = dish;
  //   console.log(this.selectedDish, dish)
  // }

  // async getDishes(){
  //   this.dishes = await this.dishService.getDishes().then(dishes => this.dishes = this.dishes)
  // }
}
