import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService } from './services/http.service';

import { ChatComponent } from '../app/chat/chat.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ScrollDispatchModule} from '@angular/cdk/scrolling';
import { SignUpComponent } from './sign-up/sign-up.component';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

import { ChatService } from './services/chat.service';

import { httpRequestInterceptorProviders } from './services/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SignUpComponent,
    HomeComponent,
    AccordionComponent,
    ItemComponent,
    ItemDetailComponent

  ],
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ScrollDispatchModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    HttpService,
    httpRequestInterceptorProviders,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
