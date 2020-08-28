sap.ui.define([
	"sap/ui/core/UIComponent",
	"ProyectoN1/SAPUI5/model/models",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HolaDialog"

], function (UIComponent, models, ResourceModel, HolaDialog) {

	return UIComponent.extend("ProyectoN1.SAPUI5.Component", {

		metadata: {
			manifest: "json"
		},
		init: function () {

			UIComponent.prototype.init.apply(this, arguments);
			this.setModel(models.createRecipient());

			var i18nModel = new ResourceModel({
				bundleName: "ProyectoN1.SAPUI5.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
			this._holaDialog = new HolaDialog(this.getRootControl());
		},

		exit: function () {
			this._holaDialog.destroy();
			delete this._holaDialog;
		},
		
		openHolaDialog : function(){
			this._holaDialog.open();
		}
		
	});
});