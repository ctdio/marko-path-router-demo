// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/components/beer/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/components/taglib/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    "><p>this is the beer component</p><button" +
    marko_attr("data-marko", {
      onclick: __component.d("handleClick")
    }, false) +
    ">Move to /charts/deep-nested-chart</button><p>nested routes will show up below</p>");

  if (input.renderBody) {
    var __componentId1 = __component.elId("0[]");

    out.w("<div" +
      marko_attr("id", __componentId1) +
      ">");

    include_tag({
        _target: input.renderBody,
        _elId: __componentId1
      }, out);

    out.w("</div>");
  }

  out.w("</div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
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
      "marko/components/taglib/include-tag"
    ]
  };
