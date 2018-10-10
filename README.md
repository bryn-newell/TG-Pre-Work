# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture
(Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When we reach the Techtonic Group website we are asking the computer to speak to the server that holds
the information for the webpage, and then display the page in our browser, which is held in the broader
domain. Our browser uses that files of information, and as long as it has the capabilities to read the code
of those files and is up to date, will display the webpage to us as the programmers, hopefully, intended.

## From start to finish how does that data reach you to be rendered in the browser?

When landing on the webpage the first thing that loads in is a grey background and all of the text on the page.
The title text and headers then disappear and reload in with their animations and brief movements.
Next, the background image loads instead of just a plain grey background behind the text. Then finally,
the backgrounds changes again as a video loads and begins to play behind the main text of the page.

## What code is rendered in the browser?

A browser will take HTML, JavaScript, and CSS code, interpret what it means, and then display it back in
a visual manner.

## What is the server-side code’s main function?

The server-side stores all the information the programmer tells it to. It is dedicated to this content and
its purpose is to the deliver the content to users when requested. Basically it holds all the files, such as
HTML, PDFs, CSS, JavaScript, images, etc. that together make up a domain and a website. Together all those
files should work together to create a beautiful and informational website for a user to view.

## What is the client-side code’s main function?

The client-side contact's the server and requests to view all the information and files the server is holding.
It then analyzes that information and renders it into a webpage for the user to view and read. While sometimes
the client side can send information back to the server, it doesn't store the information of the website.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

As far as my research and understanding of the web has brought me so far, I don't know how to find out
exactly how many instances of assets are created. I would say a handful. The assets that I see and know
for sure are being created are 1) The HTML text of the page, 2)The CSS display styles 3)The JavaScript
analyzing the HTML and storing information 4)The images and videos saved in other files and used by
JavaScript and HTML.

## How many instances of the server-side code are available at any given time?

I believe there is only one instance or server-side code available at any given moment. If I were to refresh
the page I would receive that code again, and if it had been updated, the request to the server would return
with updated information. But the user-side is only rendering one instance at a time.

## What is runtime?

Runtime is the amount of time a program is running. More specifically it is the time period from when
the program is executed or begins, until it is closed by the user or the operating system.

## How many instances of the the databases connected to the server application are created?

Again, I believe there is only one instance of the database connected to the server application. The database
can be updated and changed, and when the server calls to the database it will pull that new information,
but as far as I know there is only the one database instance. 
