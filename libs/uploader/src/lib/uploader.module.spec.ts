import { async, TestBed } from '@angular/core/testing';
import { UploaderModule } from './uploader.module';

describe('UploaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UploaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UploaderModule).toBeDefined();
  });
});
