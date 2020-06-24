import { EspanaCovidMarzoComponent } from "./espana-covid-marzo.component";
import React from "react";

interface Props {
}

export const EspanaCovidMarzoContainer: React.FC<Props> = (props: Props) => {
  // This container will show the generated map
  return (
        <EspanaCovidMarzoComponent />
  );
};
