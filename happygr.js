/******************************************
 * @Name Grow
 * @Description Unlock Permanent VIP
 * @Channel https://t.me/
 * @Feedback https://t.me/
 * @Author CookieMe
 * @Update 20240326
 * @App Link http://t.cn/A6ILzuhD
 * @App Version laste [Highest Supported]
 ******************************************
[rewrite_local]
# > Grow Unlock Permanent VIP
^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%\w{34})$ url script-response-body https://raw.githubusercontent.com/CookieMe/HappyGR/main/happygr.js
[mitm]
hostname = api.revenuecat.com
 ******************************************/
var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "request_date": "2023-03-08T08:29:53Z", // Decoded from obfuscated string
  "subscriber": {
    "last_seen": "2023-03-08T08:29:53Z",
    "first_seen": "2023-03-08T08:29:53Z",
    "original_application_version": "null",
    "other_purchases": {},
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "grow_lifetime": {
        "is_sandbox": false,
        "ownership_type": "PURCHASED", // Decoded from obfuscated string
        "billing_issues_detected_at": null,
        "period_type": "normal",
        "expires_date": null,
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": "2023-03-08T08:29:53Z",
        "purchase_date": "2023-03-08T08:29:53Z",
        "store": "app_store" // Decoded from obfuscated string
      }
    },
    "entitlements": {
      "grow.pro": {
        "expires_date": null,
        "purchase_date": "2023-03-08T08:29:53Z",
        "product_identifier": "grow.pro"
      }
    },
    "original_purchase_date": "2023-03-08T08:29:53Z",
    "original_app_user_id": "$RCAnonymousID:df1e29fd84e94d0f93aff3632cbb613d", // Potential privacy concern
    "non_subscriptions": {}
  }
};

body = JSON.stringify(obj);
$done({
  "body": body
});

