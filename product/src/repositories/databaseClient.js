import { Sequelize } from 'sequelize';

const client = new Sequelize('mysql://mysqluser:mysqlpass@product-database:3307/product')

export default client;