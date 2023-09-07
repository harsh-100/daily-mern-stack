- Benefit of Using HTML Structure in HTML Pages
- Brief Introduction to SEO (Search Engine Optimization)
- Introduction of CSS

- assignment day - 6

<!-- css works  -->

```css
Syntax of CSS:
CSS rules are composed of selectors and declarations. Selectors target HTML elements, and declarations define how those elements should be styled.

css
Copy code
selector {
  property: value;
}
CSS Selector's Introduction:
Selectors are used to target specific HTML elements for styling.

Simple Selector - Id, Name, and Class:

HTML:

html
Copy code
<p id="special">This is a special paragraph.</p>
<p class="normal">This is a normal paragraph.</p>
CSS:

css
Copy code
#special {
  color: blue;
}

.normal {
  color: black;
}
Combinator Selector:

HTML:

html
Copy code
<div class="container">
  <p>This is a paragraph inside a container.</p>
</div>
CSS:

css
Copy code
.container p {
  font-weight: bold;
}
Pseudo Class Selector:

HTML:

html
Copy code
<a href="#" class="link">Click me</a>
CSS:

css
Copy code
.link:hover {
  color: red;
}
Pseudo Elements Selector:

HTML:

html
Copy code
<p>This is a <span>highlighted</span> word.</p>
CSS:

css
Copy code
p span::before {
  content: "Start: ";
}
Attribute Selector:

HTML:

html
Copy code
<input type="text" id="username" />
<a href="#" class="btn">Submit</a>
CSS:

css
Copy code
input[type="text"] {
  border: 1px solid black;
}

a[class="btn"] {
  background-color: blue;
  color: white;
}
Universal Selector:

HTML:

html
Copy code
<p>This is a paragraph.</p>
<div>This is a division.</div>
CSS:

css
Copy code
* {
  margin: 0;
  padding: 0;
}
Group Selector:

HTML:

html
Copy code
<h1>Title</h1>
<p>Paragraph</p>
<a href="#">Link</a>
CSS:

css
Copy code
h1, p, a {
  color: purple;
}
```

<!-- seo works -->

How SEO Works:

Keywords: Keywords are words or phrases that people use to search for information. SEO involves researching relevant keywords related to your content. These keywords should be strategically placed in your content, headings, titles, and meta tags.

On-Page SEO: This refers to optimizing elements directly on your web pages. It includes using relevant keywords in titles, headings, and content. Proper HTML structure, meta descriptions, and image alt tags also contribute to on-page SEO.

Off-Page SEO: This involves activities outside your website that impact your search engine rankings. Backlinks (links from other websites to yours) play a crucial role here. High-quality and relevant backlinks can improve your website's authority and credibility.

Technical SEO: This focuses on the technical aspects of your website, such as its speed, mobile-friendliness, and proper indexing by search engines. A well-optimized website technically can lead to better rankings.

Content Quality: High-quality, relevant, and engaging content is a cornerstone of SEO. Search engines aim to provide users with the most relevant results, so creating valuable content is essential.

User Experience: Search engines consider user experience when ranking websites. Factors like page loading speed, mobile responsiveness, and easy navigation contribute to a positive user experience.

Algorithm Updates: Search engines frequently update their algorithms to provide better results. Staying up-to-date with these changes is important to maintain good search engine rankings.
