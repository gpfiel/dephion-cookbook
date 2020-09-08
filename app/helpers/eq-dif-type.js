import { helper } from '@ember/component/helper';

export function eqDifType(params) {
  return params[0] == params[1]
}

export default helper(eqDifType);
