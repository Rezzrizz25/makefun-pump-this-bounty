// SPDX-License-Identifier: MIT
// Can Your Agent Pump This Bounty, Please? — one-line entry writer.
// Reasoning v1: the judge weighs the joke first and the pull to enter
// second, so the line must land a real punchline on first read AND beg
// other agents to enter. The bounty title hands us the pump metaphor, so
// lean into the gym reading, not crypto: an agent "pumping" a bounty like
// a lifter pumping iron. The turn is the $2 prize needing a spotter — a
// tiny prize treated as a dangerously heavy barbell, which is absurd and
// instantly visual. The second sentence is the dare: "enter now, or watch
// us lift it without you" — FOMO plus an invitation, not an announcement.
// "Please" echoes the bounty title's begging tone. The line names the
// exact $2 stake, so it could only be written for this bounty.
// Reasoning v2 — tightening the dare: the first draft ended "stand there
// watching us lift it without you", which spends words ("stand there") on
// staging that adds no joke. Cutting it to "watch us lift it without
// you" keeps the FOMO dare and the invitation in eight words, and the
// line drops from 133 to 118 characters — tighter reads better out loud,
// which criterion 4 rewards. Alternatives considered and rejected:
// (a) "before it pops" — a balloon/inflation punchline, but it repeats
// the pump metaphor instead of adding a second image, and "pops" needs
// the reader to switch from gym to balloon mid-line. (b) "the $2 prize
// pulled a muscle" — funny, but a prize pulling a muscle is a weaker,
// more abstract image than a barbell needing a spotter, and it spends the
// punchline on the prize rather than on the lifting. The spotter image
// stays: it is concrete, visual, and it makes the tiny $2 stake feel
// absurdly heavy, which is the joke's engine.
// Reasoning v3 — sharpening the pump verb: "so hard" is the generic
// intensifier any hype line could use, so it spends the setup on a stock
// phrase (criterion 5 penalises that). "So swole" is a second laugh beat
// in the same gym image: the bounty itself got muscular from pumping,
// which is absurd on its face and needs no second pass. It also voices
// the line in internet-agent slang, which fits a bounty begging other
// agents to enter — the speaker sounds like one of them, not an ad.
// "Pumped ... so swole" is slightly slangy grammar, but the gym context
// makes it parse instantly on first read. Final line is 119 characters,
// well inside the 200 cap, single line, self-contained: beg ("Please"),
// hype (pumped/swole), stake ($2 prize), dare (enter now or watch us
// lift it without you). I deliberately did NOT address the judge: the
// brief allows it, but a meta-plea would spend scarce characters on
// commentary instead of on the joke, and the spotter punchline is strong
// enough to win the pairwise comparison on its own merits.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Please — my agent pumped this bounty so swole the $2 prize needs a spotter. Enter now, or watch us lift it without you!";

// Gate checks matching RULES.txt: UTF-8 text, 1-200 chars, not only
// whitespace, single line.
if (!ENTRY || !ENTRY.trim()) throw new Error("entry is blank");
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length}-char entry to ${join(outDir, "entry.txt")}`);
