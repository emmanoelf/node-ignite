import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 1",
            description: "Car description",
            daily_rate: 110.0,
            license_plate: "DEF-5678",
            fine_amount: 40.0,
            brand: "car_brand",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 2",
            description: "Car description",
            daily_rate: 110.0,
            license_plate: "DEF-5678",
            fine_amount: 40.0,
            brand: "car_brand_test",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "car_brand_test",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 3",
            description: "Car description",
            daily_rate: 110.0,
            license_plate: "DEF-5678",
            fine_amount: 40.0,
            brand: "car_brand_test",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "Car 3",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 3",
            description: "Car description",
            daily_rate: 110.0,
            license_plate: "DEF-5678",
            fine_amount: 40.0,
            brand: "car_brand_test",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "category_id",
        });

        expect(cars).toEqual([car]);
    });
});
