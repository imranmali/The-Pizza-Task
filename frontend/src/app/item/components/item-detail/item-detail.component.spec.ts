import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './item-detail.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NumberPickerComponent } from 'src/app/shared/components/number-picker/number-picker.component';
import { SlideshowModule } from 'ng-simple-slideshow';

xdescribe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, SlideshowModule, FormsModule],
      declarations: [ItemDetailComponent, NumberPickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
