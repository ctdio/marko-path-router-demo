// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/src/components/charts/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    card_template = marko_loadTemplate(require.resolve("../card")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    card_tag = marko_loadTag(card_template),
    line_chart_card_template = marko_loadTemplate(require.resolve("../line-chart-card")),
    line_chart_card_tag = marko_loadTag(line_chart_card_template),
    bar_chart_card_template = marko_loadTemplate(require.resolve("../bar-chart-card")),
    bar_chart_card_tag = marko_loadTag(bar_chart_card_template),
    marko_attr = marko_helpers.a,
    w_preserve_tag = marko_loadTag(require("marko/components/taglib/preserve-tag")),
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    ">");

  card_tag({
      icon: "question",
      title: "Nested Components",
      renderBody: function renderBody(out) {
        out.w("<div class=\"charts-explanation\"></div>");
      }
    }, out);

  var __componentId1 = __component.elId("0[]");

  w_preserve_tag({
      id: __componentId1,
      renderBody: function renderBody(out) {
        out.w("<div class=\"charts-showcase\"" +
          marko_attr("id", __componentId1) +
          ">");

        line_chart_card_tag({
            chartId: "line1"
          }, out);

        bar_chart_card_tag({
            chartId: "bar1"
          }, out);

        out.w("</div>");
      }
    }, out);

  if (input.renderBody) {
    include_tag({
        _target: input.renderBody
      }, out);
  }

  out.w("</div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css",
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "../card",
      "../line-chart-card",
      "../bar-chart-card",
      "marko/components/taglib/preserve-tag",
      "marko/taglibs/core/include-tag"
    ]
  };
