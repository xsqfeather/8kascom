import { BaseDataType } from './base';

export interface User extends BaseDataType {
  avatar: string;
  username: string;
  email: string;
  id: string;
  nickname: string;
  roles: string[];
  introduction?: string;
  status?: string;
}

export interface UserTableLine extends User {
  deleteOp: string;
  editOp: string;
}
