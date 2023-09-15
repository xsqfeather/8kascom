import { AvPost } from './av_post';
import { BaseDataType } from './base';

export interface UserAvPostLike extends BaseDataType {
  userId: string;
  avPostId: string;
  avPost: AvPost;
}
