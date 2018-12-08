import { async, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from './app-material.module';

describe('AppMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppMaterialModule).toBeDefined();
  });
});
