{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Heatmap showing state-based tourist data from 2014-2024.",
  "data": {
    "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/refs/heads/master/data/Restructured_Table_11_Data__State-Based_.csv",
    "format": {
      "type": "csv"
    }
  },
  "mark": "rect",
  "encoding": {
    "x": {"field": "Year", "type": "ordinal", "title": "Year"},
    "y": {"field": "State", "type": "nominal", "title": "State"},
    "color": {
      "field": "Visitor Count",
      "type": "quantitative",
      "scale": {"scheme": "yellowgreenblue"},
      "title": "Number of Visitors"
    },
    "tooltip": [
      {"field": "Year", "type": "ordinal", "title": "Year"},
      {"field": "State", "type": "nominal", "title": "State"},
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
