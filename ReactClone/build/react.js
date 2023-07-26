function createElement(tag, props, ...children) {
  if (typeof tag === 'function') {
    return tag(null, props, ...children);
  }
  return {
    tag,
    props,
    children
  };
}
function renderDom(vDom) {
  if (typeof vDom === 'string') {
    return document.createTextNode(vDom);
  }
  const el = document.createElement(vDom.tag);
  console.log(vDom);
  vDom.children.map(element => {
    // console.log(element);
    return renderDom(element);
  }).forEach(realEl => {
    el.append(realEl);
  });
  return el;
}
function render(element, container) {
  container.append(renderDom(element));
}
export { createElement, render };