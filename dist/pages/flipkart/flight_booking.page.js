"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FlightBookingPage {
    constructor(page) {
        this.page = page;
        this.from = page.getByLabel('From');
        this.destination = page.getByLabel('To');
        this.departOn = page.getByLabel('Depart on');
    }
    async fromCity(cityName) {
        await this.from.fill(cityName);
    }
}
exports.default = FlightBookingPage;
