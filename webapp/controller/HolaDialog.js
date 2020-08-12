sap.ui.define([
	"sap/ui/core/Fragment",
	"sap/ui/base/ManagedObject"
], function (Fragment, ManagedObject) {

	return ManagedObject.extend("ProyectoN1.SAPUI5.controller.HolaDialog", {
		
		constructor: function (oView) {
			this._oView = oView;
		},

		exit: function () {
			delete this._oView;
		},

		open: function () {
			var oView = this._oView;

			if (!oView.byId("HolaDialog")) {
				var oFragmentController = {
					onCloseDialog: function () {
						oView.byId("HolaDialog").close();
					}
				};
				Fragment.load({
					id: oView.getId(),
					name: "ProyectoN1.SAPUI5.view.HolaDialog",
					controller: oFragmentController
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("HolaDialog").open();
			}
		}

	});
});