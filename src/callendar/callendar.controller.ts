import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { calendar, day } from '../../data';

@Controller('')
export class CallendarController {
  constructor() {
  }

  @Get('/calendar')
  getMonth(@Query('month') month) {
    // const [queryYear, queryMonth] = month
    //   .substring(1, month.length - 2)
    //   .split('-');

    return calendar;
  }

  @Get('/day')
  getDay(@Query('date') date) {
    return day;
  }
}
