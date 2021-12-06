import Koa from 'koa';
import Router from 'koa-router'
import logger from 'koa-logger'
import json from 'koa-json'

const app = new Koa();

app.listen(3000, () => console.log('start server'))