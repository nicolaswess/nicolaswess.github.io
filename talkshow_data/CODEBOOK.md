# German political talk shows: guests, 2008–2026

`talkshow_guests.csv` has one row for every guest in every episode of six German talk shows: Markus Lanz, Maybrit Illner, Maischberger, Anne Will, hart aber fair and Caren Miosga. It has 13,747 rows: 3,096 episodes, broadcast between 11 June 2008 and 13 October 2026, with 4,216 different guests.

## Variables

| Variable | Meaning | Empty |
|---|---|---|
| `show` | Name of the show. | 0% |
| `date` | Broadcast date (YYYY-MM-DD). | 0% |
| `episode_title` | Title of the episode (in German). Markus Lanz episodes have no topic title; they are called "Folge 1369" or "Sendung vom 14.09.2023". | 0% |
| `episode_url` | Link to the episode page on fernsehserien.de. | 0% |
| `guest_name` | Name of the guest. | 0% |
| `guest_role` | Who the guest is, as listed for this episode (in German), e.g. "Ökonom" or "Bundesgesundheitsminister". | 1.7% |
| `party` | Party of the guest, for politicians of CDU, CSU, SPD, Grüne, FDP, Linke, AfD, BSW and Freie Wähler. Empty for everyone else, including non-politicians. | 69.3% |
| `gender` | `female` or `male`. Not reported by anyone: derived from the guest's job title (e.g. "Ökonomin") or first name, so it can be wrong. Empty if it could not be derived. | 4.0% |
| `main_theme` | Main topic of the episode, one of the 21 topics listed below. | 0% |
| `theme_2` | Second topic of the episode, if there is one. | 4.0% |
| `theme_3` | Third topic of the episode, if there is one. | 17.6% |
| `theme_4` | Fourth topic of the episode, if there is one. | 53.9% |
| `birth_year` | Year of birth, from Wikidata. Only available for politicians. | 69.9% |
| `birth_state` | German state of birth, from Wikidata. Only available for politicians born in Germany. | 71.2% |

The topic columns were assigned by an AI model (Claude Opus 5.5) that read the episode description. The topics are listed in order of importance. 

The 21 topics: Covid-19; Ukraine war & Russia; Middle East conflicts; International politics & USA; Migration & refugees; Climate & energy; Economy & finance; Social policy, pensions & labour; German domestic politics & elections; Far right & extremism; Security, terror & military; Crime, justice & law; Health & medicine (not Covid); Science & technology; Religion & ethics; Personal stories & fate; Society, family & education; Culture, film & music; Media & celebrity; Sports; Other.

## Which years can be used

Guest lists exist only for part of the episodes, and the file contains only episodes that have one. For other years, most episodes are missing. 

| Show | Years |
|---|---|
| Markus Lanz | 2013–2026 |
| Maybrit Illner | 2014–2026 |
| Maischberger | 2015–2023 (almost no guest lists from 2024) |
| Anne Will | 2016–2023 (the show ended in 2023) |
| Hart aber fair | 2015–2026 |
| Caren Miosga | 2024–2026 (the show started in 2024) |

## Source

- **Episodes and guests:** the episode guides (Episodenguide) of [fernsehserien.de](https://www.fernsehserien.de), one per show:
  [Markus Lanz](https://www.fernsehserien.de/markus-lanz/episodenguide), [Maybrit Illner](https://www.fernsehserien.de/maybrit-illner/episodenguide), [Maischberger](https://www.fernsehserien.de/maischberger-ard/episodenguide), [Anne Will](https://www.fernsehserien.de/anne-will/episodenguide), [hart aber fair](https://www.fernsehserien.de/hart-aber-fair/episodenguide) and [Caren Miosga](https://www.fernsehserien.de/caren-miosga/episodenguide).
  Date, title and description of each episode, and the guest names and roles that are listed in the description, were extracted from the pages as saved on 14 October 2026.
- **Party, birth year and birth state:** [Wikidata](https://www.wikidata.org) (CC0), queried on 14–15 October 2026, and the guest lists.
- **Topics:** assigned with an AI model (Claude Opus 5.5) from the episode descriptions.
- **Gender:** derived from job titles and first names.
