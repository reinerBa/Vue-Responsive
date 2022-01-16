import breakpoints from './breakpoints'
import Permission from './permission'

export default interface internalConfigStore {
  idIncrement: Number
  resizeListeners: Array<Function>
  init: Boolean
  _rPermissions: { [key: string]: breakpoints }
  allProperties: Permission
}
