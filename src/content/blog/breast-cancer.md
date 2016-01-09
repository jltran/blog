---
title: "Visualization: Breast Cancer Logistic Regression"
posted: 2015-11-20
post: true
layout: post.hbs
---
<style>
    .page-content .post {
      width: 60%;
    }

    svg {
      font: 10px sans-serif;
    }

    .back{
      position: absolute;
      bottom :0;
    }

    .axis path,
    .axis line {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }

    text {
      font-weight: bold;
      fill: black;
    }

    rect {
      fill-opacity: 0.6;
      stroke-width: 2.5;
      stroke-opacity: 1;
    }

    .fl {
      float: left;
    }
    </style>

<div class="cancer"></div>
<script type="text/javascript" src="{{assets}}/js/d3/breast-cancer.js"></script>
