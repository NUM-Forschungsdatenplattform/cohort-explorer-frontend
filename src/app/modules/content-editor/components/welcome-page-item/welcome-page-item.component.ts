import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { DialogService } from 'src/app/core/services/dialog/dialog.service'
import { IDashboardCard } from 'src/app/shared/models/content/dashboard-card.interface'
import { DialogConfig } from 'src/app/shared/models/dialog/dialog-config.interface'
import { EDIT_DIALOG_CONFIG } from './constants'
import { FlexModule } from '@angular/flex-layout/flex'
import { CdkDrag, CdkDragPlaceholder, CdkDragHandle } from '@angular/cdk/drag-drop'
import { MatCard } from '@angular/material/card'
import { ExtendedModule } from '@angular/flex-layout/extended'
import { MatIconButton } from '@angular/material/button'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { ButtonComponent } from '../../../../shared/components/button/button.component'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'num-welcome-page-item',
  templateUrl: './welcome-page-item.component.html',
  styleUrls: ['./welcome-page-item.component.scss'],
  imports: [
    FlexModule,
    CdkDrag,
    CdkDragPlaceholder,
    MatCard,
    ExtendedModule,
    MatIconButton,
    FaIconComponent,
    ButtonComponent,
    CdkDragHandle,
    TranslatePipe,
  ],
})
export class WelcomePageItemComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  @Input()
  index: number

  @Input()
  isLast: boolean

  @Input()
  form: UntypedFormGroup

  @Input()
  isLoading: boolean

  @Input()
  displayLang: 'de' | 'en'

  @Output()
  moveUp = new EventEmitter()

  @Output()
  moveDown = new EventEmitter()

  @Output()
  delete = new EventEmitter()

  cardContent: IDashboardCard = {
    url: '',
    de: {
      title: '',
      text: '',
    },
    en: {
      title: '',
      text: '',
    },
  }

  ngOnInit(): void {
    this.mapFields()
  }

  mapFields(): void {
    const values = this.form.value

    this.cardContent.url = values.url || ''

    this.cardContent.de.title = values.titleGerman || ''
    this.cardContent.de.text = values.bodyTextGerman || ''

    this.cardContent.en.title = values.titleEnglish || ''
    this.cardContent.en.text = values.bodyTextEnglish || ''
  }

  editItem(): void {
    const dialogConfig: DialogConfig = {
      ...EDIT_DIALOG_CONFIG,
      dialogContentPayload: this.form,
    }

    const dialogRef = this.dialogService.openDialog(dialogConfig)

    dialogRef.afterClosed().subscribe((confirmResult: UntypedFormGroup | undefined) => {
      if (confirmResult instanceof UntypedFormGroup) {
        this.form.setValue(confirmResult.value)
        this.mapFields()
      }
    })
  }
}
