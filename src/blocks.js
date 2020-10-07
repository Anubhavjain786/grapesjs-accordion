export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const accordionsBlock = config.accordionsBlock;
  const style = config.style;
  const type = "accordions";
  const content = `<div data-gjs-type="${type}"></div>
    ${style ? `<style>${style}</style>` : ""}`;

  accordionsBlock &&
    bm.add(type, {
      label: "Accordions Menu",
      attributes: { class: "fa fa-arrow-circle-down" },
      content,
      ...accordionsBlock,
    });
};
