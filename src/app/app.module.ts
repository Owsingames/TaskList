import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TestLeeComponent } from './test-lee/test-lee.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TestLeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
