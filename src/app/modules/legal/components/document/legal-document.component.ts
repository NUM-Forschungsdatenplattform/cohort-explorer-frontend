import { Component, OnInit } from '@angular/core'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AsyncPipe } from '@angular/common'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'num-imprint',
  templateUrl: './legal-document.component.html',
  imports: [TranslatePipe, AsyncPipe],
})
export class LegalDocumentComponent implements OnInit {
  title: string
  html$: Observable<string>

  constructor(
    private http: HttpClient,
    private translateService: TranslateService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const path = this.route.snapshot.url.pop().path
    if (path === 'imprint') {
      this.title = 'IMPRINT.TITLE'
    } else if (path === 'data-protection') {
      this.title = 'DATA_PROTECTION.TITLE'
    } else if (path === 'contact') {
      this.title = 'CONTACT.TITLE'
    }

    this.loadHtml(
      path,
      this.translateService.currentLang || this.translateService.defaultLang || 'en',
    )
  }

  private loadHtml(type: string, lang: string): void {
    console.log(type, lang)
    const CONFIG_URL = `assets/config/${type}.${lang}.html`
    this.html$ = this.http.get<string>(CONFIG_URL, { responseType: 'text' as 'json' })
  }
}
