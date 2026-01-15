
export enum CandleState {
  WAITING = 'WAITING',
  BLOWING = 'BLOWING',
  EXTINGUISHED = 'EXTINGUISHED'
}

export interface BirthdayWish {
  message: string;
  sender: string;
}
