(function() {

  // 'use strict';
  //
  // angular
  //   .module('myApp.components.carousel', [])
  //   .directive('myCarousel', carouselDirective);
  //
  // function carouselDirective() {
  //   /*jshint validthis: true */
  //   return {
  //     restrict: 'E',
  //     bindToController: true,
  //     controller: Controller,
  //     controllerAs: 'carouselCtrl',
  //     link: link,
  //     templateUrl: './js/components/carousel/carousel.view.html'
  //
  //   };
  //
  //   function link(scope, elem, attr, vm) {
  //
  //   }
  // }
  // Controller.$inject = ['$scope', '$location', 'ajax', '$q'];
  // function Controller($scope, $location, ajax, $q) {
  //   const vm = this;
  //   vm.myInterval = 5000;
  //   vm.noWrapSlides = false;
  //   vm.active = 0;
  //   vm.sliderArray = [];
  //
  //   vm.populateSlider = () => {
  //     let promises = [];
  //     for (var i = 0; i < 5; i++) {
  //       promises.push(ajax.getRandomMember());
  //     }
  //       $q.all(promises).then(users => {
  //       vm.sliderArray = users.map(slider => {
  //           return {
  //             avatar: slider.data.data[0].avatar,
  //             description: slider.data.data[0].description,
  //             username: slider.data.data[0].username,
  //             id: slider.data.data[0]._id
  //           };
  //         });
  //       });
  //   };
  //   vm.populateSlider();
  // }

  'use strict';
  angular
    .module('myApp.components.carousel', [])
    .controller('CarouselDemoCtrl', function ($scope) {
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;

      $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          image: '//unsplash.it/' + newWidth + '/300',
          text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
          id: currIndex++
        });
      };

      $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
      };

      for (var i = 0; i < 4; i++) {
        $scope.addSlide();
      }

      // Randomize logic below

      function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
          slides[i].id = indexes.pop();
        }
      }

      function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
          indexes[i] = i;
        }
        return shuffle(indexes);
      }

      // http://stackoverflow.com/questions/962802#962890
      function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
        }

        return array;
      }
    });
})();
