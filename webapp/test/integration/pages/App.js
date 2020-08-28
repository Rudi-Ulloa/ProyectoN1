sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	var sViewName = "ProyectoN1.SAPUI5.view.HolaPanel";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iSayDialogButton: function () {
					return this.waitFor({
						id: "holaDialogButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "No se encuentra 'Hola Dialogo boton' en el Panel View"
					});
				}
			},
			assertions: {
				iSeeHolaDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							Opa5.assert.ok(true, "El Dialogo esta abierto");
						},
						errorMessage: "No se encontro Dialogo"
					});
				}
			}
		}
	});
});