import { Component } from '@angular/core'
import { IAppConfig } from 'src/app/config/app-config.model'
import { AppConfigService } from 'src/app/config/app-config.service'
import { FlexModule } from '@angular/flex-layout/flex'
import { MatAnchor } from '@angular/material/button'
import { RouterLink } from '@angular/router'
import { MatDivider } from '@angular/material/list'
import { TranslatePipe } from '@ngx-translate/core'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'num-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FlexModule, MatAnchor, RouterLink, MatDivider, TranslatePipe],
})
export class FooterComponent {
  config: IAppConfig
  links: { query: string; route: string | undefined; url: string | undefined }[]

  constructor(private appConfig: AppConfigService) {
    this.config = this.appConfig.config
    this.links = []
    if (this.config.legal.imprint === 'html') {
      this.links.push({ query: 'LEGAL.DISCLOSURE', route: 'legal/imprint', url: undefined })
    } else if (this.config.legal.imprint === 'url') {
      this.links.push({ query: 'LEGAL.DISCLOSURE', route: undefined, url: this.config.legal.imprintUrl })
    }
    if (this.config.legal.dataProtection === 'html') {
      this.links.push({ query: 'LEGAL.DATAPROTECTION', route: 'legal/data-protection', url: undefined })
    } else if (this.config.legal.dataProtection === 'url') {
      this.links.push({ query: 'LEGAL.DATAPROTECTION', route: undefined, url: this.config.legal.dataProtectionUrl })
    }
    if (this.config.legal.contact === 'html') {
      this.links.push({ query: 'LEGAL.CONTACT', route: 'legal/contact', url: undefined })
    } else if (this.config.legal.contact === 'url') {
      this.links.push({ query: 'LEGAL.CONTACT', route: undefined, url: this.config.legal.contactUrl })
    }
  }

  menuItemClicked($event: Event): void {
    const target = $event.currentTarget as HTMLElement
    target.blur()
    document.querySelector('mat-sidenav-content')?.scrollTo(0, 0)
  }
}
