import {
  breakpointsList,
  bootstrap5Breakpoints
} from './../defaults/defaultBreakpoints'
import breakpoints from '../Interfaces/breakpoints'

export function resolveBreakpoints (
  input: breakpoints | Array<breakpoints>
): Array<breakpoints> {
  if (Array.isArray(input)) {
    return input
  } else if (typeof input === 'object') {
    let found = 0
    for (let range in input as Object) {
      if (
        typeof range === 'object' &&
        (range as object).hasOwnProperty('max') &&
        typeof range['max'] === 'number'
      )
        found++
    }
    if (found >= 2) {
      return [input as breakpoints]
    } else {
      throw Error(
        'breakpoints object is invalid! Please specify at least 2 breakpoints. Plugin uses bootstrap 5 breakpoint set instead'
      )
    }
  }

  return [bootstrap5Breakpoints]
}

export function getBreakpointSet(input: String) {
  var inputString: string = input as string
  if (breakpointsList.has(inputString)) {
    return breakpointsList.get(inputString)
  } else {
    throw Error(
      'specified default breakpoints alias was not found! Please check your typing and if your custom breakpoint set has an alias defined'
    )
  }
}
// umwandeln der custom bp sets so das sie verarbeitet werden können