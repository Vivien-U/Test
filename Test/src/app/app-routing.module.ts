import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { BasketComponent } from './basket/basket.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { WiederrufsbelehrungComponent } from './wiederrufsbelehrung/wiederrufsbelehrung.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { LieferungComponent } from './Zahlung/lieferung/lieferung.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { HolzprodukteComponent } from './holzprodukte/holzprodukte.component';
import { BetonKategorienComponent } from './beton-kategorien/beton-kategorien.component';
import { BetonFigurenComponent } from './beton-figuren/beton-figuren.component';
import { BetonLampenComponent } from './beton-lampen/beton-lampen.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomepageComponent },
  { path: 'Shop', component: ShopComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Basket', component: BasketComponent },
  { path: 'Impressum', component: ImpressumComponent },
  { path: 'Datenschutz', component: DatenschutzComponent },
  { path: 'Wiederrufsbelehrung', component: WiederrufsbelehrungComponent },
  { path: 'Conditions', component: ConditionsComponent },
  { path: 'Zahlung/Lieferung', component: LieferungComponent },
  { path: 'Produkte', component: ProdukteComponent },
  { path: 'Holzprodukte', component: HolzprodukteComponent },
  { path: 'Beton-Kategorien', component: BetonKategorienComponent },
  { path: 'Beton-Figuren', component: BetonFigurenComponent },
  { path: 'Beton-Lampen', component: BetonLampenComponent },
  { path: 'Beton-Lampen', component: BetonLampenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
