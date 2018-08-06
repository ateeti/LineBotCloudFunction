const functions = require('firebase-functions');
const request = require('request-promise');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer 42RZBW/L6A2GGT0PSFuc8cHs6+sbdz0AYTl1riewgA2EMk8knZauuPVPaMYovdkRT1zTHDMil3CIhrPpqSgnZwtKiiCcy4SUEsuTdpLIi0R4czdzcUivmOOUM8Sm7m3dQkahN6lT0v4lH38B/OghuQdB04t89/1O/w1cDnyilFU=`
};

exports.LineBot = functions.https.onRequest((req, res) => {
  if (req.body.events[0].message.type !== 'text') {
    return;
  }
  reply(req.body);
});

const reply = (bodyResponse) => {
  console.log(bodyResponse)
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type : "flex",
          altText: "this is a flex message",
          contents : {
            "type": "carousel",
            "contents": [
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "size": "full",
                  "aspectRatio": "16:9",
                  "aspectMode": "cover",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Arm Chair, White",
                      "wrap": true,
                      "weight": "bold",
                      "size": "xl"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "$49",
                          "wrap": true,
                          "weight": "bold",
                          "size": "xl",
                          "flex": 0
                        },
                        {
                          "type": "text",
                          "text": ".99",
                          "wrap": true,
                          "weight": "bold",
                          "size": "sm",
                          "flex": 0
                        }
                      ]
                    }
                  ]
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "button",
                      "style": "primary",
                      "action": {
                        "type": "uri",
                        "label": "Add to Cart",
                        "uri": "https://linecorp.com"
                      }
                    },
                    {
                      "type": "button",
                      "action": {
                        "type": "uri",
                        "label": "Add to wishlist",
                        "uri": "https://linecorp.com"
                      }
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "size": "full",
                  "aspectRatio": "16:9",
                  "aspectMode": "cover",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Metal Desk Lamp",
                      "wrap": true,
                      "weight": "bold",
                      "size": "xl"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "flex": 1,
                      "contents": [
                        {
                          "type": "text",
                          "text": "$11",
                          "wrap": true,
                          "weight": "bold",
                          "size": "xl",
                          "flex": 0
                        },
                        {
                          "type": "text",
                          "text": ".99",
                          "wrap": true,
                          "weight": "bold",
                          "size": "sm",
                          "flex": 0
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "text": "Temporarily out of stock",
                      "wrap": true,
                      "size": "xxs",
                      "margin": "md",
                      "color": "#ff5551",
                      "flex": 0
                    }
                  ]
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "button",
                      "flex": 2,
                      "style": "primary",
                      "color": "#aaaaaa",
                      "action": {
                        "type": "uri",
                        "label": "Add to Cart",
                        "uri": "https://linecorp.com"
                      }
                    },
                    {
                      "type": "button",
                      "action": {
                        "type": "uri",
                        "label": "Add to wish list",
                        "uri": "https://linecorp.com"
                      }
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "button",
                      "flex": 1,
                      "gravity": "center",
                      "action": {
                        "type": "uri",
                        "label": "See more",
                        "uri": "https://linecorp.com"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
                                  {
                            "type": "text", // ①
                            "text": "Select your favorite food category or send me your location!",
                            "quickReply": { // ②
                              "items": [
                                {
                                  "type": "action", // ③
                                  "imageUrl": "https://static.thenounproject.com/png/454713-200.png",
                                  "action": {
                                    "type": "cameraRoll",
                                    "label": "Camera Roll"
                                  }
                                },
                                {
                                  "type": "action",
                                  "imageUrl": "https://cdn0.iconfinder.com/data/icons/flat-designed-circle-icon/1000/camera.png",
                                  "action": {
                                    "type": "camera",
                                    "label": "Camera"
                                  }
                                },
                                {
                                  "type": "action", // ④
                                  "imageUrl": "https://image.freepik.com/free-icon/location-mark_318-40739.jpg",
                                  "action": {
                                    "type": "location",
                                    "label": "Send location"
                                  }
                                }
                              ]
                            }
                          }
	  ]
    })
  });
};