"use strict";


angular.module("TodoApp").controller("ItemDetailCtrl", function ($scope, ItemFactory, $routeParams) {

    ItemFactory.getTodoItems()
    .then(todoItems => {
    $scope.items = [];
    for (let item in todoItems) {
        todoItems[item].id = item;
        $scope.items.push(todoItems[item]);
    }
                return todoItems.id === $routeParams.id;
            });
        });


