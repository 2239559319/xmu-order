declare global {
  interface Window {
    crf: string;
    cleanObj: Record<string, any>;
    onbeforeunload: () => void;
  }
}

export interface User {
  access_token: string;
  createdAt: string;
  credit: number;
  id: string;
  is_banned: number;
  is_deleted: number;
  open_id: number;
  updatedAt: string;

  getCode: () => string;
}

export interface ReservationTimeItem {
  avail_time: string;
  createdAt: string;
  date: string;
  id: string;
  is_deleted: number;
  number: number;
  route_id: string;
  time_end: string;
  time_start: string;
  updatedAt: string;
}
