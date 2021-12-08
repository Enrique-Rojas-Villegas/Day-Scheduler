# Day-Scheduler

Given the next:

Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Steps for the HTML.

1. For this file the beginning approach was to link the script to personal file, the script to jquery and the moment library.

2. Then added the CSS file fopr personal file, and also external files.

3. Had a jumbotron already added with classes and id, no modifications there.

4. Used from bootstrap the row and column grid system to add the hour at the left, in the middle a form control in the textarea, and a button inside a column on the right.

5. Did the above step for all the time blocks, son in total 9 time Blocks.

6. Added in the buttons, a icon from font awesome to display as a save icon on the button. Class for the button was already in the CSS.

Steps for the JS File

1. Added a moment line to feature in the header of the page showing the date.

2. Called through the id the hours, and assigned to variables, then created function to process the data and output, in the webpage.

3. Created and If/else statement to change the coloring of the textarea according to the time it is.

4. Finally added functionality to the save button on the right.
