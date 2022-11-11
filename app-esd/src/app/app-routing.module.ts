import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresseComponent } from './vista/empresario/addresse/addresse.component';
import { DatapersonComponent } from './vista/empresario/dataperson/dataperson.component';
import { EmpresarioHeaderComponent } from './vista/empresario/empresario-header/empresario-header.component';
import { IpickupComponent } from './vista/empresario/ipickup/ipickup.component';
import { MyshipmentsComponent } from './vista/empresario/myshipments/myshipments.component';
import { SelectcompanyComponent } from './vista/empresario/selectcompany/selectcompany.component';
import { ShippingstatusComponent } from './vista/empresario/shippingstatus/shippingstatus.component';
import { TicketshipmentComponent } from './vista/empresario/ticketshipment/ticketshipment.component';
import { LoginComponent } from './vista/login/login.component';
import { TrackingComponent } from './vista/tracking/tracking.component';
import { MyaccountComponent } from './vista/transport/myaccount/myaccount.component';
import { MyshipmentstransportComponent } from './vista/transport/myshipmentstransport/myshipmentstransport.component';
import { ProfileComponent } from './vista/transport/profile/profile.component';
import { RegistershipmentsComponent } from './vista/transport/registershipments/registershipments.component';
import { TransportHeaderComponent } from './vista/transport/transport-header/transport-header.component';
import { TrackingStatusComponent } from './vista/tracking-status/tracking-status.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'tracking',component:TrackingComponent},
  {path:'transport-header',component:TransportHeaderComponent,
    children:[
  {path:'myaccount',component:MyaccountComponent},
  {path:'myshipmentstransport',component:MyshipmentstransportComponent},
  {path:'profile',component:ProfileComponent},
  {path:'registershipments',component:RegistershipmentsComponent},
  ]},
  {path:'empresario-header',component:EmpresarioHeaderComponent,
    children:[
    {path:'ipickup',component:IpickupComponent},
    {path:'profile',component:ProfileComponent},
    {path:'myshipments',component:MyshipmentsComponent},
    {path:'selectcompany',component:SelectcompanyComponent},
    {path:'shippingstatus',component:ShippingstatusComponent},
    {path:'ticketshipment',component:TicketshipmentComponent},
    {path:'addresse',component:AddresseComponent},
    {path:'dataperson',component:DatapersonComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
