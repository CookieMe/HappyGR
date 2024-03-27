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
    "request_date_ms": 1711550283261,
    "request_date": "2024-03-27T14:38:03Z",
    "subscriber": {
        "non_subscriptions": {},
        "first_seen": "2024-03-27T06:01:40Z",
        "original_application_version": "270",
        "other_purchases": {},
        "management_url": "https://apps.apple.com/account/subscriptions",
        "subscriptions": {
            "grow_lifetime": {
                "is_sandbox": false,
                "ownership_type": "PURCHASED",
                "billing_issues_detected_at": null,
                "period_type": "normal",
                "expires_date": null,
                "grace_period_expires_date": null,
                "unsubscribe_detected_at": null,
                "original_purchase_date": "2024-03-27T06:05:45Z",
                "purchase_date": "2024-03-27T06:05:44Z",
                "store": "app_store"
            }
        },
        "entitlements": {
            "grow.pro": {
                "expires_date": null,
                "product_identifier": "grow.pro",
                "purchase_date": "2024-03-27T06:05:44Z"
            },
            "original_purchase_date": "2023-10-27T10:42:47Z",
            "original_app_user_id": "$RCAnonymousID:df1e29fd84e94d0f93aff3632cbb613d",
            "last_seen": "2024-03-27T06:01:40Z"
        }
    };

    body = JSON.stringify(obj);
    $done({
        "body": body
    });


