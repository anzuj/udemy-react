import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      label: "Label 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet justo vulputate, auctor lectus eget, viverra dolor. Proin porttitor velit vel maximus",
        id:1
    },
    {
      label: "Label 2",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris bibendum dignissim odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus nunc, facilisis quis leo ultricies, porttitor pulvinar nisl. Phasellus lectus ante, vehicula nec felis imperdiet, sodales aliquet risus. Nulla ut ante feugiat, blandit dui vel, rutrum risus. Proin porttitor sapien libero, eget consequat purus faucibus quis. Nulla tellus orci, luctus sed lectus nec, sagittis finibus ligula.",
        id:2
    },
    {
      label: "Label 3",
      content: "Sed eu libero imperdiet, luctus arcu in, lobortis velit. Suspendisse non lorem.",
      id: 3
    },
  ];
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
}

export default AccordionPage;
