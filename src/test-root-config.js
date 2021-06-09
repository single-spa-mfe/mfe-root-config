import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test/mfe-react-app",
  app: () => System.import("@test/mfe-react-app"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "@test/mfe-angular-app",
  app: () => System.import("@test/mfe-angular-app"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});
