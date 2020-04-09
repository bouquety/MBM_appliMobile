import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProduitAjoutNotePage } from './produit-ajout-note.page';

describe('ProduitAjoutNotePage', () => {
  let component: ProduitAjoutNotePage;
  let fixture: ComponentFixture<ProduitAjoutNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitAjoutNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitAjoutNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
