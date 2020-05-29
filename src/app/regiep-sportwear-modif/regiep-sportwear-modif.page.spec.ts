import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiepSportwearModifPage } from './regiep-sportwear-modif.page';

describe('RegiepSportwearModifPage', () => {
  let component: RegiepSportwearModifPage;
  let fixture: ComponentFixture<RegiepSportwearModifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiepSportwearModifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiepSportwearModifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
