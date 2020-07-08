import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailWrapperComponent } from './item-detail-wrapper.component';

xdescribe('ItemDetailWrapperComponent', () => {
  let component: ItemDetailWrapperComponent;
  let fixture: ComponentFixture<ItemDetailWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailWrapperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
