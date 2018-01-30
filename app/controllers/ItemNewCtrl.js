'use strict';

angular.module("TodoApp").controller("ItemNewCtrl", function ($scope, $location, ItemFactory) {

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
        ItemFactory.addNewItem($scope.newTask)
        .then(data => {
            ItemFactory.getTodoItems()
            .then(allItems => {
                $location.url("/items/list");

            });
        });
    };
});