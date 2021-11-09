import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123',
  database: 'test',
  autoLoadEntities: true,
  synchronize: true,
  entities: [__dirname + './entities/*.{js,ts}'],
}
