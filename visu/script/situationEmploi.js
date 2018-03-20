function situationEmploi(discipline){
    d3.csv("data/insertion_lp.csv", function(error,data){
        var precaire;
        var stable;

        data.forEach(function (d){
            if(d.discipline == discipline){
                precaire = parseFloat(d.precaire);
                stable = parseFloat(d.stable);
            }
        })
        d3.select('.chart-gauge').html(needle.moveTo((stable/(stable+precaire))));
    })
}