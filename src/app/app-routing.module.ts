import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true})], // <-- for debugging purposes
  exports: [RouterModule]
})
export class AppRoutingModule { }
