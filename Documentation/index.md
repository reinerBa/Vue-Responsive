---
permalink: "/Documentation/"
---

# Documentation for Vue-Responsive
(WIP)

## Introduction

This Plugin adds the ability to hide or show html-elements relative to the screen width. To specify when an element should be hidden it's necessary to define screen-widths as hidden or visible. As default everything is visible, possible parameters for bootstrap 4 breakpoints are:

- **hiden-all**: This parameter hides the element in every resolution and has to be overriden in certain widths. Which results in combinations like: `"['hidden-all','xs']"` => The element is only visible at an extra small width (smartphones).

- **hidden-xs**: The element is only hidden when the screen width is extra small but not on any larger width.

- **hidden-sm**: The element is only hidden when the screen width is small but not on any smaller or larger width.

- **hidden-md**: The element is only hidden when the screen width is medium but not on any smaller or larger width.

- **hidden-lg**: The element is only hidden when the screen width is large but not on any smaller or larger width.

- **hidden-xl**: The element is only hidden when the screen width is extra large but not on any smaller width. This parameter is not available when using bootstrap 3 breakpoints.

- The parameter name without hidden makes the element visible, hidden-all is necessary in that case.
  
Of course the parameters can be combined. For instance:

```javascript

<p v-responsiveness ="['hidden-sm',  'hidden-md', 'hidden-lg', 'hidden-xl']">
  Text for extra small
</p>
    
```
