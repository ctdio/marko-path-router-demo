// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/components/sidebar/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/components/taglib/include-tag")),
    marko_attr = marko_helpers.a,
    marko_classAttr = marko_helpers.ca,
    marko_styleAttr = marko_helpers.sa;

function render(input, out, __component, component, state) {
  var data = input;

  var color=input.color

  var reveal=state.reveal

  var showOverlay=state.showOverlay

  var width=state.width

  var defaultWidth='250px'

  var rightSide=state.rightSide

  var floating=state.floating

  var header=state.header

  var body=state.body

  var footer=state.footer

  out.w("<div" +
    marko_classAttr([
      "marko-drawer-container",
      floating ? "" : "pinned",
      reveal ? "reveal" : "",
      rightSide ? "rightSide" : ""
    ]) +
    marko_styleAttr({
      width: floating ? "0px" : width || "250px",
      "margin-left": ((!rightSide) && (!floating)) && (!reveal) ? "-" + (width || defaultWidth) : "0px",
      "margin-right": (rightSide && (!floating)) && (!reveal) ? "-" + (width || defaultWidth) : "0px"
    }) +
    marko_attr("id", __component.id) +
    "><div" +
    marko_classAttr([
      "marko-drawer",
      floating ? "floating" : "",
      rightSide ? "rightSide" : "leftSide",
      reveal ? "reveal" : ""
    ]) +
    marko_styleAttr({
      width: width || "250px",
      "margin-left": ((!rightSide) && floating) && (!reveal) ? "-" + (width || defaultWidth) : "0px",
      "margin-right": (rightSide && floating) && (!reveal) ? "-" + (width || defaultWidth) : "0px",
      "background-color": color
    }) +
    ">");

  if (header) {
    var __componentId1 = __component.elId("0[]");

    out.w("<div class=\"marko-drawer-header-container\"" +
      marko_attr("id", __componentId1) +
      ">");

    include_tag({
        _target: header.renderBody,
        _elId: __componentId1
      }, out);

    out.w("</div>");
  }

  if (body) {
    var __componentId3 = __component.elId("2[]");

    out.w("<div class=\"marko-drawer-body-container\"" +
      marko_attr("id", __componentId3) +
      ">");

    include_tag({
        _target: body.renderBody,
        _elId: __componentId3
      }, out);

    out.w("</div>");
  }

  if (footer) {
    var __componentId5 = __component.elId("4[]");

    out.w("<div class=\"marko-drawer-footer-container\"" +
      marko_attr("id", __componentId5) +
      ">");

    include_tag({
        _target: footer.renderBody,
        _elId: __componentId5
      }, out);

    out.w("</div>");
  }

  out.w("</div>");

  if ((floating && reveal) && showOverlay) {
    out.w("<div class=\"marko-drawer-overlay\"" +
      marko_attr("data-marko", {
        onclick: __component.d("close")
      }, false) +
      "></div>");
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
          path: "./index.marko"
        }
    ],
    tags: [
      "marko/components/taglib/include-tag"
    ]
  };
