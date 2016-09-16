function ArticleController(articlesFactory, $scope) {
  $scope.articles = [];

  articlesFactory.query().$promise.then(function(data){
    $scope.articles = data;
  })

}

angular.module('starter').component('articles', {
  templateUrl: 'components/articles/articles.template.html',
  controller: ArticleController,
  bindings: {
    hero: '='
  }
});
