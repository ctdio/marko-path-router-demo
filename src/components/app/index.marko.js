// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-router-demo$1.0.0/components/app/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_renderComponent = require("marko/components/taglib/helpers/renderComponent"),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    router_link_template = marko_loadTemplate(require.resolve("marko-component-router/src/components/router-link/index.marko")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    router_link_tag = marko_loadTag(router_link_template),
    marko_classAttr = marko_helpers.ca,
    marko_attr = marko_helpers.a,
    sidebar_template = marko_loadTemplate(require.resolve("../sidebar/index.marko")),
    sidebar_tag = marko_loadTag(sidebar_template),
    route_template = marko_loadTemplate(require.resolve("marko-component-router/src/components/route/index.marko")),
    route_tag = marko_loadTag(route_template),
    router_template = marko_loadTemplate(require.resolve("marko-component-router/src/components/router/index.marko")),
    router_tag = marko_loadTag(router_template);

function render(input, out, __component, component, state) {
  var data = input;

  var homeComponent = require('../home')

  var beerComponent = require('../beer')

  var chartsComponent = require('../charts')

  var nestedChartComponent = require('../nested-chart')

  var deepNestedChartComponent = require('../deep-nested-chart')

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
            out.w("<div class=\"drawer-section\"><ul class=\"drawer-list\"><li data-key=\"home\"" +
              marko_classAttr({
                "active": state.activeItem === "home"
              }) +
              marko_attr("data-marko", {
                onclick: __component.d("handleItemClick")
              }, false) +
              ">");

            router_link_tag({
                path: "/",
                renderBody: function renderBody(out) {
                  out.w("<i class=\"fa fa-home\"></i><label class=\"list-label\">Home</label>");
                }
              }, out);

            out.w("</li><li data-key=\"charts\"" +
              marko_classAttr({
                "active": state.activeItem === "charts"
              }) +
              marko_attr("data-marko", {
                onclick: __component.d("handleItemClick")
              }, false) +
              ">");

            router_link_tag({
                path: "/charts",
                renderBody: function renderBody(out) {
                  out.w("<i class=\"fa fa-pie-chart\"></i><label class=\"list-label\">Charts</label>");
                }
              }, out);

            out.w("</li><li data-key=\"beer\"" +
              marko_classAttr({
                "active": state.activeItem === "beer"
              }) +
              marko_attr("data-marko", {
                onclick: __component.d("handleItemClick")
              }, false) +
              ">");

            router_link_tag({
                path: "/beer",
                renderBody: function renderBody(out) {
                  out.w("<i class=\"fa fa-beer\"></i><label class=\"list-label\">Beer</label>");
                }
              }, out);

            out.w("</li></ul></div>");
          }
        },
      footer: {}
    }, out, [
    __component,
    "sidebar"
  ]);

  out.w("<div class=\"app-container\"><div class=\"app-header\"><i class=\"button fa fa-2x fa-bars\"" +
    marko_attr("data-marko", {
      onclick: __component.d("toggleSidebar")
    }, false) +
    "></i></div><div class=\"app-content\">");

  if (state.ready) {
    router_tag({
        initialRoute: "/",
        renderBody: function renderBody(out) {
          route_tag({
              path: "/",
              component: homeComponent
            }, out);

          route_tag({
              path: "/charts",
              component: chartsComponent,
              renderBody: function renderBody(out) {
                route_tag({
                    path: "/nested-chart",
                    component: nestedChartComponent,
                    renderBody: function renderBody(out) {
                      route_tag({
                          path: "/deep-nested-chart",
                          component: deepNestedChartComponent
                        }, out);
                    }
                  }, out);
              }
            }, out);

          route_tag({
              path: "/deep-nested-chart",
              component: deepNestedChartComponent
            }, out);

          route_tag({
              path: "/beer",
              component: beerComponent
            }, out);
        }
      }, out);
  }

  out.w("</div></div></div></div>");
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
      "marko-component-router/src/components/router-link/index.marko",
      "../sidebar/index.marko",
      "marko-component-router/src/components/route/index.marko",
      "marko-component-router/src/components/router/index.marko"
    ]
  };
