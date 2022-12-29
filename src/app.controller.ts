import { Controller, Get, Res, Req } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { Response, Request } from 'express';
import { AppService } from './app.service';
import { join } from 'path';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  

  @Get()
  getPage(@Req() req: Request, @Res() res: Response): void {
    res.sendFile(join(__dirname, '../client/index.html'));
  }


  @Post()
  getRecords(@Req() req: Request, @Res() res: Response): void {
    let coin = +req.body.coin;
    const result = this.appService.pickRandom(coin);
    res.status(200).send(`<div> <span> Result: ${result.answer} </span> <br/> From the List of Items <div> ${result.list} </div> </div>`);
  }
}
