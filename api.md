Users:
GET
curl http://127.0.0.1:8000/user/1
{
"user_id": 1,
"reg_date": "2023-09-20T00:26:58",
"username": "alex",
"nick": "allha",
"email": "al@gg.com"
}

GET
curl http://127.0.0.1:8000/user_balance/1
{
"user_id": 1,
"btc": 0.0,
"xmr": 0.0,
"ltc": 0.0,
"usdt": 0.0
}
POST create user:
curl -X POST -d '{"username": "test3", "nickname": "zaf", "email": "zal@go.com", "password": "13vsnsa"}' http://127.0.0.1:8000/user/add
{
"user_id": 3
}

POST update password:
curl -X POST -d '{"user_id": 1, "passwd": "xxxsds"}' http://127.0.0.1:8000/user/update_passwd
{
"result": "OK",
"update": 1
}

PUT update nick:
curl -X PUT -d '{"nick": "newnick"}' http://127.0.0.1:8000/user/update_nick/{user_id}/
{
"result": "OK"
}

Wallet:

PUT create:
curl -X PUT http://127.0.0.1:8000/wallet/btc/create/{user_id}
{
"result": "ok",
"user_id": 3,
"coin": "btc",
"address": "tb1q2lchpmssw02za0dh752kwculk0tvhhg3ktpuxp"
}

GET:
curl -X GET http://127.0.0.1:8000/wallet/btc/get/3
{
"coin": "btc",
"address": "tb1q2lchpmssw02za0dh752kwculk0tvhhg3ktpuxp",
"value": 0.0,
"inGame": 0
}
POST send btc from user_id 1:
curl -X POST -d '{"user_id": 1, "address": "xxxxx", "value": 0.00001}' http://127.0.0.1:8000/wallet/btc/send
{
"address": "xxxx",
"value": 0.00001,
"txn_id": {some_btc_txn}
}

Games:

PUT create game:
PUT -d '{"name": "ew23", "coin": "btc", "bet": 0.000001, "bank", 0.00003}' http://127.0.0.1:8000/game/new/{user_id}
{
"game_id": game_id,
"status": "new",
"coin": coin,
"bet": bet
}

GET game:
GET http://127.0.0.1:8000/game/{game_id}
{
"game_id": game_id,
"user_id": game[1],
"bank": game[8],
"date": game[3],
"result": game[6],
"coin": game[4],
"status": game[7],
"profit": game[9]
}

GET round:
GET http://127.0.0.1:8000/game/round/{round_id}
{
"round_id": round_id,
"game_id": res[1],
"user_id": res[2],
"bet": res[3],
"withdraw": res[4],
"result": res[5]
}

GET roulette:
GET http://127.0.0.1:8000/roulette/{roulette_id}
{
"roul_id": roul_id,
"diamond": res[1],
"user_id": res[2],
"long": res[3],
"countInGame": res[4],
"users": res[5]
}

Chats

POST create chat:
POST -d '{"user1_id": 1, "user2_id": 2}' http://127.0.0.1:8000/chat/create
{
"chat_id": 1
}

PUT message into chat:
PUT -d '{ "user1_id": 1, "text": "xxssss"}' http://127.0.0.1:8000/chat/message/add/{chat_id}
{
"chat_id": 2,
"message_id": 1
}

GET all messages from chat:
GET http://127.0.0.1:8000/chat/msg_all/{chat_id}
{
"1": {
"user_id": 2,
"text": "somner 32 efdss",
"timestamp": "2023-09-24T21:53:19"
},
"2": {
"user_id": 1,
"text": "privet",
"timestamp": "2023-09-24T22:49:15"
}
}

GET message by ID:
GET http://127.0.0.1:8000/chat/message_id/{msg_id}
{
"message_id": 1,
"chat_id": 1,
"user_id": 2,
"text": "somner 32 efdss",
"timestamp": "2023-09-24T21:53:19"
}
