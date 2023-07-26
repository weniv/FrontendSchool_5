function createElement(tag, props, ...children) {

    if (typeof tag === 'function') {
        return tag.apply(null, [props, ...children]);
    }

    return { tag, props, children };
}

function render(element, container) {
    container.append(element);
}

export { createElement, render }