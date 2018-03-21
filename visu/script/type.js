function type(discipline,id_div){
	d4.csv("visu/data/insertion_lp.csv", function(error,data){
        var CDI;
        var CDD;
        var Fonctionnaires;
        var Autres;

        data.forEach(function (d){
            if(d.discipline == discipline){
                CDI = d.CDI;
                CDD = d.CDD;
                Fonctionnaires = d.fonctonnaire;
                Autres = d.contrat_autre;
            }
        })
    var pie = new d4pie(id_div, {
	"header": {
		"title": {
			"text": "Types de contrat",
			"fontSize": 24,
			"font": "Arial"
		},
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 320,
		"pieInnerRadius": "80%",
		"pieOuterRadius": "100%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "CDI",
				"value": parseFloat(CDI),
				"color": "#003F57"
			},
			{
				"label": "CDD",
				"value": parseFloat(CDD),
				"color": "#96D0DE"
			},
			{
				"label": "Fonctionnaire",
				"value": parseFloat(Fonctionnaires),
				"color": "#E34824"
			},
			{
				"label": "Autres",
				"value": parseFloat(Autres),
				"color": "#BDD02B"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	}
})})}