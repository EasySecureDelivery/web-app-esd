import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//componentes
import { LoginComponent } from './vista/login/login.component';
import { SharedModule } from './shared/shared.module';

import { ShippingstatusComponent } from './vista/empresario/shippingstatus/shippingstatus.component';
import { MyshipmentsComponent } from './vista/empresario/myshipments/myshipments.component';
import { DatapersonComponent } from './vista/empresario/dataperson/dataperson.component';
import { TicketshipmentComponent } from './vista/empresario/ticketshipment/ticketshipment.component';

import { TransportHeaderComponent } from './vista/transport/transport-header/transport-header.component';
import { EmpresarioHeaderComponent } from './vista/empresario/empresario-header/empresario-header.component';
import { MyshipmentstransportComponent } from './vista/transport/myshipmentstransport/myshipmentstransport.component';
import { SelectcompanyComponent } from './vista/empresario/selectcompany/selectcompany.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShippingstatusComponent,
    MyshipmentsComponent,
    DatapersonComponent,
    TicketshipmentComponent,
    TransportHeaderComponent,
    EmpresarioHeaderComponent,
    MyshipmentstransportComponent,
    SelectcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }