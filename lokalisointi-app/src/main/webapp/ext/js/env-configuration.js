
window.CONFIG = window.CONFIG || {};
window.CONFIG.env = window.CONFIG.env || {};
window.CONFIG.env.localisations = window.CONFIG.env.localisations || [];

// window.CONFIG.env.casUrl = "cas_myroles.json";
window.CONFIG.env.casUrl = "/cas/myroles";

// Localhost service testing
// window.CONFIG.env.lokalisointiRestUrl = "http://localhost:8319/lokalisointi-service/rest/v1/localisation";

// Luokka service testing
// window.CONFIG.env.lokalisointiRestUrl = "https://itest-virkailija.oph.ware.fi/lokalisointi-service/rest/v1/localisation";

// Production
window.CONFIG.env.lokalisointiRestUrl = "/lokalisointi-service/rest/v1/localisation";
