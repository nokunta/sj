import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StepperOverviewExample } from './stepper-overview-example/stepper-overview-example.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'q3', component: StepperOverviewExample },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
