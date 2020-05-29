import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiepSportwearPage } from './regiep-sportwear.page';

describe('RegiepSportwearPage', () => {
  let component: RegiepSportwearPage;
  let fixture: ComponentFixture<RegiepSportwearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiepSportwearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiepSportwearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
