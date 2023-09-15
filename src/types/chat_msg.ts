import { BaseDataType } from './base';

export interface ChatMsg extends BaseDataType {
  msg: string;
  userId: string;
  avatar: string;
  username: string;
  status: string;
  nickname?: string;
}

export interface CreateChatMsg {
  msg: string;
  userId: string;
  avatar: string;
  username: string;
  nickname?: string;
}
