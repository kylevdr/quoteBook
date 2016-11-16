angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

    $scope.quotes = dataService.getQuotes();

    $scope.deleteMe = dataService.removeData;

    $scope.addQuote = function() {
        var newQuote = {
            text: $scope.newQuoteText,
            author: $scope.newQuoteAuthor
        }
        if (dataService.addData(newQuote)) {
            $scope.newQuoteText = "";
            $scope.newQuoteAuthor = "";
        }
    };

});