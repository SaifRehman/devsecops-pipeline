import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecogniseComponent } from './recognise.component';

describe('RecogniseComponent', () => {
  let component: RecogniseComponent;
  let fixture: ComponentFixture<RecogniseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecogniseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecogniseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
