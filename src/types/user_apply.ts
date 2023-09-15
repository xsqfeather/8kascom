import { BaseDataType } from './base';

export interface UserApply extends BaseDataType {
  comment: string;
  referCommentId?: string;
  userId: string;
  replyCount?: number;
  avPostId: string;
}

export interface CreateUserApplyDto {
  fromUserId: string;
  toUserId: string;
  applyNote: string;
}
