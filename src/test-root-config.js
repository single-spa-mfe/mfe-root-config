import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test/mfe-react-spa",
  app: () => System.import("@test/mfe-react-spa"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "@test/mfe-angular-app",
  app: () => System.import("@test/mfe-angular-app"),
  activeWhen: ["/ng"],
});

start({
  urlRerouteOnly: true,
});
