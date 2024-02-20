import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Usersis } from './src/entities/user.entity';
import { Resumes } from './src/entities/resume.entity';
import dotenv from 'dotenv';
dotenv.config();

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: true,
    ENTITIES: [__dirname + './src/entities/{.ts,.js}'],
    MIGRATIONS: [__dirname + '/migrations/**/{.ts,.js}'],
    MIGRATIONS_RUN: false,
  };

  return {
    type: 'mysql',
    host: process.env.endp,
    port: 3306,
    username: 'root',
    password: 'aaaa4321',
    database: 'cat',
    logging: true,
    synchronize: true,
    entities: [Usersis, Resumes],
    migrations: commonConf.MIGRATIONS,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

export { ormConfig };
