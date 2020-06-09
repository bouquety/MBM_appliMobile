import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VestesChicPage } from './vestes-chic.page';

describe('VestesChicPage', () => {
  let component: VestesChicPage;
  let fixture: ComponentFixture<VestesChicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestesChicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VestesChicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
