const CONFIG = {
    // [PLACEHOLDER] Update this with your new Google Apps Script Web App URL
    SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzzB5L3JcbyFBW-PaxtAnf_3m1N4cUU-5kG4TYueIc7zPGQBWnvo2iSaqiFJ3X4N_VFKA/exec',
    LEVELS: [
    { 
        min: 0, max: 10, name: 'AI Beginner', 
        desc: 'Level: No AI Usage',
        assessment: "You are at the starting line. You may haven't interacted with large language models yet or have only heard about AI without practicing.",
        advice: 'Try out basic questions on popular AI tools like ChatGPT, Gemini, or Claude.',
        actionPlan: "Create a free account on ChatGPT or Claude.ai. Spend 10 minutes daily asking anything you're curious about."
    },
    { 
        min: 11, max: 20, name: 'AI Explorer', 
        desc: 'Level: Starting to explore AI',
        assessment: 'You have overcome the initial psychological barrier. You know how to ask AI questions, but your usage style is still spontaneous.',
        advice: 'Try applying AI to drafting emails or summarizing documents to save time daily.',
        actionPlan: 'Turn AI into a personal assistant. When writing emails, use a prompt like: "Help me draft a polite email about [content]."'
    },
    { 
        min: 21, max: 35, name: 'AI Practitioner', 
        desc: 'Level: Frequent AI Usage',
        assessment: 'You have integrated AI into your daily workflow. You understand that AI is not always right.',
        advice: 'Deepen your knowledge of Prompt Engineering to improve output quality.',
        actionPlan: 'Learn the prompt structure: "Role - Context - Task - Output Format".'
    },
    { 
        min: 36, max: 50, name: 'AI Advanced', 
        desc: 'Level: Deep AI Usage',
        assessment: 'You not only ask good questions but also know how to provide complex data and context to AI.',
        advice: 'Start building automated workflows to optimize complex tasks.',
        actionPlan: 'Combine AI with automation tools (Zapier, Make.com). Challenge: Create an automated report summary workflow.'
    },
    { 
        min: 51, max: 60, name: 'AI Leader', 
        desc: 'Level: Leading AI Adoption Trends',
        assessment: 'You are a pioneer in the organization. You clearly understand AI limits, risks, and optimization methods.',
        advice: 'Congratulations, expert! You should lead teams and design a comprehensive AI adoption strategy.',
        actionPlan: 'Build a "Prompt Template Library" for your department. Research custom AI models (Custom GPTs).'
    }
    ]
};

const QUESTIONS = [
    {
        id: 1,
        group: "Group 1 — AI Usage Level",
        text: "How often do you use AI in your work?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "Sometimes", points: 2 },
            { text: "Frequently", points: 4 },
            { text: "Always", points: 5 }
        ]
    },
    {
        id: 2,
        group: "Group 1 — AI Usage Level",
        text: "For how many types of tasks do you use AI?",
        type: "single",
        options: [
            { text: "No usage", points: 0 },
            { text: "1-2 tasks", points: 2 },
            { text: "3-5 tasks", points: 3 },
            { text: "> 5 tasks", points: 5 }
        ]
    },
    {
        id: 3,
        group: "Group 1 — AI Usage Level",
        text: "How long have you been using AI?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "< 3 months", points: 1 },
            { text: "3-6 months", points: 2 },
            { text: "6-12 months", points: 3 },
            { text: "> 1 year", points: 5 }
        ]
    },
    {
        id: 4,
        group: "Group 2 — AI Proficiency",
        text: "How would you rate your AI proficiency?",
        type: "scale",
        min: 1,
        max: 5,
        pointsPerScale: 1,
        hint: "💡 Lvl 1: Beginner; Lvl 2: Basic; Lvl 3: Intermediate; Lvl 4: Proficient; Lvl 5: Expert"
    },
    {
        id: 5,
        group: "Group 2 — AI Proficiency",
        text: "What can you do with AI?",
        type: "multiple",
        options: [
            { text: "Write emails", points: 1 },
            { text: "Create content", points: 1 },
            { text: "Analyze data", points: 2 },
            { text: "Write advanced prompts", points: 2 },
            { text: "Automation", points: 3 },
            { text: "Create AI workflows", points: 4 }
        ],
        maxPoints: 10
    },
    {
        id: 6,
        group: "Group 3 — Performance Impact",
        text: "How much has AI increased your productivity?",
        type: "single",
        options: [
            { text: "0-20%", points: 1 },
            { text: "20-40%", points: 2 },
            { text: "40-60%", points: 3 },
            { text: "60-80%", points: 4 },
            { text: "80-100%", points: 5 }
        ]
    },
    {
        id: 7,
        group: "Group 3 — Performance Impact",
        text: "How much time do you save by using AI?",
        type: "single",
        options: [
            { text: "No time saved", points: 0 },
            { text: "< 1h/day", points: 2 },
            { text: "1-2h/day", points: 3 },
            { text: "2-3h/day", points: 4 },
            { text: "> 3h/day", points: 5 }
        ],
        hint: "💡 Average savings are 40-60 minutes/day."
    },
    {
        id: 8,
        group: "Group 4 — AI Mindset & Innovation",
        text: "Do you proactively learn about AI?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "Sometimes", points: 2 },
            { text: "Frequently", points: 4 },
            { text: "Always", points: 5 }
        ]
    },
    {
        id: 9,
        group: "Group 4 — AI Mindset & Innovation",
        text: "Do you share AI tips with colleagues?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "Sometimes", points: 2 },
            { text: "Frequently", points: 4 },
            { text: "Always", points: 5 }
        ]
    },
    {
        id: 10,
        group: "Group 4 — AI Mindset & Innovation",
        text: "Do you suggest AI applications at work?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "Rarely", points: 2 },
            { text: "Sometimes", points: 3 },
            { text: "Frequently", points: 5 }
        ]
    },
    {
        id: 11,
        group: "Group 5 — Advanced AI",
        text: "Which AI tools have you used?",
        type: "multiple",
        options: [
            { text: "ChatGPT", points: 1 },
            { text: "Claude", points: 1 },
            { text: "Gemini", points: 1 },
            { text: "Copilot", points: 1 },
            { text: "Perplexity", points: 1 },
            { text: "Midjourney", points: 1 },
            { text: "Automation Tools", points: 1 }
        ]
    },
    {
        id: 12,
        group: "Group 5 — Advanced AI",
        text: "What advanced things have you done with AI?",
        type: "multiple",
        options: [
            { text: "Automation", points: 2 },
            { text: "AI Workflow", points: 2 },
            { text: "Internal Chatbot", points: 2 },
            { text: "Data Analysis", points: 2 },
            { text: "Custom GPTs", points: 2 }
        ]
    }
];

let state = {
    step: 'intro',
    currentQuestionIndex: 0,
    user: { name: '', email: '', position: '' },
    answers: {}
};

let dom = {
    main: null,
    progressBar: null,
    progressWrapper: null
};

function setState(newState) {
    state = { ...state, ...newState };
    render();
}

function render() {
    if (!dom.main) return;
    
    try {
        if (state.step === 'intro') {
            renderIntro();
        } else if (state.step === 'info') {
            renderInfoForm();
        } else if (state.step === 'question') {
            renderQuestion();
        } else if (state.step === 'result') {
            renderResult();
        }
    } catch (error) {
        console.error("Render error:", error);
        dom.main.innerHTML = `<div class="card"><p>An error occurred. Please reload the page.</p></div>`;
    }
}

function renderIntro() {
    if (dom.progressWrapper) dom.progressWrapper.style.display = 'none';
    dom.main.innerHTML = `
        <div class="screen intro-screen text-center">
            <div class="card">
                <h1>AI Capability Scorecard</h1>
                <p class="description">
                    Artificial Intelligence (AI) is rapidly transforming the way organizations operate, with the potential to significantly enhance employee productivity and optimize daily workflows.
                </p>
                <div class="benefits" style="text-align: left; margin-bottom: 2rem;">
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫 Survey made by Universitatea „Alexandru Ioan Cuza” din Iași</p>
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫 Questionnaire based on a scientific study published in MDPI journal</p>
                </div>
                <button class="btn btn-primary w-100" onclick="setState({ step: 'info' })">Start Survey</button>
            </div>
        </div>
    `;
}

function renderInfoForm() {
    dom.main.innerHTML = `
        <div class="screen info-screen">
            <div class="card">
                <h2>Personal Information</h2>
                <p class="description">Please provide information to save your results.</p>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="user-name" placeholder="John Doe" value="${state.user.name}">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="user-email" placeholder="example@email.com" value="${state.user.email}">
                </div>
                <div class="form-group">
                    <label>Position</label>
                    <input type="text" id="user-position" placeholder="Marketing / Sales..." value="${state.user.position}">
                </div>
                <button class="btn btn-primary w-100" id="start-btn" onclick="handleInfoSubmit()">Continue</button>
            </div>
        </div>
    `;
}

function handleInfoSubmit() {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const position = document.getElementById('user-position').value;

    if (!name || !email) {
        alert('Please fill in the information!');
        return;
    }

    setState({
        step: 'question',
        user: { name, email, position }
    });
}

function renderQuestion() {
    const q = QUESTIONS[state.currentQuestionIndex];
    if (!q) return;

    const progress = (state.currentQuestionIndex / QUESTIONS.length) * 100;
    
    if (dom.progressWrapper) dom.progressWrapper.style.display = 'block';
    if (dom.progressBar) dom.progressBar.style.width = `${progress}%`;

    let optionsHtml = '';
    const currentAnswer = state.answers[q.id];

    if (q.type === 'single') {
        optionsHtml = `<div class="options-list">
            ${q.options.map((opt, i) => `
                <div class="option-item ${currentAnswer === i ? 'selected' : ''}" onclick="selectOption(${q.id}, ${i}, this)">
                    ${opt.text}
                </div>
            `).join('')}
        </div>`;
    } else if (q.type === 'multiple') {
        const selectedIndices = currentAnswer || [];
        optionsHtml = `<div class="options-list">
            ${q.options.map((opt, i) => `
                <div class="option-item ${selectedIndices.includes(i) ? 'selected' : ''} row-layout" onclick="toggleOption(${q.id}, ${i}, this)">
                    <div style="margin-right: 15px;">${selectedIndices.includes(i) ? '✅' : '⬜'}</div>
                    <div>${opt.text}</div>
                </div>
            `).join('')}
        </div>`;
    } else if (q.type === 'scale') {
        optionsHtml = `<div class="options-list" style="grid-template-columns: repeat(${q.max}, 1fr);">
            ${Array.from({length: q.max}, (_, i) => i + 1).map(val => `
                <div class="option-item text-center row-layout ${currentAnswer === val ? 'selected' : ''}" onclick="selectOption(${q.id}, ${val}, this)" style="justify-content: center;">
                    ${val}
                </div>
            `).join('')}
        </div>`;
    }

    if (q.hint) {
        optionsHtml += `<div style="margin-top: 1.5rem; padding: 0.75rem 1rem; background: rgba(241, 110, 46, 0.1); border-left: 4px solid var(--primary-color); border-radius: 8px;">
            ${q.hint}
        </div>`;
    }

    dom.main.innerHTML = `
        <div class="screen question-screen">
            <div class="group-label" style="color: var(--primary-color); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                ${q.group} (${state.currentQuestionIndex + 1}/${QUESTIONS.length})
            </div>
            <div class="card">
                <h2>${q.text}</h2>
                ${optionsHtml}
                <div class="button-group">
                    <button class="btn" style="background: #333; color: white;" onclick="prevQuestion()">Back</button>
                    <button class="btn btn-primary" onclick="nextQuestion()" ${currentAnswer === undefined || (q.type === 'multiple' && currentAnswer.length === 0) ? 'disabled' : ''}>${state.currentQuestionIndex === QUESTIONS.length - 1 ? 'Finish' : 'Next'}</button>
                </div>
            </div>
        </div>
    `;
}

function selectOption(qId, value, element) {
    state.answers[qId] = value;
    const parent = element.parentElement;
    parent.querySelectorAll('.option-item').forEach(item => item.classList.remove('selected'));
    element.classList.add('selected');
    const nextBtn = document.querySelector('.btn-primary');
    if (nextBtn) nextBtn.disabled = false;
}

function toggleOption(qId, index, element) {
    let current = state.answers[qId] || [];
    if (current.includes(index)) {
        current = current.filter(i => i !== index);
        element.classList.remove('selected');
    } else {
        current = [...current, index];
        element.classList.add('selected');
    }
    state.answers[qId] = current;
    const icon = element.querySelector('div');
    if (icon) icon.innerText = current.includes(index) ? '✅' : '⬜';
    const nextBtn = document.querySelector('.btn-primary');
    if (nextBtn) nextBtn.disabled = current.length === 0;
}

function nextQuestion() {
    if (state.currentQuestionIndex < QUESTIONS.length - 1) {
        setState({ currentQuestionIndex: state.currentQuestionIndex + 1 });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        setState({ step: 'result' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        submitToSheets();
    }
}

function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        setState({ currentQuestionIndex: state.currentQuestionIndex - 1 });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        setState({ step: 'info' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function calculateScore() {
    let total = 0;
    QUESTIONS.forEach(q => {
        const ans = state.answers[q.id];
        if (ans === undefined) return;
        if (q.type === 'single') total += q.options[ans].points;
        else if (q.type === 'multiple') {
            let qPoints = ans.reduce((sum, idx) => sum + q.options[idx].points, 0);
            if (q.maxPoints) qPoints = Math.min(qPoints, q.maxPoints);
            total += qPoints;
        } else if (q.type === 'scale') total += (ans * q.pointsPerScale);
    });
    return total;
}

function renderResult() {
    const score = calculateScore();
    let level = CONFIG.LEVELS.find(l => score >= l.min && score <= l.max);
    if (!level && score > 60) level = CONFIG.LEVELS[CONFIG.LEVELS.length - 1];
    if (!level) level = CONFIG.LEVELS[0];
    
    if (dom.progressBar) dom.progressBar.style.width = `100%`;
    dom.main.innerHTML = `
        <div class="screen result-screen text-center">
            <div class="card">
                <h2>Your Results</h2>
                <div class="score-circle">
                    <span class="score-value">${score}</span>
                    <span style="font-size: 0.8rem; font-weight: 500;">/ 60 POINTS</span>
                </div>
                <div class="level-badge">${level.name}</div>
                <p style="margin-top: 1.5rem; font-size: 1.2rem; font-weight: 700; color: var(--primary-color);">${level.desc}</p>
                
                <div class="result-details" style="text-align: left; margin-top: 2rem;">
                    <div class="result-section" style="margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1rem; color: #FFF; margin-bottom: 0.5rem;">📊 Capability Assessment</h3>
                        <p style="font-size: 0.95rem; color: #BBB;">${level.assessment}</p>
                    </div>
                    <div class="result-section" style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(241, 110, 46, 0.1); border-left: 4px solid var(--primary-color); border-radius: 8px;">
                        <h3 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 0.5rem;">💡 Advice</h3>
                        <p style="font-size: 0.95rem; color: #EEE; font-style: italic;">${level.advice}</p>
                    </div>
                    <div class="result-section" style="padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 8px;">
                        <h3 style="font-size: 1rem; color: #FFF; margin-bottom: 0.5rem;">🚀 Action Plan</h3>
                        <p style="font-size: 0.95rem; color: #FFF;">${level.actionPlan}</p>
                    </div>
                </div>
                <button class="btn btn-primary" style="margin-top: 2rem;" onclick="location.reload()">Retake Survey</button>
            </div>
        </div>
    `;
}

async function submitToSheets() {
    if (CONFIG.SCRIPT_URL === 'YOUR_NEW_SCRIPT_URL_HERE') {
        console.warn('Sync skipped: SCRIPT_URL not configured.');
        return;
    }
    const score = calculateScore();
    const level = CONFIG.LEVELS.find(l => score >= l.min && score <= l.max)?.name || 'N/A';
    const data = {
        timestamp: new Date().toISOString(),
        name: state.user.name,
        email: state.user.email,
        position: state.user.position || 'N/A',
        score: score,
        level: level
    };
    try {
        await fetch(CONFIG.SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (e) {
        console.error('Submission error:', e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    dom.main = document.getElementById('main-content');
    dom.progressBar = document.getElementById('progress-bar');
    dom.progressWrapper = document.getElementById('progress-bar-wrapper');
    if (dom.main) render();
});
