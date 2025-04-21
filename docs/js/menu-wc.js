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
                    <a href="index.html" data-type="index-link">login documentation</a>
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
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AvisoLegalComponent.html" data-type="entity-link" >AvisoLegalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BackOfficeComponent.html" data-type="entity-link" >BackOfficeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ComunicacionComponent.html" data-type="entity-link" >ComunicacionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ComunicacionDirectaComponent.html" data-type="entity-link" >ComunicacionDirectaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DatosTCPComponent.html" data-type="entity-link" >DatosTCPComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorComponent.html" data-type="entity-link" >ErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FeedbackComponent.html" data-type="entity-link" >FeedbackComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FichaComponent.html" data-type="entity-link" >FichaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FichaInfoComponent.html" data-type="entity-link" >FichaInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FichaPlanEmergenciaComponent.html" data-type="entity-link" >FichaPlanEmergenciaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FichaUserInfoComponent.html" data-type="entity-link" >FichaUserInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormulariosComponent.html" data-type="entity-link" >FormulariosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LayoutComponent.html" data-type="entity-link" >LayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LinkerComponent.html" data-type="entity-link" >LinkerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NominaComponent.html" data-type="entity-link" >NominaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NominasVaciasComponent.html" data-type="entity-link" >NominasVaciasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PeticionVacacionesComponent.html" data-type="entity-link" >PeticionVacacionesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReclamacionNominaComponent.html" data-type="entity-link" >ReclamacionNominaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RespuestasComponent.html" data-type="entity-link" >RespuestasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SendRespuestaComponent.html" data-type="entity-link" >SendRespuestaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SolicitudComponent.html" data-type="entity-link" >SolicitudComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableComponent.html" data-type="entity-link" >TableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserInfoComponent.html" data-type="entity-link" >UserInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VacacionesComponent.html" data-type="entity-link" >VacacionesComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ResponseSolicitud.html" data-type="entity-link" >ResponseSolicitud</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BackOfficeService.html" data-type="entity-link" >BackOfficeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommunicationService.html" data-type="entity-link" >CommunicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatosTcpService.html" data-type="entity-link" >DatosTcpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DownloadFileService.html" data-type="entity-link" >DownloadFileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnviromentService.html" data-type="entity-link" >EnviromentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FichaService.html" data-type="entity-link" >FichaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MainMenuService.html" data-type="entity-link" >MainMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NominaService.html" data-type="entity-link" >NominaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PingService.html" data-type="entity-link" >PingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link" >RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SendRespuestaService.html" data-type="entity-link" >SendRespuestaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SolicitudService.html" data-type="entity-link" >SolicitudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserInfoService.html" data-type="entity-link" >UserInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VacacionesService.html" data-type="entity-link" >VacacionesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Api.html" data-type="entity-link" >Api</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnviromentConfig.html" data-type="entity-link" >EnviromentConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iAuthenticate.html" data-type="entity-link" >iAuthenticate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iCabeceraList.html" data-type="entity-link" >iCabeceraList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iCabecerasList.html" data-type="entity-link" >iCabecerasList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iCommunicationForm.html" data-type="entity-link" >iCommunicationForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IContentType.html" data-type="entity-link" >IContentType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iEstado.html" data-type="entity-link" >iEstado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iEstadoForm.html" data-type="entity-link" >iEstadoForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iFichaForms.html" data-type="entity-link" >iFichaForms</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iFichaPersonal.html" data-type="entity-link" >iFichaPersonal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iFile.html" data-type="entity-link" >iFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iFileInfo.html" data-type="entity-link" >iFileInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iIdSolicitud.html" data-type="entity-link" >iIdSolicitud</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iLink.html" data-type="entity-link" >iLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iNomina.html" data-type="entity-link" >iNomina</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iNominaForm.html" data-type="entity-link" >iNominaForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iResponsable.html" data-type="entity-link" >iResponsable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResponseCabecera.html" data-type="entity-link" >IResponseCabecera</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iResponseCommunication.html" data-type="entity-link" >iResponseCommunication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResponseFicha.html" data-type="entity-link" >IResponseFicha</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iResponseNomina.html" data-type="entity-link" >iResponseNomina</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iResponseVacaciones.html" data-type="entity-link" >iResponseVacaciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iRespuesta.html" data-type="entity-link" >iRespuesta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iSendRespuesta.html" data-type="entity-link" >iSendRespuesta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iSolicitantesTCP.html" data-type="entity-link" >iSolicitantesTCP</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iTipoSolicitud.html" data-type="entity-link" >iTipoSolicitud</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iUser.html" data-type="entity-link" >iUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iUserMe.html" data-type="entity-link" >iUserMe</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iVacacionesForm.html" data-type="entity-link" >iVacacionesForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalState.html" data-type="entity-link" >ModalState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
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
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});