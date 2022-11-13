import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { of } from 'rxjs';
import {delay} from 'rxjs/operators';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/delay';
// import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: number): Observable<Promotion> {
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion() : Observable<Promotion> {
    return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000));
  }
}