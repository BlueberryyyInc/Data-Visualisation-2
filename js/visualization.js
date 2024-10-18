var mapSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A map showing tourist arrivals by state.",
  "width": 600,
  "height": 400,
  "data": {
    "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/refs/heads/master/data/australian-states.geojson",
    "format": {
      "type": "geojson"
    }
  },
  "transform": [
    {
      "lookup": "properties.STATE_NAME",
      "from": {
        "data": {
          "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/refs/heads/master/data/tourism_data.csv"
        },
        "key": "State",
        "fields": ["Tourist_Count"]
      }
    }
  ],
  "projection": {
    "type": "mercator"
  },
  "mark": {
    "type": "geoshape",
    "stroke": "white",
    "strokeWidth": 0.5
  },
  "encoding": {
    "color": {
      "field": "Tourist_Count",
      "type": "quantitative",
      "title": "Number of Tourists",
      "scale": {
        "scheme": "blues"
      }
    },
    "tooltip": [
      {"field": "properties.STATE_NAME", "type": "nominal", "title": "State"},
      {"field": "Tourist_Count", "type": "quantitative", "title": "Tourist Count"}
    ]
  }
};

vegaEmbed('#tourism-map', mapSpec).then(function(result) {
  
}).catch(console.error);


var chartSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A line chart showing international tourists over time.",
  "width": 600,
  "height": 300,
  "data": {
    "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/refs/heads/master/data/tourism_over_time.csv""
  },
  "mark": "line",
  "encoding": {
    "x": {
      "field": "Year",
      "type": "temporal",
      "title": "Year"
    },
    "y": {
      "field": "Tourist_Count",
      "type": "quantitative",
      "title": "Number of Tourists"
    },
    "tooltip": [
      {"field": "Year", "type": "temporal"},
      {"field": "Tourist_Count", "type": "quantitative", "title": "Tourist Count"}
    ]
  }
};

vegaEmbed('#tourism-chart', chartSpec).then(function(result) {
  
}).catch(console.error);
