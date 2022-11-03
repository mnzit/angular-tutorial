import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {ContainerComponent} from "./components/container/container.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ResourcesBulkUpdateComponent} from "./components/resources-bulk-update/resources-bulk-update.component";

const routes: Routes = [

  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "resources",
        component: ResourcesBulkUpdateComponent
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
