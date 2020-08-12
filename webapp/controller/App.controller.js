sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"ProyectoN1/SAPUI5/model/models"

], function (Controller, MessageToast, models) {
	"use strict";
	return Controller.extend("ProyectoN1.SAPUI5.controller.App", {
		onInit: function () {
			this.getView().setModel(models.createRecipient());
		},
		onOpenHeader:
		function () {
			this.getOwnerComponent().openHolaDialog();
		}

	});
});