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
var link_1 = require("next/link");
var react_1 = require("react");
function Customers() {
    var _a = react_1.useState([]), clientes = _a[0], setClientes = _a[1];
    var _b = react_1.useState(true), carregando = _b[0], setCarregando = _b[1];
    var _c = react_1.useState(null), erro = _c[0], setErro = _c[1];
    react_1.useEffect(function () {
        carregarClientes();
    }, []);
    function carregarClientes() {
        return __awaiter(this, void 0, void 0, function () {
            var token, response, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        setCarregando(true);
                        setErro(null);
                        token = localStorage.getItem("token");
                        return [4 /*yield*/, fetch("http://localhost:3000/customer", {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer " + token
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            if (response.status === 401) {
                                throw new Error("Sessão expirada ou usuário não autenticado.");
                            }
                            throw new Error("Erro ao buscar clientes (" + response.status + ")");
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        // 3. Garantir que os dados salvos sejam estritamente um Array
                        if (Array.isArray(data)) {
                            setClientes(data);
                        }
                        else if (data && Array.isArray(data.data)) {
                            // Caso a API retorne algo como { data: [...] }
                            setClientes(data.data);
                        }
                        else {
                            setClientes([]);
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        console.error("Erro na busca de clientes:", err_1);
                        setErro(err_1.message || "Erro ao carregar lista de clientes.");
                        setClientes([]); // Garante que clientes continue sendo array para não quebrar o .map
                        return [3 /*break*/, 5];
                    case 4:
                        setCarregando(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("main", { className: "min-h-screen bg-gray-100 p-8" },
        React.createElement("div", { className: "flex justify-between items-center mb-6" },
            React.createElement("h1", { className: "text-3xl font-bold" }, "Clientes"),
            React.createElement(link_1["default"], { href: "/customers/new" },
                React.createElement("button", { className: "bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition" }, "+ Novo Cliente"))),
        erro && (React.createElement("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" }, erro)),
        React.createElement("table", { className: "w-full bg-white rounded-xl shadow" },
            React.createElement("thead", null,
                React.createElement("tr", { className: "border-b text-black" },
                    React.createElement("th", { className: "p-4 text-left" }, "Nome"),
                    React.createElement("th", { className: "p-4 text-left" }, "Email"),
                    React.createElement("th", { className: "p-4 text-left" }, "Telefone"))),
            React.createElement("tbody", null, carregando ? (React.createElement("tr", null,
                React.createElement("td", { colSpan: 3, className: "p-4 text-center text-gray-500" }, "Carregando clientes..."))) : Array.isArray(clientes) && clientes.length > 0 ? (clientes.map(function (cliente) { return (React.createElement("tr", { key: cliente.id, className: "border-b text-black hover:bg-gray-50" },
                React.createElement("td", { className: "p-4" }, cliente.nome || cliente.name),
                React.createElement("td", { className: "p-4" }, cliente.email),
                React.createElement("td", { className: "p-4" }, cliente.telefone || cliente.phone))); })) : (React.createElement("tr", null,
                React.createElement("td", { colSpan: 3, className: "p-4 text-center text-gray-500" }, "Nenhum cliente encontrado.")))))));
}
exports["default"] = Customers;
