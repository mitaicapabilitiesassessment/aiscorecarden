const CONFIG = {
    // Replace with your Google Apps Script Web App URL
    SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzzB5L3JcbyFBW-PaxtAnf_3m1N4cUU-5kG4TYueIc7zPGQBWnvo2iSaqiFJ3X4N_VFKA/exec',
    LEVELS: [
    { 
        min: 0, max: 10, name: 'AI Beginner', 
        desc: 'Level: AI Not Yet Used',
        assessment: 'You are at the starting line. You may not have interacted with Large Language Models yet or have only heard about AI without practicing. Your productivity potential is immense.',
        advice: 'You are just beginning your AI journey. Experiment with basic questions on popular AI tools like ChatGPT, Gemini, or Claude to see their capabilities.',
        actionPlan: 'Create a free account on ChatGPT or Claude.ai. Spend 10 minutes a day asking anything you\'re curious about. Start with the prompt: "Explain [work topic] to me simply."'
    },
    { 
        min: 11, max: 20, name: 'AI Explorer', 
        desc: 'Level: Exploring AI',
        assessment: 'You have overcome the initial psychological barrier. You know how to ask AI questions but your usage style is still spontaneous, and results are sometimes inconsistent. You are using AI as a search engine replacement.',
        advice: 'You have started to become familiar with AI. Try applying it to drafting emails or summarizing documents to save time daily.',
        actionPlan: 'Turn AI into a personal assistant. When you need to write an email, use the prompt: "Help me draft a polite email about [content], professional tone." Practice summarizing long articles into 3 bullet points.'
    },
    { 
        min: 21, max: 35, name: 'AI Practitioner', 
        desc: 'Level: Regular AI User',
        assessment: 'You have integrated AI into your daily workflow. You understand that AI is not always right and have started editing its answers. However, you are still using simple prompts and have not fully exploited its depth.',
        advice: 'You use AI quite proficiently. Learn more about Prompt Engineering to improve the quality of output.',
        actionPlan: 'Learn the prompt structure: "Role - Context - Request - Output Format". For example: "You are a senior data analyst. Please analyze the pros and cons of project A (data attached). Present in SWOT table format and suggest the next 3 actions."'
    },
    { 
        min: 36, max: 50, name: 'AI Advanced', 
        desc: 'Level: Advanced AI User',
        assessment: 'You not only ask good questions but also know how to provide data and complex context to AI. You have good critical thinking regarding AI\'s answers. You are an effective problem solver in the team.',
        advice: 'You have advanced AI skills. Start building automated workflows to optimize complex tasks.',
        actionPlan: 'Combine AI with other automation tools (Zapier, Make.com, n8n). Challenge: Create an automated workflow that reads weekly report files, requests an AI summary, and emails the insights directly to management.'
    },
    { 
        min: 51, max: 60, name: 'AI Leader', 
        desc: 'Level: AI Adoption Leader',
        assessment: 'You are a pioneer in the organization. You understand the limitations and risks of AI as well as how to optimize it for specific job roles. You see AI as a strategic partner rather than just a tool.',
        advice: 'Congratulations expert! You should lead teams, share experiences, and design comprehensive AI application strategies for the business.',
        actionPlan: 'Build a "Master Prompt Library" for your department. Organize weekly "AI Office Hours" to answer colleagues\' questions. Research custom AI models (Custom GPTs) tailored to the company\'s specific needs.'
    }
    ]
};

// Question IDs and content
const QUESTIONS = [
    {
        id: 1,
        group: "Group 1 — AI Usage Frequency",
        text: "How often do you use AI in your work?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "Occasionally", points: 2 },
            { text: "Frequently", points: 4 },
            { text: "Always", points: 5 }
        ]
    },
    {
        id: 2,
        group: "Group 1 — AI Usage Frequency",
        text: "How many types of tasks do you use AI for?",
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
        group: "Group 1 — AI Usage Frequency",
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
        text: "How do you rate your AI proficiency?",
        type: "scale",
        min: 1,
        max: 5,
        pointsPerScale: 1,
        hint: "💡 Level 1: Beginner; Level 2: Basic; Level 3: Intermediate; Level 4: Proficient; Level 5: Expert"
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
        group: "Group 3 — Impact on Performance",
        text: "How much does AI increase your productivity?",
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
        group: "Group 3 — Impact on Performance",
        text: "How much time do you save by using AI in your work?",
        type: "single",
        options: [
            { text: "No savings", points: 0 },
            { text: "< 1h/day", points: 2 },
            { text: "1-2h/day", points: 3 },
            { text: "2-3h/day", points: 4 },
            { text: "> 3h/day", points: 5 }
        ],
        hint: "💡 Average time savings for AI users is 40-60 minutes/day."
    },
    {
        id: 8,
        group: "Group 4 — AI Mindset & Innovation",
        text: "Do you proactively learn about AI?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "Occasionally", points: 2 },
            { text: "Frequently", points: 4 },
            { text: "Always", points: 5 }
        ]
    },
    {
        id: 9,
        group: "Group 4 — AI Mindset & Innovation",
        text: "Do you share AI knowledge with colleagues?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "Occasionally", points: 2 },
            { text: "Frequently", points: 4 },
            { text: "Always", points: 5 }
        ]
    },
    {
        id: 10,
        group: "Group 4 — AI Mindset & Innovation",
        text: "Do you suggest AI applications in your work?",
        type: "single",
        options: [
            { text: "Never", points: 0 },
            { text: "Rarely", points: 2 },
            { text: "Occasionally", points: 3 },
            { text: "Frequently", points: 5 }
        ]
    },
    {
        id: 11,
        group: "Group 5 — Advanced AI Usage",
        text: "Which AI tools have you used?",
        type: "multiple",
        options: [
            { text: "ChatGPT", points: 1 },
            { text: "Claude", points: 1 },
            { text: "Gemini", points: 1 },
            { text: "DeepSeek", points: 1 },
            { text: "Copilot", points: 1 },
            { text: "Perplexity / NotebookLM", points: 1 },
            { text: "Midjourney / DALL-E 3", points: 1 },
            { text: "Runway / Descript", points: 1 },
            { text: "ElevenLabs / Suno", points: 1 },
            { text: "Notion AI", points: 1 },
            { text: "Grammarly / Wordtune", points: 1 },
            { text: "Zapier AI", points: 1 },
            { text: "Make AI", points: 1 },
            { text: "Cursor / Claude Code", points: 1 }
        ]
    },
    {
        id: 12,
        group: "Group 5 — Advanced AI Usage",
        text: "What have you done with AI?",
        type: "multiple",
        options: [
            { text: "No activities performed", points: 0, exclusive: true },
            { text: "Automation (single task)", points: 2 },
            { text: "Internal chatbot", points: 2 },
            { text: "AI workflow (automation sequence)", points: 2 },
            { text: "AI dashboard (smart reports)", points: 2 },
            { text: "AI training (internal training)", points: 2 },
            { text: "AI Agent / Autonomous assistants", points: 2 },
            { text: "RAG / Internal search", points: 2 },
            { text: "Fine-tuning / Training custom models", points: 2 },
            { text: "Multimodal AI (combining text, image, audio)", points: 2 },
            { text: "Data analysis / AI forecasting", points: 2 }
        ]
    }
];

let state = {
    step: 'intro',
    currentQuestionIndex: 0,
    user: { name: '', email: '', position: '' },
    answers: {}
};

// DOM references will be populated after DOM level
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
        dom.main.innerHTML = `<div class="card"><p>An error occurred while loading content. Please reload the page.</p></div>`;
    }
}

function renderIntro() {
    if (dom.progressWrapper) dom.progressWrapper.style.display = 'none';
    dom.main.innerHTML = `
        <div class="screen intro-screen text-center">
            <div class="card">
                <h1>AI Capability Scorecard</h1>
                <p class="description">
                    Artificial Intelligence (AI) is rapidly transforming the way organizations operate, with the potential to significantly enhance employee productivity, improve decision-making, and optimize daily workflows. As AI tools become increasingly integrated into workplace environments, understanding how employees use AI and how it impacts their performance is critical for organizations seeking to maximize efficiency and innovation.
                    <br><br>
                    This survey aims to assess employees’ current AI usage, proficiency levels, and the perceived impact of AI on work productivity. The results will help identify different AI capability levels across the organization and support the development of targeted training and AI adoption strategies to improve overall performance and future readiness.
                </p>
                <div class="benefits" style="text-align: left; margin-bottom: 2rem;">
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫 This survey made by Universitatea „Alexandru Ioan Cuza” din Iași</p>
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫 Survey questionnaire used in a scientific study published in an MDPI journal</p>
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫 Part of a study evaluating the impact of AI conducted by three researchers: Sabina-Cristiana Necula, Doina Fotache, and Emanuel Rieder.</p>
                    <p>🧑‍🏫 All questions in this survey have been localized and refined to suit businesses in Vietnam.</p>
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
                <p class="description">Please provide your information to store your results.</p>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="user-name" placeholder="John Doe" value="${state.user.name}">
                </div>
                <div class="form-group">
                    <label>Company Email</label>
                    <input type="email" id="user-email" placeholder="example@mail.com.vn" value="${state.user.email}">
                </div>
                <div class="form-group">
                    <label>Position / Department</label>
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
        alert('Please fill in both Name and Email!');
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
        
        // Logic for Question 12 hide/show
        let visibleOptions = q.options;
        if (q.id === 12) {
            const isNoneSelected = selectedIndices.some(idx => q.options[idx].exclusive);
            const isOtherSelected = selectedIndices.some(idx => !q.options[idx].exclusive);
            
            if (isNoneSelected) {
                // If None is selected, only show None
                visibleOptions = q.options.filter(opt => opt.exclusive);
            } else if (isOtherSelected) {
                // If others are selected, hide None
                visibleOptions = q.options.filter(opt => !opt.exclusive);
            }
        }

        optionsHtml = `<div class="options-list">
            ${visibleOptions.map((opt, i) => {
                const actualIndex = q.options.indexOf(opt);
                return `
                    <div class="option-item row-layout ${selectedIndices.includes(actualIndex) ? 'selected' : ''}" onclick="toggleOption(${q.id}, ${actualIndex}, this)">
                        <div style="flex-shrink: 0; margin-right: 15px; font-size: 1.2rem;">${selectedIndices.includes(actualIndex) ? '✅' : '⬜'}</div>
                        <div style="flex: 1; line-height: 1.4;">${opt.text}</div>
                    </div>
                `;
            }).join('')}
        </div>`;
    } else if (q.type === 'scale') {
        optionsHtml = `<div class="options-list" style="grid-template-columns: repeat(${q.max}, 1fr);">
            ${Array.from({length: q.max}, (_, i) => i + 1).map(val => `
                <div class="option-item text-center ${currentAnswer === val ? 'selected' : ''}" onclick="selectOption(${q.id}, ${val}, this)" style="justify-content: center;">
                    ${val}
                </div>
            `).join('')}
        </div>`;
    }

    if (q.hint) {
        optionsHtml += `<div style="margin-top: 1.5rem; padding: 0.75rem 1rem; background: rgba(241, 110, 46, 0.1); border-left: 4px solid var(--primary-color); border-radius: 8px; font-size: 0.9rem; color: #EEE;">
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
    
    // Smoothly update UI without full re-render to prevent flashing
    const parent = element.parentElement;
    parent.querySelectorAll('.option-item').forEach(item => {
        item.classList.remove('selected');
    });
    element.classList.add('selected');

    // Update the Next button state
    const nextBtn = document.querySelector('.btn-primary');
    if (nextBtn) nextBtn.disabled = false;
}

function toggleOption(qId, index, element) {
    const q = QUESTIONS.find(question => question.id === qId);
    let current = state.answers[qId] || [];
    const option = q.options[index];

    if (current.includes(index)) {
        current = current.filter(i => i !== index);
        element.classList.remove('selected');
    } else {
        // Mutual exclusivity logic
        if (option.exclusive) {
            current = [index]; // If exclusive picked, clear others
        } else {
            // If non-exclusive picked, remove any exclusive options
            current = [...current.filter(i => !q.options[i].exclusive), index];
        }
    }
    state.answers[qId] = current;
    
    // Re-render question to handle hiding/showing of other options
    renderQuestion();
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

        if (q.type === 'single') {
            total += q.options[ans].points;
        } else if (q.type === 'multiple') {
            let qPoints = ans.reduce((sum, idx) => sum + q.options[idx].points, 0);
            if (q.maxPoints) qPoints = Math.min(qPoints, q.maxPoints);
            total += qPoints;
        } else if (q.type === 'scale') {
            total += (ans * q.pointsPerScale);
        }
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
                <p style="margin-top: 1.5rem; font-size: 1.5rem; font-weight: 700; color: var(--primary-color);">${level.desc}</p>
                
                <div class="result-details" style="text-align: left; margin-top: 2rem;">
                    <div class="result-section" style="margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1rem; color: #FFF; margin-bottom: 0.5rem; display: flex; align-items: center;">
                            <span style="margin-right: 8px;">📊</span> Capability Assessment
                        </h3>
                        <p style="font-size: 0.95rem; color: #BBB; line-height: 1.6;">${level.assessment}</p>
                    </div>

                    <div class="result-section" style="margin-bottom: 1.5rem; padding: 1.2rem; background: rgba(241, 110, 46, 0.1); border-left: 4px solid var(--primary-color); border-radius: 0 12px 12px 0;">
                        <h3 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 0.5rem; display: flex; align-items: center;">
                            <span style="margin-right: 8px;">💡</span> Advice
                        </h3>
                        <p style="font-size: 0.95rem; color: #EEE; font-style: italic;">${level.advice}</p>
                    </div>

                    <div class="result-section" style="padding: 1.2rem; background: rgba(255, 255, 255, 0.05); border: 1px dashed rgba(255,255,255,0.2); border-radius: 12px;">
                        <h3 style="font-size: 1rem; color: #FFF; margin-bottom: 0.8rem; display: flex; align-items: center;">
                            <span style="margin-right: 8px;">🚀</span> Action Plan
                        </h3>
                        <p style="font-size: 0.95rem; color: #FFF; line-height: 1.6;">${level.actionPlan}</p>
                    </div>
                </div>

                <hr style="margin: 2.5rem 0; opacity: 0.1;">
                <p class="description">Your data has been securely stored.</p>
                <button class="btn btn-primary" onclick="location.reload()">Retake Survey</button>
            </div>
        </div>
    `;
}

async function submitToSheets() {
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

    QUESTIONS.forEach(q => {
        const ans = state.answers[q.id];
        let displayAns = '';
        if (q.type === 'single') {
            displayAns = q.options[ans]?.text || '';
        } else if (q.type === 'multiple') {
            displayAns = (ans || []).map(idx => q.options[idx].text).join(', ');
        } else if (q.type === 'scale') {
            displayAns = ans || '';
        }
        data[`Q${q.id}`] = displayAns;
    });

    try {
        await fetch(CONFIG.SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        console.log('Submitted successfully');
    } catch (e) {
        console.error('Error submitting:', e);
    }
}

// Ensure the code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    dom.main = document.getElementById('main-content');
    dom.progressBar = document.getElementById('progress-bar');
    dom.progressWrapper = document.getElementById('progress-bar-wrapper');

    // Run the initial render
    if (dom.main) {
        render();
    } else {
        console.error("Critical Error: Main content container not found.");
    }
});
