import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiPAccueilPage } from './regi-p-accueil.page';

describe('RegiPAccueilPage', () => {
  let component: RegiPAccueilPage;
  let fixture: ComponentFixture<RegiPAccueilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiPAccueilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiPAccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
