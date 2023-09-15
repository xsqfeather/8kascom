// import React from 'react';

import React from 'react';

export type ColumnType<T> = {
  label: string;
  name: keyof T;
  render?: (record: T) => React.ReactNode;
  sort?: boolean;
};
