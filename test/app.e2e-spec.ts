import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '../src/modules/app/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import {
  carPostMock, carPutMock,
  manufacturerPostMock,
  manufacturerPutMock,
  manufacturerPutMockBad,
  ownerPostMock, ownerPutMock,
} from './requestMocks';
import {
  createCarResponseMock,
  manufacturer,
  ownerResponseMock, updatedCarResponseMock,
  updatedManufacturer,
  updatedOwnerResponseMock,
} from './response.mock';
import { ConnectionOptions } from 'typeorm';
import { dbSettings } from '../src/modules/database/dbSettings';

jest.setTimeout(30000);

const testDbOptions = {
  ...dbSettings,
  database: `${__dirname}/databaseTest.sql`
};

describe('Cars Controller', () => {
  let app: INestApplication;
  let httpServer: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(<ConnectionOptions>testDbOptions),
        AppModule
      ]
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true
    }));

    await app.init();
    httpServer = app.getHttpServer();
  });

  afterAll(() => app.close());


  it('should be defined', () => {
    return expect(app).toBeDefined();
  });

  // Manufacturer

  it('/POST manufacturer', () => {
    return request(httpServer)
      .post('/manufacturer')
      .send(manufacturerPostMock)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(201)
      .expect(manufacturer);
  });

  it('/PUT manufacturer', () => {
    return request(httpServer)
      .put('/manufacturer/1')
      .send(manufacturerPutMock)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('')
  });

  it('/PUT manufacturer with bad payload', () => {
    return request(httpServer)
      .put('/manufacturer/1')
      .send(manufacturerPutMockBad)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('');
  });

  it('/GET manufacturers', () => {
   return request(httpServer)
      .get('/manufacturer')
      .expect([updatedManufacturer])
  });

  // Cars

  it('/POST cars', () => {
    return request(app.getHttpServer())
      .post('/cars')
      .send(carPostMock)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(201)
      .expect(createCarResponseMock)
  });

  it('/PUT cars', () => {
    return request(app.getHttpServer())
      .put('/cars/1')
      .send(carPutMock)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('')
  });

  // Owners

  it('/POST Owner', () => {
    return request(httpServer)
      .post('/owners')
      .send(ownerPostMock)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(201)
      .expect(ownerResponseMock);
  });

  it('/PUT Owner', () => {
    return request(httpServer)
      .put('/owners/1')
      .send(ownerPutMock)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('');
  });

  it('/GET Owners', () => {
    return request(httpServer)
      .get('/owners')
      .expect(200)
      .expect([updatedOwnerResponseMock])
  });

  // Cars
  it('/GET cars', () => {
    return request(app.getHttpServer())
      .get('/cars')
      .expect(200)
      .expect([updatedCarResponseMock]);
  });

  it('/GET cars/1/manufacturer', () => {
    return request(httpServer)
      .get('/cars/1/manufacturer')
      .expect(200)
      .expect(updatedManufacturer)
  });
});
