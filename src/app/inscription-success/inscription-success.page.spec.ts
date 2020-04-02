import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionSuccessPage } from './inscription-success.page';

describe('InscriptionSuccessPage', () => {
  let component: InscriptionSuccessPage;
  let fixture: ComponentFixture<InscriptionSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
