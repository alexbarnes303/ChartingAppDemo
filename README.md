This is a very simple little app I built when I was learning React. I used it for playing around with ideas that I might later use at work where we build apps for viewing and analysing education testing data. The original version was built using thunk and axios to interact with a server I built using node/Express and MongoDB but in this version i just hard coded a little bit of data into the app and cut out the ability to load and save data to/from the back-end so you can just clone it and spin it up.
The sample data sets are ridiculously small because it takes a lot of time to create fake data sets with dozens of schools, subjects and full student lists etc.

There are three pages:

1 Naplan School Data

Designed for use by a school to view/compare test results. Shows school data for three key subjects.

-Initially displays a control panel with two dropdown menus for school and year and a set of checkboxes for gender. Select a school and a year to view the data for that year from the chosen school.

-The checkboxes for gender selection filter the data and can display any combination of male, female and all, but all three are selected by default. There are three sets of table/charts showing results for english, maths and science. Any change to school or year or to the checkboxes results in the data being re-filtered and the display updated.

2 School Comparison

Designed for district staff to compare schools within a district against each other and against a state background.

-Initially displays a control panel with a dropdown for subject and checkboxes for the schools in the district and one for state results. By default only the state data is selected.

-Select a subject and check/uncheck schools to display their data. Any change to subject selection or checkbox selection re-filters the data and updates the display

3 Student Data and Custom Groups

Designed to create custom groups from the students in a school and calculate key statistics for the chosen students and summary statistics for the created group. Used for monitoring the performance of groups of interest. Real-world examples of groups might include, boys, girls, esl, low or high performing students etc

-Initially shows a control panel with a list of available schools.
Choosing a school displays a list of students for that school and a list of groups for that school. There are a couple of sample groups hard-coded.

-Clicking on a group in the groups panel selects that group and will calculate and display the stats for that group.

-To create a new group use the checkboxes to select the students for the group then enter the group name in the input below and click the 'save custom group' button. The group will then be added to the groups panel. Click on the group to display it.

-Clicking on 'delete group' will delete the currently selected group from the list of groups in the groups panel but the data for that group will remain in the display table until another group is selected. Changing school selection clears the display table and checkboxes and pulls up the groups and student list for the new school. The original version allowed groups to be saved and loaded from the back-end so that they persisted.
