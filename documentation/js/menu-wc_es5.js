'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">grade-air-case-v1 documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' : 'data-target="#xs-controllers-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' : 'id="xs-controllers-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' : 'data-target="#xs-injectables-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' : 'id="xs-injectables-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PlanesModule.html\" data-type=\"entity-link\" >PlanesModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-PlanesModule-04a77722b5c8991a38f7edfdcce661b13c092b72b3ef0744c30605185cccdaf4564dfa52ed5df20eb892f5edaa2f75114e4871f37fe76db5f0261a3c197d07a9"' : 'data-target="#xs-injectables-links-module-PlanesModule-04a77722b5c8991a38f7edfdcce661b13c092b72b3ef0744c30605185cccdaf4564dfa52ed5df20eb892f5edaa2f75114e4871f37fe76db5f0261a3c197d07a9"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PlanesModule-04a77722b5c8991a38f7edfdcce661b13c092b72b3ef0744c30605185cccdaf4564dfa52ed5df20eb892f5edaa2f75114e4871f37fe76db5f0261a3c197d07a9"' : 'id="xs-injectables-links-module-PlanesModule-04a77722b5c8991a38f7edfdcce661b13c092b72b3ef0744c30605185cccdaf4564dfa52ed5df20eb892f5edaa2f75114e4871f37fe76db5f0261a3c197d07a9"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PlanesService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PlanesService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PrismaService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PrismaService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PlaneTicketsModule.html\" data-type=\"entity-link\" >PlaneTicketsModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-PlaneTicketsModule-1619c0a879e77ee99b7d24209c7a880b188227f56d2f05d9f4aec51151a827eafe84a0482f96c9cadfb7c46748d74c7a13ff967d16ce46bce5863806d44dd77c"' : 'data-target="#xs-injectables-links-module-PlaneTicketsModule-1619c0a879e77ee99b7d24209c7a880b188227f56d2f05d9f4aec51151a827eafe84a0482f96c9cadfb7c46748d74c7a13ff967d16ce46bce5863806d44dd77c"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PlaneTicketsModule-1619c0a879e77ee99b7d24209c7a880b188227f56d2f05d9f4aec51151a827eafe84a0482f96c9cadfb7c46748d74c7a13ff967d16ce46bce5863806d44dd77c"' : 'id="xs-injectables-links-module-PlaneTicketsModule-1619c0a879e77ee99b7d24209c7a880b188227f56d2f05d9f4aec51151a827eafe84a0482f96c9cadfb7c46748d74c7a13ff967d16ce46bce5863806d44dd77c"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PlaneTicketsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PlaneTicketsService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PrismaService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PrismaService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UsersModule-19bc62f8450fd7a115be09a558701da774e1b06b755229f41b4a471b78f34ebf23c8104b3683a8e19b3c5e6a43329c89875d14f307b41dafb7d6cb6ce0423fc6"' : 'data-target="#xs-injectables-links-module-UsersModule-19bc62f8450fd7a115be09a558701da774e1b06b755229f41b4a471b78f34ebf23c8104b3683a8e19b3c5e6a43329c89875d14f307b41dafb7d6cb6ce0423fc6"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-19bc62f8450fd7a115be09a558701da774e1b06b755229f41b4a471b78f34ebf23c8104b3683a8e19b3c5e6a43329c89875d14f307b41dafb7d6cb6ce0423fc6"' : 'id="xs-injectables-links-module-UsersModule-19bc62f8450fd7a115be09a558701da774e1b06b755229f41b4a471b78f34ebf23c8104b3683a8e19b3c5e6a43329c89875d14f307b41dafb7d6cb6ce0423fc6"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PrismaService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PrismaService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePlaneInput.html\" data-type=\"entity-link\" >CreatePlaneInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePlaneInput-1.html\" data-type=\"entity-link\" >CreatePlaneInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePlaneTicketInput.html\" data-type=\"entity-link\" >CreatePlaneTicketInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePlaneTicketInput-1.html\" data-type=\"entity-link\" >CreatePlaneTicketInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserInput.html\" data-type=\"entity-link\" >CreateUserInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/IMutation.html\" data-type=\"entity-link\" >IMutation</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/IQuery.html\" data-type=\"entity-link\" >IQuery</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Plane.html\" data-type=\"entity-link\" >Plane</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Plane-1.html\" data-type=\"entity-link\" >Plane</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PlanesResolver.html\" data-type=\"entity-link\" >PlanesResolver</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PlaneTicket.html\" data-type=\"entity-link\" >PlaneTicket</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PlaneTicket-1.html\" data-type=\"entity-link\" >PlaneTicket</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PlaneTicketsResolver.html\" data-type=\"entity-link\" >PlaneTicketsResolver</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePlaneInput.html\" data-type=\"entity-link\" >UpdatePlaneInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePlaneInput-1.html\" data-type=\"entity-link\" >UpdatePlaneInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePlaneTicketInput.html\" data-type=\"entity-link\" >UpdatePlaneTicketInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePlaneTicketInput-1.html\" data-type=\"entity-link\" >UpdatePlaneTicketInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateUserInput.html\" data-type=\"entity-link\" >UpdateUserInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/User-1.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserCreateInput.html\" data-type=\"entity-link\" >UserCreateInput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UsersResolver.html\" data-type=\"entity-link\" >UsersResolver</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserUpdateInput.html\" data-type=\"entity-link\" >UserUpdateInput</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));