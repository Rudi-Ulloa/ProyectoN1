sap.ui.define([
		"sap/ui/core/UIComponent",
		"ProyectoN1/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel"

	], function (UIComponent, models, ResourceModel) {

		return UIComponent.extend("ProyectoN1.SAPUI5.Component", {

			matadata: {
				manifest: "json"

			},

			Init: function () {

				UIComponent.prototype.init.apply(this, arguments);
				this.setModel(models.createRecipient());

				var i18nModel = new ResourceModel({
					bundleName: "ProyectoN1.SAPUI5.i18n.i18n"
				});
				this.setModel(i18nModel, "i18n");
			}

		});
	}

);