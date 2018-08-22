import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RecogniseComponent } from './recognise/recognise.component';
import { TrainComponent } from './train/train.component';

export const AppRoutes: Routes = [
  {
    path: 'recognise',
    component: RecogniseComponent,
  },
  {
    path: 'train',
    component: TrainComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
