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
    "request_date": "2024-03-27T15:38:26Z",
    "request_date_ms": 1711553906663,
    "subscriber": {
        "entitlements": {
            "grow.pro": {
                "expires_date": null,
                "grace_period_expires_date": null,
                "product_identifier": "grow_lifetime",
                "purchase_date": "2024-03-14T14:44:52Z"
            }
        },
        "first_seen": "2024-02-15T03:20:16Z",
        "last_seen": "2024-03-26T20:04:31Z",
        "management_url": "https://apps.apple.com/account/subscriptions",
        "non_subscriptions": {
            "grow_lifetime": [{
                    "id": "2f58ca11d3",
                    "is_sandbox": false,
                    "original_purchase_date": "2024-03-14T14:44:52Z",
                    "purchase_date": "2024-03-14T14:44:52Z",
                    "store": "app_store",
                    "store_transaction_id": "1090000007756035"
                }
            ]
        },
        "original_app_user_id": "$RCAnonymousID:df1e29fd84e94d0f93aff3632cbb613d",
        "original_application_version": "298",
        "original_purchase_date": "2023-11-11T13:31:47Z",
        "other_purchases": {
            "grow_lifetime": {
                "purchase_date": "2024-03-14T14:44:52Z"
            }
        },
        "subscriptions": {
            "grow_1y_128": {
                "auto_resume_date": null,
                "billing_issues_detected_at": null,
                "expires_date": "2023-11-18T13:37:58Z",
                "grace_period_expires_date": null,
                "is_sandbox": false,
                "original_purchase_date": "2023-11-11T13:37:59Z",
                "ownership_type": "PURCHASED",
                "period_type": "trial",
                "purchase_date": "2023-11-11T13:37:58Z",
                "refunded_at": null,
                "store": "app_store",
                "store_transaction_id": "570001360500852",
                "unsubscribe_detected_at": "2023-11-12T16:15:30Z"
            },
            "grow_299_1m": {
                "auto_resume_date": null,
                "billing_issues_detected_at": null,
                "expires_date": "2024-04-06T09:32:46Z",
                "grace_period_expires_date": null,
                "is_sandbox": false,
                "original_purchase_date": "2024-03-03T10:32:47Z",
                "ownership_type": "PURCHASED",
                "period_type": "normal",
                "purchase_date": "2024-03-06T10:32:46Z",
                "refunded_at": null,
                "store": "app_store",
                "store_transaction_id": "1710000004088335",
                "unsubscribe_detected_at": "2024-03-15T05:10:33Z"
            }
        }
    }
};

body = JSON.stringify(obj);
$done({
    "body": body
});
