/**
 * 金融学习计划网站 - 主JavaScript文件
 * 功能：主题切换、导航、练习生成、进度跟踪等
 */

// DOM元素引用
const themeToggle = document.getElementById('theme-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const practiceGenerator = document.getElementById('practice-generator');
const practiceContainer = document.getElementById('practice-container');
const checkAnswerBtn = document.getElementById('check-answer');
const showAnswerBtn = document.getElementById('show-answer');
const nextPracticeBtn = document.getElementById('next-practice');
const progressBars = document.querySelectorAll('.progress-bar');
const setGoalBtn = document.getElementById('set-goal');
const goalInput = document.getElementById('goal-input');
const goalDisplay = document.getElementById('goal-display');
const materialViewer = document.getElementById('material-viewer');
const materialTitle = document.getElementById('material-title');
const materialContent = document.getElementById('material-content');
const closeMaterialBtn = document.getElementById('close-material');
const materialLinks = document.querySelectorAll('.material-link');

// 状态管理
let currentTheme = localStorage.getItem('theme') || 'light';
let currentPractice = null;
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {
    completedWeeks: 0,
    completedDays: 0,
    totalPractice: 0,
    correctAnswers: 0,
    dailyGoal: '完成第1周学习'
};

// 练习题库（第1-4周）
const practiceQuestions = {
    week1: [
        {
            id: 1,
            question: "什么是资产负债表？",
            options: [
                "A. 显示公司收入和支出的报表",
                "B. 显示公司资产、负债和所有者权益的报表", 
                "C. 显示公司现金流量的报表",
                "D. 显示公司利润的报表"
            ],
            correctAnswer: 1,
            explanation: "资产负债表是显示公司在特定时间点的资产、负债和所有者权益的财务报表。"
        },
        {
            id: 2,
            question: "利润表的主要组成部分是什么？",
            options: [
                "A. 资产、负债、所有者权益",
                "B. 收入、费用、利润",
                "C. 现金流入、现金流出",
                "D. 投资、融资、经营"
            ],
            correctAnswer: 1,
            explanation: "利润表显示公司在一定期间内的收入、费用和利润情况。"
        },
        {
            id: 3,
            question: "现金流量表分为哪三个部分？",
            options: [
                "A. 经营、投资、融资活动",
                "B. 收入、支出、利润",
                "C. 资产、负债、权益",
                "D. 现金、银行、投资"
            ],
            correctAnswer: 0,
            explanation: "现金流量表分为经营活动、投资活动和融资活动三个部分。"
        },
        {
            id: 4,
            question: "什么是复利？",
            options: [
                "A. 只计算本金的利息",
                "B. 计算本金和之前利息的利息",
                "C. 固定利率的利息",
                "D. 单次支付的利息"
            ],
            correctAnswer: 1,
            explanation: "复利是指利息不仅计算在本金上，还计算在之前累积的利息上。"
        },
        {
            id: 5,
            question: "市盈率（P/E Ratio）的计算公式是什么？",
            options: [
                "A. 股价 ÷ 每股收益",
                "B. 市值 ÷ 净利润",
                "C. 股息 ÷ 股价",
                "D. 资产 ÷ 负债"
            ],
            correctAnswer: 0,
            explanation: "市盈率 = 股价 ÷ 每股收益，用于评估股票估值水平。"
        }
    ],
    week2: [
        {
            id: 6,
            question: "什么是投资组合分散化？",
            options: [
                "A. 将所有资金投入一只股票",
                "B. 投资多种不同类型的资产以降低风险",
                "C. 只投资债券市场",
                "D. 集中投资高收益资产"
            ],
            correctAnswer: 1,
            explanation: "投资组合分散化是通过投资多种不相关或负相关的资产来降低整体风险。"
        },
        {
            id: 7,
            question: "债券的到期收益率（YTM）是什么？",
            options: [
                "A. 债券的票面利率",
                "B. 持有债券至到期日的预期总回报率",
                "C. 债券的市场价格",
                "D. 债券的信用评级"
            ],
            correctAnswer: 1,
            explanation: "到期收益率是假设债券持有至到期日并按期支付利息的情况下，投资者的预期总回报率。"
        }
    ]
};

// 学习材料数据
const learningMaterials = {
    week1: {
        title: "第1周：财务报表基础",
        content: `
            <h2>财务报表基础</h2>
            <h3>1. 资产负债表</h3>
            <p>资产负债表显示公司在特定时间点的财务状况，遵循会计等式：</p>
            <p><strong>资产 = 负债 + 所有者权益</strong></p>
            
            <h4>主要组成部分：</h4>
            <ul>
                <li><strong>流动资产</strong>：现金、应收账款、存货等</li>
                <li><strong>非流动资产</strong>：固定资产、无形资产、长期投资等</li>
                <li><strong>流动负债</strong>：应付账款、短期借款等</li>
                <li><strong>非流动负债</strong>：长期借款、债券等</li>
                <li><strong>所有者权益</strong>：股本、留存收益等</li>
            </ul>
            
            <h3>2. 利润表</h3>
            <p>利润表显示公司在一定期间内的经营成果：</p>
            <p><strong>收入 - 费用 = 净利润</strong></p>
            
            <h4>关键指标：</h4>
            <ul>
                <li><strong>毛利率</strong> = (收入 - 销售成本) ÷ 收入</li>
                <li><strong>营业利润率</strong> = 营业利润 ÷ 收入</li>
                <li><strong>净利润率</strong> = 净利润 ÷ 收入</li>
            </ul>
            
            <h3>3. 现金流量表</h3>
            <p>现金流量表显示公司现金的流入和流出情况：</p>
            
            <h4>三个部分：</h4>
            <ul>
                <li><strong>经营活动现金流</strong>：主营业务产生的现金流</li>
                <li><strong>投资活动现金流</strong>：资本支出、投资等</li>
                <li><strong>融资活动现金流</strong>：借款、还款、分红等</li>
            </ul>
        `
    },
    week2: {
        title: "第2周：投资基础",
        content: `
            <h2>投资基础</h2>
            <h3>1. 复利的力量</h3>
            <p>复利计算公式：</p>
            <p><strong>A = P(1 + r/n)^(nt)</strong></p>
            <p>其中：</p>
            <ul>
                <li>A = 最终金额</li>
                <li>P = 本金</li>
                <li>r = 年利率</li>
                <li>n = 每年复利次数</li>
                <li>t = 投资年数</li>
            </ul>
            
            <h3>2. 风险与回报</h3>
            <p>投资的基本原则：高风险通常伴随高回报。</p>
            
            <h4>常见投资工具：</h4>
            <ul>
                <li><strong>股票</strong>：高风险高回报，代表公司所有权</li>
                <li><strong>债券</strong>：较低风险固定收益，代表债务</li>
                <li><strong>基金</strong>：分散投资，专业管理</li>
                <li><strong>ETF</strong>：交易所交易基金，流动性好</li>
            </ul>
            
            <h3>3. 投资组合理论</h3>
            <p>现代投资组合理论强调通过分散化降低风险：</p>
            <ul>
                <li>不要把所有鸡蛋放在一个篮子里</li>
                <li>选择相关性低的资产组合</li>
                <li>根据风险承受能力调整资产配置</li>
            </ul>
        `
    }
};

// 初始化函数
function init() {
    // 应用保存的主题
    applyTheme(currentTheme);
    
    // 更新主题切换按钮
    updateThemeToggle();
    
    // 加载用户进度
    loadProgress();
    
    // 设置事件监听器
    setupEventListeners();
    
    // 生成第一个练习
    generatePractice('week1');
    
    console.log('网站初始化完成');
}

// 应用主题
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

// 更新主题切换按钮
function updateThemeToggle() {
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
            text.textContent = '亮色模式';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = '暗色模式';
        }
    }
}

// 加载用户进度
function loadProgress() {
    // 更新进度条
    updateProgressBars();
    
    // 显示目标
    if (goalDisplay && userProgress.dailyGoal) {
        goalDisplay.textContent = userProgress.dailyGoal;
    }
}

// 更新进度条
function updateProgressBars() {
    progressBars.forEach(bar => {
        const progressId = bar.getAttribute('data-progress');
        let value = 0;
        
        switch(progressId) {
            case 'weeks':
                value = Math.min((userProgress.completedWeeks / 12) * 100, 100);
                break;
            case 'days':
                value = Math.min((userProgress.completedDays / 84) * 100, 100);
                break;
            case 'practice':
                value = userProgress.totalPractice > 0 
                    ? (userProgress.correctAnswers / userProgress.totalPractice) * 100 
                    : 0;
                break;
        }
        
        bar.style.width = `${value}%`;
        bar.setAttribute('aria-valuenow', value);
        
        // 更新文本显示
        const textElement = bar.parentElement.querySelector('.progress-text');
        if (textElement) {
            switch(progressId) {
                case 'weeks':
                    textElement.textContent = `${userProgress.completedWeeks}/12 周`;
                    break;
                case 'days':
                    textElement.textContent = `${userProgress.completedDays}/84 天`;
                    break;
                case 'practice':
                    textElement.textContent = `${userProgress.correctAnswers}/${userProgress.totalPractice} 正确`;
                    break;
            }
        }
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 主题切换
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 移动菜单切换
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // 导航链接平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // 练习生成器
    if (practiceGenerator) {
        practiceGenerator.addEventListener('change', handlePracticeChange);
    }
    
    // 答案检查
    if (checkAnswerBtn) {
        checkAnswerBtn.addEventListener('click', checkAnswer);
    }
    
    // 显示答案
    if (showAnswerBtn) {
        showAnswerBtn.addEventListener('click', showAnswer);
    }
    
    // 下一个练习
    if (nextPracticeBtn) {
        nextPracticeBtn.addEventListener('click', nextPractice);
    }
    
    // 设置目标
    if (setGoalBtn && goalInput) {
        setGoalBtn.addEventListener('click', setDailyGoal);
    }
    
    // 关闭学习材料
    if (closeMaterialBtn) {
        closeMaterialBtn.addEventListener('click', closeMaterialViewer);
    }
    
    // 学习材料链接
    materialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const week = link.getAttribute('data-week');
            openMaterialViewer(week);
        });
    });
    
    // 点击模态框外部关闭
    if (materialViewer) {
        materialViewer.addEventListener('click', (e) => {
            if (e.target === materialViewer) {
                closeMaterialViewer();
            }
        });
    }
    
    // 键盘快捷键
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// 切换主题
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    updateThemeToggle();
}

// 切换移动菜单
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    
    if (mobileMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
    } else {
        icon.className = 'fas fa-bars';
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
}

// 平滑滚动
function smoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    
    // 关闭移动菜单（如果打开）
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
    
    // 滚动到目标
    targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// 处理练习选择变化
function handlePracticeChange(e) {
    const week = e.target.value;
    generatePractice(week);
}

// 生成练习
function generatePractice(week) {
    if (!practiceContainer) return;
    
    const questions = practiceQuestions[week];
    if (!questions || questions.length === 0) {
        practiceContainer.innerHTML = '<p class="no-practice">本周暂无练习题</p>';
        currentPractice = null;
        return;
    }
    
    // 随机选择一个问题
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentPractice = questions[randomIndex];
    
    // 生成HTML
    let html = `
        <div class="practice-question">
            <h3>练习题 #${currentPractice.id}</h3>
            <p class="question-text">${currentPractice.question}</p>
            <div class="options">
    `;
    
    currentPractice.options.forEach((option, index) => {
        html += `
            <div class="option">
                <input type="radio" id="option-${index}" name="practice-answer" value="${index}">
                <label for="option-${index}">${option}</label>
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="explanation" id="practice-explanation" style="display: none;">
                <h4>答案解析：</h4>
                <p>${currentPractice.explanation}</p>
            </div>
        </div>
    `;
    
    practiceContainer.innerHTML = html;
    
    // 重置按钮状态
    if (checkAnswerBtn) checkAnswerBtn.disabled = false;
    if (showAnswerBtn) showAnswerBtn.disabled = false;
    
    // 隐藏解释
    const explanationEl = document.getElementById('practice-explanation');
    if (explanationEl) explanationEl.style.display = 'none';
}

// 检查答案
function checkAnswer() {
    if (!currentPractice) return;
    
    const selectedOption = document.querySelector('input[name="practice-answer"]:checked');
    if (!selectedOption) {
        alert('请先选择一个答案！');
        return;
    }
    
    const userAnswer = parseInt(selectedOption.value);
    const isCorrect = userAnswer === currentPractice.correctAnswer;
    
    // 更新进度
    userProgress.totalPractice++;
    if (isCorrect) userProgress.correctAnswers++;
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
    
    // 显示结果
    const explanationEl = document.getElementById('practice-explanation');
    if (explanationEl) {
        explanationEl.style.display = 'block';
        explanationEl.innerHTML = `
            <h4>${isCorrect ? '✅ 回答正确！' : '❌ 回答错误'}</h4>
            <p><strong>正确答案：</strong>${currentPractice.options[currentPractice.correctAnswer]}</p>
            <p><strong>解析：</strong>${currentPractice.explanation}</p>
        `;
    }
    
    // 禁用检查按钮
    if (checkAnswerBtn) checkAnswerBtn.disabled = true;
    
    // 更新进度条
    updateProgressBars();
}

// 显示答案
function showAnswer() {
    if (!currentPractice) return;
    
    const explanationEl = document.getElementById('practice-explanation');
    if (explanationEl) {
        explanationEl.style.display = 'block';
        explanationEl.innerHTML = `
            <h4>正确答案：</h4>
            <p><strong>${currentPractice.options[currentPractice.correctAnswer]}</strong></p>
            <p><strong>解析：</strong>${currentPractice.explanation}</p>
        `;
    }
    
    // 禁用按钮
    if (checkAnswerBtn) checkAnswerBtn.disabled = true;
    if (showAnswerBtn) showAnswerBtn.disabled = true;
}

// 下一个练习
function nextPractice() {
    if (!practiceGenerator) return;
    
    const currentWeek = practiceGenerator.value;
    generatePractice(currentWeek);
}

// 设置每日目标
function setDailyGoal() {
    if (!goalInput || !goalDisplay) return;
    
    const goal = goalInput.value.trim();
    if (!goal) {
        alert('请输入每日学习目标！');
        return;
    }
    
    userProgress.dailyGoal = goal;
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
    
    goalDisplay.textContent = goal;
    goalInput.value = '';
    
    // 显示成功消息
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = '目标已更新！';
    setGoalBtn.parentElement.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// 打开学习材料查看器
function openMaterialViewer(week) {
    if (!materialViewer || !materialTitle || !materialContent) return;
    
    const material = learningMaterials[week];
    if (!material) {
        alert('该周的学习材料暂未上传');
        return;
    }
    
    materialTitle.textContent = material.title;
    materialContent.innerHTML = material.content;
    materialViewer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 关闭学习材料查看器
function closeMaterialViewer() {
    if (!materialViewer) return;
    
    materialViewer.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 处理键盘快捷键
function handleKeyboardShortcuts(e) {
    // ESC键关闭材料查看器
    if (e.key === 'Escape' && materialViewer && materialViewer.style.display === 'flex') {
        closeMaterialViewer();
    }
    
    // Ctrl+Shift+D 切换主题
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Ctrl+Shift+N 下一个练习
    if (e.ctrlKey && e.shiftKey && e.key === 'N') {
        e.preventDefault();
        nextPractice();
    }
}

// 工具函数：格式化日期
function formatDate(date) {
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
}

// 工具函数：计算学习天数
function calculateLearningDays(startDate) {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 导出函数供其他脚本使用（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        generatePractice,
        checkAnswer,
        toggleTheme,
        setDailyGoal,
        openMaterialViewer,
        closeMaterialViewer
    };
}