webpackHotUpdate("static\\development\\pages\\account.js",{

/***/ "./components/Account/AccountHeader.js":
/*!*********************************************!*\
  !*** ./components/Account/AccountHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatDate */ "./utils/formatDate.js");
var _jsxFileName = "c:\\webroots\\react-reserve\\components\\Account\\AccountHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function AccountHeader(_ref) {
  var role = _ref.role,
      email = _ref.email,
      name = _ref.name,
      createdAt = _ref.createdAt;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    secondary: true,
    inverted: true,
    color: "violet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    color: "teal",
    size: "large",
    ribbon: true,
    icon: "privacy",
    style: {
      textTransform: "capitalize"
    },
    content: role,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    inverted: true,
    textAlign: "center",
    as: "h1",
    icon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), name, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, email), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Joined ", Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__["default"])(createdAt))));
}

/* harmony default export */ __webpack_exports__["default"] = (AccountHeader);

/***/ }),

/***/ "./components/Account/AccountOrders.js":
/*!*********************************************!*\
  !*** ./components/Account/AccountOrders.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatDate */ "./utils/formatDate.js");
var _jsxFileName = "c:\\webroots\\react-reserve\\components\\Account\\AccountOrders.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AccountOrders(_ref) {
  var orders = _ref.orders;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function mapOrdersToPanels(orders) {
    return orders.map(function (order) {
      return {
        key: order._id,
        title: {
          content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
            color: "blue",
            content: Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_3__["default"])(order.createdAt),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          })
        },
        content: {
          content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
            as: "h3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, "Total: $", order.total, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
            content: order.email,
            icon: "mail",
            basic: true,
            horizontal: true,
            style: {
              marginLeft: "1em"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, order.products.map(function (p) {
            return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              avatar: true,
              src: p.product.mediaUrl,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            }, p.product.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }, p.quantity, " \xB7 $", p.product.price)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
              floated: "right",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
              tag: true,
              color: "red",
              size: "tiny",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            }, p.product.sku)));
          })))
        }
      };
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "folder open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "Order History"), orders.length === 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    inverted: true,
    tertiary: true,
    color: "grey",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    icon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "copy outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), "No past orders."), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return router.push("/");
    },
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "View Products"))) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    fluid: true,
    styled: true,
    exclusive: false,
    panels: mapOrdersToPanels(orders),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AccountOrders);

/***/ }),

/***/ "./components/Account/AccountPermissions.js":
/*!**************************************************!*\
  !*** ./components/Account/AccountPermissions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/formatDate */ "./utils/formatDate.js");



var _jsxFileName = "c:\\webroots\\react-reserve\\components\\Account\\AccountPermissions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







function AccountPermissions() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      users = _React$useState2[0],
      setUsers = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    getUsers();
  }, []);

  function getUsers() {
    return _getUsers.apply(this, arguments);
  }

  function _getUsers() {
    _getUsers = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var url, token, payload, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__["default"], "/api/users");
              token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get("token");
              payload = {
                headers: {
                  Authorization: token
                }
              };
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url, payload);

            case 5:
              response = _context.sent;
              setUsers(response.data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getUsers.apply(this, arguments);
  }

  return __jsx("div", {
    style: {
      margin: "2em 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    name: "settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "User Permissions"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    compact: true,
    celled: true,
    definition: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Email"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Joined"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Updated"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Role"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, users.map(function (user) {
    return __jsx(UserPermission, {
      key: user._id,
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    });
  }))));
}

function UserPermission(_ref) {
  var user = _ref.user;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(user.role === "admin"),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      admin = _React$useState4[0],
      setAdmin = _React$useState4[1];

  var isFirstRun = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(true);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    updatePermission();
  }, [admin]);

  function handleChangePermission() {
    setAdmin(function (prevState) {
      return !prevState;
    });
  }

  function updatePermission() {
    return _updatePermission.apply(this, arguments);
  }

  function _updatePermission() {
    _updatePermission = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var url, payload;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__["default"], "/api/account");
              payload = {
                _id: user._id,
                role: admin ? "admin" : "user"
              };
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(url, payload);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _updatePermission.apply(this, arguments);
  }

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Cell, {
    collapsing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    checked: admin,
    toggle: true,
    onChange: handleChangePermission,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, user.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, user.email), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_8__["default"])(user.createdAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_8__["default"])(user.updatedAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, admin ? "admin" : "user"));
}

/* harmony default export */ __webpack_exports__["default"] = (AccountPermissions);

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Account_AccountHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Account/AccountHeader */ "./components/Account/AccountHeader.js");
/* harmony import */ var _components_Account_AccountOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Account/AccountOrders */ "./components/Account/AccountOrders.js");
/* harmony import */ var _components_Account_AccountPermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Account/AccountPermissions */ "./components/Account/AccountPermissions.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "c:\\webroots\\react-reserve\\pages\\account.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





 //import formatDate from "../../utils/formatDate";

function Account(_ref) {
  var user = _ref.user,
      orders = _ref.orders;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Account_AccountHeader__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, user, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx(_components_Account_AccountOrders__WEBPACK_IMPORTED_MODULE_5__["default"], {
    orders: orders,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), user.role === "root" && __jsx(_components_Account_AccountPermissions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

Account.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _parseCookies, token, payload, url, response;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _parseCookies = Object(nookies__WEBPACK_IMPORTED_MODULE_7__["parseCookies"])(ctx), token = _parseCookies.token;

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              orders: []
            });

          case 3:
            payload = {
              headers: {
                Authorization: token
              }
            };
            url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__["default"], "/api/orders");
            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url, payload);

          case 7:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./utils/formatDate.js":
/*!*****************************!*\
  !*** ./utils/formatDate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US');
}

/* harmony default export */ __webpack_exports__["default"] = (formatDate);

/***/ })

})
//# sourceMappingURL=account.js.a68be668e8a532d81d1b.hot-update.js.map