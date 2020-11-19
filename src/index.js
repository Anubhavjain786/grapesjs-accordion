import loadComponents from "./components/index";
import loadBlocks from "./blocks";

const attrAccordion = "data-accordion";
const attrAccordions = "data-accordions";
const attrAccordionContent = "data-accordion-content";
const attrAccordionContainer = "data-accordion-container";

export default (editor, opts = {}) => {
  const options = {
    ...{
      // Object to extend the default accordions block, eg. `{ label: 'Accordions', attributes: { ... } }`
      // Pass a falsy value to avoid adding the block
      accordionsBlock: {},

      // Object to extend the default accordions properties, eg. `{ name: 'My Accordions', droppable: false, ... }`
      accordionsProps: {},

      // Object to extend the default accordion properties
      accordionProps: {},

      // Object to extend the default accordion content properties
      accordionContentProps: {},

      // Object to extend the default accordion container properties
      accordionContainerProps: {},

      // Accordions attribute identifier (main component)
      attrAccordions,

      // Accordion attribute identifier
      attrAccordion,

      // Accordion content attribute identifier
      attrAccordionContent,

      // Accordion container attribute identifier
      attrAccordionContainer,

      // Default class to use on accordion
      classAccordion: "accordion",

      // Class used on accordions when active
      classAccordionActive: "accordion-active",

      // Default class to use on accordion content
      classAccordionContent: "accordion-content",

      // Default class to use on accordion container
      classAccordionContainer: "accordion-container",

      // The attribute used inside accordions as a selector for accordion contents
      selectorAccordion: "href",

      // Default accordions template
      template: `
      <div ${attrAccordionContainer}>
        <a  ${attrAccordion}>Accordion 1</a>
        <div ${attrAccordionContent}>
          <div>Accordion 1 Content</div>
        </div>
      </div>
      <div ${attrAccordionContainer}>
        <a  ${attrAccordion}>Accordion 2</a>
        <div ${attrAccordionContent}>
          <div>Accordion 2 Content</div> 
        </div>      
      </div>
      <div ${attrAccordionContainer}>
        <a  ${attrAccordion}>Accordion 3</a>
        <div ${attrAccordionContent}>
          <div>Accordion 3 Content</div>
        </div>
      </div>
    `,

      // Default template for new added accordion contents
      templateAccordionContent: `<div>New Accordion Content</div>`,

      style: `
      .accordion {
        text-decoration: none;
        color: inherit;
        padding: 7px 14px;
        transition: opacity 0.3s;
        display: block;
        border-radius: 3px;
        margin-right: 10px;
        background-color: #eee;
        margin-top: 5px;
      }

      .accordion-content {
        display: none;
        padding: 6px 12px;
        min-height: 100px;
        border: solid 1px #eee;
      }

    `,
    },
    ...opts,
  };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
};
