import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './vista/login/login.component';
import { TrackingComponent } from './vista/tracking/tracking.component';
import { TransportHeaderComponent } from './vista/transport/transport-header/transport-header.component';
import { MyaccountComponent } from './vista/transport/myaccount/myaccount.component';
import { ProfileComponent } from './vista/transport/profile/profile.component';
import { MyshipmentstransportComponent } from './vista/transport/myshipmentstransport/myshipmentstransport.component';
import { RegistershipmentsComponent } from './vista/transport/registershipments/registershipments.component';
import { EmpresarioHeaderComponent } from './vista/empresario/empresario-header/empresario-header.component';
import { IpickupComponent } from './vista/empresario/ipickup/ipickup.component';
import { AddresseComponent } from './vista/empresario/addresse/addresse.component';
import { DatapersonComponent } from './vista/empresario/dataperson/dataperson.component';
import { SelectcompanyComponent } from './vista/empresario/selectcompany/selectcompany.component';
import { TicketshipmentComponent } from './vista/empresario/ticketshipment/ticketshipment.component';
import { ShippingstatusComponent } from './vista/empresario/shippingstatus/shippingstatus.component';
import { MyshipmentsComponent } from './vista/empresario/myshipments/myshipments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrackingComponent,
    TransportHeaderComponent,
    MyaccountComponent,
    ProfileComponent,
    MyshipmentstransportComponent,
    RegistershipmentsComponent,
    EmpresarioHeaderComponent,
    IpickupComponent,
    AddresseComponent,
    DatapersonComponent,
    SelectcompanyComponent,
    TicketshipmentComponent,
    ShippingstatusComponent,
    MyshipmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
