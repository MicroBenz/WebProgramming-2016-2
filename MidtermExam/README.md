# Midterm Expectation

ทำเฉลยตาม Midterm Expectation ของอาจารย์

- Explain how a web page is fed from a URL to the client’s browser requesting the web page.
  - เมื่อเรากรอก URL ก็จะเอา Domain Name ไปถาม DNS Server เพื่อหา IP ของโดเมนนั้นๆ ให้ พอรู้ IP เราก็จะทำ HTTP Request ขอหน้าเว็บจาก Server Server ก็จะส่งหน้าเว็บที่เป็น HTML มาให้กับ Client ที่เป็นคนขอ Web Browser ก็จะ render หน้า HTML ขึ้นมา
  - ซึ่งหาก HTML เรามีการ include CSS, JS เพิ่มเติม Client ก็จะทยอย Request ขอไฟล์ดังกล่าวทีละอันอีกที (ตาม HTTP ปกติ เว้นแต่ใช้ HTTP/2 ซึ่งเป็นเวอร์ชั่นใหม่ มันจะส่งทุกอย่างมาให้ใน 1 ครั้ง จะไม่ทำขั้นนี้ ซึ่งไม่น่าจะอยู่ในสโคปวิชานี้)

- Conceptually point out fundamental differences among hosting options: Owning a machine to host a web site/app, Renting a virtual hosting, and Deploying a web site/app on a “cloud” instance.
  - Host เองมีข้อเสียคือ ราคาจะแพงมาก และนอกจากเครื่องจะแพง เรายังต้องการ Internet Link ที่ความเร็วสูงพอสมควรด้วย ซึ่งไม่ได้หาง่ายๆ และต้อง Maintainance เครื่องเอง
  - Virtual Hosting (หรือ Share Hosting) ก็จะดีที่ราคาจะถูก แต่เราจะ setup อะไรมากเองก็ไม่ได้ (เช่น เขาให้ PHP 5.5 มา ก็ต้องจำใจใช้ จะอัพเป็น 7 ก็ต้องไปติดต่อกับเขาเอง ซึ่งทำให้หรือไม่ก็จะอีกเรื่อง) และจะมีปัญหาเรื่องการ Scale Up คือจะทำไม่ค่อยได้
  - Cloud จะ flexible ที่สุด คือเราสามารถลด/ขยายขนาดได้ตามความต้องการ และที่สำคัญคือเหมือนเราได้เครื่องมาใช้เครื่องนึงเลย จะทำอะไรก็ทำได้หมด รวมถึงยังมีคน Maintainance ตัว Infra ให้เอง...ข้อเสียคือ ราคาโหด

- Distinguish between client-side and server-side technologies.
  - Client-Side จะโฟกัสไปถึงสิ่งที่ User จะเห็นเป็นหลัก: ภาพลักษณ์สวยด้วย CSS, Interaction น่าสนใจ ลูกเล่นเยอะๆ ด้วย JavaScript
  - Server-Side จะโฟกัสไปที่การติดต่อกับฐานข้อมูลเพื่อเอาข้อมูล, การรับโหลด Request จำนวนมหาศาลที่อาจเกิดขึ้นได้, Business Logic หลายๆ อย่างก็จะอยู่กับฝั่ง Server ซะเยอะ (ภาษาฝั่งนี้จะ vary มาก ยอดนิยมก็ PHP)

- Explain fundamental roles of HTML, CSS, and JavaScript on a web page.
  - HTML: ขึ้นโครง โครงสร้างเป็นยังไง
  - CSS: แต่งให้สวย
  - JS: ทำให้เกิด interaction, เพิ่มลบของใน HTML แก้ไข DOM ได้

- Explain why targeting multiple types of browsers as well as client devices are a challenge in web site/app development.
  - จอใหญ่เล็กต่างกัน การสร้าง UI แบบ Responsive ใช้ได้สองขนาดจอจึงมีความท้าทายมาก
  - Browser แต่ละตัว support ของไม่เหมือนกัน ฟีเจอร์ใหม่ๆ หลายอย่างใน Chrome จะ support แต่ Safari จะไม่ support ดังนั้นการเลือก API แต่ละอันมาใช้ต้องดูด้วยว่า Browser รองรับเยอะหรือยัง หรือมัน worth it ที่จะใช้ไหม

- Realize how HTML/CSS/JavaScript standards should affect development decisions when developing web sites / web apps targeting wide ranges of web browsers.
  - ในคาบ discuss กันไปแล้ว ยาวมากพอตัว สรุปคือ มันก็มีผล เพราะอันไหนที่เขา standardize มาตรฐานกันไปแล้ว ก็รู้สึกชีวิตปลอดภัย ใช้ได้แน่นอน แต่ถ้าไม่ standardize ถ้าจะใช้ก็ต้องวัดดวงกัน

- Explain the conceptual differences between standards pursuing by W3C and WHATWG
Know of DOM and understand how a DOM tree is used to represent a web page in a browser.
  - (ไม่รู้)

- Know how to inspect the DOM tree of a web page being displayed in a browser window.
  - ไปลองใช้ Inspect Element ของ Chrome (คลิกขวา > Inspect Element)

- Realize the importance of the semantics of HTML tags.
  - HTML5 เสนอแนะให้เราเลือก tag ได้ถูก semantic เช่น h1 สื่อถึงหัวข้อใหญ่ ไม่ใช่ตัวใหญ่เฉยๆ

- Properly use HTML5 elements to describe web contents.
  - ไปดู tag กันเอา จำ tag มาตรฐานได้ก็โอละ พวก `<body>` `<head>` `<h1>` `<div>` `<span>` ใช้ให้ถูกตาม semantic ด้วย

- Use HTML5 syntax correctly.
  - น่าจะคล้ายอันบน?

- Be familiar with widely-used HTML5 elements: tags and attributes.
  - มี tag บางอันที่มีแค่ใน HTML5 นะ เดี๋ยวไปหามาให้อีกที

- Study HTML5 documentation and use HTML5 elements correctly according to the documentation.

- Know how to literally represent special characters in an HTML document (HTML character entities).
  - พวกอักขระแปลกๆ อะ ที่ต้องใช้ code พิเศษ &Dagger;

- Understand how non-ASCII characters are encoded when used in a URL.
  - จะแปลงเป็น UTF-8 Byte Sequence และแปลงเป็น ASCII อีกที [จาก Stackoverflow](http://stackoverflow.com/questions/17242846/non-ascii-characters-in-url)
  - á คือ U+00E1 -> `0xC3 0xA1` -> `%C3%A1`
  - `Clássico` -> `Cl%C3%A1ssico`

- Know possible alternatives of how to use CSS (styling) in a web site/app, point out the upsides/downsides of using each alternative, and implement accordingly.
  - มีหลายท่า
  - `<link rel="stylesheet" href="main.css" />` โหลดไฟล์ CSS เข้ามา
  - `<style></style>` แปะ CSS ในแท็ก style
  - `<h1 style="color: red;">Hello</h1>` Inline CSS **จะทับทุกกฎที่มีอยู่**

- Use CSS3 syntax correctly.
  - เขียน CSS3 ให้เป็นเนอะ
```
<CSS Selector> {
  <CSS Attribute>: <Attribute Value>
}
```

- Know how to inspect and manipulate the styles applied to each element in a DOM tree via a web browser.
  - เล่น Inspect Element ใส่ style เพิ่ม กดเอา style ออกดู

- Understand concepts of CSS selectors.
  - CSS Selector เอาไว้ให้เราเลือกได้ว่า DOM ก้อนไหนที่เราจะใส่ style ให้มัน

- Write CSS selectors to target elements by id, classes, and tag names.
  - id -> #
  - class -> .
  - tag names -> ชื่อ tag ตรงๆ เลย

- Write CSS selectors to target elements based on multiple criteria.
  - ไปลองหัดเขียน CSS selectors ลึกๆ ละเอียด

- Write CSS selectors to target elements based on relationship in the DOM tree (E.g. siblings, parents, and children).
  - div p -> ทุก p ที่อยู่ใต้ div
  - div > p -> p ที่มีพ่อเป็น div (p ที่ลงไปอีกชั้นจะไม่โดน)

- Write CSS selectors to target elements based on their attributes.
  - div[data-id="register"] -> `<div data-id="register"></div>` จะถูกเลือก

- Write CSS selectors to target elements based on their states (E.g. hover).
  - a:hover -> จะแสดงผลเมื่อเอาเมาส์ชี้ค้างที่ tag a
  - ยังมีอีก เช่น `:active`

- Write CSS selectors to target elements based on their orders (E.g. first-child, first-of-type).
  - p:first-child -> หยิบแท็ก p ที่เป็นลูกคนแรกของ DOM
  ```language-HTML
  <div>
    <p>Hello</p> (p:first-child คืออันนี้)
    <p>World</p>
  </div>
  <div>
    <p>I am first child</p> (p:first-child อันนี้ด้วย)
    <p>I am second child</p>
  </div>
  ```
  - p:nth-child(2) -> ลูกคนที่ 2
  - p:nth-child(3n+1) -> ลูกคนที่ 1, 4, 7, 10, ...
  - p:nth-child(odd) -> ลูกคนคี่ (even ก็จะเป็นคนคู่)

- Study CSS3 selector documentation on various selector capabilities and use them correctly according to the documentation.
  - ประสบการณ์ล้วนๆ...

- Know how CSS Box Model works and determine appropriate values for paddings, border widths, margins, outlines based on a given design.
  - CSS Box Model คือการมอง HTML Element เป็นกล่อง
  - padding จะดันข้างใน
  - margin จะบานข้างนอก
  - border width จะสร้างความหนาของขอบ โดยจะกินข้างใน
  - outline จะสร้างขอบ แต่กินข้างนอก

- Know how sizing of box elements works when “box-sizing” values are to various values.
  - content-box (default): ขนาดจะเหมารวม content เท่านั้น
  - border-box: ขนาดจะนับ content + padding + border **(ไม่รวม margin)**

- Style CSS border.
  - `border: <ความหนา> <รูปแบบ> <สี>` แบบสั้น
  - เช่น border: 1px solid #ffffff;
  - หรือจะทำแบบละเอียดก็ได้
    ```language-css
    border-width: 1px;
    border-style: solid';
    border-color: #ffffff;
    ```
  - จะเอา Border เฉพาะมุมก็ได้
    - border-left / border-right / border-top / border-bottom

- Understand the CSS Normal Flow and how “inline” and “block” elements are positioned according to the Normal Flow.
  - ปกติจะเป็น block จะเป็นกล่อง ก้อนที่ต่อกันมา จะโดนทบไปบรรทัดใหม่ (แบบ p)
  - inline ก็คืออยู่บรรทัดเดียวกัน

- Understand how “absolutely-positioned”, “fixed”, and “floated” elements are placed relative to other elements.
  - float คือการวางตัวว่าจะให้เรียงซ้ายไปขวา หรือขวามาซ้าย
  - fixed ก็จะ fixed position เป๊ะๆ ไม่ไปไหน
  - absolute จะใช้คู่กับ relative
    - คนพ่อ relative คนลูก absolute
    - เมื่อกำหนดแบบด้านบนแล้ว คนลูกจะใช้ top, left, right, bottom วาง position "เทียบกับ" พ่อได้
  - [อ่านเพิ่มได้ที่นี่](https://www.w3schools.com/css/css_positioning.asp)

- Implement simple layouts using CSS3.
  - ถ้าทำการบ้านแรกเอง ก็นั่นแหละครับ

- Know of different CSS units of (size) measurement.
  - มีหน่วยสองแบบ absolute กับ relative
  - absolute: px, cm (10 px หมายถึง 10 px จริงๆ)
  - relative: % (เทียบกับ parent), em (เทียบกับอะไรสักอย่าง ไม่แน่ใจ)

- Use “%”, “px”, and “em” units properly based on a given design.
  - ประสบการณ์ล้วนๆ ครับ 55555555 ทำให้ออกมาได้ ก็ถูกหมดอะ

- Use the CSS calc() function in sizing elements.
  - `height: calc(100% - 50px);` ก็จะคำนวณความสูง 100% ก่อนว่ามันกี่ px แล้วค่อยลบ 50px
  - Browser บางอันไม่ support นาจา

- Know how CSS Cascading Order works
  - ลำดับการทับกันของ CSS (คนลำดับสูงกว่าจะ override กฎเดียวกันในลำดับต่ำกว่า)
  - Inline > Internal > External > Browser Default
  - เช่น ถ้าเราบอก inline `<h1 style="color: red">` และใน Internal CSS ของเรา ใส่ `h1 { color: blue; }` จะได้สีแดง เพราะ inline ศักย์สูงกว่า
  - แต่ถ้ามีคนเขียน `!important` อันนั้นจะสำคัญสุด override ทุกอัน (แต่ถ้าคนศักย์สูงกว่าก็ !important ก็เอาคนนั้นอยู่ดี)

- Determine which competing CSS rules take precedence according to the Cascading Order rules.
  - อธิบายข้างบนไปแล่ว...

- Study documentation on other CSS properties (E.g. text-styling, animation) and use them correctly according to the documentation.
  - GOOGLE SKILL รัวๆ อยากใช้อะไรค่อย GOOGLE เอา

- Explain the benefits and constraints of implementing web sites/web apps using CSS framework such as W3.CSS
  - สะดวกขึ้นมาก เพราะเขามีกฎ CSS มาให้แล้ว เราหยิบใช้เฉยๆ แล้ว override บางส่วนเอาถ้าต้องการแต่งให้สวยตามที่เราอยากได้

- Discuss about the goals of Responsive Web Design (RWD)
  - Goals คือ Share HTML, CSS เดียวกัน แต่แสดงผลได้ทุกหน้าจอ (ไม่ต้องทำแยก mobile site, desktop size)

- Name factors, beyond dimensions, that web designers could consider in deploying the idea of RWD and give example cases in which responding to such factors could practically benefit users’ experience of the web.
  - เมนูด้านบนสุด: จอใหญ่แสดงเต็ม/จอเล็กใช้ Hamburger Menu แทน
  - จากเดิมถ้า display เป็น card (กล่องสีเหลี่ยม) 3 อันต่อแถว บน Desktop ก็แสดง 1 อันต่อแถวพอบน mobile
  - ปุ่มกดจะใหญ่ขึ้นบน mobile เพราะนิ้ว

- Discuss how “content flow”, “breakpoints”, “relative units”, “min/max dimensions”, “scalable graphics”, and “font-based Icons” could be used for the benefit of RWD.
  - content flow คือการไหลของ content (Desktop จะกวาดซ้ายไปขวาได้ แต่ Mobile ค่อนข้างจะไหลบนลงล่างมากกว่า)
  - breakpoints คือจุดที่เกิดการเปลี่ยนขนาด จาก Desktop เป็น Tablet หรือ Tablet เป็น Mobile
  - relative units มีตอบไปแล้วข้างบนๆ
  - min/max dimensions ก็คือการกำเนิดขนาดน้อยสุด/มากสุด
  - scalable graphics ก็คือ SVG จะหดขยายยังไงก็ชัดคมกริบ ในขณะที่ไฟล์ภาพเท่าเดิมเด๊ะ
  - font-based icons ก็คืออย่าง FontAwesome พวก icon พิเศษ ก็คือฟอนต์ตัวนึง
  - พวกนี้เอามาช่วย RWD ทั้งหมด

- Determine the conditions when CSS rules are to be applied based on given Media Queries.
  - ใช้ `@media(เงื่อนไข)` ในการระบุว่า CSS ในนี้จะถูกใช้เมื่อ device ผ่านเงื่อนไขดังกล่าว
  ```language-css
  @media(max-width: 768px) {
    h1 {
      font-size: 14px;
    }
  }
  ```
  
- Use `<meta>` to set the “viewport” of to achieve the desire responsive function.
  - อ่อ ถ้าจะใช้ media queries ต้องใส่ viewport ในแท็ก `<meta>` ด้วย
  - `<meta name="viewport" content="width=device-width, initial-scale=1">` ท่ามาตรฐาน

- Know possible alternatives of how to add JavaScript to an HTML document, point out the upsides/downsides of using each alternative, and implement accordingly.
  - `<script></script>` แล้วเขียน script ในนั้น
  - `<script src="main.js"></script>` โหลด script แยก
  - ใส่ใน head ถ้า script มีการแก้ไข DOM ก็จะระเบิด เพราะมันยังไม่เจอ DOM จริงๆ และถึงแม้จะไม่แก้ บางทีก็อาจจะโหลดช้าขึ้น เพราะ head จะถูกอ่านก่อน และ script มันโหลดช้า
  - ใส่ใน body (ปกติเราทำท่านี้)

- Determine the timing of when each JavaScript statement is interpreted and executed by the web browser relative to when each element in the DOM tree is constructed.
  - งงคำถาม 55555

- Write JavaScript statements to declare variables, assign values to variables, comparing values, and compute Arithmetic operations.
  - ประกาศด้วย var
  - assign ปกติ ไม่ต้องมี data type: `var x = 3; x = "Hello"`
  - type เป็นอะไรก็ได้ ไม่โดน fix แบบ Java
  - เปรียบเทียบ `> < >= <=` ปกติ จุดระวังคือ `==` กับ `===`
  - `==` จะพยายามแปลงทั้งสองฝั่งให้เป็น data type เดียวกัน แล้วเทียบกัน เช่น `1 == '1'` ได้ `true` (สตริง 1 จะแปลงเป็นเลข 1 ได้ ซึ่งตรงกัน)
  - `===` จะเทียบเหมือนกันทุกอย่าง คือ type เดียวกัน และค่าเดียวกัน (strict กว่ามาก แนะนำให้ใช้อันนี้ตลอด)

- Implement control flows in JavaScript (I.e. decisions and iterations).
  - if, else ปกติ
  - มี switch case ด้วย
  - for (var i = 0 ; i < n ; i += 1)
  - for (var key in obj) (ไล่ทุก key ของ JS Object)

- Use JavaScript arrays and objects
  - Array: `var arr = [1, "2", "three", 0.11, { a: 1} ];` mix type ได้เต็มที่
  - Object: `var obj = { a: 2, b: "Three" };` เป็น key-value เวลาใช้ก็ `obj.a` หรือ `obj['a']` ก็ได้

- Define and execute JavaScript functions.
  - ประกาศฟังก์ชัน
  ```language-javascript
  function add(a, b) {
    return a + b;
  }
  ```
  - เรียก
  ```language-javascript
  add(1,3) // 4
  ```

- Understand how JavaScript functions are treated as objects and use the understanding to implement proper JavaScript statements.
  - ฟังก์ชันมองเป็น object ได้ใน JavaScript นั้นคือเอาไป assign ในตัวแปรได้
  ```
  var anotherAdd = function(a,b) {
    return a + b;
  }
  anotherAdd(2,5) // 7
  ```

- Explain the relationship between ECMAScript and today’s JavaScript.
  - ECMAScript (ES) เป็นมาตรฐานที่องค์กร ECMA ตั้งออกมาเพื่อสร้างมาตรฐานให้กับ JavaScript (เพราะมาตรฐานมันไม่ค่อยจะมีในสมัยนั้น...) เวอร์ชั่นล่าสุดตอนนี้คือ ES7 (2016) แต่ที่นิยมและแนะนำให้ลองเขียนกันคือ ES6 (2015) เพราะมีอะไรเปลี่ยนแปลงเยอะมากๆ และเป็น baseline ของเวอร์ชั่นถัดๆ ไป (เป็น Major Change)

- Realize how different versions of ECMAScript affect web development targeting multiple browsers.
  - โดยปกติ Browser พื้นฐานจะ support ES5 กัน (คือ JavaScript มาตรฐานปกติเลย) ถ้าจะใช้ฟีเจอร์ของ ES6 ก็ต้องดูว่า Browser support หรือไม่
  - ก็จะมีคนนิยมทำกันท่านึง คือก็แปลง ES6 เป็น ES5 ซะเลย โดยใช้ tools เช่น [Babel](https://babeljs.io/)

- Know what JQuery is.
  - jQuery เป็น JavaScript library ตัวนึง ที่ช่วยให้เราหยิบจับแก้ไข DOM ได้ง่ายขึ้นมากๆ

- Add jQuery scripts to an HTML document.

- Use jQuery syntax correctly.
  - แม่น CSS Selector ใช้ jQuery ก็หายห่วงละ
  - `$('.container')` ก็จะได้ DOM ที่มี class เป็น container แล้ว อยากจะทำอะไรต่อก็ทำเลย

- Apply the knowledge of CSS selector in jQuery in order to target and manipulate elements in the DOM tree.
  - jQuery จะใช้ CSS Selector ในการหยิบของใน DOM Tree (ตามตัวอย่างบน)

- Use jQuery to handle the “document ready” event.
  - เป็น event ที่จะถูกทำงานเมื่อ document โหลดเสร็จครบแล้ว
  ```
  $(document).ready(function () {
    // Do something when document is ready.
  });
  ```
- Use jQuery to handle mouse and keyboard events.
  ```
  // Mouse events
  $('h1').click(function (e) {
    // Do something when click on h1
  });

  // Keyboard events
  $('input[type='text']').keypress(function () {
    // Do something when key press on <input type="text">
  })

  // จริงๆ มีอีกเยอะ
  ```
- Use jQuery to create new elements.
  - `var elem = $('<h1>I am new Element</h1>);`
  - ใช้ตัวแปร elem เหมือนกับมี $() ได้เลย

- Use jQuery to gather information of targeted elements in the DOM tree.
  - `$('#title').text();` // หยิบ text จาก id="title" มา
  - มีอีกเยอะอะ -_-

- Use jQuery to traverse portions of the DOM tree.
  - ไมีเคยทำ

- Use jQuery to read / manipulate CSS properties of elements.
  - `$().css();` read
  - `$().css('background-color', 'black');` set
  - set หลายอันก็ได้
  ```language-javascript
  $().css({
    'background-color': 'black',
    'font-size': '14px'
  });
  ```
  - ถ้า set ท่าบน ระวังว่าเราเซ็ต CSS ใน JavaScript ดังนั้นต้องเป็น string

- Use jQuery to read / manipulate attributes of elements.
  - เหมือนอันบน เปลี่ยน css เป็น attr

- Use jQuery to manipulate the DOM tree (I.e. adding/removing nodes).
  - `$('#data-container').append()` ยัดเพิ่ม
  - `$('#card3').remove()` ลบทิ้ง

- Explain what AJAX is and how it works in a Single-Page web application.
  - ใน SPA (Single-Page Web Application) จะเป็น pattern ที่ Client จะโหลด HTML, CSS, JS ทั้งหมด "แค่ครั้งเดียว" เท่านั้น แล้ว Client จะจัดการทุกสิ่งอย่างเองเลย
  - ทุกสิ่งอย่างนั้นก็คือ ทั้งการ routing เปลี่ยนหน้า, ทำ interaction นู้นนี่
  - ซึ่งหากต้องการข้อมูลไปโชว์ จะทำผ่าน AJAX ยิงขอข้อมูลผ่าน API (ในวิชาก็ให้ลองยิง Google Knowledge Search)
  - ข้อสังเกตของ SPA คือ แอพจะไม่มีการ refresh เลย จะใช้ได้ครบ flow โดยไม่ต้อง refresh แม้แต่น้อย
  - SPA Framework ก็เช่น React, Angular, Vue

- Use the ajax() function in jQuery to asynchronously obtain data from local/remote sources and use the received data to alter some parts of the current web page.  
  - ท่ามาตรฐาน จะใช้อันนี้
  ```language-javascript
  $.ajax({
      url: <url ที่จะยิง api>,
      method: <ประเภท method เช่น GET, POST)
  })
  .done(function (response) {
    // ทำอะไรสักอย่าง เมื่อ Request เสร็จสิ้นแล้ว
  });
  ```
  - เราใช้อันบน เพราะ flexible กว่ามาก จะแก้ method ก็เปลี่ยน field method ไม่ต้องไปแก้ชื่อฟังก์ชันจาก .get() เป็น .post() และยังมี option ให้ใช้เยอะแยะ

- Apply jQuery and JavaScript to achieve some simple event-driven interactions/functionality.
  - เอา event onClick มาใช้ แล้วไปยิงขอข้อมูล เมื่อได้มาก็แสดงผล

- Know of JSON and what role JSON plays in exchanging data in the Internet.
  - JSON เป็นประเภทข้อมูลแบบนึงที่ใช้แลกเปลี่ยนกันระหว่าง Internet
  - ลักษณะเป็น key-value (เหมือน Object ของ JavaScript เลยจ้า)
  - Cross ข้ามภาษาได้ คือภาษาโปรแกรมอื่นๆ ก็ access ได้เหมือนกัน

- Manually write JSON strings corresponding to JavaScript objects / values.
  ```language-javascript
  var a = {
    name: "John Cena",
    occupation": "Wrestler"
  };
  // JSON String จะมีหน้าตา
  '{"name": "John Cena", "occupation": "Wrestler"}'
  ```
  - สังเกตว่า JSON นั้นจะใช้ double quote คลุมที่ key ตลอดนะ ในขณะที่ JS Object ไม่ต้องใช้ double quote คลุมที่ key ก็ได้

- Explain JSON strings in terms of their corresponding JavaScript objects / values.
  - มันแปลงไปกลับได้ (เข้าใจว่าอจ.จะสื่อยังงี้...)

- Use JSON.parse() and JSON.stringify in exchanging data in AJAX web applications. 
  - `JSON.parse()` ใส่ JSON String ไป เพื่อแปลงเป็น JS Object
  - `JSON.stringify()` เอา JS Object มาแปลงเป็น JSON String
  - ใช้ในการแปลงไปแปลงกลับ กรณีที่ได้ข้อมูลมาเป็น JSON String แล้วต้องใช้กับ JavaScript Object ก็ใช้ JSON.parse()
