(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.LazyYoutube = {}));
}(this, function (exports) { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    props: ["vid", "alt"],
    name: "LazyYoutube",
    data: function () { return ({
      enable: false,
      active: false
    }); },
    computed: {
      src: function src() {
        var query = "?rel=0&showinfo=0&autoplay=1&hd=1";
        return "https://www.youtube.com/embed/" + this.vid + query;
      }
    },
    mounted: function mounted() {
      this.enable = true;
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) { style.element.setAttribute('media', css.media); }
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) { style.element.removeChild(nodes[index]); }
        if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
      }
    }
  }

  var browser = createInjector;

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: ["video " + [_vm.enable ? "video--enabled" : ""]],
        attrs: { width: "1920", height: "1080" }
      },
      [
        !_vm.active
          ? _c(
              "a",
              {
                staticClass: "video__link",
                attrs: { href: "https://youtu.be/" + _vm.vid },
                on: {
                  click: function($event) {
                    $event.preventDefault();
                    _vm.active = true;
                  }
                }
              },
              [
                _c("picture", [
                  _c("source", {
                    attrs: {
                      srcset:
                        "https://i.ytimg.com/vi_webp/" +
                        _vm.vid +
                        "/maxresdefault.webp",
                      type: "image/webp"
                    }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "video__media",
                    attrs: {
                      src:
                        "https://i.ytimg.com/vi/" +
                        _vm.vid +
                        "/maxresdefault.jpg",
                      alt: _vm.alt
                    }
                  })
                ])
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.active
          ? _c(
              "button",
              {
                staticClass: "video__button",
                attrs: { type: "button", "aria-label": "Запустить видео" },
                on: {
                  click: function($event) {
                    _vm.active = true;
                  }
                }
              },
              [
                _c(
                  "svg",
                  { attrs: { width: "68", height: "48", viewBox: "0 0 68 48" } },
                  [
                    _c("path", {
                      staticClass: "video__button-shape",
                      attrs: {
                        d:
                          "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "video__button-icon",
                      attrs: { d: "M 45,24 27,14 27,34" }
                    })
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.active
          ? _c("iframe", {
              staticClass: "video__media",
              attrs: {
                width: "1920",
                height: "1080",
                src: _vm.src,
                allow: "autoplay; encrypted-media",
                allowfullscreen: ""
              }
            })
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-67e5b381_0", { source: "\n.video[data-v-67e5b381] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%;\n  background-color: #000000;\n}\n.video__link[data-v-67e5b381] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.video__media[data-v-67e5b381] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.video__button[data-v-67e5b381] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  display: none;\n  padding: 0;\n  width: 68px;\n  height: 48px;\n  border: none;\n  background-color: transparent;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n.video__button-shape[data-v-67e5b381] {\n  fill: #212121;\n  fill-opacity: 0.8;\n}\n.video__button-icon[data-v-67e5b381] {\n  fill: #ffffff;\n}\n.video__button[data-v-67e5b381]:focus {\n  outline: none;\n}\n.video:hover .video__button-shape[data-v-67e5b381],\n.video__button:focus .video__button-shape[data-v-67e5b381] {\n  fill: #ff0000;\n  fill-opacity: 1;\n}\n\n/* Enabled */\n.video--enabled[data-v-67e5b381] {\n  cursor: pointer;\n}\n.video--enabled .video__button[data-v-67e5b381] {\n  display: block;\n}\n", map: {"version":3,"sources":["/ssd/vue-lazy-youtube/src/lazy-youtube.vue"],"names":[],"mappings":";AAkEA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,sBAAA;EACA,yBAAA;AACA;AAEA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,gCAAA;EACA,eAAA;AACA;AAEA;EACA,aAAA;EACA,iBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;;EAEA,aAAA;EACA,eAAA;AACA;;AAEA,YAAA;AAEA;EACA,eAAA;AACA;AAEA;EACA,cAAA;AACA","file":"lazy-youtube.vue","sourcesContent":["<template>\n  <div width=\"1920\" height=\"1080\" :class=\"['video '+ [enable?'video--enabled':'']]\">\n    <a\n      v-if=\"!active\"\n      class=\"video__link\"\n      :href=\"'https://youtu.be/'+vid\"\n      @click.prevent=\"active=true\"\n    >\n      <picture>\n        <source\n          :srcset=\"'https://i.ytimg.com/vi_webp/'+vid+'/maxresdefault.webp'\"\n          type=\"image/webp\"\n        >\n        <img\n          class=\"video__media\"\n          :src=\"'https://i.ytimg.com/vi/'+vid+'/maxresdefault.jpg'\"\n          :alt=\"alt\"\n        >\n      </picture>\n    </a>\n    <button\n      @click=\"active=true\"\n      v-if=\"!active\"\n      class=\"video__button\"\n      type=\"button\"\n      aria-label=\"Запустить видео\"\n    >\n      <svg width=\"68\" height=\"48\" viewBox=\"0 0 68 48\">\n        <path\n          class=\"video__button-shape\"\n          d=\"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z\"\n        ></path>\n        <path class=\"video__button-icon\" d=\"M 45,24 27,14 27,34\"></path>\n      </svg>\n    </button>\n    <iframe\n      width=\"1920\"\n      height=\"1080\"\n      v-if=\"active\"\n      :src=\"src\"\n      allow=\"autoplay; encrypted-media\"\n      allowfullscreen\n      class=\"video__media\"\n    ></iframe>\n  </div>\n</template>\n<script>\nexport default {\n  props: [\"vid\", \"alt\"],\n  name: \"LazyYoutube\",\n  data: () => ({\n    enable: false,\n    active: false\n  }),\n  computed: {\n    src() {\n      let query = \"?rel=0&showinfo=0&autoplay=1&hd=1\";\n      return \"https://www.youtube.com/embed/\" + this.vid + query;\n    }\n  },\n  mounted() {\n    this.enable = true;\n  }\n};\n</script>\n<style scoped>\n.video {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%;\n  background-color: #000000;\n}\n\n.video__link {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video__media {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n\n.video__button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  display: none;\n  padding: 0;\n  width: 68px;\n  height: 48px;\n  border: none;\n  background-color: transparent;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n\n.video__button-shape {\n  fill: #212121;\n  fill-opacity: 0.8;\n}\n\n.video__button-icon {\n  fill: #ffffff;\n}\n\n.video__button:focus {\n  outline: none;\n}\n\n.video:hover .video__button-shape,\n.video__button:focus .video__button-shape {\n  fill: #ff0000;\n  fill-opacity: 1;\n}\n\n/* Enabled */\n\n.video--enabled {\n  cursor: pointer;\n}\n\n.video--enabled .video__button {\n  display: block;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = "data-v-67e5b381";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var LazyYoutube = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
      if (install.installed) { return; }
      install.installed = true;
      Vue.component('LazyYoutube', LazyYoutube);
  }

  // Create module definition for Vue.use()
  var plugin = {
      install: install,
  };
  LazyYoutube.install = install;

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
      GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
      GlobalVue = global.Vue;
  }
  if (GlobalVue) {
      GlobalVue.use(plugin);
  }

  exports.install = install;
  exports.default = LazyYoutube;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
