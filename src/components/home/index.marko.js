// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/src/components/home/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    card_template = marko_loadTemplate(require.resolve("../card")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    card_tag = marko_loadTag(card_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"home\"" +
    marko_attr("id", __component.id) +
    ">");

  card_tag({
      icon: "smile-o",
      title: "Marko component/path router",
      renderBody: function renderBody(out) {
        out.w("<div class=\"welcome\"><p>Welcome! This is an example of routing for marko.</p></div>");
      }
    }, out);

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
      "../card"
    ]
  };
