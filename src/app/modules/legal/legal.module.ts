import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LegalRoutingModule } from './legal-routing.module'
import { LegalDocumentComponent } from './components/document/legal-document.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    LegalRoutingModule,
    SharedModule,
    LegalDocumentComponent,
  ],
})
export class LegalModule {}
