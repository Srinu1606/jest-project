# Jest API Testing Project

This project demonstrates comprehensive API testing using Jest and Supertest, showcasing various Jest matchers and testing patterns.

## Features

- API endpoint testing with Supertest
- Comprehensive Jest matchers implementation
- Snapshot testing
- Error handling
- Type checking
- Array and object validation

## Test Matchers Used

1. **Basic Equality Matchers**
   - `toBe()` for exact equality
   - `toBeTruthy()` for truthy values
   - `toBeFalsy()` for falsy values

2. **Object Property Matchers**
   - `toHaveProperty()` for property existence and value
   - `toEqual()` for deep object comparison
   - `expect.objectContaining()` for partial object matching

3. **Array Matchers**
   - `toContain()` for array value checking
   - `toHaveLength()` for array size
   - `expect.arrayContaining()` for array subset checking

4. **String Matchers**
   - `toMatch()` for regex matching
   - `toContain()` for substring checking

5. **Number Matchers**
   - `toBeGreaterThan()` for number comparison
   - `toBeLessThan()` for number comparison

6. **Type Checking**
   - Type validation using `typeof`
   - Array type checking

7. **Snapshot Testing**
   - Response body snapshot comparison

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

## Project Structure

```
├── config/
│   ├── testData.js    # API configuration and test data
│   └── postData.js    # Request body data
├── tests/
│   └── api.test.js    # Test cases
└── package.json       # Project dependencies
``` 