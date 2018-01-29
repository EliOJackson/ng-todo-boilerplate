"use strict";

angular.module("TodoApp").factory("ItemFactory", ($q, FBUrl, $http) => {

    // let items = [
    //     {
    //         id: 0,
    //         task: "mow the lawn",
    //         isCompleted: false,
    //         dueDate: "12/5/17",
    //         assignedTo: "Greg",
    //         location: "Joe's house",
    //         urgency: "low",
    //         dependencies: "sunshine, clippers, hat, water, headphones"
    //     },
    //     {
    //         id: 1,
    //         task: "grade quizzes, I mean Mastery Watzits",
    //         isCompleted: false,
    //         dueDate: "12/5/17",
    //         assignedTo: "Joe",
    //         location: "NSS",
    //         urgency: "high",
    //         dependencies: "wifi, tissues, vodka"
    //     },
    //     {
    //         id: 2,
    //         task: "take a nap",
    //         isCompleted: false,
    //         dueDate: "5/21/18",
    //         assignedTo: "Joe",
    //         location: "Porch of lakefront cabin",
    //         urgency: "medium",
    //         dependencies: "hammock, silence"
    //     }
        
    // ];

    function getTodoItems() {
        return $q((resolve, reject) => {
            $http
                .get(`https://ej-to-do.firebaseio.com/items.json`)
                .then((todoItem) => {
                    resolve(todoItem);
                })
                .catch((err) => {
                    reject(err);
                });
            
        
                
            });
        }
    
    

    function addNewItem(todoItem) {
        // todoItem.id = items.length;
        // items.push(todoItem);
        $http.post(`${FBUrl}/items.json`,
          JSON.stringify(todoItem)
        )
        .then( (data) => {
            console.log("New Item posted", data.data.name);
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    return { getTodoItems, addNewItem };
});