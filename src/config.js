const config = {
  STRIPE_KEY: "pk_test_51IMENUCdUFG1YTpOPeLnrOCL5wh59jBo85dq1kPSa6ppCOT7en54lxgKMMgQSPQTt2v8XRj0a8j6ad86FwIxfmhQ00zxvQZbFw",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-3",
    BUCKET: "notes-uploaded-files",
  },
  apiGateway: {
    REGION: "eu-west-3",
    URL: "https://jxfubrgmp2.execute-api.eu-west-3.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-3",
    USER_POOL_ID: "eu-west-3_7BD3iblZ0",
    APP_CLIENT_ID: "176holfddnl2t73949pqm7hrbt",
    IDENTITY_POOL_ID: "eu-west-3:e08f3907-a239-473a-b6bb-70ac49fc0b3a",
  },
};

export default config;