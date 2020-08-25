sap.ui.define([
		"../localService/mockserver"
	],
	function (mockservice) {
		//Iniciualizand mock Server
		mockservice.init();

		//Inicializar componente html
		sap.ui.require(["sap/ui/core/ComponentSupport"]);
	});