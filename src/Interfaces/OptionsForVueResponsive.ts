import breakpoints from "./breakpoints";

export interface OptionsForVueResponsive {
    default: String
    breakpoints?:  breakpoints | Array<breakpoints>
    setClasses: Boolean
}

export default OptionsForVueResponsive
