"use strict";


angular.module("TodoApp").controller("ItemDetailCtrl", function ($scope, ItemFactory, $routeParams) {


    ItemFactory.getTodoItems()
        .then(somedata => {
            let todoItems = Object.values(somedata.data);
            $scope.selectedItem = todoItems.find((item) => {
                return item.id === $routeParams.id;
            });
        });
});