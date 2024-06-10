import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IGenericDialog } from 'src/app/shared/models/generic-dialog.interface'
import { cloneDeep } from 'lodash-es'
import { FlexModule } from '@angular/flex-layout/flex'
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatDivider } from '@angular/material/list'
import { ButtonComponent } from '../../../../shared/components/button/button.component'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'num-dialog-edit-welcome-card',
  templateUrl: './dialog-edit-welcome-card.component.html',
  styleUrls: ['./dialog-edit-welcome-card.component.scss'],
  imports: [
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatHint,
    MatDivider,
    ButtonComponent,
    TranslatePipe,
  ],
})
export class DialogEditWelcomeCardComponent implements OnInit, IGenericDialog<UntypedFormGroup> {
  constructor() {}

  dialogInput: UntypedFormGroup
  form: UntypedFormGroup
  @Output() closeDialog = new EventEmitter()

  ngOnInit(): void {
    this.form = cloneDeep(this.dialogInput)
  }

  handleDialogCancel(): void {
    this.closeDialog.emit()
  }

  handleDialogConfirm(): void {
    this.closeDialog.emit(this.form)
  }
}
