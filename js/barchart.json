{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Grouped Bar Chart: Tourist Comparison by State and Year",
    "fontSize": 20,
    "anchor": "start",
    "color": "navy"
  },
  "width": 1000,
  "height": 400,
  "data": {
    "url": "https://raw.githubusercontent.com/BlueberryyyInc/Data-Visualisation-2/refs/heads/master/data/structured_tourist_data_2014_2024%20(2).csv",
    "format": {
      "type": "csv"
    }
  },
  "transform": [
    {
      "filter": "datum.State != null && datum.State != ''"
    }
  ],
  "mark": {
    "type": "bar",
    "tooltip": true,
    "cornerRadiusEnd": 2,
    "size": 15  // Adjust bar width for better clarity
  },
  "encoding": {
    "x": {
      "field": "State",
      "type": "nominal",
      "axis": {
        "labelAngle": -45,
        "title": "State"
      }
    },
    "y": {
      "field": "Total",
      "type": "quantitative",
      "title": "Tourist Count"
    },
    "color": {
      "field": "Year",
      "type": "nominal",
      "scale": {
        "scheme": "category10"
      },
      "title": "Year"
    },
    "tooltip": [
      {"field": "State", "title": "State"},
      {"field": "Year", "title": "Year"},
      {"field": "Total", "title": "Tourist Count", "format": ","}  // Add commas for better readability
    ]
  },
  "selection": {
    "year_select": {
      "type": "single",
      "fields": ["Year"],
      "bind": {
        "input": "select",  // Use a dropdown for year selection
        "options": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        "name": "Select Year: "
      }
    }
  },
  "transform": [
    {
      "filter": {
        "param": "year_select",  // Apply the filter for the selected year
        "empty": false
      }
    }
  ],
  "config": {
    "view": {
      "stroke": "transparent"
    },
    "axis": {
      "labelFontSize": 12,
      "titleFontSize": 14
    }
  }
}
