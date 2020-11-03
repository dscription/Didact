// // const element = <h1 title="foo">Hello</h1>;
// const element = {
//   type: 'h1',
//   props: {
//     title: 'foo',
//     children: 'Hello',
//   },
// };

// // const container = document.getElementById('root');
// const container = document.getElementById('root');

// // ReactDOM.render(element, container);
// const node = document.createElement(element.type);
// node['title'] = element.props.title;

// const text = document.createTextNode('');
// text['nodeValue'] = element.props.children;

// node.append(text);
// container.appendChild(node);

// Step 1: The createElement Function

// The react createElement() function
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

// React doesn’t wrap primitive values or create empty arrays when there aren’t children, but we do it because it will simplify our code, and for our library we prefer simple code than performant code.
function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element,container) {
  // TODO create dom nodes
}

const Didact = {
  createElement,
};

/** @jsx Didact.createElement */
// If we have a comment like this one, when babel transpiles the JSX it will use the function we define.

// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// );

const element = Didact.createElement(
  'div',
  { id: 'foo' },
  Didact.createElement('a', null, 'bar'),
  Didact.createElement('b')
);

const container = document.getElementById('root');
Didact.render(element, container);
