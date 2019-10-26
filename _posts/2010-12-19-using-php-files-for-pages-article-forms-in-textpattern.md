---
tags: []

layout: post
title: Using PHP Files For Pages &amp; Article Forms in Textpattern
redirect_to: /
hidden: true
---

Thanks to Jon Hicks tip on [Using files for page templates in
Textpattern](http://hicksdesign.co.uk/journal/using-files-for-page-templates-in-textpattern),
it is now a lot easier to work even more rapidly. I’d like to share some
tips on how to use the mentioned workaround when working with
Textpattern.

Create a new directory for your Textpattern project, let’s call it
*“my\_blog”*. Then inside the *“my\_blog”* directory, create three
subdirectories: *“forms”*, *“pages”* and finally *“public”*.

You should now have something like this:

-   my\_blog
    -   forms
    -   pages
    -   public

You could call the *“public”* directory whatever you like, but i’ll call
it *“public”*. The idea is to keep the files which’ll live inside
*“forms”* and *“pages”* outside of the root directory.

Now go get a fresh copy of Textpattern (4.3.0), and run the setup. When
everything is setup and customized to your liking, we’re ready to setup
Textpattern to use PHP files.

The idea is, whenever you’re creating a new page or form in Textpattern,
you’ll want that page or form to point to a PHP-file which contain all
of the Texpattern tags  
you’ll be using, instead of pasting all your code into pages or forms.
You’ll still be pasting a lot, but instead it is a short snippet that
points to the PHP-file Textpattern will use instead. Here is what that
snippet looks like:

    <txp:php>echo parse(file_get_contents(txpath.'/../../directory/file.php'));</txp:php>

Directory is either *“pages”* or *“forms”*, you could even go ahead and
create subdirectories within *“forms”* for the different form types
(“section”, “link”, “article”, “misc” etc).

So now you’ll spend most of your time working within your text-editor,
which is much more convenient. When the time comes to show of your
project to the world, keep in mind that *“pages”* and *“forms”* will
live *outside* of the root of your server. There are probably other and
better ways to do this, but this is how i do it at the moment, and it
works pretty well.
