What are Flags?
Flags are parameters you pass to a regex construct which alters some of its default behaviour.

There are a couple of flags, some which may differ across different programming languages or regex engines. But in this article, we'll look at four common flags:

g - Global Flag
i - Case-Insensitive Flag
s - Newline (or Single line) Flag
m - Multiline Match Flag
In a literal notation, you can pass one or more flags after the last forward slash:

/pattern/flags

For example, you can pass the g and i flags like this:

/pattern/gi

But what do these flags mean? Let's look at them.

The Global Flag g
By default, your regex pattern will only return the first set of characters in a string that matches. If you want to match all set of characters that match your pattern, then you add this flag at the end of the regex.

In the previous lesson, I used this example:

Expand
Regex
/code/
Input
my channel is deeecode, and I make videos on code
Match
Edit
This pattern matched only the first occurence of code:

By passing a g flag to the regular expression, /code/g, the pattern will match more than one occurrence, which is also the second occurrence of "code":

Expand
Regex
/code/g
Input
my channel is deeecode, and I make videos on code
Match
Edit
The Case Insensitive Flag i
By default, your regex patterns are case sensitive. This means: /hello/ will not match the "Hello" in "Hello, how are you":

Expand
Regex
/hello/
Input
Hello, how are you
Match
Edit
This is because the cases are not the same (lower "h" and capital "H" not the same).

To remove that case restriction on your regex pattern, apply this flag. Now, /hello/i will match the "Hello" in your string:

Expand
Regex
/hello/i
Input
Hello, how are you
Match
Edit
The Newline Flag s
By default, the dot sign . is a special character that matches any kind of character except a newline.

Don't worry too much about special characters for now, there's a dedicated lesson for that. Let's just focus on the dot sign.

So, this flag allows the dot sign . to match newlines also.

For example, this pattern /hello.hi/ will match "hello hi", "hello_hi", "hello8hi":

Expand
Regex
/hello.hi/g
Input
hello hi and hello_hi and hello8hi
Match
Edit
But it will not match:

Expand
Regex
/hello.hi/
Input
hello
hi
Match
Edit
The reason is that . matches any character except a new line. But with the s flag, hello.hi/s, . can now match a newline:

Expand
Regex
/hello.hi/s
Input
hello
hi
Match
Edit
The Multiline Match Flag m
The caret symbol, ^, when used at the beginning of a regular expression is used to match the beginning of a string, and the dollar symbol, $, when used at the end of a regular expression is used to match the end of a string.

I have a separate lesson on special characters where we would get to see these symbols in more detail, but here is where the multiline match flag comes in.

Save we have this sentence:

Aisha likes to code.
Aisha also likes to play basketball

And we have this pattern /Aisha/g. With the global flag g on, you see that it matches both "Aisha"s:

Expand
Regex
/Aisha/g
Input
Aisha likes to code.
Aisha also likes to play basketball
Match
Edit
Using the caret symbol, called the beginning character, we can choose to match "Aisha" only if it begins the string. We do that by adding the caret symbol at the beginning:

Expand
Regex
/^Aisha/g
Input
Aisha likes to code.
Aisha also likes to play basketball
Match
Edit
Now you see that only the Aisha that begins the string is matched. But on the second line, "Aisha" begins the sentence right…why is it not matched?

Well by default, again, default, the beginning character considers everything as one string, and only matches the beginning. Even if you have 10 lines, it would consider everything as one string, but if we want the beginning character to match different lines of the string, then we use the m flag:

Expand
Regex
/^Aisha/gm
Input
Aisha likes to code.
Aisha also likes to play basketball
Match
Edit
You see now that "Aisha" that begins the first line is matched, and "Aisha" that begins the second line is matched.

But if I have something before "Aisha" on the second line, it is not matched anymore:

Expand
Regex
/^Aisha/gm
Input
Aisha likes to code. 2. Aisha also likes to play basketball
Match
Edit
The same thing applies to the $ sign

I'll explain more about this in the special characters lesson.

Wrap up
There are other flags not just these…these 4 are widely supported.

You can see how these flags change the default behaviour in different ways. So when you're writing regular expressions, there are times you'd want to achieve something that is turned off by default…you'd need one or more of these flags.

As we progress in this series, you'd see us using g a lot.

Now that you know what flags are, let's move on to start learning how to create interesting patterns.
