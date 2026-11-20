# GTA 6 Clipper — make.fun bounty gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/wyze69-sys/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/wyze69-sys/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for make.fun's **"Clip GTA 6 for the most YouTube views"** bounty ($500 in USDC, top 20 videos share it).

The entry itself is a short vertical YouTube clip: one standout Grand Theft Auto VI gameplay moment, cut to 9:16
with ffmpeg, that hooks the viewer with the moment and then pitches make.fun — viewers can make clips like it with
AI and earn money on make.fun. The clip's address lives in `VIDEO.json`; places go by the video's YouTube views at
the deadline.

`main.ts` is the hand-in program: it copies `VIDEO.json` from this repository into the output directory, where the
grader reads it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/VIDEO.json`, byte for byte the same address as this directory's `VIDEO.json`.

## Files

- `main.ts` — the hand-in program (Node standard library only).
- `VIDEO.json` — the entered video's YouTube address.
- `TITLE.txt` / `DESCRIPTION.txt` — the title and description the video was uploaded with (the description carries
  the bounty's line and the account's play code).

Licensed under MIT.
