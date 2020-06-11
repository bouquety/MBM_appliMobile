import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiePRegisterdeuxPage } from './regie-p-registerdeux.page';

describe('RegiePRegisterdeuxPage', () => {
  let component: RegiePRegisterdeuxPage;
  let fixture: ComponentFixture<RegiePRegisterdeuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiePRegisterdeuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiePRegisterdeuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
