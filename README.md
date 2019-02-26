Transcriber [r]{.underline}eproduces [a]{.underline}nalytical, [n]{.underline}eat, similarly-comprehensive reviews, incorporating \#bestpractices every rendition
=================================================================================================================================================================

Owner: Drew Gillson

This project will deliver a web application that PS consultants and TSMs
can use to:

**1)** Conduct a variety of different types of customer reviews (model,
architecture, etc.)

**2)** Automatically create a Google Doc deliverable with their findings
(like [[this
one]{.underline}](https://docs.google.com/document/d/1ZZKdM2cGvPHWA0QNIvnZrS4NFVRUqvr0uaGVKHTUXWY/edit))

This will complement, not replace, the delivery guides specified in the
services offerings for our various review deliverables. The web
application fetches ***verified*** ***knowledge*** related to a desired
review topic and creates an interactive experience that a consultant can
either work through on their own, or complete with the customer's
participation:

The Guru knowledge management system is used to store the content
presented by the tool. The content is saved in verified cards on the
[[Best
Practices]{.underline}](https://app.getguru.com/boards/9TaBAgKT/Best-Practices-Approved-Crossfunctionally)
board, and the tools selects only those cards relevant to the type of
review being performed. These cards will be maintained by the
\#best-practice-team with input from Professional Services.

Project Goal
------------

The goal is to have this new tool being used widely by consultants to
perform reviews by the end of Q1 2019. Drew will present the completed
web application at the PS Global meeting on February 20^th^ and share
usage instructions.

Timeline
--------

1.  ~~Prototype complete by January 31st~~ ✔️

2.  ~~Google Docs template integration complete by February 8^th\ ^~~✔️

3.  ~~Review scoring feature complete by February 8^th^~~

4.  Lens (design) treatment applied by February 15th

5.  ~~Present application at PS Global meeting on February 20^th^~~

How You Can Help:
-----------------

-   You can work with the \#best-practice-team to contribute to the Guru
    > cards on the [[Best
    > Practices]{.underline}](https://app.getguru.com/boards/9TaBAgKT/Best-Practices-Approved-Crossfunctionally)
    > board and make them more specific (for instance, we should have
    > dialect-specific cards instead of "Database Connections"

-   You can improve the categorization of cards and topics that make up
    > the different options in the "Choose Review" dropdown (this should
    > match Services Offerings)

-   You can contribute to the development work required to finish this
    > off:

    -   applying Lens design styles, at least
        > [[color]{.underline}](https://lens.looker.com/#/Style/Color)
        > and
        > [[typography]{.underline}](https://lens.looker.com/#/Style/Typography)

-   You can make suggestions to improve the
    > [[template]{.underline}](https://docs.google.com/document/d/1qHC9rC-3GIs6S9j50OQ_Magj03g7KA8xayoWARVHeFg/edit#)
    > used to compose the deliverable

Stakeholders
------------

\#tsm (represented by Drew), PS Consultants (represented by Hugo &
Greg), \#best-practice-team (Tig, Judah, Ryan D., Mike Xu, Zach Michel)

User Stories
------------

-   As a Professional Services consultant or TSM:

    -   I can choose templates that correspond to a particular set of
        > Guru cards, so that it is easy to load only the relevant cards

    -   I can conduct a LookML model review, an on-premise architecture
        > review, or any other type of saved review from a template,
        > this reminds me to ask the right questions, and makes it easy
        > to produce a deliverable for my customer

    -   I can mark customer compliance with best practices with a
        > numeric score, or not applicable, and leave detailed notes on
        > each item

    -   I will see a numeric score based on my input, which will make it
        > easier to track customer progress over time in a quantitative
        > way

    -   I can export my findings to a nicely-formatted Google Doc
        > deliverable template to share with my customer, this saves
        > time, improves the quality of our deliverables, and encourages
        > consistency among team members

Feature Requests
----------------

-   Make it obvious that Guru cards are associated to Transcriber from
    > within Guru

-   Include a link back to the original Guru card

-   Allow rows to have custom scoring criteria, this could be built by
    > adding a 2nd column to the card containing a scoring rubric e.g.
    > 0-4, 0-9

-   Save and continue (Local Storage)

-   ~~Number/enumerate the items - and then number the comments in the
    > Notes & Recommendations? That way, it's clear that xyz is a
    > recommendation for item 1,2,3. ~~

-   Add a "Prepared by:" \[name\] and "Evaluated On:" \[date\] in the
    > footers

Bugs
----

-   Score of over 100% is possible
