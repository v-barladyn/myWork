import LoginPage from  "../pageObject/LoginPage";

describe("simple test demo", () => {
    // Example of step definition. `allure.createStep` wraps any function and then every
    // call of it will be recorded and displayed in report.
    const testStep = allure.createStep("initial", () => {
      // do something
    });
    // If step will throw an exception or return a rejected promise, it will be marked as broken
    // in the report, and also  will fail the test
    const stepToBreak = allure.createStep("break test", () => {
      throw new Error("Make test broken");
    });
  
    it("simple passed test", () => {
      testStep();
    });
  
    it("test with step", () => {
      testStep();
      stepToBreak();
    });
  
    it("failed test", () => {
      expect(false).to.toBe(true);
    });
  });