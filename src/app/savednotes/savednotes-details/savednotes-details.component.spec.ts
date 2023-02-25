import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavednotesDetailsComponent } from './savednotes-details.component';

describe('SavednotesDetailsComponent', () => {
  let component: SavednotesDetailsComponent;
  let fixture: ComponentFixture<SavednotesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavednotesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavednotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
