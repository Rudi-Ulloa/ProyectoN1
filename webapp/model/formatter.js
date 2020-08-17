sap.ui.define([], function () {

	return {
		statusText: function (sStatus) {
			var resBundler = this.getView().getModel("i18n").getResourceBundle();

			switch (sStatus) {
			case "A":
				return resBundler.getText("InvoiceStatusA");
			case "B":
				return resBundler.getText("InvoiceStatusB");
			case "C":
				return resBundler.getText("InvoiceStatusC");
			default:
				return sStatus;
			}
		},
		statusCust: function (sStatus) {
			var resCust = this.getView().getModel("i18n").getResourceBundle();

			switch (sStatus) {
			case "S":
				return resCust.getText("ContactTitleS");
			case "O":
				return resCust.getText("ContactTitleO");
			case "A":
				return resCust.getText("ContactTitleA");
			default:
				return sStatus;
			}
		}
	};
});