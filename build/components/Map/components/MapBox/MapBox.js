import * as React from 'react';
var MapBox = function (props) {
    return (React.createElement("div", { className: 'mapBox' },
        React.createElement("img", { src: 'assets/medicon/images/mapbox.png' }),
        React.createElement("div", { className: 'pcTitle' },
            React.createElement("img", { src: "assets/medicon/images/logo.png", alt: "" }),
            React.createElement("div", { className: 'pcTitle__title' },
                React.createElement("h3", null, "Poliklinika"),
                React.createElement("div", { className: 'pcTitle__title__subtitle' },
                    React.createElement("span", null, "Budejovicka"),
                    React.createElement("span", { className: 'pcTitle__title__subtitle__circles' },
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null))))),
        React.createElement("div", { className: 'mapBox__contacts' },
            React.createElement("div", { className: 'mapBox__contacts__item' },
                React.createElement("img", { src: 'assets/medicon/images/geo.png' }),
                React.createElement("div", null,
                    React.createElement("p", null, "Sokolovsk\u00E1 "),
                    React.createElement("p", null, "304 190 00 Praha 9"))),
            React.createElement("div", { className: 'mapBox__contacts__item' },
                React.createElement("img", { src: 'assets/medicon/images/phone.png' }),
                React.createElement("div", null,
                    React.createElement("p", null, "+420 266 006 211")))),
        React.createElement("div", { className: 'mapBox__buttons' },
            React.createElement("button", { className: 'btn btn--small btnFirst' }, "ambulance"),
            React.createElement("button", { className: 'btn btn--small btnFirst' }, "kuddy k nam"))));
};
export default MapBox;
//# sourceMappingURL=MapBox.js.map