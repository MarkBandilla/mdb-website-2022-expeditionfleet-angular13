import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './ui/loader/loader.component';
import { BannerComponent } from './ui/banner/banner.component';
import { SliderComponent } from './ui/slider/slider.component';
import { TeamsComponent } from './ui/teams/teams.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TubbatahaComponent } from './pages/destinations/tubbataha/tubbataha.component';
import { ApoReefAndCoronComponent } from './pages/destinations/apo-reef-and-coron/apo-reef-and-coron.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OurFleetComponent } from './pages/about/our-fleet/our-fleet.component';
import { ScubaCoursesComponent } from './pages/about/scuba-courses/scuba-courses.component';
import { SliderGalleryComponent } from './ui/slider-gallery/slider-gallery.component';
import { SubNavComponent } from './layout/sub-nav/sub-nav.component';
import { OurFleetDetailsComponent } from './pages/about/our-fleet/our-fleet-details/our-fleet-details.component';
import { FleetService } from './pages/about/our-fleet/our-fleet.service';
import { OurCrewComponent } from './pages/about/our-crew/our-crew.component';
import { AgentsAndPartnersComponent } from './pages/about/agents-and-partners/agents-and-partners.component';
import { PaymentPoliciesComponent } from './pages/about/payment-policies/payment-policies.component';
import { DownloadsComponent } from './pages/about/downloads/downloads.component';
import { EquipmentRentalsComponent } from './pages/equipment-rentals/equipment-rentals.component';
import { SchedulesAndRatesComponent } from './pages/destinations/tubbataha/schedules-and-rates/schedules-and-rates.component';
import { RouteAndItineraryComponent } from './pages/destinations/tubbataha/route-and-itinerary/route-and-itinerary.component';
import { DiveMapsComponent } from './pages/destinations/tubbataha/dive-maps/dive-maps.component';
import { FaqComponent } from './pages/destinations/tubbataha/faq/faq.component';
import { ApoSchedulesAndRatesComponent } from './pages/destinations/apo-reef-and-coron/apo-schedules-and-rates/apo-schedules-and-rates.component';
import { ApoFaqComponent } from './pages/destinations/apo-reef-and-coron/apo-faq/faq.component';
import { ApoRouteAndItineraryComponent } from './pages/destinations/apo-reef-and-coron/apo-route-and-itinerary/apo-route-and-itinerary.component';
import { PageSchedulesAndRatesComponent } from './pages/page-schedules-and-rates/page-schedules-and-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    TeamsComponent,
    HeaderComponent,
    FooterComponent,
    SubNavComponent,
    HomeComponent,
    AboutComponent,
    OurCrewComponent,
    AgentsAndPartnersComponent,
    PaymentPoliciesComponent,
    DownloadsComponent,
    DestinationsComponent,
    TubbatahaComponent,
    ApoReefAndCoronComponent,
    ContactComponent,
    SliderComponent,
    SliderGalleryComponent,
    BannerComponent,
    OurFleetComponent,
    OurFleetDetailsComponent,
    ScubaCoursesComponent,
    EquipmentRentalsComponent,
    SchedulesAndRatesComponent,
    RouteAndItineraryComponent,
    DiveMapsComponent,
    FaqComponent,
    ApoSchedulesAndRatesComponent,
    ApoRouteAndItineraryComponent,
    ApoFaqComponent,
    PageSchedulesAndRatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
