'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">grade-air-case-v1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' : 'data-target="#xs-controllers-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' :
                                            'id="xs-controllers-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' : 'data-target="#xs-injectables-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' :
                                        'id="xs-injectables-links-module-AppModule-545f6b27b920107b9b904b162c9af01875b7534e29976e46a57340ae5faafe1474efff26825ab0bb92ae1a7caaf7e375f62a32c59950752e232c85405f9d14ad"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlanesModule.html" data-type="entity-link" >PlanesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PlanesModule-04a77722b5c8991a38f7edfdcce661b13c092b72b3ef0744c30605185cccdaf4564dfa52ed5df20eb892f5edaa2f75114e4871f37fe76db5f0261a3c197d07a9"' : 'data-target="#xs-injectables-links-module-PlanesModule-04a77722b5c8991a38f7edfdcce661b13c092b72b3ef0744c30605185cccdaf4564dfa52ed5df20eb892f5edaa2f75114e4871f37fe76db5f0261a3c197d07a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlanesModule-04a77722b5c8991a38f7edfdcce661b13c092b72b3ef0744c30605185cccdaf4564dfa52ed5df20eb892f5edaa2f75114e4871f37fe76db5f0261a3c197d07a9"' :
                                        'id="xs-injectables-links-module-PlanesModule-04a77722b5c8991a38f7edfdcce661b13c092b72b3ef0744c30605185cccdaf4564dfa52ed5df20eb892f5edaa2f75114e4871f37fe76db5f0261a3c197d07a9"' }>
                                        <li class="link">
                                            <a href="injectables/PlanesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlanesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlaneTicketsModule.html" data-type="entity-link" >PlaneTicketsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PlaneTicketsModule-1619c0a879e77ee99b7d24209c7a880b188227f56d2f05d9f4aec51151a827eafe84a0482f96c9cadfb7c46748d74c7a13ff967d16ce46bce5863806d44dd77c"' : 'data-target="#xs-injectables-links-module-PlaneTicketsModule-1619c0a879e77ee99b7d24209c7a880b188227f56d2f05d9f4aec51151a827eafe84a0482f96c9cadfb7c46748d74c7a13ff967d16ce46bce5863806d44dd77c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlaneTicketsModule-1619c0a879e77ee99b7d24209c7a880b188227f56d2f05d9f4aec51151a827eafe84a0482f96c9cadfb7c46748d74c7a13ff967d16ce46bce5863806d44dd77c"' :
                                        'id="xs-injectables-links-module-PlaneTicketsModule-1619c0a879e77ee99b7d24209c7a880b188227f56d2f05d9f4aec51151a827eafe84a0482f96c9cadfb7c46748d74c7a13ff967d16ce46bce5863806d44dd77c"' }>
                                        <li class="link">
                                            <a href="injectables/PlaneTicketsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaneTicketsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-19bc62f8450fd7a115be09a558701da774e1b06b755229f41b4a471b78f34ebf23c8104b3683a8e19b3c5e6a43329c89875d14f307b41dafb7d6cb6ce0423fc6"' : 'data-target="#xs-injectables-links-module-UsersModule-19bc62f8450fd7a115be09a558701da774e1b06b755229f41b4a471b78f34ebf23c8104b3683a8e19b3c5e6a43329c89875d14f307b41dafb7d6cb6ce0423fc6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-19bc62f8450fd7a115be09a558701da774e1b06b755229f41b4a471b78f34ebf23c8104b3683a8e19b3c5e6a43329c89875d14f307b41dafb7d6cb6ce0423fc6"' :
                                        'id="xs-injectables-links-module-UsersModule-19bc62f8450fd7a115be09a558701da774e1b06b755229f41b4a471b78f34ebf23c8104b3683a8e19b3c5e6a43329c89875d14f307b41dafb7d6cb6ce0423fc6"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePlaneInput.html" data-type="entity-link" >CreatePlaneInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePlaneInput-1.html" data-type="entity-link" >CreatePlaneInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePlaneTicketInput.html" data-type="entity-link" >CreatePlaneTicketInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePlaneTicketInput-1.html" data-type="entity-link" >CreatePlaneTicketInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserInput.html" data-type="entity-link" >CreateUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/IMutation.html" data-type="entity-link" >IMutation</a>
                            </li>
                            <li class="link">
                                <a href="classes/IQuery.html" data-type="entity-link" >IQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/Plane.html" data-type="entity-link" >Plane</a>
                            </li>
                            <li class="link">
                                <a href="classes/Plane-1.html" data-type="entity-link" >Plane</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlanesResolver.html" data-type="entity-link" >PlanesResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaneTicket.html" data-type="entity-link" >PlaneTicket</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaneTicket-1.html" data-type="entity-link" >PlaneTicket</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaneTicketsResolver.html" data-type="entity-link" >PlaneTicketsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePlaneInput.html" data-type="entity-link" >UpdatePlaneInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePlaneInput-1.html" data-type="entity-link" >UpdatePlaneInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePlaneTicketInput.html" data-type="entity-link" >UpdatePlaneTicketInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePlaneTicketInput-1.html" data-type="entity-link" >UpdatePlaneTicketInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserInput.html" data-type="entity-link" >UpdateUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateInput.html" data-type="entity-link" >UserCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersResolver.html" data-type="entity-link" >UsersResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateInput.html" data-type="entity-link" >UserUpdateInput</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});