import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProduitViewNotePage } from './produit-view-note.page';

describe('ProduitViewNotePage', () => {
  let component: ProduitViewNotePage;
  let fixture: ComponentFixture<ProduitViewNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitViewNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitViewNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
