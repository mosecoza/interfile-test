import {
  Controller,
  Get,
  Request,
  UseGuards,
  Post,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import stories, {Stories}  from '../../stories';

interface HistoryItem extends Stories {
  id: number;
}

interface History {
  historyItems: HistoryItem[];
}

const initialHistory = (indexes: string[]): History => ({
  historyItems: indexes.map((index) => ({
    ...stories[index],
  })),
});

@Controller('history')
export class HistoryController {
  private histories: Record<string, History> = {
    1: initialHistory(['20204225', "28256190", "28850182"]),
    2: initialHistory(["28850182", "28656514"]),
  };

  constructor() {}

  @Get()
  // @UseGuards(JwtAuthGuard)
  async index(): Promise<Stories[]> {
    return stories;
  }

  @Get(':id')
  async show(@Param("id") id:string): Promise<Stories> {
    return stories.find(story=>story.objectID === id);
  }

  // @Post()
  // @UseGuards(JwtAuthGuard)
  // async create(@Request() req, @Body() { id }: { id: string }): Promise<History> {
  //   const history = this.histories[req.user.userId];
  //   const historyItem = history.historyItems.find(
  //     (historyItem) => historyItem.id === parseInt(id),
  //   );
  //   if (historyItem) {
  //   } else {
  //     stories.historyItems.push({
  //       ...stories.find((story) => story.objectID === id),
  //       quantity: 1,
  //     });
  //   }
  //   return history;
  // }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<History> {
    this.histories[req.user.userId] = { historyItems: [] };
    return this.histories[req.user.userId];
  }
}
