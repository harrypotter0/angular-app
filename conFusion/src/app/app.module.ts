import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MaterialModule } from '@angular/material';
  import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
   MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
   MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
   MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,    FlexLayoutModule,
    BrowserModule,  BrowserAnimationsModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
