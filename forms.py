from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField, validators, ValidationError

# validators.required: prior to post request being sent,
# - the program will show an error message saying that the field needs to
#   have been filled in.
#
# validators.email: will send the post request, but the validation must
#                   be handled seperately.

# TextArea: multiline input

_prompt = "Please enter your "


class ContactForm(FlaskForm):

    name = StringField("Name",
                       validators=[validators.required(_prompt + "name")])
    email = StringField("Email", validators=[validators.required(_prompt + " email address."),
                                             validators.email(_prompt + " email address.")])
    subject = StringField("Subject", validators=[validators.required("Please enter a subject.")])
    message = TextAreaField("Message", validators=[validators.required("Please enter a message.")])
    submit = SubmitField("Send")

