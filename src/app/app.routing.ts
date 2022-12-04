import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesGuard } from './core/guards/routes.guard';
import { PanelComponent } from './routes/panel/panel.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PanelComponent,
        children: [
          { path: '', loadChildren: () => import('./routes/panel/home/home.module').then(m => m.HomeModule) },
          { path: 'ticket', loadChildren: () => import('./routes/panel/ticket/ticket.module').then(m => m.TicketModule) },
          { path: 'callschedule', loadChildren: () => import('./routes/panel/callschedule/callschedule.module').then(m => m.CallscheduleModule) },
          { path: 'admin', loadChildren: () => import('./routes/panel/admin/admin.module').then(m => m.AdminModule) },
          { path: 'profile', loadChildren: () => import('./routes/panel/profile/profile.module').then(m => m.ProfileModule) },
          { path: 'report', loadChildren: () => import('./routes/panel/report/report.module').then(m => m.ReportModule) },
        ]
      },
      {
        path: 'account',
        canActivate: [RoutesGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('./routes/account/account.module').then(m => m.AccountModule)
          }
        ]
      }
    ]
  },
  // { path: '**', component: NotFoundComponent }
  // { path: 'redirect/ticket/result/email', component: TicketActionResultComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
