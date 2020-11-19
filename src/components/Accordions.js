export default (dc, { defaultModel, defaultView, ...config }) => {
  const type = "accordions";
  const attrAccordions = config.attrAccordions;

  dc.addType(type, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          copyable: false,
          droppable: false,
          name: "Accordions",

          "attr-accordions": config.attrAccordions,
          "attr-accordion": config.attrAccordion,
          "attr-accordion-content": config.attrAccordionContent,
          "attr-accordion-container": config.attrAccordionContainer,
          "class-accordion-active": config.classAccordionActive,
          "selector-accordion": config.selectorAccordion,

          script() {
            var i;
            var el = this;
            var attrAccordions = "[" + "{[ attr-accordions ]}" + "]";
            var attrAccordion = "[" + "{[ attr-accordion ]}" + "]";
            var attrAccordionContent =
              "[" + "{[ attr-accordion-content ]}" + "]";
            var attrAccordionContainer =
              "[" + "{[ attr-accordion-container ]}" + "]";
            var classAccordionActive = "{[ class-accordion-active ]}";
            var selectorAccordion = "{[ selector-accordion ]}";
            var body = document.body;
            var matches =
              body.matchesSelector ||
              body.webkitMatchesSelector ||
              body.mozMatchesSelector ||
              body.msMatchesSelector;

            var hideContents = function () {
              var accordionContents =
                el.querySelectorAll(attrAccordionContent) || [];
              for (i = 0; i < accordionContents.length; i++) {
                accordionContents[i].style.display = "none";
              }
            };

            var activeAccordion = function (accordionEl) {
              var accordionContainers =
                el.querySelectorAll(attrAccordionContainer) || [];

              for (i = 0; i < accordionContainers.length; i++) {
                var accordionContainer = accordionContainers[i];
                var newClass = accordionContainer.className
                  .replace(classAccordionActive, "")
                  .trim();

                accordionContainer.className = newClass;
              }

              hideContents();
              accordionEl.className += " " + classAccordionActive;
              var accordionContSelector = accordionEl.getAttribute(
                selectorAccordion
              );
              var accordionContent = el.querySelector(accordionContSelector);
              accordionContent && (accordionContent.style.display = "");
            };

            var deactiveAccordion = function (accordionEl) {
              var newClass = accordionEl.className
                .replace(classAccordionActive, "")
                .trim();
              accordionEl.className = newClass;
            };

            el.addEventListener("click", function (e) {
              var target = e.target;

              if (matches.call(target, attrAccordion)) {
                let attrib = el.querySelector(
                  target.getAttribute(selectorAccordion)
                );
                if (attrib && attrib.style.display === "block") {
                  deactiveAccordion(target.parentElement);
                  attrib.style.display = "none";
                } else {
                  activeAccordion(target.parentElement);
                  attrib.style.display = "block";
                }
              }
            });
          },
          ...config.accordionsProps,
        },

        init() {
          const attrs = this.getAttributes();
          attrs[config.attrAccordions] = 1;
          this.setAttributes(attrs);
        },
      },
      {
        isComponent(el) {
          if (el.hasAttribute && el.hasAttribute(attrAccordions)) {
            return { type };
          }
        },
      }
    ),

    view: defaultView.extend({
      init() {
        const comps = this.model.components();
        !comps.length && comps.add(config.template);
      },

      onRender() {},
    }),
  });
};
