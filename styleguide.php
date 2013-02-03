<?php $title = 'Styleguide'; ?>
<?php $home = FALSE; ?>
<?php include 'templates/html_start.php'; ?>
<?php include 'templates/header.php'; ?>

<div class="main" role="main">
<div class="content">

<h1>Styleguide</h1>

<h2>Heading level 2</h2>

<h3>Heading level 3</h3>

<h4>Heading level 4</h4>

<h5>Heading level 5</h5>

<h6>Heading level 6</h6>

<p>All paragraphs are wrapped in <code>p</code> tags. Additionally, <code>p</code> elements can be wrapped with a <code>blockquote</code> element <em>if the <code>p</code> element is indeed a quote</em>. Historically, <code>blockquote</code> has been used purely to force indents, but this is now achieved using CSS. Reserve <code>blockquote</code> for quotes. Here's an example of correct usage:</p>

<blockquote cite="http://lipsum.com/feed/html">
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras euismod fringilla arcu. Integer posuere. Aliquam ipsum. Donec eget massa ac orci tempus euismod. Donec quis neque nec neque consequat sollicitudin. Donec commodo tempor nulla. Suspendisse venenatis. Ut ut leo. Nunc placerat urna at libero. Nunc suscipit lacus.</p>
	<p><cite><a href="http://lipsum.com/feed/html">lipsum.com</a></cite></p>
</blockquote>	

<p>Additionally, you might wish to cite the source, as in the above example. (The correct method involves the <code>cite</code> attribute directly applied to the <code>blockquote</code> element, but since no browser makes any use of that information whatsoever, it's useful to also specify the standalone <code>cite</code> element.)</p>

<p>Go to <a href="/">my home page</a> or to <a href="http://google.com">Google</a></p>

<ul>
<li>This is an unordered list.</li>
<li>It has two items.</li>
</ul>

<ol>
<li>This is an ordered list.</li>
<li>It has two items.</li>
<li>No, I lied, it has three.</li>
</ol>

<dl>
<dt>This is a term.</dt>
<dd>This is the definition of that term, which both live in a <code>dl</code>.</dd>

<dt>Here is another term.</dt>
<dd>And it gets a definition too, which is this line.</dd>

<dt>Here is term that shares a definition with the term below.</dt>
<dt>Here is a defined term.</dt>
<dd><code>dt</code> terms may stand on their own without an accompanying <code>dd</code>, but in that case they <em>share</em> descriptions with the next available <code>dt</code>. You may not have a <code>dd</code> without a parent <code>dt</code>.</dd>
</dl>

<pre><code>html,
body {
height: 100%;
width: 100%;
}</code>
</pre>

<div class="example">
<strong>strong</strong>
</div>

<div class="example">
<b>b</b>
</div>

<div class="example">
<em>em</em>
</div>

<div class="example">
<i>i</i>
</div>

<div class="example">
<abbr title="Abbrevation">abbr[title]</abbr>
<abbr>abbr</abbr>
</div>

<div class="example">
<small>small</small>
</div>

<div class="example">
<s>s</s>
</div>

<div class="example">
<cite>cite</cite>
</div>

<div class="example">
<q>q</q>
</div>

<div class="example">
<dfn>dfn</dfn>
</div>

<div class="example">
<dfn title="Defining term">dfn[title]</dfn>
</div>

<div class="example">
<sub>sub</sub>
</div>

<div class="example">
<sup>sup</sup>
</div>

<div class="example">
<del>del</del>
</div>

<div class="example">
<u>u</u>
</div>

<div class="example"><ins>ins</ins></div>
<div class="example"><mark>mark</mark></div>
<div class="example"><time>time</time></div>
<div class="example"><code>code</code></div>
<div class="example"><var>var</var></div>
<div class="example"><samp>samp</samp></div>
<div class="example"><kbd>kbd</kbd></div>
<div class="example"><address>address</address></div>

</div>
</div>

<?php include 'templates/footer.php'; ?>
<?php include 'templates/html_end.php'; ?>