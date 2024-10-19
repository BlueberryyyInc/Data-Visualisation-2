{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Heatmap showing reasons for visiting Australia from 2014-2024.",
  "data": {
    "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/refs/heads/master/data/Restructured_Table_6_Data__Visitor_Reasons_.csv",
    "format": {
      "type": "csv"
    }
  },
  "mark": "rect",
  "encoding": {
    "x": {"field": "Year", "type": "ordinal", "title": "Year"},
    "y": {"field": "Reason/Length of Stay", "type": "nominal", "title": "Reason for Visiting or Length of Stay"},
    "color": {
      "field": "Visitor Count",
      "type": "quantitative",
      "scale": {"scheme": "yellowgreenblue"},
      "title": "Number of Visitors"
    },
    "tooltip": [
      {"field": "Year", "type": "ordinal", "title": "Year"},
      {"field": "Reason/Length of Stay", "type": "nominal", "title": "Reason or Length of Stay"},
      {"field": "Visitor Count", "type": "quantitative", "title": "Number of Visitors"}
    ]
  },
  "config": {
    "axis": {
      "labelFontSize": 12,
      "titleFontSize": 14
    },
    "legend": {
      "labelFontSize": 12,
      "titleFontSize": 14
    }
  }
}
