/**
 * functions of vue directives in version 3
 * source: https://v3.vuejs.org/guide/migration/custom-directives.html#_3-x-syntax
 * Hook description source: https://v3.vuejs.org/guide/custom-directive.html#hook-functions
 */

import { DirectiveBinding, VNode, Directive } from '@vue/runtime-core'
import { VueElement } from '@vue/runtime-dom'

export default interface vueDirective {
  /**
   * new @vue3
   * This is called before the element's
   * attributes or event listeners are applied.
   * 
   * Called before the bound element's attributes or event 
   * listeners are applied. This is useful in cases where the 
   * directive needs to attach event listeners that must be 
   * called before normal v-on event listeners.
   */
  created(el: VueElement, binding: DirectiveBinding, vNode: VNode): void
  
  // replaced: bind
  beforeMount(el: VueElement, binding: DirectiveBinding, vNode: VNode): void
  
  // replaced: inserted
  mounted(el: VueElement, binding: DirectiveBinding, vNode: VNode): void
  
  // new @vue3
  beforeUpdate(
    el: VueElement,
    binding: DirectiveBinding,
    vNode: VNode,
    prevNode: VNode
  ): void 

  // removed: update()

  /**
   * replaced: componentUpdated
   * called after the containing component's VNode and
   * the VNodes of its children have updated.
   * @param el
   * @param binding
   * @param vNode
   */
  updated(
    el: VueElement,
    binding: DirectiveBinding,
    vNode: VNode,
    prevNode: VNode
  ): void

  /**
   * new @vue3
   * called before the bound element's parent
   * component is unmounted
   * @param el
   * @param binding
   * @param vNode
   */
  beforeUnmount(el: VueElement, binding: DirectiveBinding, vNode: VNode): void 

  /**
   * replaced: unbind
   * called only once, when the directive is unbound from
   * the element and the parent component is unmounted.
   * @param el
   * @param binding
   * @param vNode
   */
  unmounted(el: VueElement, binding: DirectiveBinding, vNode: VNode): void
}
