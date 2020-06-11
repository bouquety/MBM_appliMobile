import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiePSportwearModifPage } from './regie-p-sportwear-modif.page';

describe('RegiePSportwearModifPage', () => {
  let component: RegiePSportwearModifPage;
  let fixture: ComponentFixture<RegiePSportwearModifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiePSportwearModifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiePSportwearModifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
