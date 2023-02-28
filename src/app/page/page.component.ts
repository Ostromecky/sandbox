import { NgtCanvas } from '@angular-three/core';
import { NgtAmbientLight, NgtPointLight, NgtSpotLight } from '@angular-three/core/lights';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { Component, OnInit } from '@angular/core';
import { CubeComponent } from '../components/cube.component';
import { ReuseGltfComponent } from '../components/gltf.component';

@Component({
  selector: 'app-page',
  imports: [
    NgtCanvas,
    NgtAmbientLight,
    NgtSpotLight,
    NgtPointLight,
    NgtSobaOrbitControlsModule,
    CubeComponent,
    ReuseGltfComponent
  ],
  template: `
    <!-- <ngt-canvas>
      <ngt-ambient-light intensity="0.5"></ngt-ambient-light>
      <ngt-spot-light [position]="10" angle="0.15" penumbra="1"></ngt-spot-light>
      <ngt-point-light [position]="-10"></ngt-point-light> -->

    <!-- <app-cube [position]="[1.8, 0, 0]"></app-cube>
      <app-cube [position]="[-1.2, 0, 0]"></app-cube> -->
    <sandbox-gltf />

    <!-- <ngt-soba-orbit-controls></ngt-soba-orbit-controls> -->
    <!-- </ngt-canvas> -->
  `,
  standalone: true
})
export class PageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
