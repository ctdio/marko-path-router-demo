// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/src/components/sidebar-link/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    router_link_template = marko_loadTemplate(require.resolve("marko-component-router/src/components/router-link/index.marko")),
    marko_loadTag = marko_helpers.t,
    router_link_tag = marko_loadTag(router_link_template),
    marko_classAttr = marko_helpers.ca,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<li" +
    marko_classAttr({
      "active": input.active
    }) +
    marko_attr("id", __component.id) +
    ">");

  router_link_tag({
      path: input.path,
      renderBody: function renderBody(out) {
        out.w("<i class=\"fa fa-" +
          marko_escapeXmlAttr(input.icon) +
          "\"></i><label class=\"list-label\">" +
          marko_escapeXml(input.title) +
          "</label>");
      }
    }, out);

  out.w("</li>");
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
      "marko-component-router/src/components/router-link/index.marko"
    ]
  };
