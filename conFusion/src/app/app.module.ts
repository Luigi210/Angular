import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DishService } from './services/dish.service';
import { 
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule, 
  MatCheckboxModule,
  MatSelectModule,
  MatSlideToggleModule,
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { baseUrl } from './shared/baseurl';
// import { MdCardModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PromotionService } from './services/promotion.services';
import { routes } from './app-routing/routes';
import { HttpModule } from '@angular/http';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,    
    MatCardModule,    
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    DishService, 
    PromotionService,
    ProcessHTTPMsgService,
    {
      provide: 'BaseURL',
      useValue: baseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
