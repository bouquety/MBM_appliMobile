import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiePHomePage } from './regie-p-home.page';

describe('RegiePHomePage', () => {
  let component: RegiePHomePage;
  let fixture: ComponentFixture<RegiePHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiePHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiePHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
