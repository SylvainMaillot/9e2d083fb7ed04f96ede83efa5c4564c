function bac(id,id_div){
    d4.csv("visu/data/insertion.csv", function(error,data){
        var bacS;
        var bacL;
        var bacES;
        var bacDispense;
        var bacAutre;

        data.forEach(function (d){
            if(d.id == id){
                bacS = d.bacS;
                bacL = d.bacL;
                bacES = d.bacES;
                bacDispense = d.bac_dispense;
                bacAutre = d.bac_autre;
            }
        })
        var pie = new d4pie(id_div, {
            "header": {
                "title": {
                    "text": "Bac d'origine",
                    "fontSize": 24,
                    "font": "open sans"
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
                "pieOuterRadius": "90%"
            },
            "data": {
                "sortOrder": "value-desc",
                "content": [
                    {
                        "label": "Bac S",
                        "value": parseFloat(bacS),
                        "color": "#003F57"
                    },
                    {
                        "label": "Bac L",
                        "value": parseFloat(bacL),
                        "color": "#96D0DE"
                    },
                    {
                        "label": "Bac ES",
                        "value": parseFloat(bacES),
                        "color": "#E34824"
                    },
                    {
                        "label": "Autre BAC",
                        "value": parseFloat(bacAutre),
                        "color": "#BDD02B"
                    },
                    {
                        "label": "Sans BAC",
                        "value": parseFloat(bacDispense),
                        "color": "#ce2aeb"
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
        })
    })
}