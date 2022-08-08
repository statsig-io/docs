---
title: User Data Deletion Requests API
slug: /compliance/user_data_deletion_requests
---

:::info
User data deletion requests are for Enterprise contracts only. Please reach out to our [support team](mailto:support@statsig.com), your sales contact, or via our slack channel if you need to enable Enterprise features as you use Statsig.
:::

GDPR and similar laws may require that you delete a user's data when they request it. To support deletion requests on our side, we have built this API for you to call.

### How to use the API

All requests must include the STATSIG-API-KEY field in the header. The value should be a Console API Key which can be created in the Project Settings on console.statsig.com/api_keys.

## Sending Requests

Data deletion requests take the following parameters:
- `unit_type`: The unit type that corresponds to the IDs that you would like to deleted. This could be userID, stableID, or some custom ID that you have set up
- `ids`: A comman separated list containing the IDs you would like to delete data for
- `delimiter` (optional): In the case that your IDs contain commas, you can use a different delimiter to separate the IDs, and pass that delimiter here
- `request_id` (optional): If you store a request ID on your side that you would like us to use, you can pass it in, and it will be used to track the request. If left unset, we will provide an ID for you to use in the response. Note that it must be a unique ID if you are supplying your own, otherwise the request will fail with a 400 code.

```bash
curl \
  --header "statsig-api-key: <YOUR-API-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"unit_type": "user_id", "ids": "1,2,3", "request_id": "test_request_1"}' \
  "https://api.statsig.com/v1/delete_user_data"
```

Response:
`{"request_id":"test_request_1"}`

## Checking on Deletion Status

Using the request ID, you can check on the status of a deletion.
Input:
- `request_id`: The ID of the request

Output:
- `COMPLETE` if the data has been deleted
- `PENDING` if the data is still pending deletion
- `UNKNOWN` if this is an invalid request ID

```bash
curl \
  --header "statsig-api-key: <YOUR-API-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"request_id": "test_request_1"}' \
  "https://api.statsig.com/v1/get_delete_user_data_request_status"
```

Response:
`PENDING`

## SLA
Data deletion requests are not handled synchronously. We batch requests and do mass deletions periodically. We guarantee that data will be deleted within 30 days of receiving a request.

## Important Notes
- Once a data deletion request has been submitted, it cannot be deleted
- Once data has been deleted, we no longer store the set of IDs that we deleted data for (since this is considered personally identifiable information in some cases)
