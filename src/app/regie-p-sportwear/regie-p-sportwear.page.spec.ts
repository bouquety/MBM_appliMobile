import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiePSportwearPage } from './regie-p-sportwear.page';

describe('RegiePSportwearPage', () => {
  let component: RegiePSportwearPage;
  let fixture: ComponentFixture<RegiePSportwearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiePSportwearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiePSportwearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
