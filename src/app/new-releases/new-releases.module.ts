import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewReleasesPageRoutingModule } from './new-releases-routing.module';

import { NewReleasesPage } from './new-releases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewReleasesPageRoutingModule
  ],
  declarations: [NewReleasesPage]
})
export class NewReleasesPageModule {}
