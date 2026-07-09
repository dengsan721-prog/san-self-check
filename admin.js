(function () {
  const DIMENSIONS = ["亲密互信（关系）", "用心倾听（沟通）", "生活仪式（温度）", "赋能赞美（鼓励）", "情绪修复（稳定）"];

  const OFFICIAL_SOLUTION = "正式运营版建议接入登录权限、数据库、报告生成服务、企业微信通知和数据导出，形成从获客到跟进的完整闭环。";
  const VIEWS = ["list", "detail"];
  const METRIC_FILTERS = [
    { key: "全部客户", label: "全部客户" },
    { key: "待联系", label: "待联系" },
    { key: "高优先级", label: "高优先级" },
    { key: "已邀约", label: "已邀约" },
    { key: "已参加", label: "已参加" }
  ];

  const CUSTOMERS = [
    {
      id: "HZ20260708001",
      name: "王女士",
      contact: "wx_wang123",
      source: "朋友圈海报",
      submittedAt: "2026-07-08 09:42",
      device: "iPhone",
      city: "郑州",
      totalScore: 55,
      level: "未达及格线，建议优先梳理",
      weakestDimension: "生活仪式（温度）",
      strongestDimension: "用心倾听（沟通）",
      followUpStatus: "待联系",
      reportStatus: "待生成",
      nextStep: "向幸福驿站老师申请参加一次幸福沙龙，先从家庭温度和日常仪式开始修复。",
      concern: "亲子沟通",
      dimensions: [
        { label: "亲密互信（关系）", score: 58, status: "红灯预警" },
        { label: "用心倾听（沟通）", score: 65, status: "黄灯调整" },
        { label: "生活仪式（温度）", score: 42, status: "红灯预警" },
        { label: "赋能赞美（鼓励）", score: 57, status: "红灯预警" },
        { label: "情绪修复（稳定）", score: 53, status: "红灯预警" }
      ],
      events: [
        "09:38 扫码进入幸福自检表",
        "09:39 开始答题",
        "09:42 查看自检结果",
        "09:43 申请领取专家版完整报告"
      ],
      answers: [
        "孩子进门先问作业和成绩",
        "成绩下滑会先着急安排补课",
        "家里固定交流时间较少",
        "矛盾后通常第二天才缓和"
      ]
    },
    {
      id: "HZ20260708002",
      name: "李先生",
      contact: "138****6821",
      source: "幸福沙龙二维码",
      submittedAt: "2026-07-08 10:16",
      device: "Android",
      city: "洛阳",
      totalScore: 72,
      level: "基本稳定，但已有短板",
      weakestDimension: "赋能赞美（鼓励）",
      strongestDimension: "亲密互信（关系）",
      followUpStatus: "已联系",
      reportStatus: "已发送",
      nextStep: "建议参加一次幸福沙龙，学习把看见家人的优点变成具体表达。",
      concern: "夫妻关系",
      dimensions: [
        { label: "亲密互信（关系）", score: 83, status: "绿灯稳定" },
        { label: "用心倾听（沟通）", score: 75, status: "黄灯调整" },
        { label: "生活仪式（温度）", score: 68, status: "黄灯调整" },
        { label: "赋能赞美（鼓励）", score: 56, status: "红灯预警" },
        { label: "情绪修复（稳定）", score: 78, status: "黄灯调整" }
      ],
      events: [
        "10:11 现场扫码进入",
        "10:12 开始答题",
        "10:16 查看结果页 2 分钟",
        "10:19 老师已电话联系"
      ],
      answers: [
        "家里意见不一致时会商量",
        "在外人面前看场合评价家人",
        "表扬多为简单说不错",
        "矛盾后当天能恢复"
      ]
    },
    {
      id: "HZ20260708003",
      name: "陈女士",
      contact: "chen_home",
      source: "微信群转发",
      submittedAt: "2026-07-08 11:05",
      device: "iPhone",
      city: "开封",
      totalScore: 88,
      level: "幸福资源较充足",
      weakestDimension: "情绪修复（稳定）",
      strongestDimension: "生活仪式（温度）",
      followUpStatus: "已邀约沙龙",
      reportStatus: "已下载",
      nextStep: "适合报名幸福沙龙，把已有的家庭温度沉淀为稳定方法。",
      concern: "家庭氛围",
      dimensions: [
        { label: "亲密互信（关系）", score: 90, status: "绿灯稳定" },
        { label: "用心倾听（沟通）", score: 86, status: "绿灯稳定" },
        { label: "生活仪式（温度）", score: 94, status: "绿灯稳定" },
        { label: "赋能赞美（鼓励）", score: 88, status: "绿灯稳定" },
        { label: "情绪修复（稳定）", score: 79, status: "黄灯调整" }
      ],
      events: [
        "10:58 微信群点击链接",
        "11:00 完成 20 题",
        "11:05 下载自检摘要",
        "11:20 老师邀约本周沙龙"
      ],
      answers: [
        "经常有家庭小约定",
        "会说具体感谢",
        "家人小事能认真听",
        "情绪累时偶尔会冲"
      ]
    },
    {
      id: "HZ20260708004",
      name: "赵女士",
      contact: "159****9310",
      source: "短视频主页",
      submittedAt: "2026-07-08 14:27",
      device: "Android",
      city: "新乡",
      totalScore: 41,
      level: "未达及格线，建议优先梳理",
      weakestDimension: "情绪修复（稳定）",
      strongestDimension: "生活仪式（温度）",
      followUpStatus: "待联系",
      reportStatus: "待生成",
      nextStep: "建议老师优先联系，先做一次温和的幸福质询，再邀请公益沙龙。",
      concern: "情绪内耗",
      dimensions: [
        { label: "亲密互信（关系）", score: 43, status: "红灯预警" },
        { label: "用心倾听（沟通）", score: 38, status: "红灯预警" },
        { label: "生活仪式（温度）", score: 55, status: "红灯预警" },
        { label: "赋能赞美（鼓励）", score: 44, status: "红灯预警" },
        { label: "情绪修复（稳定）", score: 25, status: "红灯预警" }
      ],
      events: [
        "14:20 短视频主页进入",
        "14:21 中途停留 1 次",
        "14:27 提交报告申请",
        "14:28 被标记为优先跟进"
      ],
      answers: [
        "争吵后等对方低头",
        "情绪上来容易爆发",
        "家人讲话时经常敷衍",
        "暂时不知道从哪里开始改变"
      ]
    },
    {
      id: "HZ20260708005",
      name: "刘先生",
      contact: "liuhome2026",
      source: "线下活动",
      submittedAt: "2026-07-08 16:10",
      device: "iPad",
      city: "许昌",
      totalScore: 63,
      level: "刚过及格线，需要尽快修补",
      weakestDimension: "用心倾听（沟通）",
      strongestDimension: "亲密互信（关系）",
      followUpStatus: "已参加",
      reportStatus: "已发送",
      nextStep: "建议继续参加 7 天微行动，把倾听练习落实到每天 10 分钟。",
      concern: "孩子学习动力",
      dimensions: [
        { label: "亲密互信（关系）", score: 74, status: "黄灯调整" },
        { label: "用心倾听（沟通）", score: 45, status: "红灯预警" },
        { label: "生活仪式（温度）", score: 68, status: "黄灯调整" },
        { label: "赋能赞美（鼓励）", score: 62, status: "黄灯调整" },
        { label: "情绪修复（稳定）", score: 66, status: "黄灯调整" }
      ],
      events: [
        "16:02 活动现场填写",
        "16:07 查看五维图谱",
        "16:10 申请报告",
        "18:30 已参加沙龙"
      ],
      answers: [
        "孩子成绩变化时先分析问题",
        "忙的时候会让家人等等",
        "偶尔有固定家庭时间",
        "愿意先少说一句重话"
      ]
    }
  ];

  const state = {
    view: "list",
    quickFilter: "全部客户",
    status: "全部",
    keyword: "",
    selectedId: CUSTOMERS[0].id
  };

  function getMetrics(customers) {
    const totalCustomers = customers.length;
    const averageScore = Math.round(customers.reduce((sum, customer) => sum + customer.totalScore, 0) / totalCustomers);
    const pendingFollowUps = customers.filter((customer) => customer.followUpStatus === "待联系").length;
    const salonIntent = customers.filter((customer) => /沙龙|已邀约|已参加/.test(customer.nextStep + customer.followUpStatus)).length;
    return { totalCustomers, averageScore, pendingFollowUps, salonIntent };
  }

  function filterCustomers(customers, filters) {
    const status = filters?.status || "全部";
    const quickFilter = filters?.quickFilter || "全部客户";
    const keyword = (filters?.keyword || "").trim().toLowerCase();
    return customers.filter((customer) => {
      const quickMatch = quickFilter === "全部客户"
        || (quickFilter === "待联系" && customer.followUpStatus === "待联系")
        || (quickFilter === "高优先级" && customer.totalScore < 60)
        || (quickFilter === "已邀约" && customer.followUpStatus === "已邀约沙龙")
        || (quickFilter === "已参加" && customer.followUpStatus === "已参加");
      const statusMatch = status === "全部" || customer.followUpStatus === status;
      const keywordText = [customer.name, customer.contact, customer.source, customer.city, customer.concern, customer.id].join(" ").toLowerCase();
      const keywordMatch = !keyword || keywordText.includes(keyword);
      return quickMatch && statusMatch && keywordMatch;
    });
  }

  function getCustomerById(id) {
    return CUSTOMERS.find((customer) => customer.id === id) || CUSTOMERS[0];
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function buildReportHtml(customer) {
    const dimensionRows = customer.dimensions.map((dimension) => `
      <tr>
        <td>${escapeHtml(dimension.label)}</td>
        <td>${dimension.score} 分</td>
        <td>${escapeHtml(dimension.status)}</td>
      </tr>
    `).join("");
    return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(customer.name)}的幸福自检报告</title>
  <style>
    body { margin: 32px; color: #312720; font-family: Arial, "Microsoft YaHei", sans-serif; line-height: 1.7; }
    h1 { color: #d76232; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    td, th { padding: 10px; border: 1px solid #f0d5bf; text-align: left; }
    .score { font-size: 44px; color: #e86a2b; font-weight: 800; }
    .note { padding: 12px 14px; background: #fff4e8; border-left: 4px solid #ff8a4a; }
  </style>
</head>
<body>
  <h1>${escapeHtml(customer.name)}的幸福自检报告</h1>
  <p>提交时间：${escapeHtml(customer.submittedAt)} ｜ 来源：${escapeHtml(customer.source)}</p>
  <div class="score">${customer.totalScore} 分</div>
  <p><strong>${escapeHtml(customer.level)}</strong></p>
  <p>优势维度：${escapeHtml(customer.strongestDimension)} ｜ 优先梳理：${escapeHtml(customer.weakestDimension)}</p>
  <table>
    <thead><tr><th>维度</th><th>得分</th><th>状态</th></tr></thead>
    <tbody>${dimensionRows}</tbody>
  </table>
  <div class="note"><strong>建议下一步：</strong>${escapeHtml(customer.nextStep)}</div>
  <p>本报告用于家庭幸福能力自评和老师沟通参考，不作为医学、心理诊断或治疗建议。</p>
</body>
</html>`;
  }

  function buildCsv(customers) {
    const header = ["客户编号", "姓名", "联系方式", "来源", "提交时间", "幸福指数", "最低维度", "跟进状态", "报告状态"];
    const rows = customers.map((customer) => [
      customer.id,
      customer.name,
      customer.contact,
      customer.source,
      customer.submittedAt,
      `${customer.totalScore}`,
      customer.weakestDimension,
      customer.followUpStatus,
      customer.reportStatus
    ]);
    return [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
  }

  function buildDataUrl(content, type) {
    return `data:${type};charset=utf-8,${encodeURIComponent(content)}`;
  }

  function downloadTextFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function downloadReport(customerId) {
    const customer = getCustomerById(customerId);
    downloadTextFile(`${customer.name}-幸福自检报告.html`, buildReportHtml(customer), "text/html;charset=utf-8");
  }

  function downloadCsv(customers = filterCustomers(CUSTOMERS, state)) {
    downloadTextFile("幸福驿站客户数据.csv", "\ufeff" + buildCsv(customers), "text/csv;charset=utf-8");
  }

  function getStatusClass(status) {
    if (status === "待联系") return "status-hot";
    if (status === "已邀约沙龙" || status === "已参加") return "status-good";
    return "status-warm";
  }

  function getQuickFilterCount(key) {
    if (key === "全部客户") return CUSTOMERS.length;
    return filterCustomers(CUSTOMERS, { quickFilter: key, status: "全部", keyword: "" }).length;
  }

  function renderMetrics(root, metrics) {
    root.innerHTML = `
      ${METRIC_FILTERS.map((filter) => `
        <button class="metric-card ${state.quickFilter === filter.key ? "active" : ""}" data-quick-filter="${filter.key}" type="button">
          <span>${filter.label}</span>
          <strong>${getQuickFilterCount(filter.key)}</strong>
        </button>
      `).join("")}
      <div class="metric-card metric-note" aria-label="平均幸福指数">
        <span>平均幸福指数</span>
        <strong>${metrics.averageScore}</strong>
      </div>
    `;
  }

  function renderTable(root, customers) {
    if (customers.length === 0) {
      root.innerHTML = `<div class="empty-state">暂无匹配客户，可以调整搜索词或跟进状态。</div>`;
      return;
    }
    root.innerHTML = customers.map((customer) => `
      <button class="customer-row" data-customer-id="${customer.id}" type="button">
        <span class="customer-main">
          <strong>${escapeHtml(customer.name)}</strong>
          <span class="customer-meta-line">
            <small>${escapeHtml(customer.contact)}</small>
            <small>${escapeHtml(customer.submittedAt)}</small>
            <small>${escapeHtml(customer.source)}</small>
          </span>
        </span>
        <span class="customer-focus">
          <small>低分维度</small>
          <strong>${escapeHtml(customer.weakestDimension)}</strong>
        </span>
        <span class="customer-intent">
          <small>关注</small>
          <strong>${escapeHtml(customer.concern)}</strong>
        </span>
        <span class="score-pill"><b>${customer.totalScore}</b><small>分</small></span>
        <em class="${getStatusClass(customer.followUpStatus)}">${escapeHtml(customer.followUpStatus)}</em>
      </button>
    `).join("");
  }

  function renderDetail(root, customer) {
    root.innerHTML = `
      <button class="back-link back-link-top" data-back-list type="button">← 返回客户列表</button>
      <div class="detail-head">
        <div>
          <span class="eyebrow">客户详情</span>
          <h2>信息总览</h2>
        </div>
      </div>
      <div class="detail-meta-grid">
        <span class="detail-meta-highlight"><small>姓名</small><b>${escapeHtml(customer.name)}</b></span>
        <span class="detail-meta-highlight detail-score-meta"><small>幸福指数</small><b>${customer.totalScore}<em>分</em></b></span>
        <span><small>联系</small><b>${escapeHtml(customer.contact)}</b></span>
        <span><small>城市</small><b>${escapeHtml(customer.city)}</b></span>
        <span><small>来源</small><b>${escapeHtml(customer.source)}</b></span>
        <span><small>提交</small><b>${escapeHtml(customer.submittedAt)}</b></span>
        <span><small>设备</small><b>${escapeHtml(customer.device)}</b></span>
        <span><small>关注</small><b>${escapeHtml(customer.concern)}</b></span>
      </div>
      <div class="detail-actions">
        <a class="primary-admin-btn" href="${buildDataUrl(buildReportHtml(customer), "text/html")}" download="${escapeHtml(customer.name)}-幸福自检报告.html">下载报告</a>
        <button class="ghost-admin-btn" data-export-current type="button">导出当前列表</button>
      </div>
      <section class="detail-section priority-section">
        <h3>跟进判断</h3>
        <div class="priority-grid">
          <span><b>${customer.totalScore} 分</b><small>${escapeHtml(customer.level)}</small></span>
          <span><b>${escapeHtml(customer.weakestDimension)}</b><small>优先梳理维度</small></span>
          <span><b>${escapeHtml(customer.followUpStatus)}</b><small>当前跟进状态</small></span>
        </div>
        <p>${escapeHtml(customer.nextStep)}</p>
      </section>
      <section class="detail-section">
        <h3>五维结果</h3>
        <div class="dimension-mini-list">
          ${customer.dimensions.map((dimension) => `
            <div class="dimension-mini">
              <span>${escapeHtml(dimension.label)}</span>
              <strong>${dimension.score} 分</strong>
              <div class="mini-bar"><i style="width: ${dimension.score}%"></i></div>
              <em>${escapeHtml(dimension.status)}</em>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="detail-section">
        <h3>行为数据</h3>
        <ul class="event-list">
          ${customer.events.map((event) => `<li>${escapeHtml(event)}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-section">
        <h3>答题摘要</h3>
        <ul class="event-list">
          ${customer.answers.map((answer) => `<li>${escapeHtml(answer)}</li>`).join("")}
        </ul>
      </section>
      <div class="detail-bottom-actions">
        <button class="back-link back-link-bottom" data-back-list data-bottom-back-list type="button">← 返回客户列表</button>
      </div>
    `;
  }

  function renderOfficialSolution(root) {
    root.innerHTML = `
      <h3>正式运营成熟方案</h3>
      <p>${OFFICIAL_SOLUTION}</p>
      <div class="solution-grid">
        <span>1. 表单提交</span>
        <span>2. 数据库保存</span>
        <span>3. 自动报告</span>
        <span>4. 老师跟进</span>
      </div>
    `;
  }

  function render() {
    const metricsRoot = document.querySelector("[data-metrics]");
    const tableRoot = document.querySelector("[data-customer-list]");
    const detailRoot = document.querySelector("[data-customer-detail]");
    const customerCountRoot = document.querySelector("[data-customer-count]");
    const listView = document.querySelector("[data-list-view]");
    const detailView = document.querySelector("[data-detail-view]");
    const solutionRoot = document.querySelector("[data-official-solution]");
    if (!metricsRoot || !tableRoot || !detailRoot) {
      return;
    }
    const customers = filterCustomers(CUSTOMERS, state);
    if (!customers.some((customer) => customer.id === state.selectedId)) {
      state.selectedId = customers[0]?.id || CUSTOMERS[0].id;
    }
    renderMetrics(metricsRoot, getMetrics(CUSTOMERS));
    renderTable(tableRoot, customers);
    renderDetail(detailRoot, getCustomerById(state.selectedId));
    if (customerCountRoot) {
      customerCountRoot.textContent = customers.length;
    }
    if (listView && detailView) {
      listView.hidden = state.view !== "list";
      detailView.hidden = state.view !== "detail";
    }
    if (solutionRoot) {
      solutionRoot.hidden = state.view !== "list";
      renderOfficialSolution(solutionRoot);
    }
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const customerButton = event.target.closest("[data-customer-id]");
      const reportButton = event.target.closest("[data-download-report]");
      const exportButton = event.target.closest("[data-export-current]");
      const quickFilterButton = event.target.closest("[data-quick-filter]");
      const backButton = event.target.closest("[data-back-list]");
      if (customerButton) {
        state.selectedId = customerButton.dataset.customerId;
        state.view = "detail";
        render();
      }
      if (quickFilterButton) {
        state.quickFilter = quickFilterButton.dataset.quickFilter;
        state.status = "全部";
        state.view = "list";
        const statusControl = document.querySelector("[data-status-filter]");
        if (statusControl) statusControl.value = "全部";
        render();
      }
      if (backButton) {
        state.view = "list";
        render();
      }
      if (reportButton) {
        downloadReport(reportButton.dataset.downloadReport);
      }
      if (exportButton) {
        downloadCsv();
      }
    });

    document.addEventListener("input", (event) => {
      if (event.target.matches("[data-search]")) {
        state.keyword = event.target.value;
        render();
      }
    });

    document.addEventListener("change", (event) => {
      if (event.target.matches("[data-status-filter]")) {
        state.status = event.target.value;
        render();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    render();
  });

  window.StationAdmin = {
    CUSTOMERS,
    DIMENSIONS,
    OFFICIAL_SOLUTION,
    VIEWS,
    METRIC_FILTERS,
    getMetrics,
    filterCustomers,
    getCustomerById,
    buildReportHtml,
    buildCsv,
    downloadReport,
    downloadCsv
  };
})();
