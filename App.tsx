import * as React from "react";

import Navigation from "./navigation";
import Knob from "./screens/KnobLabel"; //for testing before implementing with navigation
import Door from "./screens/DoorLabel"; //^
import Misc from "./screens/Misc"; //^
import PostScreen from "./screens/PostScreen"; //^
import Locations from "./screens/Locations";

export default function App() {
  return (
    <Navigation />
    //<Locations navigation={undefined}/>
    //<PostScreen/>
    //<Door/>
  );
}
