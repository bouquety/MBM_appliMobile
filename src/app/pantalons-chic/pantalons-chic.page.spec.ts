import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantalonsChicPage } from './pantalons-chic.page';

describe('PantalonsChicPage', () => {
  let component: PantalonsChicPage;
  let fixture: ComponentFixture<PantalonsChicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantalonsChicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantalonsChicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
