import { NgtCanvas } from '@angular-three/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SceneComponent } from './reuse-gltf.component';

@Component({
  selector: 'sandbox-gltf',
  standalone: true,
  template: `
    <ngt-canvas shadows [dpr]="[1, 2]" initialLog [camera]="{ position: [0, 0, 150], fov: 40 }">
      <sandbox-scene></sandbox-scene>
    </ngt-canvas>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgtCanvas, SceneComponent]
})
export class ReuseGltfComponent {}
