export type GetListQuery = [
  resource: string,
  filter?: {
    [x: string]: any;
  },
  pagination?: {
    page: number;
    perPage: number;
  },
  sort?: {
    field: string;
    order: 'ASC' | 'DESC';
  },
  refreshKey?: number
];
