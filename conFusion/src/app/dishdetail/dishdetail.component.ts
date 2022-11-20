import { Component, OnInit, ViewEncapsulation, Input, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-dishdetail',
	templateUrl: './dishdetail.component.html',
	styleUrls: ['./dishdetail.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DishdetailComponent implements OnInit {
	@Input()
	dish: Dish;
	
	dishCopy: Dish;
	errMess: string;
	dishIds: string[];
	prev: string;
	next: string;
	// dish = DISH;

	constructor(private loc: Location, 
		private dishService: DishService,
		private route: ActivatedRoute,
		@Inject('BaseURL') private baseUrl
		) { }

	ngOnInit() {
		this.dishService.getDishIds().subscribe((dishIds: string[]) => this.dishIds = dishIds, 
			errmess => this.errMess = <any>errmess);
		this.route.params.pipe(switchMap((params: Params) => {
			return this.dishService.getDish(params['id']);}))
			.subscribe(dish => {this.dish = dish; this.dishCopy = dish, this.setPrevNext(dish.id)});
	}
	setPrevNext(dishId: string) {
		let index = this.dishIds.indexOf(dishId);
		this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
		this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
	}
	
	back(): void {
		this.loc.back();
	}

	// onSubmit(){
	// 	// this.dishCopy.comments.push()
	// 	this.dishService.putDish(this.dishCopy)
	// 		.subscribe(dish => {
	// 			this.dish = dish;
	// 			this.dishCopy = dish;
	// 		},
	// 		errmess => {
	// 			this.dish = null;
	// 			this.dishCopy = null;
	// 			this.errMess = <any>errmess;
	// 		}
	// 	)
	// }

}