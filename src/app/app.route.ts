import {Routes,RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { TotalUserComponent } from './total-user/total-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';


const APP_ROUTES:Routes=[

{path:'',component:HomeComponent},
{path:'total-user',component:TotalUserComponent},
{path:'registration',component:RegistrationComponent},
{path:'contact',component:ContactComponent}
];
export const routing= RouterModule.forRoot(APP_ROUTES);