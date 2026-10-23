# AI usage log

## Week 1- Tool(s):- What I asked for:- What I kept, changed or rejected, and why:- One thing the AI got wrong and how I fixed it:

## Week 2- Tool(s):Google Gemini What I asked for:I showed a screenshot of an overlapping button issue on the menu card and asked how to fix it.

What I kept, changed or rejected, and why: Based on the AI's explanation that the bug was caused by duplicate elements, I changed my MenuItemCard.jsx code by removing the second, empty button tag. One thing the AI got wrong and how I fixed it:

## Week 3- Tool(s): Google Gemini

What I asked for: Help with identifying the problem that cause no output on the web page.

What I kept, changed or rejected, and why:
Kept: The useState([]) empty list setup to prevent the application from crashing while it waits for the vendor data to finish loading.
Changed: Added res.json() data parsing to convert the incoming response into readable shop data so the blank page issue could be solved.

One thing the AI got wrong and how I fixed it:
The AI's mistake: The AI gave the wrong code so it didn't work and wasn't loading anything onto the webpage, specifically leaving out res.json() in the fetch logic which left the shop data completely empty.

How I fixed it: Updated the fetch implementation in App.jsx to properly include .then(res => res.json()) so the food shops could finally load and appear on the webpage. (Line 26-34)