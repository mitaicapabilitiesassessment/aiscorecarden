const CONFIG = {
    // [PLACEHOLDER] Update this with your new Google Apps Script Web App URL
    SCRIPT_URL: 'YOUR_NEW_SCRIPT_URL_HERE',
    LEVELS: [
    { 
        min: 0, max: 10, name: 'AI Beginner', 
        desc: 'Cấp độ: Chưa sử dụng AI',
        descEn: 'Level: No AI Usage',
        assessment: 'Bạn đang ở vạch xuất phát. Bạn có thể chưa từng tương tác với các mô hình ngôn ngữ lớn hoặc mới chỉ nghe nói về AI mà chưa thực hành.',
        assessmentEn: "You are at the starting line. You may haven't interacted with large language models yet or have only heard about AI without practicing.",
        advice: 'Hãy thử nghiệm các câu hỏi cơ bản trên các công cụ AI phổ biến hiện nay như ChatGPT, Gemini hoặc Claude.',
        adviceEn: 'Try out basic questions on popular AI tools like ChatGPT, Gemini, or Claude.',
        actionPlan: 'Tạo tài khoản miễn phí trên ChatGPT hoặc Claude.ai. Dành 10 phút mỗi ngày để hỏi bất kỳ điều gì bạn thắc mắc.',
        actionPlanEn: "Create a free account on ChatGPT or Claude.ai. Spend 10 minutes daily asking anything you're curious about."
    },
    { 
        min: 11, max: 20, name: 'AI Explorer', 
        desc: 'Cấp độ: Bắt đầu khám phá AI',
        descEn: 'Level: Starting to explore AI',
        assessment: 'Bạn đã vượt qua rào cản tâm lý ban đầu. Bạn biết cách đặt câu hỏi cho AI nhưng phong cách sử dụng còn ngẫu hứng.',
        assessmentEn: 'You have overcome the initial psychological barrier. You know how to ask AI questions, but your usage style is still spontaneous.',
        advice: 'Hãy thử ứng dụng AI vào việc soạn thảo email hoặc tóm tắt tài liệu để tiết kiệm thời gian hàng ngày.',
        adviceEn: 'Try applying AI to drafting emails or summarizing documents to save time daily.',
        actionPlan: 'Biến AI thành trợ lý cá nhân. Khi cần viết email, hãy dùng prompt: "Soạn giúp tôi một email lịch sự về [nội dung]".',
        actionPlanEn: 'Turn AI into a personal assistant. When writing emails, use a prompt like: "Help me draft a polite email about [content]."'
    },
    { 
        min: 21, max: 35, name: 'AI Practitioner', 
        desc: 'Cấp độ: Sử dụng AI thường xuyên',
        descEn: 'Level: Frequent AI Usage',
        assessment: 'Bạn đã tích hợp AI vào guồng quay công việc hàng ngày. Bạn hiểu rằng AI không phải lúc nào cũng đúng.',
        assessmentEn: 'You have integrated AI into your daily workflow. You understand that AI is not always right.',
        advice: 'Hãy tìm hiểu sâu về kỹ thuật viết Prompt (Prompt Engineering) để nâng cao chất lượng đầu ra.',
        adviceEn: 'Deepen your knowledge of Prompt Engineering to improve output quality.',
        actionPlan: 'Học cấu trúc prompt: "Vai trò - Ngữ cảnh - Yêu cầu - Định dạng đầu ra".',
        actionPlanEn: 'Learn the prompt structure: "Role - Context - Task - Output Format".'
    },
    { 
        min: 36, max: 50, name: 'AI Advanced', 
        desc: 'Cấp độ: Sử dụng AI chuyên sâu',
        descEn: 'Level: Deep AI Usage',
        assessment: 'Bạn không chỉ đặt câu hỏi hay mà còn biết cách cung cấp dữ liệu và ngữ cảnh phức tạp cho AI.',
        assessmentEn: 'You not only ask good questions but also know how to provide complex data and context to AI.',
        advice: 'Hãy bắt đầu xây dựng các quy trình tự động hóa (Workflow) để tối ưu các tác vụ phức tạp.',
        adviceEn: 'Start building automated workflows to optimize complex tasks.',
        actionPlan: 'Kết hợp AI với các công cụ tự động hóa (Zapier, Make.com). Thử thách: Tạo workflow tự động tóm tắt báo cáo.',
        actionPlanEn: 'Combine AI with automation tools (Zapier, Make.com). Challenge: Create an automated report summary workflow.'
    },
    { 
        min: 51, max: 60, name: 'AI Leader', 
        desc: 'Cấp độ: Dẫn đầu xu hướng ứng dụng AI',
        descEn: 'Level: Leading AI Adoption Trends',
        assessment: 'Bạn là người tiên phong trong tổ chức. Bạn hiểu rõ giới hạn và rủi ro của AI cũng như cách tối ưu nó.',
        assessmentEn: 'You are a pioneer in the organization. You clearly understand AI limits, risks, and optimization methods.',
        advice: 'Chúc mừng chuyên gia! Bạn nên dẫn dắt đội nhóm và thiết kế chiến lược ứng dụng AI toàn diện.',
        adviceEn: 'Congratulations, expert! You should lead teams and design a comprehensive AI adoption strategy.',
        actionPlan: 'Xây dựng "Thư viện Prompt Mẫu" cho phòng ban. Nghiên cứu các mô hình AI tùy chỉnh (Custom GPTs).',
        actionPlanEn: 'Build a "Prompt Template Library" for your department. Research custom AI models (Custom GPTs).'
    }
    ]
};

const QUESTIONS = [
    {
        id: 1,
        group: "Nhóm 1 — Mức độ sử dụng AI",
        groupEn: "Group 1 — AI Usage Level",
        text: "Bạn sử dụng AI trong công việc với tần suất như thế nào?",
        textEn: "How often do you use AI in your work?",
        type: "single",
        options: [
            { text: "Không bao giờ", textEn: "Never", points: 0 },
            { text: "Thỉnh thoảng", textEn: "Sometimes", points: 2 },
            { text: "Thường xuyên", textEn: "Frequently", points: 4 },
            { text: "Luôn luôn", textEn: "Always", points: 5 }
        ]
    },
    {
        id: 2,
        group: "Nhóm 1 — Mức độ sử dụng AI",
        groupEn: "Group 1 — AI Usage Level",
        text: "Bạn sử dụng AI cho bao nhiêu loại công việc?",
        textEn: "For how many types of tasks do you use AI?",
        type: "single",
        options: [
            { text: "Không sử dụng", textEn: "No usage", points: 0 },
            { text: "1-2 công việc", textEn: "1-2 tasks", points: 2 },
            { text: "3-5 công việc", textEn: "3-5 tasks", points: 3 },
            { text: "> 5 công việc", textEn: "> 5 tasks", points: 5 }
        ]
    },
    {
        id: 3,
        group: "Nhóm 1 — Mức độ sử dụng AI",
        groupEn: "Group 1 — AI Usage Level",
        text: "Bạn đã sử dụng AI bao lâu?",
        textEn: "How long have you been using AI?",
        type: "single",
        options: [
            { text: "Chưa từng", textEn: "Never", points: 0 },
            { text: "< 3 tháng", textEn: "< 3 months", points: 1 },
            { text: "3-6 tháng", textEn: "3-6 months", points: 2 },
            { text: "6-12 tháng", textEn: "6-12 months", points: 3 },
            { text: "> 1 năm", textEn: "> 1 year", points: 5 }
        ]
    },
    {
        id: 4,
        group: "Nhóm 2 — Mức độ thành thạo AI",
        groupEn: "Group 2 — AI Proficiency",
        text: "Bạn đánh giá mức độ thành thạo AI của mình ở mức nào?",
        textEn: "How would you rate your AI proficiency?",
        type: "scale",
        min: 1,
        max: 5,
        pointsPerScale: 1,
        hint: "💡 Lvl 1: Mới bắt đầu; Lvl 2: Cơ bản; Lvl 3: Trung bình; Lvl 4: Thành thạo; Lvl 5: Chuyên gia",
        hintEn: "💡 Lvl 1: Beginner; Lvl 2: Basic; Lvl 3: Intermediate; Lvl 4: Proficient; Lvl 5: Expert"
    },
    {
        id: 5,
        group: "Nhóm 2 — Mức độ thành thạo AI",
        groupEn: "Group 2 — AI Proficiency",
        text: "Bạn có thể làm gì với AI?",
        textEn: "What can you do with AI?",
        type: "multiple",
        options: [
            { text: "Viết email", textEn: "Write emails", points: 1 },
            { text: "Tạo nội dung", textEn: "Create content", points: 1 },
            { text: "Phân tích dữ liệu", textEn: "Analyze data", points: 2 },
            { text: "Viết prompt nâng cao", textEn: "Write advanced prompts", points: 2 },
            { text: "Tự động hóa", textEn: "Automation", points: 3 },
            { text: "Tạo workflow AI", textEn: "Create AI workflows", points: 4 }
        ],
        maxPoints: 10
    },
    {
        id: 6,
        group: "Nhóm 3 — Tác động đến hiệu suất",
        groupEn: "Group 3 — Performance Impact",
        text: "AI giúp gia tăng hiệu suất như thế nào?",
        textEn: "How much has AI increased your productivity?",
        type: "single",
        options: [
            { text: "0-20%", textEn: "0-20%", points: 1 },
            { text: "20-40%", textEn: "20-40%", points: 2 },
            { text: "40-60%", textEn: "40-60%", points: 3 },
            { text: "60-80%", textEn: "60-80%", points: 4 },
            { text: "80-100%", textEn: "80-100%", points: 5 }
        ]
    },
    {
        id: 7,
        group: "Nhóm 3 — Tác động đến hiệu suất",
        groupEn: "Group 3 — Performance Impact",
        text: "Bạn tiết kiệm bao nhiêu thời gian khi ứng dụng AI?",
        textEn: "How much time do you save by using AI?",
        type: "single",
        options: [
            { text: "Không tiết kiệm", textEn: "No time saved", points: 0 },
            { text: "< 1h/ngày", textEn: "< 1h/day", points: 2 },
            { text: "1-2h/ngày", textEn: "1-2h/day", points: 3 },
            { text: "2-3h/ngày", textEn: "2-3h/day", points: 4 },
            { text: "> 3h/ngày", textEn: "> 3h/day", points: 5 }
        ],
        hint: "💡 Tiết kiệm trung bình là 40-60 phút/ngày.",
        hintEn: "💡 Average savings are 40-60 minutes/day."
    },
    {
        id: 8,
        group: "Nhóm 4 — AI Mindset & Innovation",
        groupEn: "Group 4 — AI Mindset & Innovation",
        text: "Bạn có chủ động tìm hiểu AI?",
        textEn: "Do you proactively learn about AI?",
        type: "single",
        options: [
            { text: "Chưa bao giờ", textEn: "Never", points: 0 },
            { text: "Thỉnh thoảng", textEn: "Sometimes", points: 2 },
            { text: "Thường xuyên", textEn: "Frequently", points: 4 },
            { text: "Luôn luôn", textEn: "Always", points: 5 }
        ]
    },
    {
        id: 9,
        group: "Nhóm 4 — AI Mindset & Innovation",
        groupEn: "Group 4 — AI Mindset & Innovation",
        text: "Bạn có chia sẻ AI cho đồng nghiệp?",
        textEn: "Do you share AI tips with colleagues?",
        type: "single",
        options: [
            { text: "Chưa bao giờ", textEn: "Never", points: 0 },
            { text: "Thỉnh thoảng", textEn: "Sometimes", points: 2 },
            { text: "Thường xuyên", textEn: "Frequently", points: 4 },
            { text: "Luôn luôn", textEn: "Always", points: 5 }
        ]
    },
    {
        id: 10,
        group: "Nhóm 4 — AI Mindset & Innovation",
        groupEn: "Group 4 — AI Mindset & Innovation",
        text: "Bạn có đề xuất ứng dụng AI?",
        textEn: "Do you suggest AI applications at work?",
        type: "single",
        options: [
            { text: "Chưa bao giờ", textEn: "Never", points: 0 },
            { text: "Rất Ít", textEn: "Rarely", points: 2 },
            { text: "Thỉnh thoảng", textEn: "Sometimes", points: 3 },
            { text: "Thường xuyên", textEn: "Frequently", points: 5 }
        ]
    },
    {
        id: 11,
        group: "Nhóm 5 — AI nâng cao",
        groupEn: "Group 5 — Advanced AI",
        text: "Bạn đã sử dụng công cụ AI nào?",
        textEn: "Which AI tools have you used?",
        type: "multiple",
        options: [
            { text: "ChatGPT", textEn: "ChatGPT", points: 1 },
            { text: "Claude", textEn: "Claude", points: 1 },
            { text: "Gemini", textEn: "Gemini", points: 1 },
            { text: "Copilot", textEn: "Copilot", points: 1 },
            { text: "Perplexity", textEn: "Perplexity", points: 1 },
            { text: "Midjourney", textEn: "Midjourney", points: 1 },
            { text: "Automation Tools", textEn: "Automation Tools", points: 1 }
        ]
    },
    {
        id: 12,
        group: "Nhóm 5 — AI nâng cao",
        groupEn: "Group 5 — Advanced AI",
        text: "Bạn đã làm gì với AI nâng cao?",
        textEn: "What advanced things have you done with AI?",
        type: "multiple",
        options: [
            { text: "Automation", textEn: "Automation", points: 2 },
            { text: "AI Workflow", textEn: "AI Workflow", points: 2 },
            { text: "Internal Chatbot", textEn: "Internal Chatbot", points: 2 },
            { text: "Data Analysis", textEn: "Data Analysis", points: 2 },
            { text: "Custom GPTs", textEn: "Custom GPTs", points: 2 }
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

function t(vi, en) {
    return `<div>${vi}</div><div class="secondary-lang">${en}</div>`;
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
        dom.main.innerHTML = `<div class="card"><p>Có lỗi xảy ra. | An error occurred.</p></div>`;
    }
}

function renderIntro() {
    if (dom.progressWrapper) dom.progressWrapper.style.display = 'none';
    dom.main.innerHTML = `
        <div class="screen intro-screen text-center">
            <div class="card">
                <h1>AI Capability Scorecard</h1>
                <p class="description">
                    ${t("Trí tuệ nhân tạo (AI) đang thay đổi nhanh chóng cách thức hoạt động của các tổ chức, với tiềm năng nâng cao đáng kể năng suất của nhân viên, cải thiện việc ra quyết định và tối ưu hóa quy trình làm việc hàng ngày.", 
                      "Artificial Intelligence (AI) is rapidly transforming the way organizations operate, with the potential to significantly enhance employee productivity and optimize daily workflows.")}
                </p>
                <div class="benefits" style="text-align: left; margin-bottom: 2rem;">
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫 ${t("Khảo sát thực hiện bởi Universitatea „Alexandru Ioan Cuza” din Iași", "Survey made by Universitatea „Alexandru Ioan Cuza” din Iași")}</p>
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫 ${t("Câu hỏi dựa trên nghiên cứu khoa học công bố trên tạp chí MDPI", "Questionnaire based on a scientific study published in MDPI journal")}</p>
                </div>
                <button class="btn btn-primary w-100" onclick="setState({ step: 'info' })">${t("Bắt đầu khảo sát", "Start Survey")}</button>
            </div>
        </div>
    `;
}

function renderInfoForm() {
    dom.main.innerHTML = `
        <div class="screen info-screen">
            <div class="card">
                <h2>${t("Thông tin cá nhân", "Personal Information")}</h2>
                <p class="description">${t("Vui lòng cung cấp thông tin để lưu trữ kết quả.", "Please provide information to save your results.")}</p>
                <div class="form-group">
                    <label>${t("Họ và tên", "Full Name")}</label>
                    <input type="text" id="user-name" placeholder="Nguyễn Văn A" value="${state.user.name}">
                </div>
                <div class="form-group">
                    <label>${t("Email", "Email")}</label>
                    <input type="email" id="user-email" placeholder="example@email.com" value="${state.user.email}">
                </div>
                <div class="form-group">
                    <label>${t("Chức vụ", "Position")}</label>
                    <input type="text" id="user-position" placeholder="Marketing / Sales..." value="${state.user.position}">
                </div>
                <button class="btn btn-primary w-100" id="start-btn" onclick="handleInfoSubmit()">${t("Tiếp tục", "Continue")}</button>
            </div>
        </div>
    `;
}

function handleInfoSubmit() {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const position = document.getElementById('user-position').value;

    if (!name || !email) {
        alert('Vui lòng điền thông tin! | Please fill in the information!');
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
                    ${t(opt.text, opt.textEn)}
                </div>
            `).join('')}
        </div>`;
    } else if (q.type === 'multiple') {
        const selectedIndices = currentAnswer || [];
        optionsHtml = `<div class="options-list">
            ${q.options.map((opt, i) => `
                <div class="option-item ${selectedIndices.includes(i) ? 'selected' : ''} row-layout" onclick="toggleOption(${q.id}, ${i}, this)">
                    <div style="margin-right: 15px;">${selectedIndices.includes(i) ? '✅' : '⬜'}</div>
                    <div>${t(opt.text, opt.textEn)}</div>
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
            ${t(q.hint, q.hintEn)}
        </div>`;
    }

    dom.main.innerHTML = `
        <div class="screen question-screen">
            <div class="group-label" style="color: var(--primary-color); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                ${t(q.group, q.groupEn)} (${state.currentQuestionIndex + 1}/${QUESTIONS.length})
            </div>
            <div class="card">
                <h2>${t(q.text, q.textEn)}</h2>
                ${optionsHtml}
                <div class="button-group">
                    <button class="btn" style="background: #333; color: white;" onclick="prevQuestion()">${t("Quay lại", "Back")}</button>
                    <button class="btn btn-primary" onclick="nextQuestion()" ${currentAnswer === undefined || (q.type === 'multiple' && currentAnswer.length === 0) ? 'disabled' : ''}>${state.currentQuestionIndex === QUESTIONS.length - 1 ? t('Hoàn thành', 'Finish') : t('Tiếp theo', 'Next')}</button>
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
                <h2>${t("Kết quả của bạn", "Your Results")}</h2>
                <div class="score-circle">
                    <span class="score-value">${score}</span>
                    <span style="font-size: 0.8rem; font-weight: 500;">/ 60 ${t("ĐIỂM", "POINTS")}</span>
                </div>
                <div class="level-badge">${level.name}</div>
                <p style="margin-top: 1.5rem; font-size: 1.2rem; font-weight: 700; color: var(--primary-color);">${t(level.desc, level.descEn)}</p>
                
                <div class="result-details" style="text-align: left; margin-top: 2rem;">
                    <div class="result-section" style="margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1rem; color: #FFF; margin-bottom: 0.5rem;">📊 ${t("Đánh giá năng lực", "Capability Assessment")}</h3>
                        <p style="font-size: 0.95rem; color: #BBB;">${t(level.assessment, level.assessmentEn)}</p>
                    </div>
                    <div class="result-section" style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(241, 110, 46, 0.1); border-left: 4px solid var(--primary-color); border-radius: 8px;">
                        <h3 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 0.5rem;">💡 ${t("Lời khuyên", "Advice")}</h3>
                        <p style="font-size: 0.95rem; color: #EEE; font-style: italic;">${t(level.advice, level.adviceEn)}</p>
                    </div>
                    <div class="result-section" style="padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 8px;">
                        <h3 style="font-size: 1rem; color: #FFF; margin-bottom: 0.5rem;">🚀 ${t("Kế hoạch hành động", "Action Plan")}</h3>
                        <p style="font-size: 0.95rem; color: #FFF;">${t(level.actionPlan, level.actionPlanEn)}</p>
                    </div>
                </div>
                <button class="btn btn-primary" style="margin-top: 2rem;" onclick="location.reload()">${t("Làm lại", "Retake Survey")}</button>
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
