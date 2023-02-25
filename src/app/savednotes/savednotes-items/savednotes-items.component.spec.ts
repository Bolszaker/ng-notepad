import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavednotesItemsComponent } from './savednotes-items.component';

describe('SavednotesItemsComponent', () => {
  let component: SavednotesItemsComponent;
  let fixture: ComponentFixture<SavednotesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavednotesItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavednotesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
