{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Pie chart showing movement categories with a year filter and improved styling.",
  "data": {
    "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/master/data/Pie_chart.csv",
    "format": {
      "type": "csv"
    }
  },
  "params": [
    {
      "name": "YearSelector",
      "value": 2014,
      "bind": {
        "input": "select",
        "options": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        "name": "Select Year: "
      }
    }
  ],
  "transform": [
    {
      "filter": "datum.Year == YearSelector"
    },
    {
      "lookup": "Category",
      "from": {
        "data": {
          "values": [
            {"Category": "Long_term_Residents_Returning", "Simplified": "Long-term Residents"},
            {"Category": "Long_term_Visitors_Arriving", "Simplified": "Long-term Visitors"},
            {"Category": "Permanent_Arrivals", "Simplified": "Permanent Arrivals"},
            {"Category": "Permanent_and_Long_term_Arrivals", "Simplified": "Permanent & Long-term"},
            {"Category": "Short_term_Residents_Returning_Original", "Simplified": "Short-term Residents"},
            {"Category": "Short_term_Visitors_Arriving_Seasonal", "Simplified": "Short-term Visitors"}
          ]
        },
        "key": "Category",
        "fields": ["Simplified"]
      }
    }
  ],
  "mark": "arc",
  "encoding": {
    "theta": {
      "field": "Value",
      "type": "quantitative",
      "title": "Total Arrivals"
    },
    "color": {
      "field": "Simplified",
      "type": "nominal",
      "title": "Movement Category",
      "scale": {
        "scheme": "category20"  // Improved color scheme
      }
    },
    "tooltip": [
      {
        "field": "Simplified",
        "type": "nominal",
        "title": "Category"
      },
      {
        "field": "Value",
        "type": "quantitative",
        "title": "Total Arrivals"
      }
    ]
  },
  "config": {
    "legend": {
      "titleFontSize": 14,
      "labelFontSize": 12,
      "symbolSize": 150  // Increase legend symbol size for better visibility
    },
    "view": {
      "stroke": null
    }
  }
}
