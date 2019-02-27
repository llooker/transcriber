What is this?
------------

This project is a web application that PS consultants and TSMs
can use to:

**1)** Conduct a variety of different types of customer reviews (model,
architecture, etc.)

**2)** Automatically create a Google Doc deliverable with their findings
(like [this
one](https://docs.google.com/document/d/1ZZKdM2cGvPHWA0QNIvnZrS4NFVRUqvr0uaGVKHTUXWY/edit))

Transcriber complements the delivery guides specified in the
services offerings for our various review deliverables. The web
application fetches ***verified*** ***knowledge*** related to a
review or audit topic and creates an interactive experience that a consultant can
either work through on their own, or complete with the customer's
participation.

The Guru knowledge management system is used to store the content
presented by Transcriber. The content is saved in verified cards on the
[Transcriber](https://app.getguru.com/boards/yiKXnGpi/Transcriber)
board and these cards will be maintained by the
\#best-practice-team with input from Professional Services.

Project Goal
------------

The goal is to have Transcriber used widely by PS consultants to
perform reviews and audits by the end of Q1 2019.

How You Can Help:
-----------------

-   You can work with the \#best-practice-team to contribute to the Guru
    cards on the [Transcriber](https://app.getguru.com/boards/yiKXnGpi/Transcriber)
    board and make them more specific (for instance, we should have
    dialect-specific cards instead of "Database Connections"

-   You can improve the categorization of cards and topics that make up
    the different options in the "Section" dropdown (this should
    match Services Offerings)

-   You can make suggestions to improve the
    [template](https://docs.google.com/document/d/1qHC9rC-3GIs6S9j50OQ_Magj03g7KA8xayoWARVHeFg/edit#)
    used to compose the deliverable

Stakeholders
------------

\#tsm (represented by Drew), PS Consultants (represented by Hugo &
Greg), \#best-practice-team (Tig, Judah, Ryan D., Mike Xu, Zach Michel)

Feature Requests
----------------

-   Allow rows to have custom scoring criteria, this could be built by
    adding a 2nd column to the card containing a scoring rubric e.g.
    0-4, 0-9

-   Add save and continue feature using browser Local Storage

-   Add a "Prepared by: [Name]" and "Evaluated On: [Date]" to footer automatically

Known Bugs
----

-   Score of over 100% has happened once or twice but no repro so far

Initial User Stories
------------

-   As a Professional Services consultant or TSM:

    -   I can choose templates that correspond to a particular set of
        Guru cards, so that it is easy to load only the relevant cards

    -   I can conduct a LookML model review, an on-premise architecture
        review, or any other type of saved review from a template,
        this reminds me to ask the right questions, and makes it easy
        to produce a deliverable for my customer

    -   I can mark customer compliance with best practices with a
        numeric score, or not applicable, and leave detailed notes on
        each item

    -   I will see a numeric score based on my input, which will make it
        easier to track customer progress over time in a quantitative
        way

    -   I can export my findings to a nicely-formatted Google Doc
        deliverable template to share with my customer, this saves
        time, improves the quality of our deliverables, and encourages
        consistency among team members
