import { Button } from "@/components/ui/button";

import { Minus, Plus } from "lucide-react";

import "./title.css";

function TitleButtonWidget(props) {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={props.action}
        id={props.id}
        className={"spaced-titlebar-button"}
      >
        {props.children}
      </Button>
    </>
  );
}

export default TitleButtonWidget;
