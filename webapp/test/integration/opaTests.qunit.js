/* Global QUnit*/

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	sap.ui.require([
		"ProyectoN1/SAPUI5/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});