import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { OurFleetComponent } from './pages/about/our-fleet/our-fleet.component';
import { ScubaCoursesComponent } from './pages/about/scuba-courses/scuba-courses.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { HomeComponent } from './pages/home/home.component';
import { ApoReefAndCoronComponent } from './pages/destinations/apo-reef-and-coron/apo-reef-and-coron.component';
import { TubbatahaComponent } from './pages/destinations/tubbataha/tubbataha.component';
import { PageNotFoundComponent } from './feeds/page-not-found/page-not-found.component';
import { OurFleetDetailsComponent } from './pages/about/our-fleet/our-fleet-details/our-fleet-details.component';
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

const routes: Routes = [
    {path: '', component:HomeComponent, data: {label: 'Home'}},
    {path: 'about', data: {label: 'About'}, children: [
      {path: '', component: AboutComponent, data: {label: 'About'}},
      {path: 'our-fleet', data: {label: 'Our Fleet'}, children: [
        {path: '', component: OurFleetComponent, data: {label: 'Our Fleet'}},
        {path: ':fleet', component: OurFleetDetailsComponent, data: {label: 'Details'}}
      ]},
      {path: 'scuba-courses', component:ScubaCoursesComponent, data: {label: 'Scuba Courses'}},
      {path: 'our-crew', component:OurCrewComponent, data: {label: 'Our Crew'}},
      {path: 'agents-and-partners', component:AgentsAndPartnersComponent, data: {label: 'Agents & Partners'}},
      {path: 'payment-policies', component:PaymentPoliciesComponent, data: {label: 'Payment Policies'}},
      {path: 'downloads', component:DownloadsComponent, data: {label: 'Downloads'}},
    ]},
    {path: 'destinations', data: {label: 'Destinations'}, children: [
      {path: '', component: DestinationsComponent, data: {label: 'Destinations'}},
      {path: 'tubbataha', data: {label: 'Tubbataha'}, children: [
        {path: '', component: TubbatahaComponent, data: {label: 'Tubbataha'}},
        {path: 'schedules-and-rates', component: SchedulesAndRatesComponent, data: {label: 'Schedules & Rates'}},
        {path: 'route-and-itinerary', component: RouteAndItineraryComponent, data: {label: 'Route & Itinerary'}},
        {path: 'dive-maps', component: DiveMapsComponent, data: {label: 'Dive Maps'}},
        {path: 'faq', component: FaqComponent, data: {label: 'FAQ'}},
      ]},
      {path: 'apo-reef-and-coron', data: {label: 'Apo Reef & Coron'}, children: [
        {path: '', component: ApoReefAndCoronComponent, data: {label: 'Apo Reef & Coron'}},
        {path: 'schedules-and-rates', component: ApoSchedulesAndRatesComponent, data: {label: 'Schedules & Rates'}},
        {path: 'route-and-itinerary', component: ApoRouteAndItineraryComponent, data: {label: 'Route & Itinerary'}},
        {path: 'faq', component: ApoFaqComponent, data: {label: 'FAQ'}},
      ]}
    ]},
    {path: 'schedules-and-rates', data: {label: 'Schedules & Rates'}, children: [
      {path: '', component: PageSchedulesAndRatesComponent, data: {label: 'Schedules & Rates'}},
      {path: 'tubbataha', component:SchedulesAndRatesComponent, data: {label: 'Tubbataha'}},
      {path: 'apo-reef-and-coron', component:ApoSchedulesAndRatesComponent, data: {label: 'apo-reef-and-coron'}}
    ]},
    {path: 'equipment-rentals', component:EquipmentRentalsComponent, data: {label: 'Equipment Rentals'}},
    {path: 'contact-us', component:ContactComponent, data: {label: 'Contact Us'}},
    // {path: '**', component:PageNotFoundComponent}
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
