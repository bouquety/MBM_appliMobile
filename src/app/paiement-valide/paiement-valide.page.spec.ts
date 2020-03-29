import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaiementValidePage } from './paiement-valide.page';

describe('PaiementValidePage', () => {
  let component: PaiementValidePage;
  let fixture: ComponentFixture<PaiementValidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementValidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaiementValidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
