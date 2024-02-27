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

data = {"columns": {
    "byUuid": {},
    "uuidByCardUuid": {},
},
    "cards": {
    "byUuid": {},
    "uuidsByColumnUuid": {},
}}

if not (len(COLUMN_NAMES) == len(ADJECTIVES) == len(NOUNS)):
    exit(1)

for i in range(len(COLUMN_NAMES)):
    columnUuid = str(uuid4())

    data["columns"]["byUuid"][columnUuid] = {
        "uuid": columnUuid,
        "heading": COLUMN_NAMES[i],
    }

    data["cards"]["uuidsByColumnUuid"][columnUuid] = []

    for j in range(len(ADJECTIVES)):
        cardUuid = str(uuid4())

        data["cards"]["byUuid"][cardUuid] = {
            "uuid": cardUuid,
            "title": CARD_NAMES[i * 5 + j],
        }

        # Create bidirectional relationship
        data["columns"]["uuidByCardUuid"][cardUuid] = columnUuid
        data["cards"]["uuidsByColumnUuid"][columnUuid].append(cardUuid)

print(json.dumps(data))
