'use strict';

/**
 * @ngdoc function
 * @name pairLunchingApp.controller:AboutCtrl
 * @description
 * # UserCtrl
 * Controller of the pairLunchingApp
 */
angular.module('pairLunchingApp')
  .controller('UserCtrl', function ($scope, $http, _) {
    $http.get('users/users.json').success(function(data) {
      $scope.users = data;
    });

    $scope.groupSize = 2;

    var createGroupFromUsers = function (users) {
      var group = {
        users: [],
        restaurants: [],
        restrictions: []
      };

      _.each(users, function (user) {
        group.users.push(user);
        group.restrictions = _.union(group.restrictions, user.restrictions);
        group.restaurants = _.union(group.restaurants, user.restaurants);
      });

      group.restaurants = _.sample(group.restaurants, 3);
      return group;
    };

    $scope.toggleUser = function (name) {
      var index = -1;
      for (var i = 0, len = $scope.users.length; i < len; i++) {
        if ($scope.users[i].name === name) {
          index = i;
          break;
        }
      }

      if (index >= 0) {
        $scope.users[i].present = !$scope.users[i].present;
      }
    };

    $scope.decrementGroupSize = function () {
      $scope.groupSize = $scope.groupSize - 1;
    };

    $scope.incrementGroupSize = function () {
      $scope.groupSize = $scope.groupSize + 1;
    };


    $scope.generateGroups = function (options) {
      if(typeof options === 'undefined'){
        options = {};
      }
      var groupSize = options.groupSize ? options.groupSize : 2;
      var groups = [];
      var presentUsers = _.filter($scope.users, function (user) {
        return user.present;
      });

      while (presentUsers.length > groupSize * 2 - 1) {
        var users = [];
        for(var i = 0; i < groupSize; i ++){
          users.push(pluckRandomElement(presentUsers));
        }
        var group = createGroupFromUsers(users);
        groups.push(group);
      }

      groups.push(createGroupFromUsers(presentUsers));

      $scope.groups = groups;
    };


    function pluckRandomElement(array) {
      var i = _.random(array.length - 1);
      return array.splice(i, 1)[0];
    };
  }
)
;
