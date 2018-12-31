import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DriverComponent } from './driver/driver.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent,DriverComponent],
  exports: [LayoutComponent,HeaderComponent, FooterComponent,DriverComponent]
})
export class UIModule { }
