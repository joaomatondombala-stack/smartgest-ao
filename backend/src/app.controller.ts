import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
      return {
        sistema: "SmartGest AO",
        Version: "1.0",
        pais: "Angola",
        status: "online"
  /*
  getHello(): string {
    return this.appService.getHello();*/
  }
}
}
