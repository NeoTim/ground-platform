/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Layer } from '../../shared/models/layer.model';
import { List } from 'immutable';

@Component({
  selector: 'ground-layer-list',
  templateUrl: './layer-list.component.html',
})
export class LayerListComponent {
  readonly layers$: Observable<List<Layer>>;
  readonly lang: string;

  constructor(private projectService: ProjectService) {
    // TODO: Make dynamic to support i18n.
    this.lang = 'en';
    this.layers$ = projectService
      .getActiveProject$()
      .pipe(map(project => List(project.layers.valueSeq().toArray())));
  }
}