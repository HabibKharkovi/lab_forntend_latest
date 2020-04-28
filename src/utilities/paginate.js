import _ from "lodash";

export const paginate = (items, current, size) => {
  const indexItem = (current - 1) * size;
  return _(items)
    .slice(indexItem)
    .take(size)
    .value();
};