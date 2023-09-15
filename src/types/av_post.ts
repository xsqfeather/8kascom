import { BaseDataType } from './base';

export interface AvPost extends BaseDataType {
  title: string;
  introduction: string;
  abyssCode: string;
  cover: {
    name: string;
    origin: string;
  };
  description: string;
  tags: string[];
  tagIds: string[];
  categoryName: string;
  categoryId: string;
  video: {
    name: string;
    origin: string;
  };
  hot: number;
  designator?: string;
  starIds?: string[];
  publishDate?: Date;
  images?: {
    name: string;
    origin: string;
  }[];
  isFemaleFriendly?: boolean;
  likeCount?: number;
  commentsCount?: number;
}

export interface AvPostComment extends BaseDataType {
  comment: string;
  referCommentId?: string;
  userId: string;
  replyCount?: number;
  avPostId: string;
}

export interface CreateAvPostDto {
  title: string;
  introduction: string;
  abyssCode: string;
  cover: {
    name: string;
    origin: string;
  };
  description: string;
  tags?: string[];
  tagIds?: string[];
  categoryName?: string;
  categoryId?: string;
  video?: {
    name: string;
    origin: string;
  };
  starIds?: string[];
  publishDate?: Date;
  images?: {
    name: string;
    origin: string;
  }[];
  designator: string;
  isFemaleFriendly?: boolean;
}

export interface UpdateAvPostDto {
  title: string;
  introduction: string;
  abyssCode: string;
  cover: {
    name: string;
    origin: string;
  };
  description: string;
  tagIds?: string[];
  categoryName?: string;
  categoryId?: string;
  previewVideo?: string;
  video?: {
    name: string;
    origin: string;
  };
  starIds?: string[];
  publishDate?: Date;
  images?: { origin: string; name: string }[];
  designator?: string;
  isFemaleFriendly?: boolean;
}

export interface AvTag extends BaseDataType {
  name: string;
  langs: { [x: string]: string };
  description?: string;
  avatar: string;
  cover: {
    origin: string;
    name: string;
  };
}

export interface AvTagTableLine extends AvTag {
  deleteOp: string;
  editOp: string;
}

export interface AvCategory extends BaseDataType {
  name: string;
  langs: { [x: string]: string };
  description?: string;
  cover: {
    name: string;
    origin: string;
  };
  superCategories: string[];
  superCategoryIds: string[];
  superCategoryId: string;
  superCategory: string;
  superCategoriesStr: string;
  subCategories: string[];
  subCategoryIds: string[];
  subCategoriesStr: string;
  level: number;
  hot: number;
  isDefault?: boolean;
}

export interface CreateAvCategoryDto {
  name: string;
  langs: { [x: string]: string };
  description?: string;
  cover?: string;
  superCategoryId?: string;
  locale?: string;
}

export interface CreateAvTagDto {
  name: string;
  langs: { [x: string]: string };
  description?: string;
  cover?: string;
  locale?: string;
}

export interface CreateAvStarDto {
  name: string;
  introduction: string;
  avatar: { name: string; origin: string };
  langs?: { [x: string]: string };
  cupSize?: string;
  height?: number;
  weight?: number;
  birthday?: string;
  bloodType?: string;
  gender?: 'female' | 'male';
  hobby?: string;
  from?: string;
  locale?: string;
  gallery?: string[];
  isFemaleFriendly?: boolean;
}

export interface UpdateAvStarDto {
  name: string;
  introduction: string;
  description: string;
  avatar: { name: string; origin: string };
  langs?: { [x: string]: string };
  cupSize?: string;
  height?: number;
  weight?: number;
  birthday?: string;
  bloodType?: string;
  gender?: 'female' | 'male';
  hobby?: string;
  from?: string;
  locale?: string;
  gallery?: { name: string; origin: string }[];
  isFemaleFriendly?: boolean;
}

export interface UpdateAvTagDto {
  name: string;
  langs: { [x: string]: string };
  description?: string;
  cover?: {
    origin: string;
    name: string;
  };
  locale?: string;
}

export interface AvStar extends BaseDataType {
  name: string;
  avatar: {
    name: string;
    origin: string;
  };
  langs: { [x: string]: string };
  introduction?: string;
  description?: string;
  gallery?: { name: string; origin: string }[];
  locale?: string;
  isFemaleFriendly?: boolean;
}

export interface AvStarTableLine extends AvStar {
  deleteOp: string;
  editOp: string;
}

export interface UpdateAvCategoryDto {
  name: string;
  langs: { [x: string]: string };
  description?: string;
  cover?: { name: string; origin: string };
  superCategoryId?: string;
}

export interface AvPostTableLine extends AvPost {
  deleteOp: string;
  editOp: string;
}
