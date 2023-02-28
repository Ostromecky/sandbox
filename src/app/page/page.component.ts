import { Component, OnInit } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { SceneGraphComponent } from '../components/scene-graph.component';

@Component({
  selector: 'app-page',
  template: `<ngt-canvas [sceneGraph]="SceneGraph" />`,
  imports: [NgtCanvas],
  standalone: true
})
export class PageComponent implements OnInit {
  protected readonly SceneGraph = SceneGraphComponent;
  constructor() {}

  ngOnInit() {}
}
