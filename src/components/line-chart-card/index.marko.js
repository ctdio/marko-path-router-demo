// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/src/components/line-chart-card/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_renderComponent = require("marko/components/taglib/helpers/renderComponent"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    card_template = marko_loadTemplate(require.resolve("../card")),
    marko_loadTag = marko_helpers.t,
    card_tag = marko_loadTag(card_template);

function render(input, out, __component, component, state) {
  var data = input;

  marko_renderComponent(card_tag, {
      icon: "line-chart",
      title: "Line Chart",
      renderBody: function renderBody(out) {
        out.w("<div" +
          marko_attr("id", __component.elId(input.chartId)) +
          "></div>");
      }
    }, out, [
    __component,
    "_r0"
  ]);
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType,
    roots: [
      "_r0"
    ]
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "../card"
    ]
  };
