import React from "react";
import { useIntl } from "react-intl";
import Page from "material-ui-shell/lib/containers/Page";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar";

const About = () => {
  const intl = useIntl();

  return (
    <Page
      pageTitle={intl.formatMessage({ id: "about", defaultMessage: "About" })}
    >
      <Scrollbar>
        <p>
          Are you counting widgets, fidgets, rocks, socks, or stocks over time?
          Or, any value tracked over time? Then 4Cast is the place to go look at
          what the future might bring.
        </p>
      </Scrollbar>
    </Page>
  );
};
export default About;
