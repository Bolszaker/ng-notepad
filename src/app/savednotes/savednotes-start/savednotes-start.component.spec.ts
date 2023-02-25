import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavednotesStartComponent } from './savednotes-start.component';

describe('SavednotesStartComponent', () => {
  let component: SavednotesStartComponent;
  let fixture: ComponentFixture<SavednotesStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavednotesStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavednotesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
