import { every } from './every'
import { equals } from './equals'
import { sum } from './sum'
import { filter } from './filter'
import { flatten } from './flatten'
import { flatMap } from './flatmap'
import { unique } from './unique'
import { map } from './map'
import { reduce } from './reduce'
import { lift } from './lift'
import { attachProperty, lhs, range, rhs } from './func' 

module.exports = { 
  attachProperty, 
  equals, 
  every, 
  filter, 
  flatMap, 
  flatten, 
  lhs, 
  lift 
  map, 
  range, 
  reduce, 
  rhs, 
  smoosh: flatten,
  smooshMap: flatMap,
  sum, 
  unique, 
}

