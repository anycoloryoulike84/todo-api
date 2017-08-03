

angular.module('app', ['ngRoute', 'ngResource'])


    //---------------
    // Services
    //---------------




.factory('Todos', ['$http', function($http){
  return $http.get('/todos');

}])



.factory('Todos', ['$resource', function($resource){
          return $resource('/todos/:id', null, {
            'update': { method:'PUT' }
          });
        }])


    //---------------
    // Controllers
    //---------------




.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
          
          $scope.editing = [];
          $scope.todos = Todos.query();
          $scope.date = new Date();

      $scope.save = function(){
        if(!$scope.newTodo || $scope.newTodo.length < 1) return;
        
        var todo = new Todos({ 
          name: $scope.newTodo, 
          happyHour: $scope.happyHour, 
          description: $scope.description,
          brewery: $scope.brewery,
          notes: $scope.notes,
          beerType: $scope.beerType,
          cost: $scope.cost,
        });

        todo.$save(function(){
          $scope.todos.push(todo);
          $scope.newTodo = ''; // clear textbox
        });
      }

      $scope.update = function(index){
        var todo = $scope.todos[index];
        Todos.update({id: todo._id}, todo);
        $scope.editing[index] = false;
      }
      $scope.edit = function(index){
        $scope.editing[index] = angular.copy($scope.todos[index]);
      }
      $scope.cancel = function(index){
        $scope.todos[index] = angular.copy($scope.editing[index]);
        $scope.editing[index] = false;
      }
      $scope.remove = function(index){
        var todo = $scope.todos[index];
        Todos.remove({id: todo._id}, function(){
          $scope.todos.splice(index, 1);
        });
      }


        }])


    .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', '$location', function ($scope, $routeParams, Todos, $location) {

      $scope.todo = Todos.get({id: $routeParams.id });

     $scope.update = function(){
        Todos.update({id: $scope.todo._id}, $scope.todo, function(){
          $location.url('/');
        });
      }
       
       $scope.remove = function(){
        Todos.remove({id: $scope.todo._id}, function(){
          $location.url('/');
        });
      }

    }])


    //---------------
    // Routes
    //---------------

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/todos.tpl.html',
          controller: 'TodoController'
        })

        .when('/:id', {
          templateUrl: 'partials/todoDetails.tpl.html',
          controller: 'TodoDetailCtrl'
       });
    }])



    .directive('myTodo', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/mytodo.tpl.html',
      scope: {
        list: '=',
        title: '@'
      }
    };
  });





