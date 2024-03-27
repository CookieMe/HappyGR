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
function getSubscriptionInfo() {
    var requestDate = new Date();
    var subscriber = {
        "request_date": requestDate.toISOString(),
        "request_date_ms": requestDate.getTime(),
        "subscriber": {
		"entitlements": {
			"grow.pro": {
				"expires_date": "2025-03-27T06:05:44Z",
				"grace_period_expires_date": null,
				"product_identifier": "grow_1y_128",
				"purchase_date": "2024-03-27T06:05:44Z"
			}
		},
		"first_seen": "2024-03-27T06:01:40Z",
		"last_seen": "2024-03-27T06:01:40Z",
		"management_url": "https://apps.apple.com/account/subscriptions",
		"non_subscriptions": {},
		"original_app_user_id": "$RCAnonymousID:df1e29fd84e94d0f93aff3632cbb613d",
		"original_application_version": "270",
		"original_purchase_date": "2023-10-27T10:42:47Z",
		"other_purchases": {},
		"subscriptions": {
			"grow_1y_128": {
				"auto_resume_date": null,
				"billing_issues_detected_at": null,
				"expires_date": "2025-04-03T06:05:44Z",
				"grace_period_expires_date": null,
				"is_sandbox": false,
				"original_purchase_date": "2024-03-27T06:05:45Z",
				"ownership_type": "PURCHASED",
				"period_type": "trial",
				"purchase_date": "2024-03-27T06:05:44Z",
				"refunded_at": null,
				"store": "app_store",
				"store_transaction_id": "500001675549519",
				"unsubscribe_detected_at": "2024-03-27T06:09:07Z"
			}
		}
	}
    };
    var body = JSON.stringify(subscriber);
    return body;
}
// 返回 JavaScript 代码的响应
$done({ body: getSubscriptionInfo() });
