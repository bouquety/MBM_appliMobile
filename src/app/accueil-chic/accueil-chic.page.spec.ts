import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilChicPage } from './accueil-chic.page';

describe('AccueilChicPage', () => {
  let component: AccueilChicPage;
  let fixture: ComponentFixture<AccueilChicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilChicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilChicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
