export default (dc, { defaultModel, defaultView, ...config }) => {
  const type = "accordion-content";
  const attrKey = config.attrAccordionContent;
  const classKey = config.classAccordionContent;

  dc.addType(type, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          name: "Accordion Content",
          draggable: `[${config.attrAccordionContainer}]`,
          copyable: false,
          removable: false,
          selectable: true,
          ...config.accordionContentProps,
        },

        init() {
          const attrs = this.getAttributes();
          attrs[attrKey] = 1;
          this.setAttributes(attrs);
          classKey && this.addClass(classKey);
        },
      },
      {
        isComponent(el) {
          if (el.hasAttribute && el.hasAttribute(attrKey)) {
            return { type };
          }
        },
      }
    ),

    view: defaultView,
  });
};
