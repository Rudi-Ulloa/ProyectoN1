sap.ui.define([
	"ProyectoN1/SAPUI5/model/formatter",
	"sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
	
	QUnit.module("Formatting functions", {
		beforeEach: function () {
			this._oResourceModel = new ResourceModel({
				bundleUrl: sap.ui.require.toUrl("ProyectoN1/SAPUI5") + "/i18n/i18n.properties"
			});
		},
		afterEach: function () {
			this._oResourceModel.destroy();
		}
	});
	QUnit.test("Devolver el texto traducido", function (assert) {
		
		var oModel = this.stub();
		oModel.withArgs("i18n").returns(this._oResourceModel);
		var oViewStub = {
			getModel: oModel
		};
		var oControllerStub = {
			getView: this.stub().returns(oViewStub)
		};

		var fnformat = formatter.statusText.bind(oControllerStub);
		//assert
		assert.strictEqual(fnformat("A"), "Nuevo", "El Largo para texto A es correcto");
		assert.strictEqual(fnformat("B"), "En Proceso", "El Largo para texto B es correcto");
		assert.strictEqual(fnformat("C"), "Terminado", "El Largo para texto C es correcto");
	});
});