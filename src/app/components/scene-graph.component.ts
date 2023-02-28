import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { extend, NgtArgs, NgtBeforeRenderEvent, NgtStore } from 'angular-three';
import { AmbientLight, PointLight, SpotLight, Loader } from 'three';
import { OrbitControls } from 'three-stdlib';
import { CubeComponent } from './cube.component';

extend({ AmbientLight, SpotLight, PointLight });
extend({ OrbitControls });

@Component({
  standalone: true,
  template: `
    <ngt-ambient-light [intensity]="0.5" />
    <ngt-spot-light [position]="10" [angle]="0.15" [penumbra]="1" />
    <ngt-point-light [position]="-10" />
    <app-cube [position]="[1.5, 0, 0]" />
    <app-cube [position]="[-1.5, 0, 0]" />
    <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" [minAzimuthAngle]="45" [maxAzimuthAngle]="90" />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CubeComponent, NgtArgs]
})
export class SceneGraphComponent {
  private readonly store = inject(NgtStore);
  protected readonly camera = this.store.get('camera');
  protected readonly glDom = this.store.get('gl', 'domElement');
  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += 0.01;
  }
}
