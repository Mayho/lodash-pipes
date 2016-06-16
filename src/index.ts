import { Pipe } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniq'
})

export class UniquePipe {
  transform(valueArray) {
    return _.uniq(valueArray);
  }
}
