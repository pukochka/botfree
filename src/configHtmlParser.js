export default function (dom) {
  const DOM_ELEMENTS = [];
  let FINAL_ELEMENT = "";

  function DomCreator(dom, parent) {
    for (const { element, classes, text, childrens } of dom) {
      let el = document.createElement(element);
      el.classList.add(classes);
      el.textContent = text;
      if (parent) parent.append(el);
      else DOM_ELEMENTS.push(el);
      if (childrens.length) DomCreator(childrens, el);
    }
  }

  DomCreator(dom, (parent = null));

  for (let str of DOM_ELEMENTS) {
    FINAL_ELEMENT += str.outerHTML;
  }
  return FINAL_ELEMENT;
}
