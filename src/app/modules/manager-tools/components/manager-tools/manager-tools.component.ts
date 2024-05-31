import { Component } from '@angular/core'
import { PseudonymResolverComponent } from '../pseudonym-resolver/pseudonym-resolver.component'

@Component({
  selector: 'num-manager-tools',
  templateUrl: './manager-tools.component.html',
  styleUrls: ['./manager-tools.component.scss'],
  imports: [PseudonymResolverComponent],
})
export class ManagerToolsComponent {
  constructor() {}
}
