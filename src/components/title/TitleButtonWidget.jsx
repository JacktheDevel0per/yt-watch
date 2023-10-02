import { Button } from "@/components/ui/button";

import "./title.css";

function TitleButtonWidget(props) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={props.action}
        id={props.id}
        className={"spaced-titlebar-button"}
      >
        <img src={props.image} />
      </Button>
      {/* <div
        className={"titlebar-button " + props.className}
        onClick={props.action}
      >
        <img src={props.image} />
      </div> */}
    </>
  );
}

export default TitleButtonWidget;
