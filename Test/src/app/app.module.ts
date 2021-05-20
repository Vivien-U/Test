import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { BasketComponent } from './basket/basket.component';
import { NgxPopper } from 'angular-popper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { WiederrufsbelehrungComponent } from './wiederrufsbelehrung/wiederrufsbelehrung.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { LieferungComponent } from './Zahlung/lieferung/lieferung.component';
import { FooterComponent } from './footer/footer.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { HolzprodukteComponent } from './holzprodukte/holzprodukte.component';
import { BetonKategorienComponent } from './beton-kategorien/beton-kategorien.component';
import { BetonLampenComponent } from './beton-lampen/beton-lampen.component';
import { BetonFigurenComponent } from './beton-figuren/beton-figuren.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ShopComponent,
    ContactComponent,
    BasketComponent,
    ImpressumComponent,
    DatenschutzComponent,
    WiederrufsbelehrungComponent,
    ConditionsComponent,
    LieferungComponent,
    FooterComponent,
    ProdukteComponent,
    HolzprodukteComponent,
    BetonKategorienComponent,
    BetonLampenComponent,
    BetonFigurenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPopper,
    NgbModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

