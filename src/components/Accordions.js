export default (dc, { defaultModel, defaultView, ...config }) => {
  const type = "accordions";
  const attrAccordions = config.attrAccordions;

  dc.addType(type, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          copyable: false,
          name: "Accordions",

          "attr-accordions": config.attrAccordions,
          "attr-accordion": config.attrAccordion,
          "attr-accordion-content": config.attrAccordionContent,
          "class-accordion-active": config.classAccordionActive,
          "selector-accordion": config.selectorAccordion,

          script() {
            var i;
            var el = this;
            var attrAccordions = "[" + "{[ attr-accordions ]}" + "]";
            var attrAccordion = "[" + "{[ attr-accordion ]}" + "]";
            var attrAccordionContent =
              "[" + "{[ attr-accordion-content ]}" + "]";
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
              var accordions = el.querySelectorAll(attrAccordion) || [];

              for (i = 0; i < accordions.length; i++) {
                var accordion = accordions[i];
                var newClass = accordion.className
                  .replace(classAccordionActive, "")
                  .trim();
                accordion.className = newClass;
              }

              hideContents();
              accordionEl.className += " " + classAccordionActive;
              var accordionContSelector = accordionEl.getAttribute(
                selectorAccordion
              );
              var accordionContent = el.querySelector(accordionContSelector);
              accordionContent && (accordionContent.style.display = "");
            };

            var accordionToActive = el.querySelector(
              "." + classAccordionActive + attrAccordion
            );
            accordionToActive =
              accordionToActive || el.querySelector(attrAccordion);
            accordionToActive && activeAccordion(accordionToActive);

            el.addEventListener("click", function (e) {
              var target = e.target;
              if (
                el.querySelector(target.getAttribute(selectorAccordion)).style
                  .display === "block"
              ) {
                el.querySelector(
                  target.getAttribute(selectorAccordion)
                ).style.display = "none";
              } else {
                el.querySelector(
                  target.getAttribute(selectorAccordion)
                ).style.display = "block";
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
