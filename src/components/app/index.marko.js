// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/src/components/app/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_renderComponent = require("marko/components/taglib/helpers/renderComponent"),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    sidebar_link_template = marko_loadTemplate(require.resolve("../sidebar-link")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    sidebar_link_tag = marko_loadTag(sidebar_link_template),
    sidebar_template = marko_loadTemplate(require.resolve("../sidebar/index.marko")),
    sidebar_tag = marko_loadTag(sidebar_template),
    marko_attr = marko_helpers.a,
    router_template = marko_loadTemplate(require.resolve("marko-component-router/src/components/router/index.marko")),
    router_tag = marko_loadTag(router_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"app\"" +
    marko_attr("id", __component.id) +
    "><div class=\"app-body\">");

  marko_renderComponent(sidebar_tag, {
      reveal: true,
      color: "#222D32",
      header: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"drawer-header\"><label class=\"drawer-header-label\">Routing for Marko</label></div>");
          }
        },
      body: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"drawer-section\"><ul class=\"drawer-list\">");

            sidebar_link_tag({
                icon: "home",
                path: "/",
                title: "home",
                active: state.currentRoute === "/"
              }, out);

            sidebar_link_tag({
                icon: "pie-chart",
                path: "/charts",
                title: "charts",
                active: component.routeMatches("/charts")
              }, out);

            if (component.routeMatches("/charts")) {
              sidebar_link_tag({
                  icon: "pie-chart",
                  path: "/charts/nested-chart",
                  title: "Nested Chart",
                  active: component.routeMatches("/charts/nested-chart")
                }, out);
            }

            sidebar_link_tag({
                icon: "beer",
                path: "/beer",
                title: "beer",
                active: component.routeMatches("/beer")
              }, out);

            out.w("</ul></div>");
          }
        }
    }, out, [
    __component,
    "sidebar"
  ]);

  out.w("<div class=\"app-container\"><div class=\"app-header\"><i class=\"button fa fa-2x fa-bars\"" +
    marko_attr("data-marko", {
      onclick: __component.d("toggleSidebar")
    }, false) +
    "></i></div><div class=\"app-content\">");

  marko_renderComponent(router_tag, {
      initialRoute: "/charts",
      routeProvider: component.provider
    }, out, [
    __component,
    "router"
  ]);

  out.w("</div></div></div></div>");
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
      "../sidebar-link",
      "../sidebar/index.marko",
      "marko-component-router/src/components/router/index.marko"
    ]
  };
