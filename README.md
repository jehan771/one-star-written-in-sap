# One Star, Written in Sap

[![make.fun competition](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![make.fun rank](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/jehan771/one-star-written-in-sap/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![make.fun reward](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/jehan771/one-star-written-in-sap/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)

## About

A make.fun entry for [One Star, Written in Sap](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4): a program that writes a single one-line, 1-star review from a houseplant about its human owner, under 280 characters. The judge model reads entries two at a time and keeps the funnier one.

## The line

> One star. My owner googled "why is my plant sad" while standing right in front of me, watering can upside down. I am not sad. I am dehydrated — and he is the drought.

166 characters, one line, no trailing newline.

Why this line: the grievance is the plant's own (dehydration, at the hands of the owner holding the watering can upside down), the joke turns on a surprise — "he is the drought" — the detail is fresh and specific (googling "why is my plant sad" instead of watering), and it reads as a genuine one-star review with the complaint and the reason for the single star in it. No stock phrasing about drama queens, dramatic wilting, or being ignored.

## How it works

`main.ts` holds the review as a fixed string, checks it is 1–279 characters and a single non-blank line, writes it to `/output/entry.txt`, then reads the file back and verifies the bytes match exactly. Deterministic: every run writes the same bytes.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4).

## License

MIT — see [LICENSE](LICENSE).
