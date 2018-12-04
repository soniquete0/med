import * as React from 'react';
import ArrowIcon from '@source/partials/Svg/ArrowIcon/ArrowIcon';
export function BlogCard(props) {
    var title = props.title, text = props.text, color = props.color, img = props.img, special = props.special;
    if (special) {
        return (React.createElement("a", { href: "", className: 'blogCard blogCard--special' },
            title && React.createElement("h3", null, title),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("span", null,
                        React.createElement(ArrowIcon, { name: 'white' })),
                    "L\u00E9ka\u0159e ORL"),
                React.createElement("li", null,
                    React.createElement("span", null,
                        React.createElement(ArrowIcon, { name: 'white' })),
                    "L\u00E9ka\u0159 pracovn\u011B - l\u00E9ka\u0159sk\u00E9 slu\u017Eby"),
                React.createElement("li", null,
                    React.createElement("span", null,
                        React.createElement(ArrowIcon, { name: 'white' })),
                    "Dent\u00E1ln\u00ED hygienista/ka"))));
    }
    return (React.createElement("a", { href: "", className: 'blogCard' },
        title && React.createElement("h3", null, title),
        text && React.createElement("p", null, text),
        React.createElement("img", { src: img, alt: "" }),
        React.createElement("div", { className: 'blogCard__colorGradient', style: {
                background: "linear-gradient(\n      to bottom,\n      rgba(125, 185, 232, 0) 0%,\n      " + color + " 100%\n    )",
            } })));
}
//# sourceMappingURL=blogCard.js.map