import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabDirective1, TabDirective2 } from './tabs/tab.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TabsComponent, TabDirective1, TabDirective2],
  bootstrap: [AppComponent],
})
export class AppModule {}
