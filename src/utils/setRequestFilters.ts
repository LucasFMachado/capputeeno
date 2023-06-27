import { FilterPriority } from '@/types/filterPriority'
import { FilterType } from '@/types/filterTypes'

export function getCategoryByType(type: FilterType) {
  if (type === FilterType.MUG) {
    return 'mugs'
  } else if (type === FilterType.SHIRT) {
    return 't-shirts'
  } else {
    return ''
  }
}

export function getFieldByPriority(priority: FilterPriority) {
  if (priority === FilterPriority.NEWS) {
    return { field: 'created_at', order: 'DSC' }
  } else if (priority === FilterPriority.BIGGEST_PRICE) {
    return { field: 'price_in_cents', order: 'DSC' }
  } else if (priority === FilterPriority.LOWER_PRICE) {
    return { field: 'price_in_cents', order: 'ASC' }
  } else {
    return { field: 'sales', order: 'DSC' }
  }
}

export const mountQuery = (type: FilterType, priority: FilterPriority) => {
  if (type === FilterType.ALL && priority === FilterPriority.POPULARITY) {
    return `query {
      allProducts(sortField: "sales", sortOrder: "ASC") {
        id,
        name,
        price_in_cents,
        image_url
      }
    }`
  } else {
    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType(type)
    return `query {
      allProducts(sortField: "${sortSettings.field}", sortOrder: "${
      sortSettings.order
    }", ${categoryFilter ? `filter: { category: "${categoryFilter}" }` : ''}) {
        id,
        name,
        price_in_cents,
        image_url
      }
    }`
  }
}
