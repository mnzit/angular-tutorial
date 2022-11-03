import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesBulkUpdateComponent } from './resources-bulk-update.component';

describe('ResourcesBulkUpdateComponent', () => {
  let component: ResourcesBulkUpdateComponent;
  let fixture: ComponentFixture<ResourcesBulkUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesBulkUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesBulkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
