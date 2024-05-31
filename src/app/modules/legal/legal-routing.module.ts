import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LegalDocumentComponent } from './components/document/legal-document.component'

const routes: Routes = [
  { path: 'imprint', component: LegalDocumentComponent },
  { path: 'contact', component: LegalDocumentComponent },
  { path: 'data-protection', component: LegalDocumentComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalRoutingModule {}
