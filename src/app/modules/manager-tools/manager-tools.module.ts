import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ManagerToolsComponent } from './components/manager-tools/manager-tools.component'
import { ManagerToolsRoutingModule } from './manager-tools-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { LayoutModule } from 'src/app/layout/layout.module'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { PseudonymResolverComponent } from './components/pseudonym-resolver/pseudonym-resolver.component'

@NgModule({
  exports: [ManagerToolsComponent],
  imports: [
    CommonModule,
    ManagerToolsRoutingModule,
    NgxChartsModule,
    SharedModule,
    LayoutModule,
    ManagerToolsComponent,
    PseudonymResolverComponent,
  ],
})
export class ManagerToolsModule {}
