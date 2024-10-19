{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Tourist Distribution by State (2014-2024)",
    "fontSize": 24,
    "fontWeight": "bold",
    "anchor": "middle",
    "color": "navy"
  },
  "width": 700,
  "height": 450,
  "projection": {
    "type": "mercator",
    "scale": 700,
    "center": [133.7751, -25.2744]
  },
  "params": [
    {
      "name": "year_select",
      "value": 2014,
      "bind": {
        "input": "range",
        "min": 2014,
        "max": 2024,
        "step": 1,
        "name": "Select Year"
      }
    }
  ],
  "layer": [
    {
      "data": {
        "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/master/data/australian-states.geojson",
        "format": {
          "type": "json",
          "property": "features"
        }
      },
      "mark": {
        "type": "geoshape",
        "fill": "",
        "stroke": "black"
      },
      "encoding": {
        "tooltip": {
          "field": "properties.STATE_NAME",
          "type": "nominal",
          "title": "State"
        }
      }
    },
    {
      "data": {
        "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/refs/heads/master/data/tourist_count.csv",
        "format": {
          "type": "csv"
        }
      },
      "transform": [
        {
          "filter": "datum.Year == year_select"
        },
        {
          "filter": "datum.State != null && datum.State != ''"
        }
      ],
      "mark": {
        "type": "circle",
        "opacity": 0.7
      },
      "encoding": {
        "longitude": { "field": "Longitude", "type": "quantitative" },
        "latitude": { "field": "Latitude", "type": "quantitative" },
        "size": {
          "field": "Total",
          "type": "quantitative",
          "scale": {
            "domain": [0, 500000],
            "range": [50, 1200]
          }
        },
        "color": {
          "field": "State",
          "type": "nominal",
          "legend": {
            "title": "State"
          },
          "scale": {
            "scheme": "category20"
          }
        },
        "tooltip": [
          { "field": "State", "title": "State" },
          { "field": "Total", "title": "Tourist Count" },
          { "field": "Year", "title": "Year" }
        ]
      }
    },
    {
      "data": {
        "values": [
          {"state": "NSW", "latitude": -31.8688, "longitude": 147.2093},
          {"state": "VIC", "latitude": -37.8136, "longitude": 144.9631},
          {"state": "QLD", "latitude": -22.4698, "longitude": 145.0251},
          {"state": "SA", "latitude": -30.9285, "longitude": 135.6007},
          {"state": "WA", "latitude": -25.9505, "longitude": 115.8605},
          {"state": "TAS", "latitude": -42.8821, "longitude": 147.3272},
          {"state": "NT", "latitude": -20.4634, "longitude": 130.8456},
          {"state": "ACT", "latitude": -34.7809, "longitude": 149.1300}
        ]
      },
      "mark": {
        "type": "text",
        "color": "black",
        "fontSize": 12,
        "fontWeight": "bold"
      },
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "text": {
          "field": "state",
          "type": "nominal"
        }
      }
    }
  ],
  "legend": {
    "title": "Tourist Distribution by State",
    "orient": "right",
    "direction": "vertical"
  },
  "autosize": { "type": "fit", "contains": "padding" }
}
