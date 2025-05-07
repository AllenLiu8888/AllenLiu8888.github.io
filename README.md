# PROJECT WEBSITE TEMPLATE DOCUMENTATION

This is a guide for what is required for the project website and what to change on the template.

_Files, criteria, instructions and requirements maybe amended at anytime._

- Please rename the folder `template` as your Team Name using underscore for spaces. ie `building_music`

**_Please read through all the HTML comments carefully before starting to add content._**

**_Please be sure to remove all placeholder content before submitting._**

**_No additional styling is required by you, just the content._**

**_Any additional styling will be removed before publishing. This is to ensure a consistent aesthetic and structure across the project websites._**

## Details about your project

- Title
- Project Name
- Team Name
- What is your Theme (Just uncomment your theme)
- Who are the team members and a contact email address for each of them
- What are some keywords related to the project
- What technology has been used to create the project (note this can be left until after exhibit)

  _Sample code for Team Member_

  `<li class="member"><a href="mailto:YOUREMAIL@EXAMPLE.COM">TEAM MEMBER</a><br><span class="role">CONTRIBUTIONS & ROLE</span></li>`

  `<li class="member"><a class="member__name" href="mailto:YOUREMAIL@EXAMPLE.COM">TEAM MEMBER NAME</a><p class="member__role">CONTRIBUTIONS & ROLE</p></li>`

## Tagline

- Create a maximum 140 character tagline

## Description

- Write a 150-300 word description about your project. This should describe what the project is, how it relates to the theme, and touch on how it is novel, valid, and significant.

## Images

- Images are to be placed into the `images` folder supplied.
- You must downsize images for web-viewing - to fit 1024 or 2048 pixels. No single image is to be larger than 1Mb (and should be smaller than that!)
- As many images as you like can be placed into the gallery as long as they are relevant to communicating your project. Remembering a smaller number of highly representative images will be more effective than many poorly considered images.
- You can create a 300px square thumbnail for each image - encouraged but not necessary as long as your images are properly optimised (downsized).
- Provide images names prepended with short group name/acronymn, ie. `SU_robot.png`, `SP_telephone.jpg`, `SAKA_orbu.gif`.

  _COPY & PASTE THE BELOW CODE FOR EACH NEW IMAGE YOU WISH TO DISPLAY. BE SURE TO REPLACE THE FULL SIZE IMAGE & THUMBNAIL WHERE APPROPRIATE (LOOK FOR THE CAPITALISED TEXT). REMEMBER TO ADD ALT TEXT AND A TITLE._

  _The thumbnail image can be the same URL as the original image but can and possibly will effect the load times._

  `<a class="gallery__item" href="FULL SIZE OF IMAGE" title="CAPTION FOR IMAGE (visible in a gallery mode)"><img src="THUMBNAIL FOR IMAGE" alt="ALTERNATE TEXT FOR IMAGE"/></a>`

---

# 项目网站模板文档

这是项目网站所需内容的指南，以及模板中需要更改的内容。

_文件、标准、说明和要求可能会随时修改。_

- 请将 `template` 文件夹重命名为您的团队名称，使用下划线代替空格。例如：`building_music`

**_请在开始添加内容之前仔细阅读所有 HTML 注释。_**

**_请确保在提交之前删除所有占位内容。_**

**_您不需要添加额外的样式，只需要添加内容。_**

**_在发布之前，任何额外的样式都将被删除。这是为了确保所有项目网站具有一致的美观和结构。_**

## 关于您项目的详细信息

- 标题
- 项目名称
- 团队名称
- 您的主题是什么（只需取消注释您的主题）
- 团队成员是谁，以及每个成员的联系邮箱
- 与项目相关的一些关键词
- 创建项目使用了什么技术（注意：这部分可以在展览后填写）

  _团队成员示例代码_

  `<li class="member"><a href="mailto:YOUREMAIL@EXAMPLE.COM">TEAM MEMBER</a><br><span class="role">CONTRIBUTIONS & ROLE</span></li>`

  `<li class="member"><a class="member__name" href="mailto:YOUREMAIL@EXAMPLE.COM">TEAM MEMBER NAME</a><p class="member__role">CONTRIBUTIONS & ROLE</p></li>`

## 标语

- 创建一个最多 140 个字符的标语

## 描述

- 写一个 150-300 字的项目描述。这应该描述项目是什么，它与主题的关系，并提及它是如何新颖、有效和重要的。

## 图片

- 图片应放在提供的 `images` 文件夹中。
- 您必须将图片缩小以适应网页浏览 - 适合 1024 或 2048 像素。单个图片不得大于 1Mb（而且应该比这更小！）
- 可以在图库中放置任意数量的图片，只要它们与传达您的项目相关。记住，少量具有代表性的图片比大量考虑不周的图片更有效。
- 您可以为每张图片创建一个 300 像素的正方形缩略图 - 建议但不强制，只要您的图片经过适当优化（缩小）。
- 提供图片名称时，请在前面加上简短的组名/缩写，例如：`SU_robot.png`、`SP_telephone.jpg`、`SAKA_orbu.gif`。

  _复制并粘贴以下代码以显示每张新图片。确保在适当的地方替换全尺寸图片和缩略图（查找大写文本）。记住添加替代文本和标题。_

  _缩略图可以使用与原始图片相同的 URL，但可能会影响加载时间。_

  `<a class="gallery__item" href="FULL SIZE OF IMAGE" title="CAPTION FOR IMAGE (visible in a gallery mode)"><img src="THUMBNAIL FOR IMAGE" alt="ALTERNATE TEXT FOR IMAGE"/></a>`
