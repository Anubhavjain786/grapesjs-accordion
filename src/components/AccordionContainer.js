export default (dc, { defaultModel, defaultView, ...config }) => {
  const type = "accordion-container";
  const attrAccordions = config.attrAccordions;
  const attrKey = config.attrAccordionContainer;
  const classKey = config.classAccordionContainer;
  const attrAccordionContent = config.attrAccordionContent;
  const selectorAccordion = config.selectorAccordion;

  dc.addType(type, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          name: "Accordion Container",
          draggable: `[${attrAccordions}, ${attrAccordionContent}]`,
          droppable: false,
          copyable: true,
          removable: true,
          ...config.accordionContainerProps,
        },

        init() {
          const attrs = this.getAttributes();
          attrs[attrKey] = 1;
          this.setAttributes(attrs);
          classKey && this.addClass(classKey);
          this.listenTo(this, "add", this.onAdd);
        },

        onAdd() {
          const componentModels = this.components().models;
          if (componentModels && Array.isArray(componentModels)) {
            let accordionContentID;
            for (let i = componentModels.length - 1; i >= 0; i--) {
              const model = componentModels[i];
              const attrs = model.getAttributes();
              if (attrs[`${attrAccordionContent}`]) {
                accordionContentID = model.getId();
                model.setId(accordionContentID);
              } else {
                model.addAttributes({
                  [selectorAccordion]: `#${accordionContentID}`,
                });
              }
            }
          }
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
