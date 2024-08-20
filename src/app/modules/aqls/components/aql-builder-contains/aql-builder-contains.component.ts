import { Component, Input } from '@angular/core'
import { AqbContainsCompositionUiModel } from '../../../../shared/models/aqb/aqb-contains-composition-ui.model'
import { AqbUiModel } from '../../../../shared/models/aqb/aqb-ui.model'
import { FlexModule } from '@angular/flex-layout/flex'
import { AqlBuilderContainsGroupComponent } from '../aql-builder-contains-group/aql-builder-contains-group.component'
import { AqbSelectDestination } from '../../../../shared/models/aqb/aqb-select-destination.enum'
import { AqlBuilderDialogMode } from '../../../../shared/models/archetype-query-builder/aql-builder-dialog-mode.enum'
import { NgClass } from '@angular/common'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'num-aql-builder-contains',
  templateUrl: './aql-builder-contains.component.html',
  styleUrls: ['./aql-builder-contains.component.scss'],
  imports: [
    FlexModule,
    AqlBuilderContainsGroupComponent,
    NgClass,
    FaIconComponent,
  ],
})
export class AqlBuilderContainsComponent {
  constructor() {}

  @Input()
  aqbModel: AqbUiModel

  @Input()
  compositions: AqbContainsCompositionUiModel[] = []

  @Input()
  dialogMode: AqlBuilderDialogMode = AqlBuilderDialogMode.Criteria

  deleteCompositionByReferenceId(compositionReferenceId: number): void {
    this.aqbModel.handleDeletionByCompositionReferenceIds([compositionReferenceId])
    this.compositions = this.compositions.filter(
      (composition) => composition.compositionReferenceId !== compositionReferenceId
    )
  }

  deleteArchetypesByReferenceIds(archetypeReferenceIds: number[]): void {
    this.aqbModel.handleDeletionByArchetypeReferenceIds(archetypeReferenceIds)
  }

  setDestination(): void {
    this.aqbModel.selectDestination = AqbSelectDestination.From
  }

  protected readonly AqbSelectDestination = AqbSelectDestination
  protected readonly AqlBuilderDialogMode = AqlBuilderDialogMode
}
