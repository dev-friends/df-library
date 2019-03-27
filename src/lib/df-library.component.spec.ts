import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfLibraryComponent } from './df-library.component';

describe('DfLibraryComponent', () => {
  let component: DfLibraryComponent;
  let fixture: ComponentFixture<DfLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
