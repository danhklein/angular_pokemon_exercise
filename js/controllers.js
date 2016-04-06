app.controller('myController', function($scope, $http) {
  $scope.greeting = "Hello World!";

  $scope.randPoke = function () {
    poke: return 'http://pokeapi.co/api/v2/pokemon/' + Math.round(Math.random() * 721)
  }


$scope.show = false;

  $scope.randMove = function (moves) {
    poke: return Math.round(Math.random() * moves)
  }

  $scope.pokeClick = function () {

    $http.get($scope.randPoke()).then(function(data){
      console.log(data);
      $scope.pokeName = data.data.name;
      $scope.moveArrLength = $scope.randMove(data.data.moves.length);
      $scope.pokeMove = data.data.moves[$scope.moveArrLength].move.name;
      $scope.pokeImg = data.data.sprites.front_shiny;
      $scope.show=true;
    })
  }
})