var app = angular.module("appRick", []);
app.controller("myCtrl", function ($scope) {
    $scope.menu = [
        { hf: "about", title: "About" },
        { hf: "plot", title: "Plot" },
        { hf: "characters", title: "Characters" },
        { hf: "production", title: "Production" },
        { hf: "philosophy", title: "Philosophy" },
        { hf: "other", title: "In other media" },
        { hf: "video", title: "Videos" },
        { hf: "photos", title: "Photos" }
    ];

    $scope.imageGallery = [
        { src: "img/rick/2.jpg" },
        { src: "img/rick/3.jpg" },
        { src: "img/rick/4.jpg" }
    ]
});