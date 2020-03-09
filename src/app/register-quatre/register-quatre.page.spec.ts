import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterQuatrePage } from './register-quatre.page';

describe('RegisterQuatrePage', () => {
  let component: RegisterQuatrePage;
  let fixture: ComponentFixture<RegisterQuatrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterQuatrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterQuatrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
