// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/src/components/card/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag")),
    marko_classAttr = marko_helpers.ca,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_classAttr({
      "card-container": true,
      "card-slide-in": state.animate
    }) +
    marko_attr("id", __component.id) +
    "><div class=\"card-content\"><div class=\"card-content-header\"><i class=\"card-icon fa fa-" +
    marko_escapeXmlAttr(input.icon) +
    "\"></i><label>" +
    marko_escapeXml(input.title) +
    "</label></div><div class=\"card-content-body\">");

  if (input.renderBody) {
    include_tag({
        _target: input.renderBody
      }, out);
  }

  out.w("</div></div></div>");
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
      "marko/taglibs/core/include-tag"
    ]
  };
