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
// 你的 JavaScript 代码

var chxm1023 = JSON.parse($response.body);
var requestDate = new Date();

chxm1023.data = {
    "request_date": requestDate.toISOString(),
    "request_date_ms": requestDate.getTime(),
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
                "expires_date": "2099-12-18T01:04:17Z",
                "grace_period_expires_date": null,
                "unsubscribe_detected_at": null,
                "original_purchase_date": "2022-09-08T01:04:18Z",
                "purchase_date": "2022-09-08T01:04:17Z",
                "store": "app_store"
            },
            "grow_1y_128": {
                "original_purchase_date": "2024-03-27T06:05:45Z",
                "expires_date": "2099-04-03T06:05:44Z",
                "is_sandbox": false,
                "refunded_at": null,
                "store_transaction_id": "500001675549519",
                "unsubscribe_detected_at": "2024-03-27T06:09:07Z",
                "grace_period_expires_date": null,
                "period_type": "trial",
                "purchase_date": "2024-03-27T06:05:44Z",
                "billing_issues_detected_at": null,
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "auto_resume_date": null
            }
        },
        "entitlements": {
            "grow.pro": {
                "expires_date": "2099-12-18T01:04:17Z",
                "purchase_date": "2022-09-08T01:04:17Z",
                "product_identifier": "grow_lifetime",
                "grace_period_expires_date": null
            }
        },
        "original_purchase_date": "2023-10-27T10:42:47Z",
        "original_app_user_id": "$RCAnonymousID:df1e29fd84e94d0f93aff3632cbb613d",
        "last_seen": "2024-03-27T06:01:40Z"
    },
};

$done({
    body: JSON.stringify(chxm1023)
});
