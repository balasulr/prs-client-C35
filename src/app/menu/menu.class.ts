export class Menu {
    // Properties of display & route
    display: string; // What shows on the page to the user
    route: string; // route path defined in the app-routing.module.ts

    constructor(display: string, route: string) {
        this.display = display;
        this.route = route;
    }

}