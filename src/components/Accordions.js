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

            // var hideContents = () => {
            //   var accordionContents =
            //     el.querySelectorAll(attrAccordionContent) || [];
            //   if (accordionContents) {
            //     for (i = 0; i < accordionContents.length; i++) {
            //       accordionContents[i].style.display = "none";
            //     }
            //   }
            // };

            var activeAccordion = (accordionEl) => {
              var accordionContainers =
                el.querySelectorAll(attrAccordionContainer) || [];

              if (accordionContainer) {
                for (i = 0; i < accordionContainers.length; i++) {
                  var accordionContainer = accordionContainers[i];
                  var newClass = accordionContainer.className
                    .replace(classAccordionActive, "")
                    .trim();

                  accordionContainer.className = newClass;
                }
              }

              // hideContents();
              accordionEl.className += " " + classAccordionActive;
            };

            var deactiveAccordion = (accordionEl) => {
              var newClass = accordionEl.className
                .replace(classAccordionActive, "")
                .trim();
              accordionEl.className = newClass;
            };

            el.addEventListener("click", (e) => {
              var target = e.target;
              if (matches.call(target, attrAccordion)) {
                if (
                  el.querySelector(target.getAttribute(selectorAccordion)).style
                    .display === "block"
                ) {
                  deactiveAccordion(target.parentElement);
                  el.querySelector(
                    target.getAttribute(selectorAccordion)
                  ).style.display = "none";
                } else {
                  activeAccordion(target.parentElement);
                  el.querySelector(
                    target.getAttribute(selectorAccordion)
                  ).style.display = "block";
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
