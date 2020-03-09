import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterTroisPage } from './register-trois.page';

describe('RegisterTroisPage', () => {
  let component: RegisterTroisPage;
  let fixture: ComponentFixture<RegisterTroisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTroisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterTroisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
