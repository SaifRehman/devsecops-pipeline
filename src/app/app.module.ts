import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';
import { RecogniseComponent } from './recognise/recognise.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TrainService } from './train/train.component.service';
import { RecogniseService } from './recognise/recognise.component.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    RecogniseComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [TrainService,RecogniseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
