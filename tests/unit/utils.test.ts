import { describe, expect, it } from 'vitest'
import dayjs from 'dayjs'

// Test utility functions
describe('Utility Functions', () => {
  describe('dayjs date formatting', () => {
    it('should format dates correctly', () => {
      const testDate = '2023-10-19'
      const formatted = dayjs(testDate).format('YYYY-MM-DD')
      expect(formatted).toBe('2023-10-19')
    })

    it('should calculate date differences correctly', () => {
      const date1 = dayjs('2023-10-19')
      const date2 = dayjs('2023-10-20')
      const diff = date2.diff(date1, 'day')
      expect(diff).toBe(1)
    })
  })

  describe('Array utilities', () => {
    it('should check if arrays include items correctly', () => {
      const testArray = ['apple', 'banana', 'cherry']
      expect(testArray.includes('banana')).toBe(true)
      expect(testArray.includes('grape')).toBe(false)
    })
  })

  describe('String utilities', () => {
    it('should convert strings to lowercase', () => {
      expect('HELLO'.toLowerCase()).toBe('hello')
      expect('MiXeD cAsE'.toLowerCase()).toBe('mixed case')
    })
  })
})
