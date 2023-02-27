import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend, NgtBeforeRenderEvent } from 'angular-three';
import { AmbientLight, SpotLight, PointLight } from 'three';
import { CubeComponent } from './cube.component';

extend({ AmbientLight, SpotLight, PointLight });

@Component({
  standalone: true,
  template: `
    <ngt-ambient-light [intensity]="0.5" />
    <ngt-spot-light [position]="10" [angle]="0.15" [penumbra]="1" />
    <ngt-point-light [position]="-10" />
    <app-cube [position]="[1.5, 0, 0]" />
    <app-cube [position]="[-1.5, 0, 0]" />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CubeComponent]
})
export class SceneGraphComponent {
  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += 0.01;
  }
}
