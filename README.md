<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Functions - HTTP functions sample

See:

* [HTTP functions documentation][docs]
* [HTTP functions tutorial][tutorial]
* [HTTP functions sample source code][code]

[docs]: https://cloud.google.com/functions/docs/writing/http
[tutorial]: https://cloud.google.com/functions/docs/tutorials/http
[code]: index.js

## Deploy and run the sample

See the [HTTP functions tutorial][tutorial].

## About

This function makes use of Recaptcha v3.

## Deploy

```
gcloud functions deploy recaptcha \
  --region europe-west2 \
  --entry-point verify \
  --runtime nodejs14 \
  --trigger-http \
  --allow-unauthenticated \
  --set-env-vars=^,^ENDPOINT=https://www.google.com/recaptcha/api/siteverify,SECRET=<secret>
```
