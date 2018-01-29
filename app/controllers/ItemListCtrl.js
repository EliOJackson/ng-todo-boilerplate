"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function($scope, FilterFactory, ItemFactory) {
    
    $scope.searchTerm = FilterFactory;

     ItemFactory.getTodoItems()
     .then(todoItems => {
         $scope.items = Object.values(todoItems.data);
     })
     .catch(err => {
         console.log("error", err);
     });


});