// 选题数据
const topics = [
    {
        id: 1,
        title: "基于人工智能的图像识别技术研究",
        subject: "计算机",
        difficulty: "困难",
        period: "60天",
        desc: "探索深度学习在图像识别领域的应用，使用卷积神经网络进行图像分类和目标检测。"
    },
    {
        id: 2,
        title: "区块链技术在金融领域的应用分析",
        subject: "经济",
        difficulty: "中等",
        period: "30天",
        desc: "分析区块链技术对传统金融行业的影响，探讨其在支付结算、资产管理等方面的应用前景。"
    },
    {
        id: 3,
        title: "企业数字化转型策略研究",
        subject: "管理",
        difficulty: "中等",
        period: "30天",
        desc: "研究企业数字化转型的路径与方法，分析成功案例，提出可行的转型策略。"
    },
    {
        id: 4,
        title: "网络文学的发展与传播研究",
        subject: "文学",
        difficulty: "简单",
        period: "14天",
        desc: "分析网络文学的发展历程、传播特点及其对传统文学的影响。"
    },
    {
        id: 5,
        title: "电子商务平台消费者行为分析",
        subject: "经济",
        difficulty: "简单",
        period: "14天",
        desc: "通过问卷调查和数据分析，研究消费者在电商平台上的购物行为和决策因素。"
    },
    {
        id: 6,
        title: "智慧城市建设现状与发展趋势",
        subject: "管理",
        difficulty: "中等",
        period: "30天",
        desc: "调研国内外智慧城市建设案例，分析技术应用、发展模式及未来趋势。"
    },
    {
        id: 7,
        title: "云计算环境下数据安全策略研究",
        subject: "计算机",
        difficulty: "中等",
        period: "30天",
        desc: "研究云计算环境下的数据安全问题，提出有效的数据保护策略和解决方案。"
    },
    {
        id: 8,
        title: "网络犯罪的法律规制研究",
        subject: "法学",
        difficulty: "困难",
        period: "60天",
        desc: "分析网络犯罪的特点和类型，研究相关法律规制的完善路径。"
    }
];

// 模板数据
const templates = [
    {
        id: 1,
        title: "学术论文标准模板",
        type: "论文",
        desc: "适用于本科毕业论文和学术研究报告的标准结构模板。",
        content: `学术论文写作模板

一、摘要（300字左右）
- 研究背景与目的
- 研究方法
- 主要结论
- 关键词（3-5个）

二、引言
- 研究背景介绍
- 研究意义与价值
- 研究目的与问题
- 论文结构安排

三、文献综述
- 国内外研究现状
- 理论基础
- 研究空白与创新点

四、研究方法
- 研究设计
- 数据收集方法
- 分析工具与技术

五、研究结果与分析
- 数据展示
- 结果分析
- 发现与讨论

六、结论与建议
- 主要结论总结
- 研究局限性
- 未来研究建议

七、参考文献
（按学术规范格式列出）

八、附录（如有）
`
    },
    {
        id: 2,
        title: "文献综述写作模板",
        type: "综述",
        desc: "系统性梳理和评述某一领域研究文献的写作框架。",
        content: `文献综述写作模板

一、引言
- 综述主题背景
- 综述范围界定
- 综述目的说明

二、概念界定
- 核心概念解释
- 相关概念辨析

三、研究现状分析
3.1 国内研究现状
- 主要研究成果
- 代表学者观点
- 研究发展阶段

3.2 国外研究现状
- 研究理论进展
- 实践应用情况
- 国际趋势分析

四、研究评述
- 研究成果总结
- 存在问题分析
- 研究不足指出

五、研究展望
- 未来研究方向
- 理论发展预测
- 实践应用前景

六、参考文献
`
    },
    {
        id: 3,
        title: "实验报告标准模板",
        type: "报告",
        desc: "适用于理工科实验课程的标准报告格式。",
        content: `实验报告写作模板

一、实验名称
（明确实验主题）

二、实验目的
- 掌握什么原理
- 学习什么方法
- 验证什么理论

三、实验原理
- 理论依据
- 公式推导
- 原理图示

四、实验设备与材料
- 设备名称与型号
- 材料规格
- 注意事项

五、实验步骤
- 步骤1：详细描述
- 步骤2：详细描述
- 步骤3：详细描述
...

六、实验数据与结果
- 数据记录表格
- 计算过程
- 结果图表

七、结果分析
- 数据分析
- 误差分析
- 问题讨论

八、实验结论
- 结论总结
- 体会与建议

九、参考资料
`
    },
    {
        id: 4,
        title: "课程设计报告模板",
        type: "设计",
        desc: "适用于计算机等专业课程设计的完整报告框架。",
        content: `课程设计报告模板

一、设计题目
（具体设计任务名称）

二、设计目的与要求
- 培养什么能力
- 达到什么目标
- 具体功能要求

三、设计方案
- 总体架构设计
- 功能模块划分
- 技术选型说明

四、详细设计
- 核心算法设计
- 数据结构设计
- 界面设计
- 流程图/架构图

五、代码实现
- 核心代码展示
- 关键功能实现
- 代码注释说明

六、测试与调试
- 测试方案
- 测试结果
- 问题与解决方案

七、运行结果
- 运行截图
- 功能演示
- 效果说明

八、总结与体会
- 设计总结
- 收获与体会
- 改进建议

九、参考资料
十、附录（完整源代码）
`
    }
];

// 任务数据（从本地存储加载）
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 页面切换
function showSection(sectionId) {
    // 隐藏所有区域
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标区域
    document.getElementById(sectionId).classList.add('active');
    
    // 更新导航状态
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add('active');
    
    // 根据区域加载内容
    if (sectionId === 'topics') {
        renderTopics();
    } else if (sectionId === 'templates') {
        renderTemplates();
    } else if (sectionId === 'progress') {
        renderTasks();
    }
}

// 渲染选题列表
function renderTopics() {
    const subject = document.getElementById('subjectFilter').value;
    const difficulty = document.getElementById('difficultyFilter').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    
    const filteredTopics = topics.filter(topic => {
        if (subject && topic.subject !== subject) return false;
        if (difficulty && topic.difficulty !== difficulty) return false;
        if (search && !topic.title.toLowerCase().includes(search) && !topic.desc.toLowerCase().includes(search)) return false;
        return true;
    });
    
    const container = document.getElementById('topicsList');
    container.innerHTML = filteredTopics.map(topic => `
        <div class="topic-card">
            <div class="topic-header">
                <div class="topic-title">${topic.title}</div>
                <div class="topic-badges">
                    <span class="badge badge-subject">${topic.subject}</span>
                    <span class="badge badge-difficulty ${topic.difficulty === '困难' ? 'hard' : topic.difficulty === '中等' ? 'medium' : ''}">${topic.difficulty}</span>
                </div>
            </div>
            <div class="topic-desc">${topic.desc}</div>
            <div class="topic-footer">
                <span class="topic-period">建议周期：${topic.period}</span>
            </div>
        </div>
    `).join('');
}

// 筛选选题
function filterTopics() {
    renderTopics();
}

// 渲染模板列表
function renderTemplates() {
    const type = document.getElementById('templateTypeFilter').value;
    
    const filteredTemplates = templates.filter(template => {
        if (type && template.type !== type) return false;
        return true;
    });
    
    const container = document.getElementById('templatesList');
    container.innerHTML = filteredTemplates.map(template => `
        <div class="template-card">
            <div class="template-header">
                <div class="template-title">${template.title}</div>
                <span class="template-type">${template.type}</span>
            </div>
            <div class="template-desc">${template.desc}</div>
            <button class="btn-primary" onclick="showTemplate(${template.id})">查看模板</button>
        </div>
    `).join('');
}

// 筛选模板
function filterTemplates() {
    renderTemplates();
}

// 显示模板详情
function showTemplate(id) {
    const template = templates.find(t => t.id === id);
    if (template) {
        document.getElementById('templateTitle').textContent = template.title;
        document.getElementById('templateContent').textContent = template.content;
        document.getElementById('templateModal').classList.add('active');
    }
}

// 关闭模板弹窗
function closeTemplateModal() {
    document.getElementById('templateModal').classList.remove('active');
}

// 渲染任务列表
function renderTasks() {
    const container = document.getElementById('tasksList');
    
    if (tasks.length === 0) {
        container.innerHTML = '<p style="color: #666; text-align: center;">暂无任务，点击"新建任务"添加</p>';
        return;
    }
    
    // 按截止日期排序
    tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    
    container.innerHTML = tasks.map(task => {
        const today = new Date();
        const deadline = new Date(task.deadline);
        const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
        const isUrgent = daysLeft <= 7 && daysLeft > 0;
        const isOverdue = daysLeft < 0;
        
        return `
            <div class="task-card">
                <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTask(${task.id})"></div>
                <div class="task-info">
                    <div class="task-name ${task.completed ? 'completed' : ''}">${task.name}</div>
                    <div class="task-deadline">
                        截止日期：${task.deadline}
                        ${isUrgent ? '<span style="color: #EF4444;"> (即将到期)</span>' : ''}
                        ${isOverdue ? '<span style="color: #EF4444;"> (已过期)</span>' : ''}
                        ${task.completed ? '<span style="color: #22C55E;"> (已完成)</span>' : ''}
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn-delete" onclick="deleteTask(${task.id})">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

// 显示新建任务弹窗
function showAddTaskModal() {
    document.getElementById('taskModal').classList.add('active');
    document.getElementById('taskForm').reset();
}

// 关闭弹窗
function closeModal() {
    document.getElementById('taskModal').classList.remove('active');
}

// 保存任务
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const task = {
        id: Date.now(),
        name: document.getElementById('taskName').value,
        deadline: document.getElementById('taskDeadline').value,
        desc: document.getElementById('taskDesc').value,
        completed: false
    };
    
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    closeModal();
    renderTasks();
});

// 切换任务完成状态
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// 删除任务
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 默认显示首页
    showSection('home');
    
    // 导航点击事件
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
});