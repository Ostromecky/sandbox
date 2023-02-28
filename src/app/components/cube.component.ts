import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { extend, NgtBeforeRenderEvent } from 'angular-three';
import { Mesh, MeshStandardMaterial, BoxGeometry } from 'three';

extend({ Mesh, MeshStandardMaterial, BoxGeometry });

@Component({
  selector: 'app-cube',
  standalone: true,
  template: `
    <ngt-mesh
      (beforeRender)="onBeforeRender($any($event))"
      (click)="active = !active"
      (pointerover)="hovered = true"
      (pointerout)="hovered = false"
      [scale]="active ? 1.5 : 1"
      [position]="position">
      <ngt-box-geometry />
      <ngt-mesh-standard-material [color]="hovered ? 'darkred' : 'red'" />
    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CubeComponent {
  @Input() position = [0, 0, 0];
  active = false;
  hovered = false;

  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += 0.01;
    event.object.rotation.y += 0.01;
  }
}
