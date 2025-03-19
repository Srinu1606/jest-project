jest.setTimeout(30000);
const request = require("supertest");
const endpoints = require('../config/testData');
const postData = require('../config/postData');

describe("Holiday API Tests", () => {
  describe("POST /holidays", () => {
    it("should successfully create holiday configuration", async () => {
      try {
        const holidaysList = await request(endpoints.name)
          .post(endpoints.API)
          .send(postData.body)
          .set("Authorization", endpoints.auth)
          .set('postman', true);
        
        // 1. Basic Equality Matchers
        expect(holidaysList.status).toBe(201);  // Exact equality (===)
        expect(holidaysList.body.success).toBeTruthy();  // Checks for truthy value
        expect(holidaysList.body.error).toBeFalsy();  // Checks for falsy value
        
        // 2. Object Property Matchers
        expect(holidaysList.body).toHaveProperty('success', true);  // Check property and value
        expect(holidaysList.body).toHaveProperty('years');  // Check property existence
        expect(holidaysList.body).toEqual(expect.objectContaining({  // Check object contains specific properties
          success: true,
          message: expect.any(String)  // Check type of value
        }));
        
        // 3. Array Matchers
        expect(Array.isArray(holidaysList.body.years)).toBe(true);  // Check if it's an array
        expect(holidaysList.body.years).toContain(2024);  // Check array contains value
        expect(holidaysList.body.years).toHaveLength(4);  // Check array length
        expect(holidaysList.body.years).toEqual(expect.arrayContaining([2024, 2025]));  // Check array contains values
        
        // 4. String Matchers
        expect(holidaysList.body.message).toMatch(/successfully/);  // Check string matches regex
        expect(holidaysList.body.message).toContain('successfully');  // Check string contains substring
        
        // 5. Number Matchers
        expect(holidaysList.body.years[0]).toBeGreaterThan(2023);  // Check if number is greater than
        expect(holidaysList.body.years[0]).toBeLessThan(2025);  // Check if number is less than
        
        // 6. Type Checking Matchers
        expect(typeof holidaysList.body.success).toBe('boolean');  // Check if boolean
        expect(typeof holidaysList.body.message).toBe('string');  // Check if string
        expect(Array.isArray(holidaysList.body.years)).toBe(true);  // Check if array
        
        // 7. Snapshot Testing
        expect(holidaysList.body).toMatchSnapshot();  // Compare with saved snapshot
        
      } catch (error) {
        console.error('Test failed:', error.message);
        throw error;
      }
    });

    it("should handle invalid authorization", async () => {
      try {
        const response = await request(endpoints.name)
          .post(endpoints.API)
          .send(postData.body)
          .set("Authorization", "invalid-token")
          .set('postman', true);

        expect(response.status).toBe(401);
        expect(response.body.success).toBeFalsy();
        expect(response.body.message).toContain('unauthorized');
      } catch (error) {
        console.error('Test failed:', error.message);
        throw error;
      }
    });

    it("should validate required fields", async () => {
      try {
        const response = await request(endpoints.name)
          .post(endpoints.API)
          .send({})  // Empty body
          .set("Authorization", endpoints.auth)
          .set('postman', true);

        expect(response.status).toBe(400);
        expect(response.body.success).toBeFalsy();
        expect(response.body.message).toContain('required');
      } catch (error) {
        console.error('Test failed:', error.message);
        throw error;
      }
    });
  });
});
