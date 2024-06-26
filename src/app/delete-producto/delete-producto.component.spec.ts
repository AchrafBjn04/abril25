import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductoComponent } from './delete-producto.component';

describe('DeleteProductoComponent', () => {
  let component: DeleteProductoComponent;
  let fixture: ComponentFixture<DeleteProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
