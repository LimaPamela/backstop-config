const relativePaths = require('./relativePaths.js');
const host = "http://example.com";
const scenarios = [];
const projectId = "sample project"

relativePaths.map(relativePath => {
  scenarios.push({
    label: relativePath,
    url: `${host}${relativePath}`,
    delay: 3000,
    misMatchThreshold : 0.1,
    requireSameDimensions: false
  });
});

module.exports = {
  id: projectId,
  viewports: [
    {
      name: "desktop",
      width: 1280,
      height: 1024
    },
    {
      name: "tablet",
      width: 1024,
      height: 768
    },
    {
      name: "phone",
      width: 320,
      height: 480
    },
  ],
  scenarios,
  paths: {
    bitmaps_reference: "test/backstop_data/bitmaps_reference",
    bitmaps_test: "test/backstop_data/bitmaps_test",
    html_report: "test/backstop_data/html_report"
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    waitTimeout: 5000,
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};