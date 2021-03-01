// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME ||'h4lb',
      user: process.env.POSTGRES_USER ||'khazi',
      password: process.env.POSTGRES_USER_PW || '1',
      host:  process.env.POSTGRES_HOST || 'localhost'
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
  },
    seeds: {
      directory: __dirname + '/db/seeds'
  },
  ssl: {
      rejectUnauthorized: false
  }
  }

};
