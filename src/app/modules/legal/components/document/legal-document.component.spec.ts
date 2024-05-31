import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { LegalDocumentComponent } from './legal-document.component'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { ActivatedRoute } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'

describe('LegalDocumentComponent', () => {
  let component: LegalDocumentComponent
  let fixture: ComponentFixture<LegalDocumentComponent>

  beforeEach(async () => {
    const route = {
      snapshot: {
        url: ["legal", "contact"],
      },
    } as unknown as ActivatedRoute

    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService, provideHttpClient(), provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: route,
        }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDocumentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  afterEach(() => {
    fixture.destroy()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
