# Micro Services With NodeJS

In this project i'm build an application using NodeJS and moleculer. The library moleculer abstract the implementation of architecture and comunication between micro-services. So can focus is only in business rules.

Was usend the TCP for comunication of micro-services and sequelize for integration with database. The dialect used was sqlite, but you can use whatever.

The project is simply an CRUD of posts of hypothetical blog.

## Technologies Used

- NodeJS
- Sequelize (ORM)
- Moleculer (Micro-Services)

And some adapters:

- moleculer-db (For manager database in moleculer)
- moleculer-db-adapter-sequelize (For integration with sequelize)
- moleculer-web (For create an rest api)

Adstionals Libraries:

- Sucrase (For ESM)
- Nodemon (For auto restart of service)
- Sqlite3