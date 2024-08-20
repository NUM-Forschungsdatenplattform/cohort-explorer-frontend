import { Component, Input } from '@angular/core'

import { AqbSelectDestination } from '../../../../shared/models/aqb/aqb-select-destination.enum'
import { AqbUiModel } from '../../../../shared/models/aqb/aqb-ui.model'
import { AqlBuilderDialogMode } from '../../../../shared/models/archetype-query-builder/aql-builder-dialog-mode.enum'
import { NgClass } from '@angular/common'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { FlexModule } from '@angular/flex-layout/flex'
import { AqlBuilderSelectItemComponent } from '../aql-builder-select-item/aql-builder-select-item.component'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'num-aql-builder-select',
  templateUrl: './aql-builder-select.component.html',
  styleUrls: ['./aql-builder-select.component.scss'],
  imports: [
    TranslatePipe,
    FaIconComponent,
    NgClass,
    FlexModule,
    AqlBuilderSelectItemComponent,
  ],
})
export class AqlBuilderSelectComponent {
  AqbSelectDestination = AqbSelectDestination
  constructor() {}

  @Input()
  aqbModel: AqbUiModel

  @Input()
  dialogMode: AqlBuilderDialogMode = AqlBuilderDialogMode.Criteria

  deleteItem(index: number): void {
    this.aqbModel.select.splice(index, 1)
  }

  setDestination(): void {
    this.aqbModel.selectDestination = AqbSelectDestination.Select
  }

  protected readonly AqlBuilderDialogMode = AqlBuilderDialogMode
}
