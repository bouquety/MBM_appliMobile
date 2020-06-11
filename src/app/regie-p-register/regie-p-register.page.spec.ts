import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiePRegisterPage } from './regie-p-register.page';

describe('RegiePRegisterPage', () => {
  let component: RegiePRegisterPage;
  let fixture: ComponentFixture<RegiePRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiePRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiePRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
