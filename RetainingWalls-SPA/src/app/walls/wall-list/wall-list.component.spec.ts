/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WallListComponent } from './wall-list.component';

describe('WallListComponent', () => {
  let component: WallListComponent;
  let fixture: ComponentFixture<WallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
