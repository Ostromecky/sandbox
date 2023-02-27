import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import * as THREE from 'three';
import { SceneGraphComponent } from '../components/scene-graph.component';

extend(THREE);
@Component({
  selector: 'app-page',
  template: `<ngt-canvas [sceneGraph]="SceneGraph" />`,
  imports: [NgtCanvas],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageComponent implements OnInit {
  protected readonly SceneGraph = SceneGraphComponent;
  constructor() {}

  ngOnInit() {}
}
