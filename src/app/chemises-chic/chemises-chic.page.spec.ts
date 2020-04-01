import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChemisesChicPage } from './chemises-chic.page';

describe('ChemisesChicPage', () => {
  let component: ChemisesChicPage;
  let fixture: ComponentFixture<ChemisesChicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemisesChicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChemisesChicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
