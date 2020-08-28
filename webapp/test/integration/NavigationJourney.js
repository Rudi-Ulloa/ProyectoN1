sap.ui.define([
	"ProyectoN1/SAPUI5/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
], function (mockserver) {
	QUnit.module("Navigation");

	opaTest("Abre Hola Dialogo", function (Given, When, Then) {
		//Inicializa MockServer
		mockserver.init();

		//Argumentos
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "ProyectoN1.SAPUI5"
			}
		});
		//Acciones
		When.onTheAppPage.iSayDialogButton();

		//Aserciones
		Then.onTheAppPage.iSeeHolaDialog();

		//Limpiar
		Then.iTeardownMyApp();
	});
});