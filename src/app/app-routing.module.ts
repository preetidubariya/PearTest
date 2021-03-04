import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DeliveryMenuComponent } from './delivery-menu/delivery-menu.component';
import { MealsOneComponent } from './meals-one/meals-one.component';
import { ChargesComponent } from './charges/charges.component';
import { HelpComponent } from './help/help.component';
import { TopnavComponent } from './topnav/topnav.component';

const routes: Routes = [
  {path:'menu',component:DeliveryMenuComponent},
  {path:'meal',component:MealsOneComponent},
  {path:'help',component:HelpComponent},
  {path:'charges',component:ChargesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents=[
  SidebarComponent,
  DeliveryMenuComponent,
  MealsOneComponent,
  ChargesComponent,
  HelpComponent,
  TopnavComponent
]
