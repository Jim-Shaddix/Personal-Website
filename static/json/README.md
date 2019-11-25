# Attribute Descriptions

* `projects.json`: contains fields that are used to populate each of the cards in `portfolio.html`.
* `talks.json`: cotains fields that are used to populate each of the cards in the `talks.html`.

### projects.json attributes
* **title**: name of the project.
* **github**: link to the github page containing the project.
* **image**: picture relating to the project.
* **description**: short paragraph that briefly describes the project.
* **live**: **[Optional]** link to the live version of the project.
* **notebook**: **[Optional]** link to a notebook in html form that exists in the static directory.
* **heroku**: **[Optional]** boolean that describes whether or not the project is hosted on heroku's serverless service.
If it is, than I include a briek blurb stating that the program may take a little longer to load.

### talks.json attributes
* **title**: title of the talk.
* **image**: an image that relates to the talk I gave.
* **date**: date that I gave the talk.
* **description**: a short description of the talk that I gave (including the audience that I gave it to).
* **slides_online**: **[Optional]** link to an online version of the slides (I include this for presentations I have developed using [slides.com](https://slides.com)).