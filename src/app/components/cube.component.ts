import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mesh } from 'three';
import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';

@Component({
  selector: 'app-cube',
  templateUrl: 'cube.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgtMeshModule, NgtBoxGeometryModule, NgtMeshStandardMaterialModule],
  standalone: true
})
export class CubeComponent {
  @Input() position?: NgtVector3;
  hovered = false;
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
    cube.rotation.x += 0.01;
  }
}
