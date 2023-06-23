import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TaskComponent } from '../componets/task/task.component';
import { NewTaskComponent } from '../componets/new-task/new-task.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TaskComponent,NewTaskComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
