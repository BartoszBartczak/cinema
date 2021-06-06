import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from './choice/choice.component';
import { FormComponent } from './form/form.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: 'choice', component: ChoiceComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
