import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiePRegistertroisPage } from './regie-p-registertrois.page';

describe('RegiePRegistertroisPage', () => {
  let component: RegiePRegistertroisPage;
  let fixture: ComponentFixture<RegiePRegistertroisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiePRegistertroisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiePRegistertroisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
