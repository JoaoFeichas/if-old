"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about/about.component');
var landing_page_component_1 = require('./landing-page/landing-page.component');
var appRouters = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'landingpage', component: landing_page_component_1.LandingPageComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRouters);
//# sourceMappingURL=app.routing.js.map