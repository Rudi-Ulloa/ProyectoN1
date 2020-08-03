sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"

], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("ProyectoN1.SAPUI5.controller.App", {
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
		}
	});
});