// ================= CHAPTER 7 – OBJECTS (25 Examples) =================
function ch7Example() {
    let out = document.getElementById("out7");
    out.innerHTML = ""; // Nadiifi waxyaabaha hore
    out.style.display = "grid";
    out.style.gap = "12px";
    out.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";

    // 1. Person object
    let person1 = {
        name: "Ali",
        age: 30,
        city: "Mogadishu",
        greet: function() { return `Hello, my name is ${this.name}.`; }
    };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">1. Person Object</strong><br>
        <span style="color: #ffe0e0;">${person1.name} (${person1.age} jir, ${person1.city})</span><br>
        <span style="color: #ffcccc;">${person1.greet()}</span>
    </div>`;

    // 2. Car object
    let car1 = {
        make: "Toyota",
        model: "Camry",
        year: 2021,
        getAge: function(currentYear) { return currentYear - this.year; }
    };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">2. Car Object</strong><br>
        <span style="color: #fce7f3;">${car1.make} ${car1.model}</span><br>
        <span style="color: #fbcfe8;">Da'da gaariga: ${car1.getAge(2024)} sano</span>
    </div>`;

    // 3. Book object
    let book1 = {
        title: "JavaScript Essentials",
        author: "John Doe",
        pages: 400
    };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">3. Book Object</strong><br>
        <span style="color: #ffe8dc;">Buug: "${book1.title}"</span><br>
        <span style="color: #ffd4c4;">Qoraha: ${book1.author}, ${book1.pages} bog</span>
    </div>`;

    // 4. Shopping cart item
    let item1 = {
        product: "Laptop",
        price: 1200,
        quantity: 1,
        total: function() { return this.price * this.quantity; }
    };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">4. Shopping Cart</strong><br>
        <span style="color: #d1fae5;">Alaab: ${item1.product}</span><br>
        <span style="color: #a7f3d0;">Qiimaha: $${item1.total()} USD</span>
    </div>`;

    // 5. Player object
    let player1 = {
        username: "GamerPro",
        level: 50,
        score: 15000,
        status: "Active"
    };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">5. Player Object</strong><br>
        <span style="color: #fef3c7;">Ciyaaryahan: ${player1.username}</span><br>
        <span style="color: #fde68a;">Level: ${player1.level}, Score: ${player1.score}</span>
    </div>`;

    // 6. Object using new Object()
    let dog = new Object();
    dog.name = "Max";
    dog.breed = "German Shepherd";
    dog.speak = function() { return `${this.name} is barking!`; };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #c471ed 0%, #f64f59 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">6. Dog Object (new Object())</strong><br>
        <span style="color: #f0e6ff;">Eey: ${dog.name}, Nooca: ${dog.breed}</span><br>
        <span style="color: #e0ccff;">${dog.speak()}</span>
    </div>`;

    // 7. Update properties
    person1.email = "ali@example.com";
    person1.age = 31;
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #1f2937;">7. Update Properties</strong><br>
        <span style="color: #374151;">Updated Person: ${person1.name}</span><br>
        <span style="color: #4b5563;">Email: ${person1.email}, Age: ${person1.age}</span>
    </div>`;

    // 8. Delete property
    delete player1.status;
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">8. Delete Property</strong><br>
        <span style="color: #fce7f3;">Player without status: ${player1.username}</span><br>
        <span style="color: #fbcfe8;">Level: ${player1.level}</span>
    </div>`;

    // 9. Bracket notation
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #1f2937;">9. Bracket Notation</strong><br>
        <span style="color: #374151;">Book title: "${book1["title"]}"</span><br>
        <span style="color: #4b5563;">Using bracket notation to access property</span>
    </div>`;

    // 10. Nested object
    let company = {
        name: "Tech Solutions",
        address: { street: "123 Main St", city: "Hargeisa", zip: "2000" },
        departments: ["IT", "HR", "Marketing"]
    };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">10. Nested Object</strong><br>
        <span style="color: #fce7f3;">Company: ${company.name}</span><br>
        <span style="color: #fbcfe8;">City: ${company.address.city}, Street: ${company.address.street}</span>
    </div>`;

    // 11. Object with array & method
    let student = {
        name: "Fatima",
        grades: [90, 85, 95],
        calculateAverage: function() {
            let sum = this.grades.reduce((acc, curr) => acc + curr, 0);
            return (sum / this.grades.length).toFixed(2);
        }
    };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #c471ed 0%, #f64f59 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">11. Student with Grades</strong><br>
        <span style="color: #e0e7ff;">Arday: ${student.name}</span><br>
        <span style="color: #c7d2fe;">Celceliska darajadiisa: ${student.calculateAverage()}%</span>
    </div>`;

    // 12. Calculator object
    let calculator = {
        add: (a,b)=>a+b,
        subtract: (a,b)=>a-b,
        multiply: (a,b)=>a*b,
        divide: (a,b)=>a/b
    };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">12. Calculator Object</strong><br>
        <span style="color: #ffe0e6;">5 + 3 = ${calculator.add(5,3)}</span><br>
        <span style="color: #ffccd9;">5 - 3 = ${calculator.subtract(5,3)}, 5 × 3 = ${calculator.multiply(5,3)}</span>
    </div>`;

    // 13. This keyword
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">13. This Keyword</strong><br>
        <span style="color: #fef3c7;">Person greeting: ${person1.greet()}</span><br>
        <span style="color: #fde68a;">Using 'this' to access object properties</span>
    </div>`;

    // 14. Object with array
    let colors = { primary: ["Red","Blue","Green"], secondary: ["Orange","Purple"] };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #0ba360 0%, #3cba92 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">14. Colors Object</strong><br>
        <span style="color: #d1fae5;">Primary: ${colors.primary.join(", ")}</span><br>
        <span style="color: #a7f3d0;">Secondary: ${colors.secondary.join(", ")}</span>
    </div>`;

    // 15. Function as property
    let game = { title:"Adventure Quest", start: function(){ return `Game ${this.title} started!`; } };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">15. Game Object</strong><br>
        <span style="color: #fce7f3;">${game.start()}</span><br>
        <span style="color: #fbcfe8;">Function stored as object property</span>
    </div>`;

    // 16. Multi-word property names
    let productDetails = { "item name":"Smartphone", "model number":"X100", "release date":"2024" };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">16. Multi-word Properties</strong><br>
        <span style="color: #fff4e0;">Product: ${productDetails["item name"]}</span><br>
        <span style="color: #ffe8cc;">Model: ${productDetails["model number"]}</span>
    </div>`;

    // 17. Boolean property
    let settings = { darkMode:true, notifications:false, soundEnabled:true };
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #a8caba 0%, #5d4e75 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">17. Settings Object</strong><br>
        <span style="color: #e8f0ec;">Dark Mode: ${settings.darkMode ? "Enabled" : "Disabled"}</span><br>
        <span style="color: #d0e0d8;">Notifications: ${settings.notifications ? "On" : "Off"}</span>
    </div>`;

    // 18. Empty object then add properties
    let emptyObject = {};
    emptyObject.id = "newId123";
    emptyObject.description = "This is a new object.";
    emptyObject.createdAt = new Date().toLocaleDateString();
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">18. Empty Object</strong><br>
        <span style="color: #fce7f3;">ID: ${emptyObject.id}</span><br>
        <span style="color: #fbcfe8;">${emptyObject.description}</span>
    </div>`;

    // 19. Constructor function
    function Human(name, age){ 
        this.name=name; 
        this.age=age; 
        this.getInfo = function(){ return `${this.name} waa ${this.age} jir.`; }; 
    }
    let human1 = new Human("Aisha",25);
    let human2 = new Human("Ahmed",30);
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">19. Constructor Function</strong><br>
        <span style="color: #ffe0e6;">${human1.getInfo()}</span><br>
        <span style="color: #ffccd9;">${human2.getInfo()}</span>
    </div>`;

    // 20. Check property exists
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fff;">20. Property Check</strong><br>
        <span style="color: #d1fae5;">'city' in person1? ${"city" in person1 ? "Haa ✓" : "Maya ✗"}</span><br>
        <span style="color: #a7f3d0;">'zipCode' in person1? ${"zipCode" in person1 ? "Haa ✓" : "Maya ✗"}</span>
    </div>`;

    // 21. Object.keys()
    let keys = Object.keys(person1);
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); animation: fadeIn 0.5s;">
        <strong style="color: #fff;">21. Object.keys()</strong><br>
        <span style="color: #ffe0e0;">Keys: ${keys.join(", ")}</span><br>
        <span style="color: #ffcccc;">Total keys: ${keys.length}</span>
    </div>`;

    // 22. Object.values()
    let values = Object.values(person1).filter(v => typeof v !== 'function');
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); animation: fadeIn 0.6s;">
        <strong style="color: #fff;">22. Object.values()</strong><br>
        <span style="color: #d4f4f1;">Values: ${values.join(", ")}</span><br>
        <span style="color: #b8e8e3;">Total values: ${values.length}</span>
    </div>`;

    // 23. Object.entries()
    let entries = Object.entries(person1).filter(([k,v]) => typeof v !== 'function');
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #a8caba 0%, #5d4e75 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); animation: fadeIn 0.7s;">
        <strong style="color: #fff;">23. Object.entries()</strong><br>
        <span style="color: #e8f0ec;">Entries: ${entries.map(([k,v]) => `${k}:${v}`).join(", ")}</span><br>
        <span style="color: #d0e0d8;">Total entries: ${entries.length}</span>
    </div>`;

    // 24. For-in loop
    let forInResult = [];
    for (let key in person1) {
        if (typeof person1[key] !== 'function') {
            forInResult.push(`${key}: ${person1[key]}`);
        }
    }
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); animation: fadeIn 0.8s;">
        <strong style="color: #fff;">24. For-In Loop</strong><br>
        <span style="color: #fce7f3;">${forInResult.join(" | ")}</span><br>
        <span style="color: #fbcfe8;">Iterating through object properties</span>
    </div>`;

    // 25. JSON.parse() and JSON.stringify()
    let jsonString = JSON.stringify(person1);
    let parsedObj = JSON.parse(jsonString);
    out.innerHTML += `<div class="example-card" style="background: linear-gradient(135deg, #fa8bff 0%, #2bd2ff 50%, #2bff88 100%); padding: 15px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); animation: fadeIn 0.9s;">
        <strong style="color: #fff;">25. JSON Methods</strong><br>
        <span style="color: #f0e6ff;">JSON.stringify(): ${jsonString.substring(0, 50)}...</span><br>
        <span style="color: #e0ccff;">JSON.parse() - Name: ${parsedObj.name}</span>
    </div>`;
}

// ================= CHAPTER 8 – DOM (25 Examples) =================
function ch8Example() {
    let domText = document.getElementById("domText");
    let domListExamples = document.getElementById("domListExamples");
    domListExamples.innerHTML = ""; // Nadiifi liiska
    domListExamples.style.display = "grid";
    domListExamples.style.gap = "12px";
    domListExamples.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";

    domText.textContent = "Halkan waxaa ku jira 25 DOM manipulation examples.";
    domText.style.color = "#ff6b6b";
    domText.style.fontSize = "18px";
    domText.style.marginBottom = "20px";

    // Example 1: Create element - Create a dynamic button
    let ex1 = document.createElement("div");
    ex1.className = "dom-example";
    ex1.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let btn1 = document.createElement("button");
    btn1.textContent = "Click Me!";
    btn1.style.cssText = "padding: 8px 16px; margin: 5px 0; border-radius: 5px; border: none; background: #fff; color: #ff6b6b; cursor: pointer;";
    btn1.onclick = function() { alert("Button created dynamically!"); };
    ex1.innerHTML = "<strong>1. Create Element</strong><br>Creating a button dynamically:";
    ex1.appendChild(btn1);
    domListExamples.appendChild(ex1);

    // Example 2: Append child - Add items to shopping list
    let ex2 = document.createElement("div");
    ex2.className = "dom-example";
    ex2.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let list2 = document.createElement("ul");
    list2.style.cssText = "list-style: none; padding: 0; margin: 10px 0;";
    ["Apple", "Banana", "Orange"].forEach(item => {
        let li = document.createElement("li");
        li.textContent = "✓ " + item;
        li.style.cssText = "padding: 5px; margin: 3px 0;";
        list2.appendChild(li);
    });
    ex2.innerHTML = "<strong>2. Append Child</strong><br>Shopping List (items added dynamically):";
    ex2.appendChild(list2);
    domListExamples.appendChild(ex2);

    // Example 3: Remove child - Remove task from todo list
    let ex3 = document.createElement("div");
    ex3.className = "dom-example";
    ex3.style.cssText = "background: linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let taskList = document.createElement("div");
    taskList.style.cssText = "margin: 10px 0;";
    let tasks = ["Task 1: Learn JavaScript", "Task 2: Build Project", "Task 3: Deploy"];
    tasks.forEach((task, idx) => {
        let taskDiv = document.createElement("div");
        taskDiv.id = "task-" + idx;
        taskDiv.textContent = task;
        taskDiv.style.cssText = "padding: 8px; margin: 5px 0; background: rgba(255,255,255,0.2); border-radius: 5px;";
        if (idx === 1) {
            setTimeout(() => {
                if (taskDiv.parentNode) taskDiv.parentNode.removeChild(taskDiv);
            }, 100);
        }
        taskList.appendChild(taskDiv);
    });
    ex3.innerHTML = "<strong>3. Remove Child</strong><br>Todo List (Task 2 removed after 100ms):";
    ex3.appendChild(taskList);
    domListExamples.appendChild(ex3);

    // Example 4: Change text content - Live counter
    let ex4 = document.createElement("div");
    ex4.className = "dom-example";
    ex4.style.cssText = "background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let counter = document.createElement("div");
    counter.id = "counter";
    counter.textContent = "Count: 0";
    counter.style.cssText = "font-size: 24px; font-weight: bold; margin: 10px 0;";
    let count = 0;
    setInterval(() => {
        count++;
        counter.textContent = "Count: " + count;
    }, 1000);
    ex4.innerHTML = "<strong>4. Change Text Content</strong><br>Live Counter (updates every second):";
    ex4.appendChild(counter);
    domListExamples.appendChild(ex4);

    // Example 5: Change innerHTML - Display formatted content
    let ex5 = document.createElement("div");
    ex5.className = "dom-example";
    ex5.style.cssText = "background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let contentDiv = document.createElement("div");
    contentDiv.id = "content-display";
    contentDiv.innerHTML = "<p><strong>Welcome!</strong> This is <em>formatted</em> HTML content.</p><p>Price: <span style='color:#fee140;'>$99.99</span></p>";
    contentDiv.style.cssText = "margin: 10px 0; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 5px;";
    ex5.innerHTML = "<strong>5. InnerHTML</strong><br>Display formatted HTML content:";
    ex5.appendChild(contentDiv);
    domListExamples.appendChild(ex5);

    // Example 6: Get element by ID - Find and highlight element
    let ex6 = document.createElement("div");
    ex6.className = "dom-example";
    ex6.id = "target-element";
    ex6.style.cssText = "background: linear-gradient(135deg, #c471ed 0%, #f64f59 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let foundEl = document.getElementById("target-element");
    if (foundEl) {
        foundEl.style.boxShadow = "0 0 20px rgba(255,255,255,0.5)";
        foundEl.innerHTML = "<strong>6. Get Element By ID</strong><br>Element found by ID! (highlighted with shadow)";
    }
    domListExamples.appendChild(ex6);

    // Example 7: Query selector - Find first button
    let ex7 = document.createElement("div");
    ex7.className = "dom-example";
    ex7.style.cssText = "background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 15px; border-radius: 10px; color: #1f2937;";
    let firstBtn = document.querySelector("button");
    let btnCount = firstBtn ? "Found first button!" : "No button found";
    ex7.innerHTML = `<strong>7. Query Selector</strong><br>Finding first button on page:<br><span style="color:#5d4e75;">${btnCount}</span>`;
    domListExamples.appendChild(ex7);

    // Example 8: Query selector all - Count all buttons
    let ex8 = document.createElement("div");
    ex8.className = "dom-example";
    ex8.style.cssText = "background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let allButtons = document.querySelectorAll("button");
    ex8.innerHTML = `<strong>8. Query Selector All</strong><br>Total buttons on page: <strong style="font-size:20px;">${allButtons.length}</strong><br><small>Using querySelectorAll('button')</small>`;
    domListExamples.appendChild(ex8);

    // Example 9: Set attribute - Set data attributes for product
    let ex9 = document.createElement("div");
    ex9.className = "dom-example";
    ex9.setAttribute("data-product-id", "12345");
    ex9.setAttribute("data-price", "99.99");
    ex9.setAttribute("data-category", "electronics");
    ex9.style.cssText = "background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); padding: 15px; border-radius: 10px; color: #1f2937;";
    ex9.innerHTML = `<strong>9. Set Attribute</strong><br>Product Data Attributes:<br>ID: ${ex9.getAttribute("data-product-id")}<br>Price: $${ex9.getAttribute("data-price")}<br>Category: ${ex9.getAttribute("data-category")}`;
    domListExamples.appendChild(ex9);

    // Example 10: Get attribute - Read user data
    let ex10 = document.createElement("div");
    ex10.className = "dom-example";
    ex10.setAttribute("data-user-id", "U12345");
    ex10.setAttribute("data-role", "admin");
    ex10.setAttribute("data-status", "active");
    ex10.style.cssText = "background: linear-gradient(135deg, #ff6e7f 0%, #ffa8b8 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex10.innerHTML = `<strong>10. Get Attribute</strong><br>User Info:<br>ID: ${ex10.getAttribute("data-user-id")}<br>Role: ${ex10.getAttribute("data-role")}<br>Status: ${ex10.getAttribute("data-status")}`;
    domListExamples.appendChild(ex10);

    // Example 11: Remove attribute - Remove disabled state
    let ex11 = document.createElement("div");
    ex11.className = "dom-example";
    ex11.setAttribute("disabled", "true");
    ex11.setAttribute("data-original", "has-disabled");
    ex11.removeAttribute("disabled");
    ex11.style.cssText = "background: linear-gradient(135deg, #c471ed 0%, #f64f59 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex11.innerHTML = `<strong>11. Remove Attribute</strong><br>Removed 'disabled' attribute<br>Has disabled? ${ex11.hasAttribute("disabled") ? "Yes" : "No"} ✓`;
    domListExamples.appendChild(ex11);

    // Example 12: Add class - Add active/selected class
    let ex12 = document.createElement("div");
    ex12.className = "dom-example";
    ex12.classList.add("active", "selected", "highlighted");
    ex12.style.cssText = "background: linear-gradient(135deg, #ff6e7f 0%, #ffa8b8 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex12.style.border = "3px solid #fee140";
    ex12.innerHTML = `<strong>12. Add Class</strong><br>Added classes: ${Array.from(ex12.classList).join(", ")}<br>Total classes: ${ex12.classList.length}`;
    domListExamples.appendChild(ex12);

    // Example 13: Remove class - Remove error class
    let ex13 = document.createElement("div");
    ex13.className = "dom-example error invalid";
    ex13.classList.remove("error", "invalid");
    ex13.classList.add("valid", "success");
    ex13.style.cssText = "background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex13.innerHTML = `<strong>13. Remove Class</strong><br>Removed: error, invalid<br>Added: valid, success<br>Current classes: ${Array.from(ex13.classList).join(", ")}`;
    domListExamples.appendChild(ex13);

    // Example 14: Toggle class - Dark mode toggle
    let ex14 = document.createElement("div");
    ex14.className = "dom-example";
    ex14.style.cssText = "background: linear-gradient(135deg, #0ba360 0%, #3cba92 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    let darkMode = false;
    ex14.innerHTML = "<strong>14. Toggle Class</strong><br>Click to toggle dark mode";
    ex14.addEventListener("click", function() {
        darkMode = !darkMode;
        this.classList.toggle("dark-mode", darkMode);
        this.style.background = darkMode 
            ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" 
            : "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)";
        this.innerHTML = `<strong>14. Toggle Class</strong><br>Dark Mode: ${darkMode ? "ON" : "OFF"} ✓`;
    });
    domListExamples.appendChild(ex14);

    // Example 15: Style property - Dynamic color change
    let ex15 = document.createElement("div");
    ex15.className = "dom-example";
    ex15.style.cssText = "background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex15.style.border = "3px solid #fff";
    ex15.style.fontSize = "16px";
    ex15.style.fontWeight = "bold";
    ex15.style.transition = "all 0.3s";
    let colors = ["#eb3349", "#f45c43", "#ff6b6b", "#ee5a6f"];
    let colorIndex = 0;
    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        ex15.style.borderColor = colors[colorIndex];
    }, 1000);
    ex15.innerHTML = "<strong>15. Style Property</strong><br>Border color changes every second!<br>Using: element.style.borderColor";
    domListExamples.appendChild(ex15);

    // Example 16: Create text node - Add text safely
    let ex16 = document.createElement("div");
    ex16.className = "dom-example";
    ex16.style.cssText = "background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let textNode1 = document.createTextNode("User: ");
    let textNode2 = document.createTextNode("John Doe");
    let textNode3 = document.createTextNode(" - Logged in");
    ex16.innerHTML = "<strong>16. Create Text Node</strong><br>";
    ex16.appendChild(textNode1);
    let bold = document.createElement("strong");
    bold.appendChild(textNode2);
    ex16.appendChild(bold);
    ex16.appendChild(textNode3);
    domListExamples.appendChild(ex16);

    // Example 17: Replace child - Update notification
    let ex17 = document.createElement("div");
    ex17.className = "dom-example";
    ex17.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let oldMsg = document.createElement("span");
    oldMsg.textContent = "Loading...";
    oldMsg.style.cssText = "color: #fee140;";
    ex17.innerHTML = "<strong>17. Replace Child</strong><br>";
    ex17.appendChild(oldMsg);
    setTimeout(() => {
        let newMsg = document.createElement("span");
        newMsg.textContent = "Data loaded successfully! ✓";
        newMsg.style.cssText = "color: #43e97b; font-weight: bold;";
        ex17.replaceChild(newMsg, oldMsg);
    }, 1500);
    domListExamples.appendChild(ex17);

    // Example 18: Clone node - Duplicate product card
    let ex18 = document.createElement("div");
    ex18.className = "dom-example";
    ex18.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex18.innerHTML = "<strong>18. Clone Node</strong><br>Original Product Card:<br>📱 iPhone 15 - $999";
    let cloned = ex18.cloneNode(true);
    cloned.style.opacity = "0.8";
    cloned.style.marginTop = "10px";
    cloned.innerHTML = cloned.innerHTML.replace("Original", "Cloned");
    ex18.appendChild(cloned);
    domListExamples.appendChild(ex18);

    // Example 19: Parent element - Find parent container
    let ex19 = document.createElement("div");
    ex19.className = "dom-example";
    ex19.id = "parent-container";
    ex19.style.cssText = "background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let child19 = document.createElement("span");
    child19.id = "child-element";
    child19.textContent = "Child Element";
    child19.style.cssText = "display: block; padding: 5px; background: rgba(255,255,255,0.2); margin: 5px 0;";
    ex19.appendChild(child19);
    let parent = child19.parentElement;
    ex19.innerHTML = `<strong>19. Parent Element</strong><br>Child element found its parent:<br>Parent Tag: ${parent.tagName}<br>Parent ID: ${parent.id || "none"}`;
    ex19.appendChild(child19);
    domListExamples.appendChild(ex19);

    // Example 20: Next sibling - Navigate list items
    let ex20 = document.createElement("div");
    ex20.className = "dom-example";
    ex20.style.cssText = "background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let list20 = document.createElement("div");
    let item1 = document.createElement("div");
    item1.textContent = "Item 1";
    item1.style.cssText = "padding: 5px; margin: 3px 0;";
    let item2 = document.createElement("div");
    item2.textContent = "Item 2 (Next sibling)";
    item2.style.cssText = "padding: 5px; margin: 3px 0; background: rgba(255,255,255,0.2);";
    list20.appendChild(item1);
    list20.appendChild(item2);
    let nextSib = item1.nextElementSibling;
    ex20.innerHTML = "<strong>20. Next Sibling</strong><br>Navigation List:<br>";
    ex20.appendChild(list20);
    ex20.innerHTML += `<br>Next sibling of Item 1: "${nextSib ? nextSib.textContent : "None"}"`;
    domListExamples.appendChild(ex20);

    // Example 21: Get Elements By Tag Name - Count all paragraphs
    let ex21 = document.createElement("div");
    ex21.className = "dom-example";
    ex21.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let paragraphs = document.getElementsByTagName("p");
    let divs = document.getElementsByTagName("div");
    ex21.innerHTML = `<strong>21. Get Elements By Tag Name</strong><br>Page Statistics:<br>📄 Paragraphs: ${paragraphs.length}<br>📦 Divs: ${divs.length}<br>🔘 Buttons: ${document.getElementsByTagName("button").length}`;
    domListExamples.appendChild(ex21);

    // Example 22: Get Elements By Class Name - Find all cards
    let ex22 = document.createElement("div");
    ex22.className = "dom-example";
    ex22.style.cssText = "background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let cards = document.getElementsByClassName("card");
    let examples = document.getElementsByClassName("dom-example");
    ex22.innerHTML = `<strong>22. Get Elements By Class Name</strong><br>Found Elements:<br>📋 Cards: ${cards.length}<br>💡 DOM Examples: ${examples.length}<br>🎯 Total examples on page`;
    domListExamples.appendChild(ex22);

    // Example 23: Previous Sibling - Navigate backwards
    let ex23 = document.createElement("div");
    ex23.className = "dom-example";
    ex23.style.cssText = "background: linear-gradient(135deg, #a8caba 0%, #5d4e75 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let prevSibling = ex22.previousElementSibling;
    ex23.innerHTML = `<strong>23. Previous Sibling</strong><br>Current: Example 22<br>Previous: ${prevSibling ? "Example " + (Array.from(domListExamples.children).indexOf(prevSibling) + 1) : "None"}<br>Using: previousElementSibling`;
    domListExamples.appendChild(ex23);

    // Example 24: First and Last Child - Get boundaries
    let ex24 = document.createElement("div");
    ex24.className = "dom-example";
    ex24.style.cssText = "background: linear-gradient(135deg, #a8caba 0%, #5d4e75 100%); padding: 15px; border-radius: 10px; color: #fff;";
    let firstChild = domListExamples.firstElementChild;
    let lastChild = domListExamples.lastElementChild;
    let totalChildren = domListExamples.children.length;
    ex24.innerHTML = `<strong>24. First & Last Child</strong><br>Container Info:<br>First Child: Example ${firstChild ? "1" : "None"}<br>Last Child: Example ${lastChild ? totalChildren : "None"}<br>Total Children: ${totalChildren}`;
    domListExamples.appendChild(ex24);

    // Example 25: Insert Before - Add priority item at top
    let ex25 = document.createElement("div");
    ex25.className = "dom-example";
    ex25.style.cssText = "background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%); padding: 15px; border-radius: 10px; color: #fff; border: 3px solid #fee140;";
    ex25.innerHTML = "<strong>25. Insert Before</strong><br>⚠️ PRIORITY: This item was inserted at the TOP!<br>Using: insertBefore(newElement, firstChild)";
    if (domListExamples.firstChild) {
        domListExamples.insertBefore(ex25, domListExamples.firstChild);
    } else {
        domListExamples.appendChild(ex25);
    }
}

// ================= CHAPTER 9 – EVENTS (25 Examples) =================
function ch9Example() {
    let eventOutList = document.getElementById("eventOutList");
    if (!eventOutList) return;
    
    eventOutList.innerHTML = ""; // Clear existing examples
    eventOutList.style.display = "grid";
    eventOutList.style.gap = "12px";
    eventOutList.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";

    // Example 1: Click event - Like button
    let ex1 = document.createElement("div");
    ex1.className = "event-example";
    ex1.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    let likeCount = 0;
    ex1.innerHTML = "<strong>1. Click Event</strong><br>👍 Like Button<br>Likes: 0";
    ex1.addEventListener("click", function() {
        likeCount++;
        this.innerHTML = `<strong>1. Click Event</strong><br>👍 Like Button<br>Likes: ${likeCount} ✓`;
        this.style.transform = "scale(0.95)";
        setTimeout(() => { this.style.transform = "scale(1)"; }, 200);
    });
    eventOutList.appendChild(ex1);

    // Example 2: Double click - Edit mode toggle
    let ex2 = document.createElement("div");
    ex2.className = "event-example";
    ex2.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    let editMode = false;
    ex2.innerHTML = "<strong>2. Double Click</strong><br>📝 Double click to edit<br>Mode: View";
    ex2.addEventListener("dblclick", function() {
        editMode = !editMode;
        this.innerHTML = `<strong>2. Double Click</strong><br>📝 Double click to edit<br>Mode: ${editMode ? "EDIT" : "View"} ✓`;
        this.style.border = editMode ? "3px solid #fee140" : "none";
    });
    eventOutList.appendChild(ex2);

    // Example 3: Mouse enter - Show tooltip
    let ex3 = document.createElement("div");
    ex3.className = "event-example";
    ex3.style.cssText = "background: linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer; transition: all 0.3s; position: relative;";
    ex3.innerHTML = "<strong>3. Mouse Enter</strong><br>🖱️ Hover to see tooltip";
    let tooltip = document.createElement("div");
    tooltip.textContent = "This is a tooltip!";
    tooltip.style.cssText = "position: absolute; top: -30px; left: 50%; transform: translateX(-50%); background: #333; color: #fff; padding: 5px 10px; border-radius: 5px; opacity: 0; transition: opacity 0.3s; pointer-events: none; white-space: nowrap;";
    ex3.appendChild(tooltip);
    ex3.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.05)";
        this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
        tooltip.style.opacity = "1";
    });
    ex3.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
        tooltip.style.opacity = "0";
    });
    eventOutList.appendChild(ex3);

    // Example 4: Mouse leave - Hide preview
    let ex4 = document.createElement("div");
    ex4.className = "event-example";
    ex4.style.cssText = "background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    ex4.innerHTML = "<strong>4. Mouse Leave</strong><br>🖼️ Hover: Show preview<br>Leave: Hide preview";
    let preview = document.createElement("div");
    preview.textContent = "Image Preview";
    preview.style.cssText = "margin-top: 10px; padding: 10px; background: rgba(255,255,255,0.2); border-radius: 5px; opacity: 0; transition: opacity 0.3s;";
    ex4.appendChild(preview);
    ex4.addEventListener("mouseenter", function() {
        this.style.background = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
        preview.style.opacity = "1";
    });
    ex4.addEventListener("mouseleave", function() {
        this.style.background = "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)";
        preview.style.opacity = "0";
    });
    eventOutList.appendChild(ex4);

    // Example 5: Form submit
    let myForm = document.getElementById("myForm");
    if (myForm) {
        myForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let name = document.getElementById("username").value;
            let ex5 = document.createElement("div");
            ex5.className = "event-example";
            ex5.style.cssText = "background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 15px; border-radius: 10px; color: #fff; margin-top: 10px;";
            ex5.innerHTML = `<strong>5. Form Submit</strong><br>Hello, ${name}! Form submitted.`;
            eventOutList.appendChild(ex5);
        });
    }

    // Example 6: Focus event
    let usernameInput = document.getElementById("username");
    if (usernameInput) {
        usernameInput.addEventListener("focus", function() {
            this.style.background = "#fef3c7";
            this.style.border = "2px solid #fbbf24";
        });
        usernameInput.addEventListener("blur", function() {
            this.style.background = "#334155";
            this.style.border = "none";
        });
    }

    // Example 6 display - Focus event
    let ex6 = document.createElement("div");
    ex6.className = "event-example";
    ex6.style.cssText = "background: linear-gradient(135deg, #c471ed 0%, #f64f59 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex6.innerHTML = "<strong>6. Focus Event</strong><br>👆 Click on username input above<br>Input highlights when focused";
    eventOutList.appendChild(ex6);

    // Example 7: Blur event - Validate on blur
    let ex7 = document.createElement("div");
    ex7.className = "event-example";
    ex7.style.cssText = "background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 15px; border-radius: 10px; color: #1f2937;";
    ex7.innerHTML = "<strong>7. Blur Event</strong><br>✅ Click outside input to validate<br>Input validates when you leave it";
    eventOutList.appendChild(ex7);

    // Example 8: Keydown
    let keyInput = document.getElementById("keyInput");
    if (keyInput) {
        keyInput.addEventListener("keydown", function(e) {
            let ex8 = document.querySelector(".keydown-example");
            if (!ex8) {
                ex8 = document.createElement("div");
                ex8.className = "event-example keydown-example";
                ex8.style.cssText = "background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex8);
            }
            ex8.innerHTML = `<strong>8. Keydown Event</strong><br>⌨️ Keyboard Shortcut Detected<br>Key: "${e.key}" | Code: ${e.code}<br>Press Ctrl+S to save`;
        });
    } else {
        let ex8 = document.createElement("div");
        ex8.className = "event-example";
        ex8.style.cssText = "background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 15px; border-radius: 10px; color: #fff;";
        ex8.innerHTML = "<strong>8. Keydown Event</strong><br>⌨️ Type in key input field<br>Detects keyboard shortcuts";
        eventOutList.appendChild(ex8);
    }

    // Example 9: Keyup
    if (keyInput) {
        keyInput.addEventListener("keyup", function() {
            let ex9 = document.querySelector(".keyup-example");
            if (!ex9) {
                ex9 = document.createElement("div");
                ex9.className = "event-example keyup-example";
                ex9.style.cssText = "background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); padding: 15px; border-radius: 10px; color: #1f2937;";
                eventOutList.appendChild(ex9);
            }
            ex9.innerHTML = `<strong>9. Keyup Event</strong><br>🔍 Live Search<br>Characters typed: ${this.value.length}<br>Searching for: "${this.value}"`;
        });
    } else {
        let ex9 = document.createElement("div");
        ex9.className = "event-example";
        ex9.style.cssText = "background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); padding: 15px; border-radius: 10px; color: #1f2937;";
        ex9.innerHTML = "<strong>9. Keyup Event</strong><br>🔍 Type in key input for live search<br>Updates as you type";
        eventOutList.appendChild(ex9);
    }

    // Example 10: Window load
    window.addEventListener("load", function() {
        let ex10 = document.createElement("div");
        ex10.className = "event-example";
        ex10.style.cssText = "background: linear-gradient(135deg, #ff6e7f 0%, #ffa8b8 100%); padding: 15px; border-radius: 10px; color: #fff;";
        ex10.innerHTML = "<strong>10. Window Load</strong><br>Page loaded successfully! ✓";
        eventOutList.appendChild(ex10);
    });

    // Example 11: Window scroll
    let scrollCount = 0;
    window.addEventListener("scroll", function() {
        scrollCount++;
        let ex11 = document.querySelector(".scroll-example");
        if (!ex11) {
            ex11 = document.createElement("div");
            ex11.className = "event-example scroll-example";
            ex11.style.cssText = "background: linear-gradient(135deg, #c471ed 0%, #f64f59 100%); padding: 15px; border-radius: 10px; color: #fff;";
            eventOutList.appendChild(ex11);
        }
        ex11.innerHTML = `<strong>11. Window Scroll</strong><br>Scroll events: ${scrollCount}`;
    });

    // Example 12: Window resize
    window.addEventListener("resize", function() {
        let ex12 = document.querySelector(".resize-example");
        if (!ex12) {
            ex12 = document.createElement("div");
            ex12.className = "event-example resize-example";
            ex12.style.cssText = "background: linear-gradient(135deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%); padding: 15px; border-radius: 10px; color: #fff;";
            eventOutList.appendChild(ex12);
        }
        ex12.innerHTML = `<strong>12. Window Resize</strong><br>Window: ${window.innerWidth} × ${window.innerHeight}px`;
    });

    // Example 13: Context menu (right click)
    let ex13 = document.createElement("div");
    ex13.className = "event-example";
    ex13.style.cssText = "background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    ex13.innerHTML = "<strong>13. Context Menu</strong><br>🖱️ Right click for menu<br>Custom context menu";
    ex13.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        this.innerHTML = "<strong>13. Context Menu</strong><br>📋 Custom Menu Shown<br>Options: Copy | Paste | Delete ✓";
    });
    eventOutList.appendChild(ex13);

    // Example 14: Mouse move
    let ex14 = document.createElement("div");
    ex14.className = "event-example";
    ex14.style.cssText = "background: linear-gradient(135deg, #0ba360 0%, #3cba92 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    ex14.innerHTML = "<strong>14. Mouse Move</strong><br>🖱️ Move mouse - Track position<br>Coordinates: (0, 0)";
    ex14.addEventListener("mousemove", function(e) {
        let rect = this.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        this.innerHTML = `<strong>14. Mouse Move</strong><br>🖱️ Drag & Drop Tracking<br>Position: (${Math.round(x)}, ${Math.round(y)})`;
    });
    eventOutList.appendChild(ex14);

    // Example 15: Mouse down
    let ex15 = document.createElement("div");
    ex15.className = "event-example";
    ex15.style.cssText = "background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    ex15.innerHTML = "<strong>15. Mouse Down</strong><br>🖱️ Press to select text<br>Drag to highlight";
    ex15.addEventListener("mousedown", function() {
        this.style.transform = "scale(0.95)";
        this.innerHTML = "<strong>15. Mouse Down</strong><br>🖱️ Selecting text...<br>Drag to highlight";
    });
    ex15.addEventListener("mouseup", function() {
        this.style.transform = "scale(1)";
        this.innerHTML = "<strong>15. Mouse Down</strong><br>✅ Text selected<br>Ready to copy";
    });
    eventOutList.appendChild(ex15);

    // Example 16: Change event
    let ex16 = document.createElement("div");
    ex16.className = "event-example";
    ex16.style.cssText = "background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex16.innerHTML = "<strong>16. Change Event</strong><br>📋 Dropdown Selection<br>Select an option and blur<br>Triggers on value change";
    eventOutList.appendChild(ex16);

    // Example 17: Input event
    if (keyInput) {
        keyInput.addEventListener("input", function() {
            let ex17 = document.querySelector(".input-example");
            if (!ex17) {
                ex17 = document.createElement("div");
                ex17.className = "event-example input-example";
                ex17.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex17);
            }
            ex17.innerHTML = `<strong>17. Input Event</strong><br>✍️ Real-time Character Count<br>Typing: "${this.value}"<br>Length: ${this.value.length} characters`;
        });
    } else {
        let ex17 = document.createElement("div");
        ex17.className = "event-example";
        ex17.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
        ex17.innerHTML = "<strong>17. Input Event</strong><br>✍️ Type in key input field<br>Shows real-time character count";
        eventOutList.appendChild(ex17);
    }

    // Example 18: Paste event
    if (keyInput) {
        keyInput.addEventListener("paste", function() {
            let ex18 = document.querySelector(".paste-example");
            if (!ex18) {
                ex18 = document.createElement("div");
                ex18.className = "event-example paste-example";
                ex18.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex18);
            }
            setTimeout(() => {
                ex18.innerHTML = `<strong>18. Paste Event</strong><br>Pasted! Content: "${this.value}"`;
            }, 10);
        });
    } else {
        let ex18 = document.createElement("div");
        ex18.className = "event-example";
        ex18.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 10px; color: #fff;";
        ex18.innerHTML = "<strong>18. Paste Event</strong><br>📋 Paste text in key input<br>Detects clipboard content";
        eventOutList.appendChild(ex18);
    }

    // Example 19: Touch events (for mobile)
    let ex19 = document.createElement("div");
    ex19.className = "event-example";
    ex19.style.cssText = "background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    ex19.innerHTML = "<strong>19. Touch Events</strong><br>📱 Mobile Touch Support<br>Touch/Click to interact";
    ex19.addEventListener("touchstart", function() {
        this.innerHTML = "<strong>19. Touch Events</strong><br>📱 Touch Detected<br>Mobile interaction started ✓";
    });
    ex19.addEventListener("touchend", function() {
        this.innerHTML = "<strong>19. Touch Events</strong><br>📱 Touch Released<br>Action completed";
    });
    eventOutList.appendChild(ex19);

    // Example 20: Event delegation
    let ex20 = document.createElement("div");
    ex20.className = "event-example";
    ex20.style.cssText = "background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 15px; border-radius: 10px; color: #fff;";
    ex20.innerHTML = "<strong>20. Event Delegation</strong><br>🎯 Dynamic Event Handling<br>Events work on dynamically added elements<br>All events handled! ✓";
    eventOutList.appendChild(ex20);

    // Example 21: Keypress event
    if (keyInput) {
        keyInput.addEventListener("keypress", function(e) {
            let ex21 = document.querySelector(".keypress-example");
            if (!ex21) {
                ex21 = document.createElement("div");
                ex21.className = "event-example keypress-example";
                ex21.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex21);
            }
            ex21.innerHTML = `<strong>21. Keypress Event</strong><br>⌨️ Character Validation<br>Character: "${e.key}"<br>Code: ${e.charCode || e.keyCode}<br>Validating input...`;
        });
    } else {
        let ex21 = document.createElement("div");
        ex21.className = "event-example";
        ex21.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
        ex21.innerHTML = "<strong>21. Keypress Event</strong><br>⌨️ Type in key input<br>Validates each character";
        eventOutList.appendChild(ex21);
    }

    // Example 22: Mouseover event
    let ex22 = document.createElement("div");
    ex22.className = "event-example";
    ex22.style.cssText = "background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer; transition: all 0.3s;";
    ex22.innerHTML = "<strong>22. Mouseover Event</strong><br>🖼️ Image Preview on Hover<br>Move mouse over me!";
    ex22.addEventListener("mouseover", function() {
        this.style.transform = "rotate(2deg) scale(1.05)";
        this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
    });
    ex22.addEventListener("mouseout", function() {
        this.style.transform = "rotate(0deg) scale(1)";
        this.style.boxShadow = "none";
    });
    eventOutList.appendChild(ex22);

    // Example 23: Wheel event
    let ex23 = document.createElement("div");
    ex23.className = "event-example";
    ex23.style.cssText = "background: linear-gradient(135deg, #a8caba 0%, #5d4e75 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    ex23.innerHTML = "<strong>23. Wheel Event</strong><br>🔍 Zoom In/Out<br>Scroll wheel over me!";
    let wheelCount = 0;
    ex23.addEventListener("wheel", function(e) {
        wheelCount++;
        this.innerHTML = `<strong>23. Wheel Event</strong><br>🔍 Zoom Level: ${wheelCount}<br>Direction: ${e.deltaY > 0 ? "Zoom Out" : "Zoom In"}<br>Scrolls: ${wheelCount}`;
        this.style.background = wheelCount % 2 === 0 
            ? "linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)" 
            : "linear-gradient(135deg, #5d4e75 0%, #a8caba 100%)";
    });
    eventOutList.appendChild(ex23);

    // Example 24: Select event
    if (keyInput) {
        keyInput.addEventListener("select", function() {
            let ex24 = document.querySelector(".select-example");
            if (!ex24) {
                ex24 = document.createElement("div");
                ex24.className = "event-example select-example";
                ex24.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex24);
            }
            let selectedText = this.value.substring(this.selectionStart, this.selectionEnd);
            ex24.innerHTML = `<strong>24. Select Event</strong><br>📝 Text Selection Detected<br>Selected: "${selectedText}"<br>Ready to copy or format`;
        });
    } else {
        let ex24 = document.createElement("div");
        ex24.className = "event-example";
        ex24.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%); padding: 15px; border-radius: 10px; color: #fff;";
        ex24.innerHTML = "<strong>24. Select Event</strong><br>📝 Select text in key input<br>Detects text selection";
        eventOutList.appendChild(ex24);
    }

    // Example 25: Inline Event Handler (demonstrated via onclick attribute simulation)
    let ex25 = document.createElement("div");
    ex25.className = "event-example";
    ex25.style.cssText = "background: linear-gradient(135deg, #fa8bff 0%, #2bd2ff 50%, #2bff88 100%); padding: 15px; border-radius: 10px; color: #fff; cursor: pointer;";
    ex25.innerHTML = "<strong>25. Inline Event Handler</strong><br>⚡ Quick Action Button<br>Click me! (onclick attribute)";
    ex25.setAttribute("onclick", "this.innerHTML='<strong>25. Inline Event Handler</strong><br>⚡ Quick Action Executed!<br>Inline handler: onclick=\"...\" ✓'; this.style.animation='pulse 0.5s';");
    ex25.addEventListener("click", function() {
        this.style.animation = "pulse 0.5s";
        setTimeout(() => { this.style.animation = ""; }, 500);
    });
    eventOutList.appendChild(ex25);

    // Add click me button functionality
    let eventClickMeBtn = document.getElementById("eventClickMeBtn");
    if (eventClickMeBtn) {
        eventClickMeBtn.addEventListener("click", function() {
            let clickEx = document.createElement("div");
            clickEx.className = "event-example";
            clickEx.style.cssText = "background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 15px; border-radius: 10px; color: #fff; margin-top: 10px;";
            clickEx.innerHTML = "<strong>Button Click Event</strong><br>Button was clicked! ✓";
            eventOutList.appendChild(clickEx);
        });
    }

    // Hover area functionality
    let hoverArea = document.getElementById("hoverArea");
    if (hoverArea) {
        hoverArea.style.cssText = "padding: 15px; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); border-radius: 10px; color: #fff; cursor: pointer; margin: 10px 0; transition: all 0.3s;";
        hoverArea.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
        });
        hoverArea.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    }
}

// Initialize event handlers on page load (but examples show on click)
document.addEventListener("DOMContentLoaded", function() {
    // Form submit handler
    let myForm = document.getElementById("myForm");
    if (myForm) {
        myForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let name = document.getElementById("username").value;
            let eventOutList = document.getElementById("eventOutList");
            if (eventOutList) {
                let ex5 = document.createElement("div");
                ex5.className = "event-example";
                ex5.style.cssText = "background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 15px; border-radius: 10px; color: #fff; margin-top: 10px;";
                ex5.innerHTML = `<strong>5. Form Submit</strong><br>Hello, ${name}! Form submitted.`;
                eventOutList.appendChild(ex5);
            }
        });
    }

    // Focus/Blur handlers
    let usernameInput = document.getElementById("username");
    if (usernameInput) {
        usernameInput.addEventListener("focus", function() {
            this.style.background = "#fef3c7";
            this.style.border = "2px solid #fbbf24";
        });
        usernameInput.addEventListener("blur", function() {
            this.style.background = "#334155";
            this.style.border = "none";
        });
    }

    // Key input handlers
    let keyInput = document.getElementById("keyInput");
    if (keyInput) {
        let eventOutList = document.getElementById("eventOutList");
        keyInput.addEventListener("keydown", function(e) {
            let ex8 = document.querySelector(".keydown-example");
            if (!ex8 && eventOutList) {
                ex8 = document.createElement("div");
                ex8.className = "event-example keydown-example";
                ex8.style.cssText = "background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex8);
            }
            if (ex8) ex8.innerHTML = `<strong>8. Keydown Event</strong><br>Key pressed: ${e.key} (Code: ${e.code})`;
        });

        keyInput.addEventListener("keyup", function() {
            let ex9 = document.querySelector(".keyup-example");
            if (!ex9 && eventOutList) {
                ex9 = document.createElement("div");
                ex9.className = "event-example keyup-example";
                ex9.style.cssText = "background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); padding: 15px; border-radius: 10px; color: #1f2937;";
                eventOutList.appendChild(ex9);
            }
            if (ex9) ex9.innerHTML = `<strong>9. Keyup Event</strong><br>Key released. Length: ${this.value.length}`;
        });

        keyInput.addEventListener("keypress", function(e) {
            let ex21 = document.querySelector(".keypress-example");
            if (!ex21 && eventOutList) {
                ex21 = document.createElement("div");
                ex21.className = "event-example keypress-example";
                ex21.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex21);
            }
            if (ex21) ex21.innerHTML = `<strong>21. Keypress Event</strong><br>Character: "${e.key}" (Code: ${e.charCode || e.keyCode})`;
        });

        keyInput.addEventListener("input", function() {
            let ex17 = document.querySelector(".input-example");
            if (!ex17 && eventOutList) {
                ex17 = document.createElement("div");
                ex17.className = "event-example input-example";
                ex17.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex17);
            }
            if (ex17) ex17.innerHTML = `<strong>17. Input Event</strong><br>Typing... "${this.value}"`;
        });

        keyInput.addEventListener("paste", function() {
            let ex18 = document.querySelector(".paste-example");
            if (!ex18 && eventOutList) {
                ex18 = document.createElement("div");
                ex18.className = "event-example paste-example";
                ex18.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex18);
            }
            if (ex18) {
                setTimeout(() => {
                    ex18.innerHTML = `<strong>18. Paste Event</strong><br>Pasted! Content: "${this.value}"`;
                }, 10);
            }
        });

        keyInput.addEventListener("select", function() {
            let ex24 = document.querySelector(".select-example");
            if (!ex24 && eventOutList) {
                ex24 = document.createElement("div");
                ex24.className = "event-example select-example";
                ex24.style.cssText = "background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex24);
            }
            if (ex24) {
                let selectedText = this.value.substring(this.selectionStart, this.selectionEnd);
                ex24.innerHTML = `<strong>24. Select Event</strong><br>Text selected: "${selectedText}"`;
            }
        });
    }

    // Click me button
    let eventClickMeBtn = document.getElementById("eventClickMeBtn");
    if (eventClickMeBtn) {
        eventClickMeBtn.addEventListener("click", function() {
            let eventOutList = document.getElementById("eventOutList");
            if (eventOutList) {
                let clickEx = document.createElement("div");
                clickEx.className = "event-example";
                clickEx.style.cssText = "background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 15px; border-radius: 10px; color: #fff; margin-top: 10px;";
                clickEx.innerHTML = "<strong>Button Click Event</strong><br>Button was clicked! ✓";
                eventOutList.appendChild(clickEx);
            }
        });
    }

    // Hover area
    let hoverArea = document.getElementById("hoverArea");
    if (hoverArea) {
        hoverArea.style.cssText = "padding: 15px; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); border-radius: 10px; color: #fff; cursor: pointer; margin: 10px 0; transition: all 0.3s;";
        hoverArea.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
        });
        hoverArea.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    }

    // Window events
    window.addEventListener("load", function() {
        let eventOutList = document.getElementById("eventOutList");
        if (eventOutList) {
            let ex10 = document.createElement("div");
            ex10.className = "event-example";
            ex10.style.cssText = "background: linear-gradient(135deg, #ff6e7f 0%, #ffa8b8 100%); padding: 15px; border-radius: 10px; color: #fff;";
            ex10.innerHTML = "<strong>10. Window Load</strong><br>Page loaded successfully! ✓";
            eventOutList.appendChild(ex10);
        }
    });

    let scrollCount = 0;
    window.addEventListener("scroll", function() {
        scrollCount++;
        let eventOutList = document.getElementById("eventOutList");
        if (eventOutList) {
            let ex11 = document.querySelector(".scroll-example");
            if (!ex11) {
                ex11 = document.createElement("div");
                ex11.className = "event-example scroll-example";
                ex11.style.cssText = "background: linear-gradient(135deg, #c471ed 0%, #f64f59 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex11);
            }
            ex11.innerHTML = `<strong>11. Window Scroll</strong><br>Scroll events: ${scrollCount}`;
        }
    });

    window.addEventListener("resize", function() {
        let eventOutList = document.getElementById("eventOutList");
        if (eventOutList) {
            let ex12 = document.querySelector(".resize-example");
            if (!ex12) {
                ex12 = document.createElement("div");
                ex12.className = "event-example resize-example";
                ex12.style.cssText = "background: linear-gradient(135deg, #ff6e7f 0%, #ffa8b8 100%); padding: 15px; border-radius: 10px; color: #fff;";
                eventOutList.appendChild(ex12);
            }
            ex12.innerHTML = `<strong>12. Window Resize</strong><br>Window: ${window.innerWidth} × ${window.innerHeight}px`;
        }
    });
});

// Additional DOM button handlers for Chapter 8
document.addEventListener("DOMContentLoaded", function() {
    let changeTextBtn = document.getElementById("changeTextBtn");
    if (changeTextBtn) {
        changeTextBtn.addEventListener("click", function() {
            let domText = document.getElementById("domText");
            if (domText) {
                domText.textContent = "Text changed using DOM manipulation!";
                domText.style.color = "#fbbf24";
            }
        });
    }

    let addListItemBtn = document.getElementById("addListItemBtn");
    if (addListItemBtn) {
        addListItemBtn.addEventListener("click", function() {
            let domListExamples = document.getElementById("domListExamples");
            if (domListExamples) {
                let newItem = document.createElement("div");
                newItem.className = "dom-example";
                newItem.style.cssText = "background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); padding: 15px; border-radius: 10px; color: #fff;";
                newItem.innerHTML = "<strong>New Item Added</strong><br>This item was added dynamically!";
                domListExamples.appendChild(newItem);
            }
        });
    }

    let removeFirstItemBtn = document.getElementById("removeFirstItemBtn");
    if (removeFirstItemBtn) {
        removeFirstItemBtn.addEventListener("click", function() {
            let domListExamples = document.getElementById("domListExamples");
            if (domListExamples && domListExamples.firstChild) {
                domListExamples.removeChild(domListExamples.firstChild);
            }
        });
    }

    let toggleColorBtn = document.getElementById("toggleColorBtn");
    if (toggleColorBtn) {
        toggleColorBtn.addEventListener("click", function() {
            document.body.style.background = document.body.style.background === "rgb(15, 23, 42)" || document.body.style.background === "" 
                ? "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)" 
                : "#0f172a";
        });
    }
});