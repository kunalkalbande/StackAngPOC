import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { TabComponent } from '../tab/tab.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'student-detail', component: StudentDetailComponent},
  { path: 'tab', component: TabComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }




