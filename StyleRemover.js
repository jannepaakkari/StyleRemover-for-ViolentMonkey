// ==UserScript==
// @name         StyleRemover
// @namespace    https://github.com/jannepaakkari/StyleRemover-for-ViolentMonkey
// @match        *://*/*
// @grant        none
// @version      1.1
// @author       JanneP
// @description  This userscript removes style attributes and class names specified in the classNames array.
//               Meaning that content should be visible but styling etc. should be removed.
// ==/UserScript==

(() => {
  "use strict";

  const classNames = [];

  // If classNames is not set, the function wont be called to avoid unnecessary operations
  if (classNames.length > 0) {
    const removeStyleFromClassNames = () => {
      classNames.forEach((className) => {
        const elements = Array.from(document.getElementsByClassName(className));
        elements.map((element) => {
          element.removeAttribute("style");
          element.classList.remove(className);
        });
      });
    };

    // If the dom changes. If you know this wont be issue, you could disable this by commenting or removing observer related code below.
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          // Check if nodes have relevant classNames (to avoid calling removeStyleFromClassNames unneccessary)
          const shouldRemoveStyle = Array.from(mutation.addedNodes).some(
            (node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const hasRelevantClass = classNames.some((className) =>
                  node.classList.contains(className)
                );
                const containsRelevantClassDescendant = classNames.some(
                  (className) => node.querySelector(`.${className}`) !== null
                );
                return hasRelevantClass || containsRelevantClassDescendant;
              }
              return false;
            }
          );
          if (shouldRemoveStyle) {
            removeStyleFromClassNames();
          }
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    removeStyleFromClassNames();
  } else {
    console.warn("No-op: ClassNames are not set although the script was run.");
  }
})();
