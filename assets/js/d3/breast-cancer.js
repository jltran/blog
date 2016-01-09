//Observer
function DataRunner(){
  this.Subscribers = [];
}
DataRunner.prototype = {
  add: function(sub){
    this.Subscribers.push(sub);
  },
  remove: function(sub){
    this.Subscribers = this.Subscribers.filter(
      function(_){
        if(_ != sub){
          return _;
        }
      }
    );
  },
  run: function(data, select, scope){
    var scope = scope || window;
    this.Subscribers.forEach(function(item){
      item.call(scope, data, select);
    });
  }
}

//Allow observer to be accessed globally.
var pub = new DataRunner();

//Charts
function squares(data, select){
  //Params
  var m = {top: 10, right: 10, bottom: 10, left: 20}
    , h = 535
    , w = 350
    , square_m = 10
    , square_size = 20

  //Init if necessary
  if(d3.select('.squares')[0][0] == null){
    var svg = set_up(w, h, 'squares', m)
  } else {
    var svg = d3.select('.squares svg g');
  }

  // Create squares
  var square = svg.selectAll('.square')
                  .data(data)
                  .enter()
                  .append('rect')
                  .attr('class', 'square')
                  .attr('width', square_size)
                  .attr('height', square_size)

  square.transition()
        .duration(500)
        .attr('x', function(d, i){ //Location
          return (i%10)*(square_size+square_m);
        })
        .attr('y', function(d, i){
          return parseInt(i/10) * (square_size + square_m);
        });

  //Update Colors
  svg.selectAll('.square')
      .attr('fill', function(d, i){ //Color and Stroke Color
        return choose_color(d["logistic_regression"] == 'True', i == select)
      })
      .attr('stroke', function(d, i){
        return choose_color(d["actual_y"] == true, i==select ||
                ((d["logistic_regression"] == 'True') != +d["actual_y"]))
      });

  var legend_entries = [{'color': true, 'border': false , 'title': 'Malignant hypothesized'},
                        {'color': false, 'border': false, 'title': 'Benign hypothesized'},
                        {'color': true, 'border': true, 'title': 'True value is malignant'},
                        {'color': false, 'border': true, 'title': 'True value is benign'}]
  var legend = svg.selectAll('.legend')
                  .data(legend_entries)
                  .enter()
                  .append('g')
                  .attr('class', 'legend')
                  .attr('transform', function(d, i){return 'translate(' +
                                      [(i%2)*5*(square_size+square_m),
                                      (parseInt(data.length/10) + 2 + parseInt(i/2)) * (square_size + square_m)] + ')'})
                  //.attr('x', function(d, i){return })
                  //.attr('y', function(d, i){return (parseInt(data.length/10) + 2 + parseInt(i/2)) * (square_size + square_m)})


  legend.append('rect')
        .attr('width', square_size)
        .attr('height', square_size)
        .attr('fill', function(d){ //Color and Stroke Color
          if(d.border==false){return choose_color(d.color)}
          else{return '#fff'}
        })
        .attr('stroke', function(d, i){
          if(d.border==true){return choose_color(d.color, true)}
          else{return choose_color(d.color, false)}
        });

  legend.append('text')
        .text(function(d){return d.title})
        .attr('dx', '24')
        .attr('dy', '12')
        //.attr('text-anchor', 'middle')

  //Clear titles
  svg.select('.legend-title').remove()
  svg.select('.header').remove()

  svg.append('text')
      .attr('class', 'legend-title')
      .text('Legend')
      .attr('y', (parseInt(data.length/10) + 1.7) * (square_size + square_m))

  svg.append('text')
      .attr('class', 'header')
      .text('University of Wisconsin Breast Cancer Dataset (1992)')
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'end')
      .attr('dy', -10)
      .attr('font-size', 11)

  //Update on mouseover
  square.on("mouseover", function(d, i){
    pub.run(data, i);
  })
};

function attributes(data, select){
  //Params
  var m = {top: 10, right: 10, bottom: 10, left: 10}
    , h = 450
    , w = 350
    , square_m = 10
    , square_size = 20;

  //Init if necessary
  if(d3.select('.attrs')[0][0] == null){
    var svg = set_up(w, h, 'attrs', m)
  } else {
    var svg = d3.select('.attrs svg g');
  };

  k = Array('bare_nuclei', 'bland_chromatin', 'clump_thickness', 'epithelial_cell_size',
          'marginal_adhesion', 'mitoses', 'normal_nuclei', 'uniformity_shape',
          'uniformity_size');

  //format data
  data_select = [];
  for(var i in data[select]){
    if(k.indexOf(i) >= 0){
      _ = {}
      _['name'] = i
      _['reg'] = data[select][i]
      _['n'] = data[select][i + '_n']
      data_select.push(_)
    }
  }
  data_select.sort(function(a, b){return d3.ascending(a.name, b.name)});

  var actual = function(){
    if(+data[select]['actual_y'] == 1){return 'True'}
    else {return 'False'};
  }()
  data_select.push({'name': 'logistic_regression',
                    'reg': data[select]['logistic_regression']});
  data_select.push({'name': 'actual_value',
                    'reg': actual})

  //Clear existing data
  svg.selectAll('.label')
      .data([])
      .exit().remove()
  svg.selectAll('.title')
      .data([])
      .exit().remove()

  var divs = svg.selectAll('.label')
                .data(data_select)
                .enter().append('g')
                .attr('class', 'label')
                .attr('transform', function(d,i){
                  if(d.n){return 'translate(0, ' + i * (square_size + square_m) + ')'}
                  else{return 'translate(0, ' + (i+1) * (square_size + square_m) + ')'}
                });

  var attrs = divs.append('rect')
                .attr('width', square_size)
                .attr('height', square_size)
                .attr('fill', function(d){return choose_color(d.reg=='True', false)})
                .attr('stroke', function(d){return choose_color(d.reg=='True', false)});

  divs.append('text')
        .text(function(d){return d.name})
        .attr('text-anchor', 'beginning')
        .attr('dx', '25')
        .attr('dy', '12')

  divs.append('text')
        .text(function(d){if(d.n){return +d.n}else{return''}})
        .attr('dx', '9.5')
        .attr('dy', '12')
        .attr('text-anchor', 'middle')

  //Input ID number
  var _id = [data[select]['id']]
  svg.selectAll('.title')
      .data(_id)
      .enter()
      .append('text')
      .attr('class', 'title')
      .text(function(d){
        return 'Sample Number: ' + d})
      .attr('transform', 'translate(0, ' + 8.5 * (square_size + square_m) + ')')

  // Maybe someday implement a sort function on data
  // divs.on("click", function(d, i){
  //   data.sort(function(a, b){return d3.descending(a[d.name], b[d.name])})
  // })
}

// HELPER FUNCTIONS
function set_up(width, height, name, m){
  var svg = d3.select('.cancer')
              .append('div')
              .attr('class', name + ' fl')
              .append('svg')
              .attr('width', width - m.left - m.right)
              .attr('height', height - m.top - m.bottom)
              .append('g')
              .attr('transform', 'translate(' + [m.left, m.top] + ')')
  return svg;
}
function choose_color(result, is_selected){
  if(result){
    if(is_selected){
      return '#a6611a'
    } else {
      return '#dfc27d'
    }
  } else {
    if(is_selected){
      return '#018571'
    } else {
      return '#80cdc1'
    }
  }
}

//Render
function render(){
  pub.add(squares);
  pub.add(attributes);

  d3.csv('../assets/data/bcan_pred.csv', function(data){
    pub.run(data, 0);
  })
}
render()
