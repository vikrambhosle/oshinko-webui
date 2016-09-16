// This is the default configuration for the dev mode of the web console.
// A generated version of this config is created at run-time when running
// the web console from the openshift binary.
//
// To change configuration for local development, copy this file to
// assets/app/config.local.js and edit the copy.
window.OPENSHIFT_CONFIG = {
    apis: {
        hostPort: "ORIGIN:8443",
        prefix: "/apis"
    },
    api: {
        openshift: {
            hostPort: "ORIGIN:8443",
            prefix: "/oapi"
        },
        k8s: {
            hostPort: "ORIGIN:8443",
            prefix: "/api"
        }
    },
    auth: {
        oauth_authorize_uri: "https://ORIGIN:8443/oauth/authorize",
        oauth_redirect_base: "https://OSHINKOHOST:9000",
        oauth_client_id: "oshinko-oauth-client",
        logout_uri: ""
    },
    loggingURL: "",
    metricsURL: ""
};

window.OPENSHIFT_VERSION = {
    openshift: "dev-mode",
    kubernetes: "dev-mode"
};
