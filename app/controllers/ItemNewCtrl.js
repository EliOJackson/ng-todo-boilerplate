'use strict';

angular.module("TodoApp").controller("ItemNewCtrl", function ($scope) {

    $scope.newTask = {
        task: "",
        isCompleted: false,
        dueDate: "",
        assignedTo: "",
        location: "",
        urgency: "",
        dependencies: ""
    };

    $scope.addNewItem = () => {
        console.log('New Item to Add', $scope.newTask);
    };
});