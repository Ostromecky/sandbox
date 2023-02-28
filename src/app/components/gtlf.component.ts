import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend, NgtBeforeRenderEvent, NgtObjectMap } from 'angular-three';
import { injectNgtsGLTFLoader } from 'angular-three-soba/loaders';
import { Observable } from 'rxjs';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

extend({ Mesh, Group, MeshStandardMaterial });

interface ShoeGLTF extends NgtObjectMap {
  nodes: {
    [key in 'shoe' | 'shoe_1' | 'shoe_2' | 'shoe_3' | 'shoe_4' | 'shoe_5' | 'shoe_6' | 'shoe_7']: THREE.Mesh;
  };
  materials: {
    [key in 'laces' | 'mesh' | 'caps' | 'inner' | 'sole' | 'stripes' | 'band' | 'patch']: THREE.MeshStandardMaterial;
  };
}

@Component({
  selector: 'sandbox-shoe',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ng-container *ngIf="shoe$ | async as shoe">
      <ngt-group [ngtObjectPassThrough]="this" (beforeRender)="onBeforeRender($any($event))">
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe.geometry" [material]="shoe.materials.laces" />
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_1.geometry">
          <ngt-mesh-standard-material
            color="tomato"
            [aoMap]="shoe.materials.mesh.aoMap"
            [normalMap]="shoe.materials.mesh.normalMap"
            [roughnessMap]="shoe.materials.mesh.roughnessMap"
            [metalnessMap]="shoe.materials.mesh.metalnessMap"
            envMapIntensity="0.8">
          </ngt-mesh-standard-material>
        </ngt-mesh>
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_2.geometry" [material]="shoe.materials.caps" />
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_3.geometry" [material]="shoe.materials.inner" />
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_4.geometry" [material]="shoe.materials.sole" />
        <ngt-mesh
          castShadow
          receiveShadow
          [geometry]="shoe.nodes.shoe_5.geometry"
          [material]="shoe.materials.stripes" />
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_6.geometry" [material]="shoe.materials.band" />
        <ngt-mesh castShadow receiveShadow [geometry]="shoe.nodes.shoe_7.geometry" [material]="shoe.materials.patch" />
      </ngt-group>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, AsyncPipe]
})
export class ShoeComponent {
  readonly shoe$ = injectNgtsGLTFLoader('assets/shoe.gltf') as Observable<GLTF & ShoeGLTF>;

  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    // event.object.rotation.x += 0.01;
    event.object.rotation.y += 0.01;
  }
}
