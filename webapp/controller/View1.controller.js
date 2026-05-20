sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit() {
        },

        onRowPress: function (oEvent){
            // Get the clicked row's binding context
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext("employees");

            // Read the id from the model
            var sId = oContext.getProperty("id");

            // Navigate to detail route, passing the id
            this.getOwnerComponent().getRouter().navTo("RouteEmpDetails", {
                employeeId: sId
            });
        }
    });
});