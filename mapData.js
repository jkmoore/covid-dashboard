var mapStates = 'AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY'.split(
    ','
  );
  var chartConfig = {
    debug: false,
    type: 'map',
    palette: {
      pointValue: '{%zValue}',
      colors: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
      ranges: { min: 0, max: 1000, interval: 200 },
      defaultRange_legendEntry_value: '$%min - $%max'
    },
    legend: {
      title_label_text: 'Sales',
      template: '%value %icon',
      position: 'top'
    },
    defaultPoint: {
      label_text: '%stateCode',
      tooltip: '<b>%name<b/> <br/>Sales: {%zValue:c2}'
    },
    defaultSeries_shape_padding: 0.02,
    series: [{ id: 'usMap', map: 'us' }]
  };

  chartConfig.series[0].points = getRandomPoints();
  var chart = JSC.chart('chartDiv', chartConfig);

  function getRandomPoints() {
    var serPoints = mapStates.map(function(arrItem) {
      return { map: 'US.' + arrItem, z: Math.random() * 1000 };
    });
    return serPoints;
  }