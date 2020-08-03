sap.ui.define([
		"sap/ui/core/ComponentContainer"
	],
	function (ComponentContainer) {

		new ComponentContainer({
			name: "ProyectoN1.SAPUI5",
			setting : {
				id: "ProyectoN1"
			},
			async: true
		}).placeAt("content");
	});