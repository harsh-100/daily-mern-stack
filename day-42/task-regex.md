Task 1: Extracting Dates from Text
Task Description: Provide a text containing various dates in the format dd/mm/yyyy. Ask your students to write a regular expression to extract all the dates from the given text.

Example Text:
The event will take place on 12/31/2023 and 01/15/2024. Don't forget to mark your calendars!

Expected Result:

['12/31/2023', '01/15/2024']

Task 2: Validating Usernames
Task Description: Ask your students to write a regular expression that validates usernames. The usernames should follow these rules:

Should only contain alphanumeric characters (letters and numbers)
Should be between 3 and 12 characters in length

Example Usernames:
user123, john_doe, alice1234, bob
Expected Result:

Valid: user123, john_doe, alice1234
Invalid: bob

Task 3: Extracting URLs from a Web Page
Task Description: Provide a snippet of HTML code containing hyperlinks. Ask your students to write a regular expression to extract all the URLs from the HTML code.

Example :
<a href="https://www.example.com">Example Website</a> <a href="https://www.google.com">Google</a>
Expected Result:
['https://www.example.com', 'https://www.google.com']

Task 4\*: Validating Passwords
Task Description: Ask your students to write a regular expression that validates passwords. The passwords should follow these rules:

At least 8 characters long
Contains at least one uppercase letter, one lowercase letter, and one digit
Example Passwords:
Password123, secret, AbCdEfGh

Expected Result:

Valid: Password123, AbCdEfGh
Invalid: secret

Task 5: Extracting Hashtags from Social Media Posts
Task Description: Provide a social media post containing hashtags (e.g., "#summer #vacation #fun"). Ask your students to write a regular expression to extract all the hashtags from the post.

Example Post:

Had an amazing time at the beach! #summer #vacation #fun
Expected Result:

['#summer', '#vacation', '#fun']
