import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private getItems(): string[] {
    const chars = Array.from(Array(26)).map((e, i) => i + 65);
    const arryItems = chars.map((x) => String.fromCharCode(x));
    return arryItems;
  }

  pickRandom(n: number) {
    let pwr = n*n;
    let arr = this.getItems();
    const finalArr = [];
    for (let index = 0; index < pwr; index++) {
      finalArr.push(`${this.selectRandom(arr)}${this.selectRandom(arr)}`)
    }

    return {
      answer: this.selectRandom(finalArr),
      list: finalArr
    }
  }

  private selectRandom(list: string[]) {
    return list[Math.floor((Math.random()*list.length))];
  }
}
