import json
import random
from string import ascii_lowercase
from uuid import uuid4

data = {"columns": {}, "cards": {}}

for _ in range(5):
    columnUuid = str(uuid4())

    data["columns"][columnUuid] = {
        "uuid": columnUuid,
        "title": "".join(random.sample(ascii_lowercase, k=random.randint(5, 10))),
        "cardUuids": [],
    }

    for _ in range(5):
        cardUuid = str(uuid4())

        data["columns"][columnUuid]["cardUuids"].append(cardUuid)
        data["cards"][cardUuid] = {
            "uuid": cardUuid,
            "title": "".join(random.sample(ascii_lowercase, k=random.randint(10, 20))),
            "columnUuid": columnUuid,
        }

print(json.dumps(data))
