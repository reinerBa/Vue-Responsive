import breakpointRange from './breakpointRange'
export default interface breakpoints {
  alias: string
  xs?: breakpointRange
  sm: breakpointRange
  md: breakpointRange
  lg: breakpointRange
  xl?: breakpointRange
  xxl?: breakpointRange
  [key: string]: breakpointRange | string
}
