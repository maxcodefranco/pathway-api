import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync(path.join(__dirname, 'certificates/privkey.pem')),
  //   cert: fs.readFileSync(path.join(__dirname, 'certificates/fullchain.pem')),
  // };

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  const config = new DocumentBuilder()
    .setTitle('Pathway Api')
    .setDescription('Api for Pathway')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3005);
}
bootstrap();
