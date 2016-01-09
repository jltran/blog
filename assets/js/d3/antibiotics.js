var margin = {'top': 30, 'right': 80, 'bottom': 20, 'left': 200}
  , w = 960 - margin.left - margin.right
  , h = 250 - margin.top - margin.bottom
  , dimensions = [
    {
      name: "Bacteria",
      scale: d3.scale.ordinal().rangePoints([0, h]),
      type: String
    },
    {
      name: "Penicillin",
      scale: d3.scale.log().range([h, 0]),
      type: Number
    },
    {
      name: "Streptomycin",
      scale: d3.scale.log().range([h, 0]),
      type: Number
    },
    {
      name: "Neomycin",
      scale: d3.scale.log().range([h, 0]),
      type: Number
    },
    {
      name: "Most Effective",
      scale: d3.scale.ordinal().rangePoints([0, h]),
      type: String
    }
  ]

var x = d3.scale.ordinal()
          .domain(dimensions.map(function(d){return d.name;}))
          .rangePoints([0, w]);

var line = d3.svg.line()
              .defined(function(d){return !isNaN(d[1]);});

var svg = d3.select('.post').append('svg')
            .attr('width', w + margin.left + margin.right)
            .attr('height', h + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + [margin.left, margin.top] + ')');

var dimension = svg.selectAll(".dimension")
                    .data(dimensions)
                    .enter().append('g')
                    .classed("dimension", true)
                    .attr("transform", function(d){return "translate(" + x(d.name) + ")"});

d3.csv("../assets/data/a1-burtin.csv", function(error, data){
  if(error) throw error;

  dimensions.forEach(function(dimension){
    dimension.scale.domain(dimension.type === Number
      ? d3.extent(data, function(d){return +d[dimension.name]})
      : data.map(function(d){return d[dimension.name]}).sort());
  });

  svg.append("g")
      .attr("class", "background")
      .selectAll("path")
      .data(data)
      .enter().append("path")
      .attr("d", draw);

  svg.append("g")
      .attr("class", "foreground")
      .selectAll("path")
      .data(data)
      .enter().append("path")
      .attr("d", draw);

  var yAxis = d3.svg.axis();

  //Create Axes
  dimension.append("g")
      .attr("class", "axis")
      .attr("id", function(d){return d.name})
      .each(function(d) {
        //Set orientation of axis
        if(this.id == "Most Effective"){
          yAxis.orient("right");
        } else {
          yAxis.orient("left");
        }
        d3.select(this).call(yAxis.scale(d.scale)); })
      .append("text")
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) {return d.name; });

  //Color paths
  svg.select(".foreground").selectAll("path")
      .style("stroke", function(d){
        if(d["Gram Staining"] == "positive"){
          return "#b790d4"
        } else {
          return "lightpink"
        }
      })

  // ANIMATE - MOUSEOVER & MOUSEOFF
  // Attach data to text labels (first axis)
  svg.select(".axis").selectAll("text:not(.title)")
      .attr("class", "label")
      .data(data, function(d,i) {return i; });

  // Grab text and lines (paths) for mouseover animations.
  var projection = svg.selectAll(".axis text,.background path,.foreground path")
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

  // Set all to active & inactive any not matching mouse over.
  function mouseover(d) {
    svg.classed("active", true);
    projection.classed("inactive", function(p) {return p !== d; });
    projection.filter(function(p) {return p === d; }).each(moveToFront);
  }

  // Remove active classification on mouse oout.
  function mouseout(d) {
    svg.classed("active", false);
    projection.classed("inactive", false);
  }

  function moveToFront() {
    this.parentNode.appendChild(this);
  }

  // SET LABELS
  svg.append("text")
      .classed("x", true)
      .attr("text-anchor", "middle")
      .attr("y", h + 16)
      .attr("x", x("Streptomycin"))
      .text("*LOG AXES (MIC) --- PURPLE: GRAM POSITIVE --- PINK: GRAM NEGATIVE")
})

function draw(d){
  return line(dimensions.map(function(dimension){
    return [x(dimension.name), dimension.scale(d[dimension.name])];
  }));
}
