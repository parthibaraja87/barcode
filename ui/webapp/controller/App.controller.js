sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ndc/BarcodeScanner"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, BarcodeScanner) {
		"use strict";

		return Controller.extend("ui.controller.App", {
			onInit: function () {

            },
             onpress: function () {
                sap.ndc.BarcodeScanner.scan(
                    function (mResult) {
                        alert("We got a bar code\n" +
                            "Result: " + mResult.text + "\n" +
                            "Format: " + mResult.format + "\n" +
                            "Cancelled: " + mResult.cancelled);
                    },
                    function (Error) {
                        alert("Scanning failed: " + Error);
                    }
                );
            }
		});
	});
