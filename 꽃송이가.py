import os
import random
import time

# screen size
width = 85
height = 50

# blosoom & twinkle
petals = ["🌸", "✿", "❀", "༄", "💮"]
sparkles = ["✨", "⋆", "✦", "⋄"]

# screen remove
def clear():
    os.system("cls" if os.name == "nt" else "clear")

# falling blosoom
blossoms = []
for _ in range(45):
    blossoms.append({
        "x": random.randint(0, width - 1),
        "y": random.randint(0, height - 1),
        "shape": random.choice(petals),
        "speed": random.choice([1, 1, 1, 2])
    })

# twinkle twinkle little star
twinkles = []
for _ in range(18):
    twinkles.append({
        "x": random.randint(0, width - 1),
        "y": random.randint(0, height - 1),
        "shape": random.choice(sparkles)
    })

# fallen blosoom
ground = ["  " for _ in range(width)]

try:
    while True:
        screen = [["  " for _ in range(width)] for _ in range(height)]

        # twinkle
        for t in twinkles:
            if random.random() < 0.15:
                t["shape"] = random.choice(sparkles)
                t["x"] = random.randint(0, width - 1)
                t["y"] = random.randint(0, height - 4)
            screen[t["y"]][t["x"]] = t["shape"]

        # blosoom
        for b in blossoms:
            x, y = b["x"], b["y"]
            if 0 <= y < height and 0 <= x < width:
                screen[y][x] = b["shape"]

            # fallen & swaying
            b["y"] += b["speed"]
            b["x"] += random.choice([-1, 0, 1])

            # sector adjust
            b["x"] = max(0, min(width - 1, b["x"]))

            # fallen & restart
            if b["y"] >= height - 1:
                ground[b["x"]] = random.choice(["🌸", "✿", "❀"])
                b["y"] = 0
                b["x"] = random.randint(0, width - 1)
                b["shape"] = random.choice(petals)
                b["speed"] = random.choice([1, 1, 2])

        # fallen blosoom mark
        for i in range(width):
            screen[height - 1][i] = ground[i]

        clear()
        print("봄이 그렇게도 좋냐 멍청이들아")
        print("벚꽃이 그렇게도 이쁘니 바보들아...")

        for row in screen:
            print("".join(row))

        time.sleep(0.15)

except KeyboardInterrupt:
    clear()
    print("커플 몽땅 망해라")