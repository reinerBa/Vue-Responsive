import breakpoints from '../Interfaces/breakpoints'

// Bootstrap 3 breakpoints
export const bootstrap3Breakpoints: breakpoints = {
  alias: 'bs3',
  xs: {
    min: -1,
    max: 767,
    class: 'bp-bs3-xs'
  },
  sm: {
    min: 768,
    max: 991,
    class: 'bp-bs3-sm'
  },
  md: {
    min: 992,
    max: 1199,
    class: 'bp-bs3-md'
  },
  lg: {
    min: 1200,
    max: Infinity,
    class: 'bp-bs3-lg'
  }
}

// Bootstrap 4 breakpoints
export const bootstrap4Breakpoints: breakpoints = {
  alias: 'bs4',
  xs: {
    min: -1,
    max: 543,
    class: 'bp-bs4-xs'
  },
  sm: {
    min: 544,
    max: 767,
    class: 'bp-bs4-sm'
  },
  md: {
    min: 768,
    max: 991,
    class: 'bp-bs4-md'
  },
  lg: {
    min: 992,
    max: 1199,
    class: 'bp-bs4-lg'
  },
  xl: {
    min: 1200,
    max: Infinity,
    class: 'bp-bs4-xl'
  }
}

// Bootstrap 5 breakpoints
// source: https://getbootstrap.com/docs/5.0/layout/breakpoints/
export const bootstrap5Breakpoints: breakpoints = {
  alias: 'bs5',
  xs: {
    min: -1,
    max: 575,
    class: 'bp-bs5-xs'
  },
  sm: {
    min: 576,
    max: 767,
    class: 'bp-bs5-sm'
  },
  md: {
    min: 768,
    max: 991,
    class: 'bp-bs5-md'
  },
  lg: {
    min: 992,
    max: 1199,
    class: 'bp-bs5-lg'
  },
  xl: {
    min: 1200,
    max: Infinity,
    class: 'bp-bs5-xl'
  },
  xxl: {
    min: 1400,
    max: Infinity,
    class: 'bp-bs5-xxl'
  }
}

export const breakpointsList: Map<string, breakpoints> = new Map<string, breakpoints>([
  ["bs3", bootstrap3Breakpoints],
  ["bs4", bootstrap4Breakpoints],
  ["bs5", bootstrap5Breakpoints]
])
