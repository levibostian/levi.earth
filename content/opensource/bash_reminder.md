---
title: bash-reminder
slogan: Remind yourself to do something after you run a command in terminal.
color: '#00a9eb'
website: https://github.com/levibostian/bash-reminder
date: 05-25-2017
timeline: May 25, 2017 - Present
description: Give yourself reminders when working in terminal. After a bash command runs, show a reminder to yourself using bash-reminder.
status: active
featureImage: '/img/opensource/bash_reminder/echo_random_color.png'
---

# bash-reminder

While I am working hard developing an app, I find myself forgetting to do certain tasks. Update my project management software, send a Slack message to a team member, take a screenshot, make a git tag, etc.

I created bash-reminder to send myself reminders when I run certain tasks in the terminal.

---

bash-reminder is a simple program that you can setup to run when you need to remind yourself of something.

```
$> bash-reminder "Do this"
Do this
```

Yeah, that is all bash-reminder is designed to do. Echo the message you give it and print it in a random color to try and catch your attention.

![](/img/opensource/bash_reminder/echo_random_color.png)

For me, I run `bash-reminder` after I run a git commit to remind myself to update my todo list. I added this line to my `~/.gitconfig` file:

```
[alias]
  ac = "!f() { git add .; echo $1; git commit -m \"$1\"; bash-reminder \"**Update your todo list!**!\"; }; f"
```

Now, when I run `git ac`, bash-reminder will run to tell me to update my todo list.

*Note: As you can see, the API for this program is not the best. I would rather have it be able to run after any command you specify and not need to be as complex to run as this. Feel free to make improvements to this project and open a pull request!*
