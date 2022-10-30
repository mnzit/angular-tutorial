import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestThreeComponent} from "./components/test-three/test-three.component";
import {MainComponent} from "./components/main/main.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "test.three",
        component: TestThreeComponent
      },
      {
        path: "aboutus",
        component: AboutUsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
