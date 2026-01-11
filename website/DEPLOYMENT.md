# Gitee Pages 部署指南

## 网站概述

这是一个完整的金融学习计划网站，包含：
- 12个月金融学习计划展示
- 每周详细学习材料（HTML格式）
- 每日练习功能（JavaScript实现）
- 学习进度跟踪
- 响应式设计，支持移动端和桌面端

## 文件结构

```
website/
├── index.html              # 主页面
├── css/
│   └── style.css          # 完整样式文件
├── js/
│   └── main.js            # 主要JavaScript功能
├── pages/
│   └── weeks/
│       └── week1.html     # 第1周学习材料
├── images/                # 图片目录（空）
├── data/                  # 数据目录（空）
└── DEPLOYMENT.md         # 本文件
```

## 功能特性

### 1. 主题切换
- 亮色/暗色主题
- 本地存储主题偏好

### 2. 响应式设计
- 移动端适配
- 桌面端优化
- 打印样式支持

### 3. 学习功能
- **每日练习生成器**：根据周次生成随机练习题
- **答案检查**：即时反馈和解析
- **学习材料查看器**：模态框查看详细材料
- **进度跟踪**：本地存储学习进度
- **目标设置**：设置每日学习目标

### 4. 导航系统
- 平滑滚动导航
- 移动端菜单
- 面包屑导航

## 部署到 Gitee Pages

### 步骤1：推送代码到Gitee

```bash
# 添加网站文件到git
git add website/

# 提交更改
git commit -m "添加金融学习计划网站"

# 推送到Gitee
git push origin master
```

### 步骤2：启用Gitee Pages

1. 访问Gitee仓库：https://gitee.com/handora/financial_learning_project
2. 点击"服务" → "Gitee Pages"
3. 配置部署：
   - **部署分支**：master
   - **部署目录**：website/
   - **自定义域名**：（可选）
4. 点击"启动"或"更新"

### 步骤3：访问网站

部署完成后，可以通过以下地址访问：
- https://handora.gitee.io/financial_learning_project/

## 本地开发

### 启动本地服务器

```bash
cd website
python3 -m http.server 8080
```

然后在浏览器中访问：http://localhost:8080

### 开发注意事项

1. **CSS变量**：所有颜色和尺寸使用CSS变量定义，便于主题切换
2. **JavaScript模块化**：功能按模块组织，便于维护
3. **响应式设计**：使用媒体查询适配不同设备
4. **可访问性**：遵循ARIA标准，支持键盘导航

## 扩展功能计划

### 已实现功能
- [x] 基本网站结构
- [x] 主题切换
- [x] 响应式设计
- [x] 第1周学习材料
- [x] 每日练习功能
- [x] 学习进度跟踪

### 待开发功能
- [ ] 更多周次学习材料（第2-4周）
- [ ] 复利计算器工具
- [ ] 财务比率计算器
- [ ] 投资组合模拟器
- [ ] 用户账户系统
- [ ] 学习社区功能

## 技术栈

- **HTML5**：语义化标签，现代结构
- **CSS3**：CSS变量，Flexbox/Grid，响应式设计
- **JavaScript (ES6+)**：模块化，本地存储，动态内容
- **Font Awesome**：图标库
- **Google Fonts**：Inter和JetBrains Mono字体

## 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 60+

## 性能优化

1. **CSS优化**：
   - 使用CSS变量减少重复
   - 按需加载字体
   - 压缩图片资源

2. **JavaScript优化**：
   - 事件委托减少监听器
   - 防抖/节流处理
   - 本地存储缓存

3. **加载优化**：
   - 异步加载非关键资源
   - 预加载关键资源
   - 代码分割（未来计划）

## 维护指南

### 添加新的学习周次

1. 在 `pages/weeks/` 目录创建新的HTML文件
2. 遵循 `week1.html` 的结构和样式
3. 在 `js/main.js` 中添加对应的练习题库
4. 在主页面 `index.html` 中更新链接

### 更新样式

1. 修改 `css/style.css` 中的CSS变量
2. 添加新的样式类
3. 测试不同设备的显示效果

### 添加新功能

1. 在 `js/main.js` 中添加新的函数模块
2. 更新HTML结构
3. 添加对应的CSS样式
4. 测试功能完整性

## 故障排除

### 常见问题

1. **页面无法加载**
   - 检查文件路径是否正确
   - 确认Gitee Pages已启用
   - 检查浏览器控制台错误

2. **JavaScript功能失效**
   - 检查控制台错误
   - 验证本地存储权限
   - 检查事件监听器绑定

3. **样式显示异常**
   - 检查CSS文件加载
   - 验证CSS变量定义
   - 测试不同浏览器兼容性

### 调试建议

1. 使用浏览器开发者工具
2. 检查网络请求状态
3. 验证本地存储数据
4. 测试不同设备尺寸

## 贡献指南

欢迎贡献代码和改进建议：

1. Fork仓库
2. 创建功能分支
3. 提交更改
4. 创建Pull Request

## 许可证

MIT License - 详见项目根目录LICENSE文件

## 联系方式

- 项目仓库：https://gitee.com/handora/financial_learning_project
- 问题反馈：通过Gitee Issues提交

---

**最后更新**：2025年1月11日  
**版本**：1.0.0  
**状态**：生产就绪