from itertools import product
import json
import random
from string import ascii_lowercase
from uuid import uuid4

COLUMN_NAMES = ["Backlog", "Todo", "Doing", "Stalled", "Done"]
ADJECTIVES = ["Big", "Important", "Tricky", "UI", "Tiny"]
NOUNS = ["bug fix", "feature", "task", "spike", "decision"]
CARD_NAMES = [" ".join(words) for words in product(ADJECTIVES, NOUNS)]

random.shuffle(CARD_NAMES)

data = {"columns": {}, "cards": {}}

if not (len(COLUMN_NAMES) == len(ADJECTIVES) == len(NOUNS)):
    exit(1)

for i in range(len(COLUMN_NAMES)):
    columnUuid = str(uuid4())

    data["columns"][columnUuid] = {
        "uuid": columnUuid,
        "title": COLUMN_NAMES[i],
        "cardUuids": [],
    }

    for j in range(len(ADJECTIVES)):
        cardUuid = str(uuid4())

        data["columns"][columnUuid]["cardUuids"].append(cardUuid)
        data["cards"][cardUuid] = {
            "uuid": cardUuid,
            "title": CARD_NAMES[i * 5 + j],
            "columnUuid": columnUuid,
        }

print(json.dumps(data))
