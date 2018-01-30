"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function($scope, FilterFactory, ItemFactory) {
    
    $scope.searchTerm = FilterFactory;

     ItemFactory.getTodoItems()
     .then((todoItems) => {
         $scope.items = [];
         for (let item in todoItems) {
             todoItems[item].id = item;
             $scope.items.push(todoItems[item]);
         }
         //Object.values(todoItems.data);
        //  .map(key => {
        //     todoItems.data[key].id = key;
            return todoItems.data;
         })
     .catch(err => {
         console.log("error", err);
     });
    });


