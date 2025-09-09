import { describe, expect, it } from 'vitest'

// Test app configuration structure
describe('App Configuration', () => {
  // Mock app config structure based on your app.config.ts
  const mockAppConfig = {
    seo: {
      siteName: 'Test Blog',
      description: 'A test blog description',
      twitterHandle: '@testhandle',
    },
    profile: {
      image: 'https://example.com/profile.jpg',
      email: 'test@example.com',
      socials: {
        github: 'https://github.com/testuser',
        linkedin: 'https://linkedin.com/in/testuser',
      },
    },
    education: [
      {
        schoolName: 'Test University',
        schoolLocation: 'Test City',
        degree: 'Test Degree',
        date: 'Test Date',
        imgSrc: '/test-logo.png',
        description: 'Test description',
      },
    ],
    skills: [
      {
        name: 'Test Skill',
        level: '80',
      },
    ],
  }

  describe('SEO Configuration', () => {
    it('should have required SEO fields', () => {
      expect(mockAppConfig.seo).toBeDefined()
      expect(mockAppConfig.seo.siteName).toBeTypeOf('string')
      expect(mockAppConfig.seo.description).toBeTypeOf('string')
      expect(mockAppConfig.seo.twitterHandle).toBeTypeOf('string')
    })

    it('should have valid twitter handle format', () => {
      expect(mockAppConfig.seo.twitterHandle).toMatch(/^@\w+/)
    })
  })

  describe('Profile Configuration', () => {
    it('should have valid profile structure', () => {
      expect(mockAppConfig.profile).toBeDefined()
      expect(mockAppConfig.profile.email).toContain('@')
      expect(mockAppConfig.profile.email).toContain('.')
      expect(mockAppConfig.profile.socials).toBeDefined()
      expect(mockAppConfig.profile.socials.github).toMatch(/^https:\/\/github\.com\//)
      expect(mockAppConfig.profile.socials.linkedin).toMatch(/^https:\/\/linkedin\.com\//)
    })
  })

  describe('Education Data', () => {
    it('should have valid education entries', () => {
      expect(Array.isArray(mockAppConfig.education)).toBe(true)
      expect(mockAppConfig.education.length).toBeGreaterThan(0)

      const education = mockAppConfig.education[0]
      expect(education.schoolName).toBeTypeOf('string')
      expect(education.degree).toBeTypeOf('string')
      expect(education.imgSrc).toBeTypeOf('string')
    })
  })

  describe('Skills Data', () => {
    it('should have valid skills entries', () => {
      expect(Array.isArray(mockAppConfig.skills)).toBe(true)
      expect(mockAppConfig.skills.length).toBeGreaterThan(0)

      const skill = mockAppConfig.skills[0]
      expect(skill.name).toBeTypeOf('string')
      expect(skill.level).toBeTypeOf('string')
      expect(Number.parseInt(skill.level)).toBeGreaterThan(0)
      expect(Number.parseInt(skill.level)).toBeLessThanOrEqual(100)
    })
  })
})
