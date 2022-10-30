import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {TestOneComponent} from "./components/test-one/test-one.component";
import {TestTwoComponent} from "./components/test-two/test-two.component";

const routes: Routes = [
  {
    path: "test.one",
    component: TestOneComponent
  },
  {
    path: "test.two",
    component: TestTwoComponent
  },
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
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
