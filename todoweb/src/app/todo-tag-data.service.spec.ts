import { TestBed } from '@angular/core/testing';

import { TodoTagDataService } from './todo-tag-data.service';

describe('TodoTagDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoTagDataService = TestBed.get(TodoTagDataService);
    expect(service).toBeTruthy();
  });
});
