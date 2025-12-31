// ================= MAIN CONTENT HANDLER =================
const content = document.getElementById("content");

// ================= HOME =================
function showHome() {
    content.innerHTML = `
        <div class="welcome-section">
            <h1>Welcome to JavaScript Learning Project</h1>
            <p class="subtitle">Explore Chapters 7, 8, and 9</p>

            <div class="feature-cards">
                <div class="card" onclick="showChapter7Questions()">
                    <h3>Chapter 7</h3>
                    <p>Objects in JavaScript</p>
                </div>

                <div class="card" onclick="showChapter8Questions()">
                    <h3>Chapter 8</h3>
                    <p>Document Object Model (DOM)</p>
                </div>

                <div class="card" onclick="showChapter9Questions()">
                    <h3>Chapter 9</h3>
                    <p>Events in JavaScript</p>
                </div>
            </div>
        </div>
    `;
}

// ================= ABOUT US =================
function showAbout() {
    content.innerHTML = `
        <div class="about-section">
            <h1>About This Project</h1>
            <div class="about-content">
                <div class="info-card">
                    <img src="kaafia.jpeg" alt="Kaafia Abdullahi Bulle" class="profile-photo">
                    <p><strong>Name:</strong> Kaafia Abdullahi Bulle</p>
                    <p><strong>ID:</strong> C5240073</p>
                    <p><strong>University:</strong> Jamhuuriya University</p>
                    <p><strong>Faculty:</strong> Information Technology (IT)</p>
                    <p><strong>Class:</strong> CM241</p>
                    <p><strong>Phone Number:</strong> 0614397446</p>
                    <p><strong>Subject:</strong> JavaScript</p>
                </div>

                <div class="info-card">
                    <h3>Project Description</h3>
                    <p>
                        This project explains JavaScript concepts of Chapters 7, 8, and 9
                        with practical examples and interactive demos.
                    </p>

                    <ul>
                        <li>Chapter 7: JavaScript Objects</li>
                        <li>Chapter 8: DOM Manipulation</li>
                        <li>Chapter 9: JavaScript Events</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// ================= CHAPTERS MENU =================
function showChapters() {
    content.innerHTML = `
        <div class="chapters-section">
            <h1>JavaScript Chapters</h1>

            <div class="chapter-buttons">
                <button class="chapter-btn" onclick="showChapter7Questions()">
                    <span class="btn-number">7</span>
                    <span class="btn-text">Objects in JavaScript</span>
                </button>

                <button class="chapter-btn" onclick="showChapter8Questions()">
                    <span class="btn-number">8</span>
                    <span class="btn-text">Document Object Model (DOM)</span>
                </button>

                <button class="chapter-btn" onclick="showChapter9Questions()">
                    <span class="btn-number">9</span>
                    <span class="btn-text">Events in JavaScript</span>
                </button>
            </div>
        </div>
    `;
}

// ================= QUESTION FUNCTIONS =================
function showChapter7Questions() {
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 7: Objects in JavaScript</h1>
            <div class="topic-section">
                <h2>Answer These Questions First</h2>
                <p class="intro-text">Please answer the following questions before viewing the chapter content.</p>
                
                <div class="demo-area">
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 1:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">Maxaa yahay Object JavaScript-ka?</p>
                        <textarea id="answer1" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 2:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">Sidee aad u helaysaa object properties?</p>
                        <textarea id="answer2" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 3:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">JSON.parse() waa maxay?</p>
                        <textarea id="answer3" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <button class="demo-btn" onclick="submitChapter7Answers()" style="width: 100%; margin-top: 1rem;">Submit Answers & View Chapter</button>
                </div>
            </div>
        </div>
    `;
}

function submitChapter7Answers() {
    const answer1 = document.getElementById("answer1").value.trim();
    const answer2 = document.getElementById("answer2").value.trim();
    const answer3 = document.getElementById("answer3").value.trim();
    
    if (!answer1 || !answer2 || !answer3) {
        alert("Please answer all questions before proceeding!");
        return;
    }
    
    // Show answers summary
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Your Answers - Chapter 7</h1>
            <div class="topic-section">
                <div class="result-box">
                    <strong>Question 1:</strong> Maxaa yahay Object JavaScript-ka?<br>
                    <strong>Your Answer:</strong> ${answer1}
                </div>
                <div class="result-box">
                    <strong>Question 2:</strong> Sidee aad u helaysaa object properties?<br>
                    <strong>Your Answer:</strong> ${answer2}
                </div>
                <div class="result-box">
                    <strong>Question 3:</strong> JSON.parse() waa maxay?<br>
                    <strong>Your Answer:</strong> ${answer3}
                </div>
                <button class="demo-btn" onclick="showChapter7()" style="width: 100%; margin-top: 1rem;">View Chapter 7 Content</button>
            </div>
        </div>
    `;
}

function showChapter8Questions() {
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 8: Document Object Model (DOM)</h1>
            <div class="topic-section">
                <h2>Answer These Questions First</h2>
                <p class="intro-text">Please answer the following questions before viewing the chapter content.</p>
                
                <div class="demo-area">
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 1:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">DOM waa maxay?</p>
                        <textarea id="answer1" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 2:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">getElementById() waa maxay?</p>
                        <textarea id="answer2" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 3:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">Sidee aad u beddeshayaa element style JavaScript-ka?</p>
                        <textarea id="answer3" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <button class="demo-btn" onclick="submitChapter8Answers()" style="width: 100%; margin-top: 1rem;">Submit Answers & View Chapter</button>
                </div>
            </div>
        </div>
    `;
}

function submitChapter8Answers() {
    const answer1 = document.getElementById("answer1").value.trim();
    const answer2 = document.getElementById("answer2").value.trim();
    const answer3 = document.getElementById("answer3").value.trim();
    
    if (!answer1 || !answer2 || !answer3) {
        alert("Please answer all questions before proceeding!");
        return;
    }
    
    // Show answers summary
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Your Answers - Chapter 8</h1>
            <div class="topic-section">
                <div class="result-box">
                    <strong>Question 1:</strong> DOM waa maxay?<br>
                    <strong>Your Answer:</strong> ${answer1}
                </div>
                <div class="result-box">
                    <strong>Question 2:</strong> getElementById() waa maxay?<br>
                    <strong>Your Answer:</strong> ${answer2}
                </div>
                <div class="result-box">
                    <strong>Question 3:</strong> Sidee aad u beddeshayaa element style JavaScript-ka?<br>
                    <strong>Your Answer:</strong> ${answer3}
                </div>
                <button class="demo-btn" onclick="showChapter8()" style="width: 100%; margin-top: 1rem;">View Chapter 8 Content</button>
            </div>
        </div>
    `;
}

function showChapter9Questions() {
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 9: Events in JavaScript</h1>
            <div class="topic-section">
                <h2>Answer These Questions First</h2>
                <p class="intro-text">Please answer the following questions before viewing the chapter content.</p>
                
                <div class="demo-area">
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 1:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">Event waa maxay JavaScript-ka?</p>
                        <textarea id="answer1" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 2:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">Click event waa maxay?</p>
                        <textarea id="answer2" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">Question 3:</h3>
                        <p style="font-size: 1.1rem; margin-bottom: 1rem;">addEventListener() waa maxay?</p>
                        <textarea id="answer3" class="demo-input" rows="3" placeholder="Jawaab halkan ku qor..."></textarea>
                    </div>
                    
                    <button class="demo-btn" onclick="submitChapter9Answers()" style="width: 100%; margin-top: 1rem;">Submit Answers & View Chapter</button>
                </div>
            </div>
        </div>
    `;
}

function submitChapter9Answers() {
    const answer1 = document.getElementById("answer1").value.trim();
    const answer2 = document.getElementById("answer2").value.trim();
    const answer3 = document.getElementById("answer3").value.trim();
    
    if (!answer1 || !answer2 || !answer3) {
        alert("Please answer all questions before proceeding!");
        return;
    }
    
    // Show answers summary
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Your Answers - Chapter 9</h1>
            <div class="topic-section">
                <div class="result-box">
                    <strong>Question 1:</strong> Event waa maxay JavaScript-ka?<br>
                    <strong>Your Answer:</strong> ${answer1}
                </div>
                <div class="result-box">
                    <strong>Question 2:</strong> Click event waa maxay?<br>
                    <strong>Your Answer:</strong> ${answer2}
                </div>
                <div class="result-box">
                    <strong>Question 3:</strong> addEventListener() waa maxay?<br>
                    <strong>Your Answer:</strong> ${answer3}
                </div>
                <button class="demo-btn" onclick="showChapter9()" style="width: 100%; margin-top: 1rem;">View Chapter 9 Content</button>
            </div>
        </div>
    `;
}

// ================= CHAPTER 7: OBJECTS (4 Examples) =================
function showChapter7() {
    // Example 1: Creating Objects
    const student = {
        name: "Kaafia Abdullahi Bulle",
        id: "C5240073",
        university: "Jamhuuriya University",
        faculty: "Information Technology"
    };

    // Example 2: Object Methods
    const calculator = {
        num1: 10,
        num2: 5,
        add: function() {
            return this.num1 + this.num2;
        },
        multiply: function() {
            return this.num1 * this.num2;
        }
    };

    // Example 3: Object with Nested Objects
    const university = {
        name: "Jamhuuriya University",
        student: {
            name: "Kaafia",
            id: "C5240073",
            courses: ["JavaScript", "Web Development", "Database"]
        }
    };

    // Example 4: JSON Operations
    const jsonString = '{"name":"Kaafia","id":"C5240073","faculty":"IT"}';
    const parsedObj = JSON.parse(jsonString);
    const studentObj = {name: "Kaafia", id: "C5240073", faculty: "IT"};
    const stringified = JSON.stringify(studentObj);

    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 7: Objects in JavaScript</h1>

            <!-- Example 1: Creating Objects -->
            <div class="topic-section">
                <h2>Example 1: Creating Objects</h2>
                <p class="intro-text">
                    Objects store related data as key-value pairs.
                </p>

                <div class="code-example">
<pre><code>const student = {
    name: "Kaafia Abdullahi Bulle",
    id: "C5240073",
    university: "Jamhuuriya University",
    faculty: "Information Technology"
};</code></pre>
                </div>

                <div class="result-box">
                    <strong>Output:</strong><br>
                    student.name → ${student.name}<br>
                    student.id → ${student.id}<br>
                    student.university → ${student.university}<br>
                    student.faculty → ${student.faculty}
                </div>
            </div>

            <!-- Example 2: Object Methods -->
            <div class="topic-section">
                <h2>Example 2: Object Methods</h2>
                <p class="intro-text">
                    Objects can contain functions called methods.
                </p>

                <div class="code-example">
<pre><code>const calculator = {
    num1: 10,
    num2: 5,
    add: function() {
        return this.num1 + this.num2;
    },
    multiply: function() {
        return this.num1 * this.num2;
    }
};</code></pre>
                </div>

                <div class="result-box">
                    <strong>Output:</strong><br>
                    calculator.add() → ${calculator.add()}<br>
                    calculator.multiply() → ${calculator.multiply()}
                </div>
            </div>

            <!-- Example 3: Nested Objects -->
            <div class="topic-section">
                <h2>Example 3: Nested Objects</h2>
                <p class="intro-text">
                    Objects can contain other objects as properties.
                </p>

                <div class="code-example">
<pre><code>const university = {
    name: "Jamhuuriya University",
    student: {
        name: "Kaafia",
        id: "C5240073",
        courses: ["JavaScript", "Web Development", "Database"]
    }
};</code></pre>
                </div>

                <div class="result-box">
                    <strong>Output:</strong><br>
                    university.name → ${university.name}<br>
                    university.student.name → ${university.student.name}<br>
                    university.student.courses → ${university.student.courses.join(", ")}
                </div>
            </div>

            <!-- Example 4: JSON Operations -->
            <div class="topic-section">
                <h2>Example 4: JSON Operations</h2>
                <p class="intro-text">
                    JSON.parse() converts JSON string to object, JSON.stringify() converts object to JSON string.
                </p>

                <div class="code-example">
<pre><code>// JSON.parse() - String to Object
const jsonString = '{"name":"Kaafia","id":"C5240073","faculty":"IT"}';
const parsedObj = JSON.parse(jsonString);

// JSON.stringify() - Object to String
const studentObj = {name: "Kaafia", id: "C5240073", faculty: "IT"};
const stringified = JSON.stringify(studentObj);</code></pre>
                </div>

                <div class="result-box">
                    <strong>JSON.parse() Result:</strong><br>
                    parsedObj.name → ${parsedObj.name}<br>
                    parsedObj.faculty → ${parsedObj.faculty}<br><br>
                    <strong>JSON.stringify() Result:</strong><br>
                    <code>${stringified}</code>
                </div>
            </div>

            <!-- Example 5: Object.keys() -->
            <div class="topic-section">
                <h2>Example 5: Object.keys()</h2>
                <p class="intro-text">
                    Object.keys() returns an array of object property names.
                </p>

                <div class="code-example">
<pre><code>const student = {
    name: "Kaafia",
    id: "C5240073",
    faculty: "IT"
};
const keys = Object.keys(student);</code></pre>
                </div>

                <div class="result-box">
                    <strong>Output:</strong><br>
                    Object.keys(student) → ${Object.keys(student).join(", ")}
                </div>
            </div>

            <!-- Example 6: Object.values() and Object.entries() -->
            <div class="topic-section">
                <h2>Example 6: Object.values() and Object.entries()</h2>
                <p class="intro-text">
                    Object.values() returns property values, Object.entries() returns key-value pairs.
                </p>

                <div class="code-example">
<pre><code>const student = {
    name: "Kaafia",
    id: "C5240073",
    faculty: "IT"
};
const values = Object.values(student);
const entries = Object.entries(student);</code></pre>
                </div>

                <div class="result-box">
                    <strong>Object.values() Result:</strong><br>
                    ${Object.values(student).join(", ")}<br><br>
                    <strong>Object.entries() Result:</strong><br>
                    ${Object.entries(student).map(([k, v]) => `[${k}, ${v}]`).join(", ")}
                </div>
            </div>

            <button class="back-btn" onclick="showChapters()">← Back to Chapters</button>
        </div>
    `;
}

// ================= CHAPTER 8: DOM (4 Examples) =================
function showChapter8() {
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 8: Document Object Model (DOM)</h1>

            <!-- Example 1: getElementById -->
            <div class="topic-section">
                <h2>Example 1: getElementById()</h2>
                <p class="intro-text">
                    Selects an element by its unique ID attribute.
                </p>

                <div class="code-example">
<pre><code>const element = document.getElementById("demoId");
element.textContent = "Changed by getElementById!";</code></pre>
                </div>

                <div class="demo-area">
                    <p id="demoId">Original text - Click button to change</p>
                    <button class="demo-btn" onclick="demoGetElementById()">Change Text</button>
                    <p id="result1" class="result-text"></p>
                </div>
            </div>

            <!-- Example 2: querySelector -->
            <div class="topic-section">
                <h2>Example 2: querySelector()</h2>
                <p class="intro-text">
                    Selects the first element matching a CSS selector.
                </p>

                <div class="code-example">
<pre><code>const element = document.querySelector(".myClass");
element.style.color = "blue";</code></pre>
                </div>

                <div class="demo-area">
                    <div class="query-demo">First element with class "query-demo"</div>
                    <div class="query-demo">Second element with class "query-demo"</div>
                    <button class="demo-btn" onclick="demoQuerySelector()">Select First Element</button>
                    <p id="result2" class="result-text"></p>
                </div>
            </div>

            <!-- Example 3: querySelectorAll -->
            <div class="topic-section">
                <h2>Example 3: querySelectorAll()</h2>
                <p class="intro-text">
                    Selects all elements matching a CSS selector.
                </p>

                <div class="code-example">
<pre><code>const elements = document.querySelectorAll(".myClass");
elements.forEach(el => el.style.color = "red");</code></pre>
                </div>

                <div class="demo-area">
                    <div class="query-all-demo">Element 1</div>
                    <div class="query-all-demo">Element 2</div>
                    <div class="query-all-demo">Element 3</div>
                    <button class="demo-btn" onclick="demoQuerySelectorAll()">Select All Elements</button>
                    <p id="result3" class="result-text"></p>
                </div>
            </div>

            <!-- Example 4: DOM Style Manipulation -->
            <div class="topic-section">
                <h2>Example 4: DOM Style Manipulation</h2>
                <p class="intro-text">
                    Change element styles dynamically using JavaScript.
                </p>

                <div class="code-example">
<pre><code>const element = document.getElementById("domText");
element.style.color = "red";
element.style.fontSize = "24px";
element.style.backgroundColor = "yellow";</code></pre>
                </div>

                <div class="demo-area">
                    <p id="domText">This text will change style</p>
                    <button class="demo-btn" onclick="changeDomStyle()">Change Style</button>
                    <button class="demo-btn" onclick="resetDomStyle()">Reset</button>
                </div>
            </div>

            <!-- Example 5: getElementsByTagName() -->
            <div class="topic-section">
                <h2>Example 5: getElementsByTagName()</h2>
                <p class="intro-text">
                    Selects all elements with a specific tag name.
                </p>

                <div class="code-example">
<pre><code>const paragraphs = document.getElementsByTagName("p");
// Returns all &lt;p&gt; elements</code></pre>
                </div>

                <div class="demo-area">
                    <p class="tag-demo">Paragraph 1</p>
                    <p class="tag-demo">Paragraph 2</p>
                    <p class="tag-demo">Paragraph 3</p>
                    <button class="demo-btn" onclick="demoGetElementsByTagName()">Count Paragraphs</button>
                    <p id="result4" class="result-text"></p>
                </div>
            </div>

            <!-- Example 6: getElementsByClassName() -->
            <div class="topic-section">
                <h2>Example 6: getElementsByClassName()</h2>
                <p class="intro-text">
                    Selects all elements with a specific class name.
                </p>

                <div class="code-example">
<pre><code>const items = document.getElementsByClassName("myClass");
// Returns all elements with class "myClass"</code></pre>
                </div>

                <div class="demo-area">
                    <div class="class-demo">Item 1</div>
                    <div class="class-demo">Item 2</div>
                    <div class="class-demo">Item 3</div>
                    <button class="demo-btn" onclick="demoGetElementsByClassName()">Select by Class</button>
                    <p id="result5" class="result-text"></p>
                </div>
            </div>

            <button class="back-btn" onclick="showChapters()">← Back to Chapters</button>
        </div>
    `;
}

// DOM Helper Functions
function demoGetElementById() {
    const element = document.getElementById("demoId");
    element.textContent = "Changed by getElementById()! ✓";
    element.style.backgroundColor = "#4CAF50";
    element.style.color = "white";
    element.style.padding = "10px";
    document.getElementById("result1").innerHTML = 
        "<strong>Success!</strong> Element selected and modified using getElementById()";
    setTimeout(() => {
        element.style.backgroundColor = "";
        element.style.color = "";
        element.style.padding = "";
    }, 2000);
}

function demoQuerySelector() {
    const element = document.querySelector(".query-demo");
    element.style.backgroundColor = "#FF9800";
    element.style.color = "white";
    element.style.padding = "10px";
    document.getElementById("result2").innerHTML = 
        "<strong>Selected:</strong> First element with class 'query-demo'";
    setTimeout(() => {
        element.style.backgroundColor = "";
        element.style.color = "";
        element.style.padding = "";
    }, 2000);
}

function demoQuerySelectorAll() {
    const elements = document.querySelectorAll(".query-all-demo");
    elements.forEach((el, index) => {
        el.style.backgroundColor = "#9C27B0";
        el.style.color = "white";
        el.style.padding = "10px";
    });
    document.getElementById("result3").innerHTML = 
        `<strong>Found ${elements.length} element(s)</strong> with class 'query-all-demo'`;
    setTimeout(() => {
        elements.forEach(el => {
            el.style.backgroundColor = "";
            el.style.color = "";
            el.style.padding = "";
        });
    }, 2000);
}

function changeDomStyle() {
    const domText = document.getElementById("domText");
    domText.style.color = "#FF5722";
    domText.style.fontSize = "24px";
    domText.style.fontWeight = "bold";
    domText.style.backgroundColor = "#FFE0B2";
    domText.style.padding = "15px";
    domText.style.borderRadius = "8px";
    domText.textContent = "DOM Style Changed Successfully! ✨";
}

function resetDomStyle() {
    const domText = document.getElementById("domText");
    domText.style.color = "";
    domText.style.fontSize = "";
    domText.style.fontWeight = "";
    domText.style.backgroundColor = "";
    domText.style.padding = "";
    domText.style.borderRadius = "";
    domText.textContent = "This text will change style";
}

function demoGetElementsByTagName() {
    const paragraphs = document.getElementsByTagName("p");
    const tagDemos = document.querySelectorAll(".tag-demo");
    document.getElementById("result4").innerHTML = 
        `<strong>Found ${paragraphs.length} paragraph(s) total, ${tagDemos.length} in demo area</strong>`;
    tagDemos.forEach((p, index) => {
        p.style.backgroundColor = "#FFC107";
        p.style.color = "black";
        p.style.padding = "10px";
        setTimeout(() => {
            p.style.backgroundColor = "";
            p.style.color = "";
            p.style.padding = "";
        }, 2000);
    });
}

function demoGetElementsByClassName() {
    const items = document.getElementsByClassName("class-demo");
    document.getElementById("result5").innerHTML = 
        `<strong>Found ${items.length} element(s) with class "class-demo"</strong>`;
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "#E91E63";
        items[i].style.color = "white";
        items[i].style.padding = "10px";
        setTimeout(() => {
            items[i].style.backgroundColor = "";
            items[i].style.color = "";
            items[i].style.padding = "";
        }, 2000);
    }
}

// ================= CHAPTER 9: EVENTS (4 Examples) =================
function showChapter9() {
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 9: Events in JavaScript</h1>

            <!-- Example 1: Click Event -->
            <div class="topic-section">
                <h2>Example 1: Click Event</h2>
                <p class="intro-text">
                    The click event fires when an element is clicked.
                </p>

                <div class="code-example">
<pre><code>button.addEventListener("click", function() {
    alert("Button clicked!");
});</code></pre>
                </div>

                <div class="demo-area">
                    <button class="demo-btn" id="clickBtn">Click Me</button>
                    <p class="result-text" id="clickResult"></p>
                </div>
            </div>

            <!-- Example 2: Mouse Events -->
            <div class="topic-section">
                <h2>Example 2: Mouse Events</h2>
                <p class="intro-text">
                    mouseenter, mouseleave, and click events.
                </p>

                <div class="code-example">
<pre><code>element.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "green";
});</code></pre>
                </div>

                <div class="demo-area">
                    <div id="mouseBox" class="mouse-demo-box">
                        Hover over me! Move your mouse here.
                    </div>
                    <p class="result-text" id="mouseResult"></p>
                </div>
            </div>

            <!-- Example 3: Keyboard Events -->
            <div class="topic-section">
                <h2>Example 3: Keyboard Events</h2>
                <p class="intro-text">
                    keydown and keyup events detect keyboard input.
                </p>

                <div class="code-example">
<pre><code>input.addEventListener("keydown", function(e) {
    console.log("Key pressed:", e.key);
});</code></pre>
                </div>

                <div class="demo-area">
                    <input type="text" id="keyboardInput" placeholder="Type something here..." class="demo-input">
                    <p class="result-text" id="keyboardResult"></p>
                </div>
            </div>

            <!-- Example 4: Form Events -->
            <div class="topic-section">
                <h2>Example 4: Form Events</h2>
                <p class="intro-text">
                    submit, change, and input events for form handling.
                </p>

                <div class="code-example">
<pre><code>form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted!");
});</code></pre>
                </div>

                <div class="demo-area">
                    <form id="demoForm" class="demo-form">
                        <input type="text" id="formInput" placeholder="Type to see input event" class="demo-input">
                        <select id="formSelect" class="demo-select">
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <button type="submit" class="demo-btn">Submit Form</button>
                    </form>
                    <p class="result-text" id="formResult"></p>
                </div>
            </div>

            <!-- Example 5: Focus Events -->
            <div class="topic-section">
                <h2>Example 5: Focus Events</h2>
                <p class="intro-text">
                    focus and blur events detect when input fields gain or lose focus.
                </p>

                <div class="code-example">
<pre><code>input.addEventListener("focus", function() {
    this.style.borderColor = "green";
});

input.addEventListener("blur", function() {
    this.style.borderColor = "";
});</code></pre>
                </div>

                <div class="demo-area">
                    <input type="text" id="focusInput" placeholder="Click to focus..." class="demo-input">
                    <p class="result-text" id="focusResult"></p>
                </div>
            </div>

            <!-- Example 6: Double Click Event -->
            <div class="topic-section">
                <h2>Example 6: Double Click Event</h2>
                <p class="intro-text">
                    dblclick event fires when an element is double-clicked.
                </p>

                <div class="code-example">
<pre><code>element.addEventListener("dblclick", function() {
    alert("Double clicked!");
});</code></pre>
                </div>

                <div class="demo-area">
                    <div id="dblClickBox" class="mouse-demo-box" style="background: linear-gradient(135deg, #9C27B0 0%, #E91E63 100%);">
                        Double Click Me!
                    </div>
                    <p class="result-text" id="dblClickResult"></p>
                </div>
            </div>

            <button class="back-btn" onclick="showChapters()">← Back to Chapters</button>
        </div>
    `;

    // Set up event listeners after content is loaded
    setTimeout(() => {
        setupEventListeners();
    }, 100);
}

function setupEventListeners() {
    // Example 1: Click Event
    const clickBtn = document.getElementById("clickBtn");
    const clickResult = document.getElementById("clickResult");
    if (clickBtn && clickResult) {
        clickBtn.addEventListener("click", function() {
            clickResult.innerHTML = "<strong>Click Event:</strong> Button was clicked successfully! ✓";
            this.style.backgroundColor = "#4CAF50";
            setTimeout(() => {
                this.style.backgroundColor = "";
            }, 1000);
        });
    }

    // Example 2: Mouse Events
    const mouseBox = document.getElementById("mouseBox");
    const mouseResult = document.getElementById("mouseResult");
    if (mouseBox && mouseResult) {
        mouseBox.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#4CAF50";
            this.style.color = "white";
            mouseResult.innerHTML = "<strong>Mouse Event:</strong> mouseenter - Mouse entered the box!";
        });

        mouseBox.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "#2196F3";
            this.style.color = "white";
            mouseResult.innerHTML = "<strong>Mouse Event:</strong> mouseleave - Mouse left the box!";
        });

        mouseBox.addEventListener("click", function() {
            this.style.transform = "scale(1.1)";
            mouseResult.innerHTML = "<strong>Mouse Event:</strong> click - Box clicked!";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 200);
        });
    }

    // Example 3: Keyboard Events
    const keyboardInput = document.getElementById("keyboardInput");
    const keyboardResult = document.getElementById("keyboardResult");
    if (keyboardInput && keyboardResult) {
        keyboardInput.addEventListener("keydown", function(e) {
            keyboardResult.innerHTML = 
                `<strong>Keyboard Event:</strong> keydown - Key pressed: "${e.key}" (KeyCode: ${e.keyCode})`;
        });

        keyboardInput.addEventListener("keyup", function(e) {
            keyboardResult.innerHTML = 
                `<strong>Keyboard Event:</strong> keyup - Key released: "${e.key}"`;
        });
    }

    // Example 4: Form Events
    const formInput = document.getElementById("formInput");
    const formSelect = document.getElementById("formSelect");
    const demoForm = document.getElementById("demoForm");
    const formResult = document.getElementById("formResult");

    if (formInput && formResult) {
        formInput.addEventListener("input", function(e) {
            formResult.innerHTML = 
                `<strong>Form Event:</strong> input - Current value: "${e.target.value}"`;
        });
    }

    if (formSelect && formResult) {
        formSelect.addEventListener("change", function(e) {
            formResult.innerHTML = 
                `<strong>Form Event:</strong> change - Selected: "${e.target.value}"`;
        });
    }

    if (demoForm && formResult) {
        demoForm.addEventListener("submit", function(e) {
            e.preventDefault();
            formResult.innerHTML = 
                "<strong>Form Event:</strong> submit - Form submitted! (Default prevented) ✓";
            this.style.backgroundColor = "#E8F5E9";
            this.style.padding = "15px";
            this.style.borderRadius = "8px";
            setTimeout(() => {
                this.style.backgroundColor = "";
                this.style.padding = "";
                this.style.borderRadius = "";
            }, 2000);
        });
    }

    // Example 5: Focus Events
    const focusInput = document.getElementById("focusInput");
    const focusResult = document.getElementById("focusResult");
    if (focusInput && focusResult) {
        focusInput.addEventListener("focus", function() {
            this.style.borderColor = "#4CAF50";
            this.style.boxShadow = "0 0 10px rgba(76, 175, 80, 0.5)";
            focusResult.innerHTML = 
                "<strong>Focus Event:</strong> focus - Input field is now focused!";
        });

        focusInput.addEventListener("blur", function() {
            this.style.borderColor = "";
            this.style.boxShadow = "";
            focusResult.innerHTML = 
                "<strong>Focus Event:</strong> blur - Input field lost focus!";
        });
    }

    // Example 6: Double Click Event
    const dblClickBox = document.getElementById("dblClickBox");
    const dblClickResult = document.getElementById("dblClickResult");
    if (dblClickBox && dblClickResult) {
        dblClickBox.addEventListener("dblclick", function() {
            this.style.transform = "scale(1.2)";
            this.style.backgroundColor = "#FF5722";
            dblClickResult.innerHTML = 
                "<strong>Double Click Event:</strong> dblclick - Box double clicked! ✓";
            setTimeout(() => {
                this.style.transform = "scale(1)";
                this.style.backgroundColor = "";
            }, 500);
        });
    }
}

// ================= LOAD HOME BY DEFAULT =================
document.addEventListener('DOMContentLoaded', function() {
    showHome();
});
