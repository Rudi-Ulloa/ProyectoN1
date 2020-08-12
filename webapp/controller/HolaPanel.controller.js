sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"

], function (Controller, MessageToast, Fragment) {
	"use strict";
	return Controller.extend("ProyectoN1.SAPUI5.controller.HolaPnel", {
		onInit: function () {

		},

		onShowHola: function () {
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recip/name");
			var sMsg = sHello.concat(" ").concat(sName);

			MessageToast.show(sMsg);
			/*eslint-disable no-alert*/
			//alert("Hola mundo");
			/*eslint-enable no-alert*/
		},

		onOpenDialog: function () {
			this.getOwnerComponent().openHolaDialog();
		}

	});
});