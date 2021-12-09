import "reflect-metadata";
import { createConnection } from "typeorm";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import routes from "./routes";
import entities from './entity'

createConnection({
    type: "mysql",
    host: "game1league.sldb.iwinv.net",
    port: 3306,
    username: "league_user",
    password: "kcHwZ42))Mck!r3yQG",
    database: "test_eung",
    entities: entities,
    synchronize: true,
    logging: false
}).then(connection => {

    const app = new Koa();

    app.use(cors());
    app.use(bodyParser());
    app.use(routes.allowedMethods())
    app.use(routes.routes())
    app.listen(3000);

    console.log('server start')

}).catch(error => console.log("TypeORM connection error: ", error));