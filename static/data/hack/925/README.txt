                                    PHANTASY STAR II IMPROVEMENT
                                         v4.5 (Oct 21 2024)


Quick Find: Press Ctrl + F and type in the keyword, then press Enter to search for the section.


      TABLE OF CONTENTS
     Disclaimer .. [DSC1]
     Overview .... [OVR2]
     Changelog ... [CHG3]
     Credits ..... [CRD4]

====================================================================================================
Disclaimer [DSC1]
==========
- Phantasy Star II (c) Sega. All rights reserved.


- No ownership is claimed by FlamePurge over Phantasy Star II or the franchise from which it
   originates. Commercial use of this patch, including but not limited to reproduction, sale, etc.
   is strictly prohibited.


- This unofficial, fan-made patch is provided "as-is" on a voluntary (i.e. non-profit) basis.
   FlamePurge is not liable for damage incurred to the end-user, their OS, or their hardware while
   using this patch.


- Apply this patch only to "Phantasy Star II (USA, Europe) (Rev A).bin" with the following
   specifications.

     Hashes: CRC32 - 904FA047
               MD5 - 0FA38B12CF0AB0163D865600AC731A9A
              SHA1 - 0711080E968490A6B8C5FAFBB9DB3E62BA597231


- Players are encouraged to keep a backup of their original game file in case an error occurs.

----------------------------------------------------------------------------------------------------

- Check the Addendum Patches archive if seeking to add any of the the following features to
   PSII Improvement:

    * Double experience and meseta rewards.
    * Remove the red screen flash when characters take damage.
    * Approximations of the original character names from the Japanese version.

   First apply the primary patch, then as many of the addenda as desired. Check the bundled
   instructions for more info.

----------------------------------------------------------------------------------------------------

- The appendices are not required to play this mod, but may assist a Phantasy Star II adventure
   regardless.
====================================================================================================

====================================================================================================
Overview [OVR2]
========
Gameplay:
- 2x EXP/MST addendum provided.

- Red flash removing addendum provided. (Credit: veo)

- Shir no longer steals from Dezo shops. Must still be LV 10 to steal item VISIPHONE.
  (Credit: lory1990)

- Implemented all bug fixes in lory1990's PSII disassembly. Includes corrected stats of weapon
   LAC DAGGER. (Credit: lory1990)

- Walking speed doubled. (Credit: lory1990)

- Walking camera now follows character directly, rather than only moving as they approach a screen's
   edge. (Credit: EvilJagaGenius)

- Allies/enemies only flash once when damaged. (Credit: veo)

- Implemented unused enemy VANLEADR to Blue and Green Dams. (Thanks: Fauntleroy)


Text:
- Original names addendum provided.

- Script tweaked all around to fix the most egregious mistakes.

- Lore terms conform to standards set by Phantasy Star I: Palma, Motavia, Dezoris, and Algol all
   return written in full. Includes Gaila's radar graphic. (Credit for radar: lory1990)

- Proper case text for menu selections, menu labels, location labels, enemies, equipment, items,
   and abilities.

- Naming screen adjusted to allow for lowercase letters, "-", and "."
   (Credit for fixing letter access: lory1990)

- Item, equipment, and enemy names updated, taking advantage of the full 10-letter limit where
   necessary.


Equipment and Shops:
- Weapon BOW GUN removed; weapon Wave Shot (Equip: Hugh, Kain / 67 damage, two-handed) added.
   Rudo starts with 1 SONIC GUN equipped as opposed to 1 BOW GUN.

- Weapon WHIP removed; weapon SilverClaw (Equip: Nei / +59 ATK, +7 DEF, one-handed) added.

- Footwear HIRZABOOTS removed; armor Cyber Vest (Equip: Nei / +10 ATK, +29 DEF) added.
   Amy and Shir can equip LONG BOOTS as opposed to Anna.

- Weapon FIRE STAFF casts tech GIFOI when used as an item.

- Rolf and Kain can equip helmet LACONIAMET as opposed to Rudo and Hugh.

- Nei starts with 1 weapon STEEL BAR equipped.

- Nei can equip the following:
   * SNOW CROWN
   * NEICROWN
   * SilverClaw
   * GR SLEEVES
   * TRUTH SLVS
   * Cyber Vest
   * CRYSTCAPE
   * NEICAPE

- Hugh can equip armor CRYSTCHEST and LACONCHEST.

- Kain can now equip weapon VULCAN.


Techs:
- Tech FANBI absorbs 30 HP from an enemy and costs 6 TP.

- The levels at which Rolf learns techs ZAN and GIFOI have been swapped.

- Rolf learns tech ANTI at LV 18.

- Amy learns tech GRA at LV 5 instead of FOI, and GIGRA at LV 31.

- Anna no longer learns tech FOI; now learns ZAN at LV 4 and GIZAN at LV 16.

- Kain no longer learns tech FOI.

- Nei's tech acquisition overhauled:
   LV  1 - RES
   LV  8 - ANTI
   LV 16 - SAK
   LV 20 - NASAK
   LV 24 - SHIFT
   LV 28 - GIRES
   LV 32 - SAR
   LV 44 - GISAR
  (Summary: ANTI, SAK, and NASAK are learned sooner; added SHIFT, GIRES, SAR, and GISAR.)

- Hugh's tech acquisition overhauled:
   LV  2 - RIMIT
   LV  3 - DORAN
   LV  3 - GEN
   LV  5 - SAGEN
   LV  5 - SHINB
   LV  6 - SHIZA
   LV  7 - RES
   LV  9 - FOI
   LV 11 - GIFOI
   LV 13 - GIRES
   LV 15 - VOL
   LV 17 - SAR
   LV 18 - GRA
   LV 22 - SAVOL
   LV 27 - NAFOI
   LV 30 - GIGRA
  (Summary: Removed ZAN and GIZAN in favor of SAR and NAFOI. Shuffled acquisitions for usefulness.
   Accelerated learn rates.)

- Shir's tech acquisition overhauled:
   LV  1 - FOI
   LV  6 - RYUKA
   LV  6 - HINAS
   LV  8 - RES
   LV 11 - ZAN
   LV 15 - GIFOI
   LV 18 - GRA
   LV 22 - GIZAN
   LV 25 - GIRES
   LV 28 - GIGRA
   LV 33 - NAZAN
   LV 36 - NAGRA
  (Summary: Shuffled acquisitions for usefulness. Accelerated learn rates.)
====================================================================================================

====================================================================================================
Changelog [CHG3]
=========
v4.5 (Oct 21 2024)

Gameplay Changes:

- [Applied Patch] PS2 Improvement Camera Fix (EvilJagaGenius)
   Movement camera now behaves like it does in the other three PS games: as the lead character
   moves, the camera directly follows. Big thanks to EvilJagaGenius for fixing this massive
   annoyance!

----------------------------------------------------------------------------------------------------

v4.4 (May 8 2022)

Technique Changes:

- Rolf learns tech ZAN at LV 5, and GIFOI at LV 7.

----------------------------------------------------------------------------------------------------

v4.3 (Apr 23 2021)

Equipment and Shop Changes:

- Rolf permitted to equip weapon SHOTGUN.

- Armor ElastcVest renamed Cyber Vest and adjusted.
    * Stats - Equip: Nei / +10 ATK, +29 DEF.



Technique Changes:

- Rolf learns tech ANTI at LV 18. (Thanks: Stephen Cappuccino)

- Adjusted Nei's tech loadout; now learns techs GIRES at LV 28 and SAR at LV 32.



Other Changes:

- Corrected errors in Equipment List appendix. (Thanks: Kronoan)

----------------------------------------------------------------------------------------------------

v4.2 (Mar 30 2021)

Gameplay Changes:

- Doubled Edition is now Doubler Addendum. Apply after the main patch.
   Note that in order for all 4 patches in the archive to work in tandem, the checksum routine for
   the addenda had to be removed so they can run without needing a corrected checksum. This should
   not affect play on real hardware.

- No Red Flashes Addendum added. Apply after the main patch. (Credit: veo)
   Note that in order for all 4 patches in the archive to work in tandem, the checksum routine for
   the addenda had to be removed so they can run without needing a corrected checksum. This should
   not affect play on real hardware.



Equipment and Shop Changes:

- Kain permitted to equip weapon VULCAN. (Thanks: Stephen Cappuccino)

- Weapon Wave Shot adjusted. (Thanks: Twizman)
    * Stats - Equip: Hugh, Kain / 67 dmg, two-handed.
    * Ryuon weapon shop still sells Wave Shot (45000 MST), reduced price.

- Armor ElastcVest adjusted. (Thanks: Twizman)
    * Stats - Equip: Nei / +29 DEF.



Text Changes:

- Typos corrected.

- Original Names Addendum added; attempts to replicate the names used in the Japanese release. Apply
   after the main patch.
   Note that in order for all 4 patches in the archive to work in tandem, the checksum routine for
   the addenda had to be removed so they can run without needing a corrected checksum. This should
   not affect play on real hardware.

     -----------------------------------------------
    | SEGA AMERICA'S NAME   | OG NAME ADDENDUM      |
    |-----------------------------------------------|
    | Rolf                  | Usis                  |
    | Rudolf "Rudo" Steiner | Rudger "Rudo" Steiner |
    | Amy Sage              | Anne Saga             |
    | Hugh Thompson         | Huey Reane            |
    | Anna Zirski           | Amia Amirski          |
    | Josh Kain             | Kynz Ji An            |
    | Shir Gold             | Shir Levinia          |
    | Alis                  | Alisa                 |
    | Lassic                | La Shiec              |
    | Ustvestia             | Aventino              |
     -----------------------------------------------
      Anyone not mentioned has not changed.



Technique Changes:

- Tech FANBI cost changed to 6 TP.

- Anna now gains techs ZAN at LV 4, GIZAN at LV 16.

- Hugh's tech acquisition has been overhauled. (Thanks: Twizman)
    Before          After
   LV  2 - RIMIT   LV  2 - RIMIT
   LV  3 - DORAN   LV  3 - DORAN
   LV  3 - GEN     LV  3 - GEN
   LV  5 - SAGEN   LV  5 - SAGEN
   LV  5 - SHINB   LV  5 - SHINB
   LV  6 - SHIZA   LV  6 - SHIZA
   LV  8 - RES     LV  7 - RES
   LV  9 - FOI     LV  9 - FOI
   LV 12 - GIFOI   LV 11 - GIFOI
   LV 15 - VOL     LV 13 - GIRES
   LV 18 - ZAN     LV 15 - VOL
   LV 24 - SAVOL   LV 17 - SAR
   LV 27 - GRA     LV 18 - GRA
   LV 30 - GIRES   LV 22 - SAVOL
   LV 33 - GIGRA   LV 27 - NAFOI
   LV 36 - GIZAN   LV 30 - GIGRA

----------------------------------------------------------------------------------------------------

v4.1 (Aug 3 2020)

Technique Changes:

- Mistakenly launched previous version with Shir's original tech acquisition. Rectified in newest
   revision. (Thanks: TrekNerd314)

----------------------------------------------------------------------------------------------------

v4.0 (Aug 2 2020)

Mod recreated from scratch, ported to lory1990's Phantasy Star II Disassembly.

Gameplay Changes:

- Provided alternate version of the project that doubles EXP and MST from enemies.


- Shir no longer steals from shops on Dezo at all. Unlike previous revisions of this mod, she must
   still be LV 10 to steal item VISIPHONE. (Credit: lory1990)


- Applied Phantasy Star II - Fast Walking to improve character walking speed. (Credit: lory1990)
    * Alarm on Gaila sounds earlier due to this change.


- Applied Phantasy Star II - Fast Battles, reducing the time a damaged unit flashes. (Credit: veo)


- Amy, Hugh, and Shir default to battle command Attack rather than Defend.


- Added unused enemy VANLEADR to Green Dam (1F, 2F) and Blue Dam (2F, 3F). (Thanks: Fauntleroy)
    * Formation VAN/VAN changed to VAN/VANLEADR.
    * Formation HVYSOLID/VAN changed to HVYSOLID/VANLEADR.



Text Changes:

- Script has been examined to correct a handful of grammatical errors, context issues, nonsensical
   phrases, and plot errors. The revision process was not as intensive as ReConstruct: PSIV, as I
   personally find PSII's English translation and general writing to be high quality. Lore terms now
   conform to standards set by Phantasy Star I.


- Planet names on Gaila's radar graphic amended to reflect series standards. (Credit: lory1990)


- Menu selections, menu labels, enemies, equipment, items, and abilities are now written in proper
   case.


- Characters are now permitted to be named with lowercase letters, as well as "-" and "."
   (Credit for fixing letter access: lory1990)


- Enemy names take advantage of the full 10 letter limit. (Thanks: Fauntleroy)


- Expanded menu labels.
   * Item action menu expanded to fully spell out "Give" and "Toss".
   * Equipment list and hand designation labels expanded to fully spell out "Right".
     (Credit for fixing: lory1990)
   * Library menu expanded to fully spell out "Mother Brain".


- In the Japanese original, the "Nish" heavy armor (As well as the NEIARMOR) were "Harnisches," and
   the other two heavy armor were simply "Armor". This has been replicated by renaming the Titanium
   and Ceramic types of Armor as "Mail" and the others as "Armor".


- In the Japanese original, the "Cape" women's armor were fibrillae dresses, except for the
   CRYSTCAPE and NEICAPE, which were force fields. This has been replicated by renaming the Crystal
   and Nei types of women's armor as "Field", and all others have become "Tunic".



Equipment and Shop Changes:

- Weapon BOW GUN removed; weapon Wave Shot added.
    * Stats - Equip: Hugh, Kain / 40 dmg, one-handed.
    * Rudo joins the party roster with 1 SONIC GUN equipped as opposed to 1 BOW GUN.
    * Paseo weapon shop now sells SHOTGUN instead of BOW GUN.
    * Ryuon weapon shop now sells Wave Shot (49000 MST) instead of KNIFE.


- Weapon WHIP removed; weapon SilverClaw added.
    * Stats - Equip: Nei / +59 ATK, +7 DEF, one-handed.
    * Can be found in Climatrol, replacing FIBERVEST chest.
    * Zema weapon shop now sells SILENTSHOT instead of WHIP.
    * Anna's SEE STRNGTH profile says "[...] she is a vicious fighter with a slasher or knife."


- Footwear HIRZABOOTS removed; armor ElastcVest added.
    * Stats - Equip: Nei / +33 DEF.
    * Can be found in Roron North, replacing CERAM BAR chest.
    * Amy and Shir can equip LONG BOOTS. Anna can no longer equip them.
    * Aukba armor shop now sells LONG BOOTS instead of HIRZABOOTS.


- Weapon FIRE STAFF casts tech GIFOI when used as an item as opposed to FOI.


- Rolf and Kain can equip helmet LACONIAMET as opposed to Rudo and Hugh.


- Nei starts the adventure with 1 weapon STEEL BAR equipped.


- Nei can equip the following:
   * Helmet SNOW CROWN
   * Helmet NEICROWN
   * Weapon SilverClaw
   * Shield GR SLEEVES
   * Shield TRUTH SLVS
   * Armor ElastcVest
   * Armor CRYSTCAPE
   * Armor NEICAPE


- Hugh can equip armor CRYSTCHEST and LACONCHEST.


- Extra MAGIC CAP chest in Skure is now a free LAC SHIELD.


- Several shop changes on Dezo:
   * Aukba armor shop now sells KNIFEBOOTS instead of SANDALS.
   * Zosa weapon shop now sells LASR BAR instead of BOOMERANG.
   * Ryuon armor shop now sells JWL RIBBON instead of RIBBON.



Technique Changes:

- Tech FANBI absorbs 30 HP from an enemy instead of 10.


- Amy learns tech GRA at LV 5 instead of FOI, and GIGRA at LV 31.


- Anna no longer learns techs FOI, ZAN.


- Kain no longer learns tech FOI.


- Nei's tech acquisition has been overhauled:
    Before          After
   LV  1 - RES     LV  1 - RES
   LV 16 - ANTI    LV  8 - ANTI
   LV 20 - SAK     LV 16 - SAK
   LV 28 - NASAK   LV 20 - NASAK
                   LV 24 - SHIFT
                   LV 27 - GIRES
                   LV 33 - SAR
                   LV 44 - GISAR


- Shir's tech acquisition has been overhauled:
    Before          After
   LV  1 - FOI     LV  1 - FOI
   LV  6 - RYUKA   LV  6 - RYUKA
   LV  9 - HINAS   LV  6 - HINAS
   LV 12 - RES     LV  8 - RES
   LV 15 - GIFOI   LV 11 - ZAN
   LV 18 - ZAN     LV 15 - GIFOI
   LV 24 - GRA     LV 18 - GRA
   LV 27 - GIZAN   LV 22 - GIZAN
   LV 30 - GIRES   LV 25 - GIRES
   LV 33 - NAZAN   LV 28 - GIGRA
   LV 36 - GIGRA   LV 33 - NAZAN
   LV 45 - NAGRA   LV 36 - NAGRA


Bug Fixes:

- Incorporated almost all of lory1990's bug fixes. Please note that only the fixes available in his
   disassembly have been implemented. (Credit: lory1990)

   * Music during final conversation in Esper Mansion doesn't freeze.

   * Weapon LAC DAGGER's stats corrected to +45 ATK, +7 DEF.

   * Battle step counter no longer increments due to entering a new map.

   * Player can no longer run from bosses.

   * Formula for stat ATTACK behaves properly if there is a larger disparity between fighter's
      ATTACK and target's DEFENSE.

   * Stat DEXTRTY properly factors into physical attack accuracy.

   * Stat LUCK properly factors into evasion.

   * Tech SHINB now allows party to escape from biomonsters and evil creatures.

   * Enemy TOADER's Agility Down ability functions properly.

   * Missing animation frame added to missile attack of enemies MECHOMAN, SONOMECH, and ATTMECH.

   * Allies and enemies no longer automatically physically attack after paralysis wears off.

   * Uzo Mountain and Climatrol examine text fully display.

   * NPCs no longer start in the wrong direction with the wrong animation frame upon entering a map.

   * NPC inventor in Kueri says "Now let me see, what can I work on?" after delivering item
      MRURA LEAF.

   * NPC old man in Paseo no longer gives part of Lutz's speech after Climatrol.

   * Errant word "destruction" no longer displays during final boss' speech upon declining to fight.

   * Characters in lineup will only move after leader moves.

   * Rearranging a party of Rolf alone displays "Nothing happens."

   * Camera adjusted upon embarking and disembarking Jet Scooter.

   * Jet Scooter disembarkation alignment issues corrected.

   * Jet Scooter can no longer be controlled during the flood cutscene.

   * Tile collision detection in Menobe corrected.

   * Prologue correctly recognizes Start Button.

   * Dams appear closed, rivers appear empty if idling into prologue after beating the game.

   * Techs SAR, GISAR, NASAR, SAK, NASAK, and ANTI play sound effects when used out of battle.

   * Inventory glitch in Central Tower storage fixed.

   * Pressing B and C together over "NEXT" will no longer glitch ITEM, TECH, and EQP menus.

   * "PUSH START BUTTON" appears immediately after title screen loads.

   * Initial battle command cursor behavior fixed.
====================================================================================================

====================================================================================================
Credits [CRD4]
=======
- lory1990: Bug fixes, Fast Walking, Shir stealing enhancement, name screen menu fix, expansion of
   "RGHT" to "Right", Gaila radar graphic insertion, Gaila alarm tweak, Phantasy Star II
   disassembly.
   https://www.romhacking.net/community/3272/

- veo: Fast Battles, No Red Flashes.

- EvilJagaGenius: PS2 Improvement Camera Fix.

- Fauntleroy: Idea to implement VANLEADR, tip that the enemy name limit is 10 letters, original
   PSII coding notes.

- Sajinoyoni: Idea for several script updates.

- FantasyAnime: As always, providing helpful save files for testing purposes.

- Sega

...and all you Phantasy Star fans out there! See you in the Algol system!
====================================================================================================