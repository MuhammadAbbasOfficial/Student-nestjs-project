import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';


@Module({
  imports: [StudentModule,
    ConfigModule.forRoot(
      { isGlobal: true }
    ),
    MongooseModule.forRoot("mongodb+srv://mabbas786official_db_user:v847J09yLkEkOQlg@khan.rsgmlgd.mongodb.net/?appName=khan"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
