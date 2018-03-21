function stack(discipline,id_div){
    d3.csv("visu/data/insertion_lp.csv", function(error,data){
        var total;
        var an1;
        var an2;
        var an3;

        data.forEach(function (d){
            if(d.discipline == discipline){
                total = parseFloat(d.homme)+parseFloat(d.femme);
                an1 = parseFloat(d.poursuite_1);
                an2 = parseFloat(d.poursuite_2);
                an3 = parseFloat(d.poursuite_3);
            }
        })

        color1="#ac3636";
        color2="steelblue";
        var margin = {top: 20, right: 160, bottom: 35, left: 30};

        var width = 300 - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom;


        var svg = d3.select(id_div)
        .append("svg")
        .attr("width", width + margin.left + margin.right -70)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Set x, y and colors

        var y = d3.scale.linear()
        .domain([0,25,50,75,100])
        .range([height,height*3/4,height/2,height/4,0]);

        // Define and draw axes
    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5);


    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);


    //Draw the Rectangle
var r1 = svg.append("rect").attr("x", 0).attr("y", 0).attr("width", 50).attr("height", height).style("fill",color2);
var r2 = svg.append("rect").attr("x", 0).attr("y", height-(an1*100/total)).attr("width", 50).attr("height", an1*100/total).style("fill",color1);

var r3 = svg.append("rect").attr("x", width/2).attr("y", 0).attr("width", 50).attr("height", height).style("fill",color2);
var r4 = svg.append("rect").attr("x", width/2).attr("y", height-((an1+an2)*100)/total).attr("width", 50).attr("height", ((an1+an2)*100)/total).style("fill",color1);

var r5 = svg.append("rect").attr("x", width).attr("y", 0).attr("width", 50).attr("height", height).style("fill",color2);
var r6 = svg.append("rect").attr("x", width).attr("y", height-((an1+an2+an3)*100)/total).attr("width", 50).attr("height", ((an1+an2+an3)*100)/total).style("fill",color1);

//ajouter texte
svg.append("text").text("an+1").attr("x",10).attr("y",height+10);
svg.append("text").text("an+2").attr("x",10+width/2).attr("y",height+10);
svg.append("text").text("an+3").attr("x",10+width).attr("y",height+10);


//legend
var r7 = svg.append("rect").attr("x", width+60).attr("y", 20).attr("width", 7).attr("height", 7).style("fill",color2);
var r8 = svg.append("rect").attr("x", width+60).attr("y",  40).attr("width", 7).attr("height", 7).style("fill",color1);

svg.append("text").text("non").attr("x",width+70).attr("y",28);
svg.append("text").text("oui").attr("x",width+70).attr("y",48);
    })

}
