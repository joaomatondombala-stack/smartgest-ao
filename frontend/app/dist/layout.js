"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var geistSans = google_1.Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});
var geistMono = google_1.Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});
exports.metadata = {
    title: "SmartGest AO",
    description: "Sistema de Gestão Empresarial"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "pt", className: geistSans.variable + " " + geistMono.variable + " h-full antialiased" },
        React.createElement("body", { className: "min-h-full flex flex-col" }, children)));
}
exports["default"] = RootLayout;
