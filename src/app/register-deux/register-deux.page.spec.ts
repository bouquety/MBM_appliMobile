import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterDeuxPage } from './register-deux.page';

describe('RegisterDeuxPage', () => {
  let component: RegisterDeuxPage;
  let fixture: ComponentFixture<RegisterDeuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDeuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterDeuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
