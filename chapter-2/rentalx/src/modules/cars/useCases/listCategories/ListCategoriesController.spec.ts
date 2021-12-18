import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("Create Category Controller", () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();

        const id = uuid();
        const password = await hash("admin", 8);

        await connection.query(
            `INSERT INTO USERS (id, name, email, password, "isAdmin", created_at, driver_license)
            values('${id}', 'admin', 'admin@rentalx.com.br', '${password}', true, 'now()', 'xxx-0000')`
        );
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("should be able to list all categories", async () => {
        const responseToken = await request(app).post("/sessions").send({
            email: "admin@rentalx.com.br",
            password: "admin",
        });

        const { refresh_token } = responseToken.body;

        await request(app)
            .post("/categories")
            .send({
                name: "Category supertest",
                description: "Category description supertest",
            })
            .set({
                Authorization: `Bearer ${refresh_token}`,
            });

        const response = await request(app).get("/categories");

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].name).toEqual("Category supertest");
    });
});