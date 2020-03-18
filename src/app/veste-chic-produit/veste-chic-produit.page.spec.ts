import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VesteChicProduitPage } from './veste-chic-produit.page';

describe('VesteChicProduitPage', () => {
  let component: VesteChicProduitPage;
  let fixture: ComponentFixture<VesteChicProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesteChicProduitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VesteChicProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
