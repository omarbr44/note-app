import { expect, it } from 'vitest'
import { sum } from './sum'

it('adds 2 positive numbers', () => {
  expect(sum(1, 2)).toBe(3)
})
