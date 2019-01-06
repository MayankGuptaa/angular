import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from '../app/chat/chat.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: 'chat', component: ChatComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'item-list', component: ItemComponent},
  {path: 'item-list/:id', component: ItemDetailComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
