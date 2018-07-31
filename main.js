/**
 *
 * Created by shelbysturgis on 1/23/14.
 */
 var client ;
 var jsonObject ;

 {

    "use strict";

    client = new elasticsearch.Client();
    //console.log(client);
client.count({
    index: 'test1',
}).then(function(resp){
   // console.log(resp.count);
})

    client.search({
        index: 'test1',
      

        //size: 10,
       /* body: {
            // Begin query.
            query: {
                // Boolean query for matching and excluding items.
                bool: {
                    //must: { match: { "description": "TOUCHDOWN" }},
                    must_not: { match: { "qtr": 5 }}
                }
            },
            // Aggregate on the results
            aggs: {
                touchdowns: {
                    terms: {
                        field: "A",
                     //   order: { "_term" : "asc" }
                    }
                }
            }
            // End query.
        }*/
    }).then(function (resp) {
       // console.log("resp is");
        //console.log(resp);
                var api ='data.json';
            $.getJSON(api, function(data) {
                //console.log(data);
    //data is the JSON string
   /* for(var i=0;i<3;i++)
    {
    var myObj = {
    "stan" : i,   //your artist variable
    "res_time" :   i*5,
    "Api" :  'Z'
            };
            data.push(myObj);
            console.log(data);
        }*/

}).then(function(data){
         jsonObject=[
{
    "stan": 2,
    "res_time": 13,
    "Api": "A"
}
];
          //  console.log(data);
            //console.log(resp);
            //console.log(resp.hits);
            //console.log(resp.hits.hits);
            //console.log(resp.hits.hits.length)
            for(var i=0;i<resp.hits.hits.length;i++)
            {
                      
               var myObj={
    //"stan": parseInt((resp.hits.hits[i]._source.res_time)/100000000),
    "stan": ((resp.hits.hits[i]._source.res_time)/100000000),
    "res_time": Number(resp.hits.hits[i]._source.number),
    "Api": resp.hits.hits[i]._source.Api
}
data.push(myObj);
                //console.log(resp.hits.hits[i]._source.res_time);
                //console.log(resp.hits.hits[i]._source.number);
                //console.log(resp.hits.hits[i]._source.Api);
            }
             //data.push(jsonObject);
            //console.log(jsonObject);
             //console.log(data);

            });
    

           // var touchdowns=resp.hits.hits;
           // drawChart(touchdowns);
            /* var map0=touchdowns.map(function(i){
                return i._source;
             });
             var map1=map0.map(function(i){
                return i.Api;
             })
             var map2=map0.map(function(i){
                if(i.number==undefined)
                    i.number='0';
                return i.number;
             })
            console.log(map1);
            console.log(map2);
            var m1=new Map();
            var m2=new Map();
            for(var i=0;i<map1.length;i++)
                {m1[i]=map1[i];
                    m2[i]=map2[i];}
           // m1[0]=1;m1[1]=1;m1[2]=1;m1[3]=1;m1[4]=1;m1[5]=1;
            console.log(m1);
            console.log(m2);*/
          //  for(var i=0;i<touchdowns1.length;i++)
            //{
               // var arr=resp.hits.hits[i];
                //var touchdowns=[];
                //touchdowns.push(arr);
                //console.log(touchdowns);
           
            /* var width = 600,
            height = 300,
            radius = Math.min(width, height) / 2;
        var color = ['#ff7f0e', '#d62728', '#2ca02c', '#1f77b4','red'];
        var arc = d3.svg.arc()
            .outerRadius(radius - 60)
            .innerRadius(120);

        var pie = d3.layout.pie()
            .sort(null)
            .value(function (d) { if(d['_source'].Result=='SUCCESS')
                                     return 1 ;
                                    else
                                        return 2;
                                 });

           // console.log(pie(touchdowns));
        var svg = d3.select("#donut-chart").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width/1.4 + "," + height/2 + ")");
        var g = svg.selectAll(".arc")
            .data(pie(touchdowns))
            .enter()
            .append("g")
            .attr("class", "arc");
        g.append("path")
            .attr("d", arc)
            .style("fill", function (d, i) { return color[i]; });
        g.append("text")
            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .style("fill", "white")
            .text(function (d) { return d.data.key; });*/
        //}


    });
};
