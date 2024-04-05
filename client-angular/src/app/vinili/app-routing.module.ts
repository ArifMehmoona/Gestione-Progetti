import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CdComponent } from './cd/cd.component';
import { ViniliComponent } from './vinili/vinili.component';

const routes: Routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full'},
    { path: 'alfa_romeo', component: CdComponent},
    { path: 'aston-martin', component: ViniliComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }    