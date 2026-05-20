sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2.controller.DetailView", {
        onInit: function (){
            this.getOwnerComponent().getRouter()
                .getRoute("RouteEmpDetails")
                .attachMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent){
            // Get the employeeId from the URL 
            var sId = oEvent.getParameter("arguments").employeeId;

            // Find the matching employee index in the model
            var oModel = this.getOwnerComponent().getModel("employees");
            var aEmployees = oModel.getProperty("/employees");

            var iIndex = aEmployees.findIndex(function (emp) {
                return String(emp.id) === String(sId);
            });

            // Bind this view to that employee's path in the model
            this.getView().bindElement({
                path: "/employees/" + iIndex,
                model: "employees"
            })
        },

        onNavBack: function (){
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        }
    });
});