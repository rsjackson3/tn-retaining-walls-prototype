/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WallAddComponent } from './wall-add.component';

describe('WallAddComponent', () => {
  let component: WallAddComponent;
  let fixture: ComponentFixture<WallAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
