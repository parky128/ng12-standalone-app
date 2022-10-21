import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AlIdentityResolutionGuard } from '@al/ng-navigation-components';
import { DefaultRouteComponent } from './default-route/default-route.component';

const routes: Routes = [
    {
        path: '',
        // canActivate: [ AlIdentityResolutionGuard ],
        children: [
            {
                path: "**",
                //canActivate: [ AlIdentityResolutionGuard ],
                component: DefaultRouteComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
