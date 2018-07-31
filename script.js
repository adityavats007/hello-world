   angular
            .module('tutorial', ['elasticui'])
            .constant('euiHost', 'http://localhost:9200/')
            .constant('euiHost1', 'http://localhost:9200/test3/_search?pretty=true;size=100;sort=res_time:asc')
            .factory('elasticsearch',function($http,euiHost1){
              return euiHost1;
            })
            .controller('myctrl',['elasticsearch','$http','$scope',function(elasticsearch,$http,$scope){
              console.log(elasticsearch);
              var data;
              //res promise
              var res=$http.get(elasticsearch).then(function(resp){
               // data=resp;
                $scope.data=resp.data.hits.hits;
                console.log(resp);
                console.log(resp.data.hits.hits);
                return resp;
              })
              res.then(function(resp){
                data=resp.data.hits.hits;
                console.log(data);
              })
              
              //var client=elasticsearch.Client();
              
            //  $scope.resp=resp;
            }]);
          