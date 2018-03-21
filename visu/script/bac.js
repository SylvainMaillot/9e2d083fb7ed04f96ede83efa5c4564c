function bac(discipline,id_div){
    d4.csv("data/insertion_lp.csv", function(error,data){
        var bacS;
        var bacL;
        var bacES;
        var bacDispense;
        var bacAutre;

        data.forEach(function (d){
            if(d.discipline == discipline){
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
                "canvasWidth": 300,
                "pieOuterRadius": "90%"
            },
            "data": {
                "sortOrder": "value-desc",
                "content": [
                    {
                        "label": "Bac S",
                        "value": parseFloat(bacS),
                        "color": "#0c6197"
                    },
                    {
                        "label": "Bac L",
                        "value": parseFloat(bacL),
                        "color": "#4daa4b"
                    },
                    {
                        "label": "Bac ES",
                        "value": parseFloat(bacES),
                        "color": "#e98125"
                    },
                    {
                        "label": "Autre BAC",
                        "value": parseFloat(bacAutre),
                        "color": "#830909"
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