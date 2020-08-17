sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function (Controller, JSONModel, formatter) {
	
	return Controller.extend("ProyectoN1.SAPUI5.controller.CustomerList", {
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "USD"
			});
			this.getView().setModel(oViewModel, "view");
		}
	
	});
});