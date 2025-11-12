import { Button } from "@chakra-ui/react";
import { useReducer } from "react";
import { counterReducer } from "./reducer/counterReducer";

export const Counter = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      counter({value})
      <Button
        className="btn btn-outline-primary"
        onMouseDown={() => dispatch({ type: "INCREMENT" })}
        marginRight={2}
      >
        +
      </Button>
      <Button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "MIN" })}
        marginRight={2}
      >
        -
      </Button>
      <Button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </Button>
    </div>
  );
};
