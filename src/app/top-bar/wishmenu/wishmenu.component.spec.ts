import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishmenuComponent } from './wishmenu.component';

describe('WishmenuComponent', () => {
  let component: WishmenuComponent;
  let fixture: ComponentFixture<WishmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
