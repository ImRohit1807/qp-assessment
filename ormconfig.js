module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'grocery_booking',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
