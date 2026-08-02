'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
function Dashboard() {
    var _a = react_1.useState([]), clientes = _a[0], setClientes = _a[1];
    react_1.useEffect(function () {
        var token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/";
            return;
        }
        carregarClientes();
    }, []);
    function carregarClientes() {
        return __awaiter(this, void 0, void 0, function () {
            var token, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        token = localStorage.getItem("token");
                        return [4 /*yield*/, fetch("http://localhost:3000/customer", {
                                headers: {
                                    Authorization: "Bearer " + token
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log("Resposta da API:", data);
                        if (Array.isArray(data)) {
                            setClientes(data);
                        }
                        else {
                            console.error("A API não devolveu um array:", data);
                            setClientes([]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", { className: "flex min-h-screen" },
        React.createElement("aside", { className: "w-64 bg-blue-700 text-white p-6" },
            React.createElement("h1", { className: "text-2xl font-bold mb-8" }, "SmartGest AO"),
            React.createElement("nav", { className: "space-y-4" },
                React.createElement("p", null, "\uD83C\uDFE0 Dashboard"),
                React.createElement("p", null, "\uD83D\uDC65 Clientes"),
                React.createElement("p", null, "\uD83D\uDCE6 Produtos"),
                React.createElement("p", null, "\uD83D\uDED2 Vendas"),
                React.createElement("p", null, "\uD83D\uDCC4 Faturas"),
                React.createElement("p", null, "\uD83D\uDCCA Relat\u00F3rios"),
                React.createElement("p", null, "\u2699\uFE0F Configura\u00E7\u00F5es"),
                React.createElement("button", { className: "mt-8 w-full rounded-lg bg-red-600 p-3", onClick: function () {
                        localStorage.removeItem("token");
                        window.location.href = "/";
                    } }, "\uD83D\uDEAA Terminar sess\u00E3o"))),
        React.createElement("main", { className: "flex-1 bg-gray-100 p-8 text-black" },
            React.createElement("h2", { className: "text-3xl font-bold" }, "Bem-vindo ao SmartGest AO"),
            React.createElement("div", { className: "grid grid-cols-4 gap-6 mt-8" },
                React.createElement("div", { className: "bg-white rounded-xl shadow p-6 text-black" },
                    React.createElement("h3", null, "Total de Clientes"),
                    React.createElement("p", { className: "text-3xl font-bold mt-2" }, clientes.length)),
                React.createElement("div", { className: "bg-white rounded-xl shadow p-6 text-black" },
                    React.createElement("h3", null, "Produtos"),
                    React.createElement("p", { className: "text-3xl font-bold mt-2" }, "0")),
                React.createElement("div", { className: "bg-white rounded-xl shadow p-6 text-black" },
                    React.createElement("h3", null, "Vendas Hoje"),
                    React.createElement("p", { className: "text-3xl font-bold mt-2" }, "0")),
                React.createElement("div", { className: "bg-white rounded-xl shadow p-6 text-black" },
                    React.createElement("h3", null, "Receita"),
                    React.createElement("p", { className: "text-3xl font-bold mt-2" }, "0 Kz"))))));
}
exports["default"] = Dashboard;
