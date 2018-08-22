import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RecogniseComponent } from './recognise/recognise.component';
import { TrainComponent } from './train/train.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: RecogniseComponent,
  },
  {
    path: 'signup',
    component: TrainComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
