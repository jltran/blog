---
title: "Visualization: Antibiotics"
posted: 2015-11-14
post: true
layout: post.hbs
---
<style>
    svg {
      font: 10px sans-serif;
    }

    .page-content .post {
      width: 100%;
    }

    .background path {
      fill: none;
      stroke: none;
      stroke-width: 20px;
      pointer-events: stroke;
    }

    .foreground path {
      fill: none;
      stroke-width: 1.5px;
      stroke-opacity: .75;
    }

    .axis .title {
      font-size: 11px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .axis line,
    .axis path {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }

    .label {
      -webkit-transition: fill 125ms linear;
    }

    .active .label:not(.inactive) {
      font-weight: bold;
    }

    .label.inactive {
      fill: #ccc;
    }

    .foreground path.inactive {
      stroke-opacity: .25;
      stroke-width: 1px;
    }

    .x {
      font-weight: bold;
    }

    .back{
      position: absolute;
      bottom: 0
    }

    .hide{
      display: none;
  }
    </style>

<div class="antibiotics"></div>
<script type="text/javascript" src="{{assets}}/js/d3/antibiotics.js"></script>
