# Econocorp_Parts
 Website that displays information about the different spare parts in Econocorp

## Description

The purpose of this tool is to provide a map of the different spare parts located across the floor. Currently, it only holds the spare parts area and it is currently still under development. I wanted to be able to readily know where a part was without needing to remember where I saw it last and to have a method of easily updating the map so that when parts are moved around, one will be able to refer to this map and quickly find where it's located again.

This tool aims to make onboarding new employees easier and faster by allowing them to easily find the part they're looking for. This will also help employees who have been at Econocorp for a while as they'll be able to rapidly acquire the part they're looking for which may have either moved or hadn't been used in a while.

## How to use

The website is designed to be accessible and navigable from different approaches. There is a search bar at the top that you can type a part number, manufacturer, or description into. By clicking the search button, it will highlight all the items that match the search. 

Below that is a map that labels each bay from a top-down view. Each bay then gets its own section with different shelves, labeled *"A-D"* or *"A-E"* in descending order, where Shelf A is the top shelf. Each shelf contains an array of items with an Econocorp Part Number label *(ie. P100292)*. These items are organized from left to right as they are on the physical shelves in the floor. Clicking on an item will select it and display more information, including its description and manufacturer. A selected item can be clicked again in order to de-select it.

This can be useful to select multiple different items and then print out the website to know exactly where each item you're looking for is located from a list.

## Known Limitations

- This is still an early version of this project and is limited in its scope. It currently only covers the spare parts area, whose neighbor is also currently subject to change and adjustments.
- This map is only updated by manually editting the parts.js file. This is currently done by adjusting a spreadsheet, exporting it as a CSV file, and then converting that to JSON.

## To-Do

- [x] Create a website that can be accessed by different computers that displays the location of different parts by their part number
- [ ] Include information about the stock of each part.
- [ ] Develop a re-order point for each part based off of purchase amount & frequency.
- [ ] Make a drop-down to select a manufacturer
- [x] Make the search bar stay at the top of the screen and follow while scrolling + make pressing 'Enter' actually search
- [x] Make it so that when you type in a part, jump to where it's located
- [x] Display an alert if the part searched doesn't return anything
- [ ] Be able to re-do selected pieces if a search is cleared (history bar that tracks actions?)
- [x] Make a 'print mode' which makes printing the website more legible (changes colors of boxes)

*** Any future developments for this project will be recreated in a React Framework ***