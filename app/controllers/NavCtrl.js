"use strict";

angular.module("TodoApp").controller("NavCtrl", function ($scope, FilterFactory, $location) {

    $scope.searchTerm = FilterFactory;

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.navItems = [
        //TODO: Hide/Show login/out
        {
            name: "Logout",
            url: "#!/logout"
        },
        {
            name: "Login",
            url: "#!/login"
        },
        {
            name: "All Items",
            url: "#!/items/list"
        },
        {
            name: "Add New Item",
            url: "#!/items/new"
        }
    ];
});