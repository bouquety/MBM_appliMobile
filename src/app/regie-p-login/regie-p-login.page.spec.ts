import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiePLoginPage } from './regie-p-login.page';

describe('RegiePLoginPage', () => {
  let component: RegiePLoginPage;
  let fixture: ComponentFixture<RegiePLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiePLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiePLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
