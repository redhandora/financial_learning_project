# 金融学习计划网站

## 快速开始

### 在线访问
网站已部署到 Gitee Pages：
https://handora.gitee.io/financial_learning_project/

### 本地运行
```bash
cd /root/financial/docs
python3 -m http.server 8080
```
然后在浏览器中访问：http://localhost:8080

## 网站功能

### 🎯 核心功能
1. **12个月学习计划展示** - 完整的金融学习路径
2. **每周学习材料** - 详细的学习内容和指导
3. **每日练习系统** - 随机生成练习题，即时反馈
4. **学习进度跟踪** - 本地存储学习进度和目标
5. **响应式设计** - 支持手机、平板和桌面设备

### 🎨 设计特点
- **主题切换**：亮色/暗色模式
- **现代化界面**：卡片设计，渐变色彩
- **交互体验**：平滑动画，直观导航
- **可访问性**：键盘导航，屏幕阅读器支持

## 文件结构

```
docs/
├── index.html              # 主页面
├── css/
│   └── style.css          # 完整样式（2000+行）
├── js/
│   └── main.js            # 主要功能（600+行）
├── pages/
│   └── weeks/
│       └── week1.html     # 第1周学习材料
├── images/                # 图片资源
├── data/                  # 数据文件
└── README.md             # 本文件
```

## 技术实现

### HTML5
- 语义化标签结构
- ARIA可访问性属性
- 响应式meta标签

### CSS3
- CSS变量主题系统
- Flexbox/Grid布局
- 媒体查询响应式设计
- 动画和过渡效果

### JavaScript (ES6+)
- 模块化函数组织
- 本地存储状态管理
- 事件委托和动态内容
- 表单验证和交互

## 浏览器支持

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Android Chrome 60+

## 开发指南

### 添加新周次
1. 在 `pages/weeks/` 创建新的HTML文件
2. 参考 `week1.html` 的结构
3. 在 `js/main.js` 中添加练习题
4. 更新主页面链接

### 修改样式
1. 编辑 `css/style.css`
2. 使用CSS变量统一主题
3. 测试响应式布局

### 扩展功能
1. 在 `js/main.js` 添加新模块
2. 更新HTML界面
3. 添加对应CSS样式

## 部署说明

### Gitee Pages 部署
1. 确保所有文件在 `docs/` 目录
2. 推送到Gitee仓库
3. 在Gitee设置中启用Pages服务
4. 设置部署目录为 `docs/`

### 自定义域名
1. 在Gitee Pages设置中添加域名
2. 配置DNS解析
3. 等待SSL证书生成

## 性能优化

### 已实现
- CSS变量减少重复
- 字体按需加载
- 本地存储缓存
- 事件委托优化

### 计划中
- 图片懒加载
- 代码分割
- 服务端渲染
- PWA支持

## 测试检查清单

### 功能测试
- [x] 主题切换正常
- [x] 导航菜单工作
- [x] 练习生成和检查
- [x] 进度跟踪保存
- [x] 响应式布局

### 兼容性测试
- [x] Chrome桌面端
- [x] Firefox桌面端
- [x] Safari桌面端
- [x] Chrome移动端
- [x] Safari移动端

### 性能测试
- [x] 页面加载速度
- [x] JavaScript执行
- [x] 内存使用情况
- [x] 本地存储操作

## 故障排除

### 常见问题
1. **页面无法加载**
   - 检查文件路径
   - 验证服务器配置
   - 查看浏览器控制台

2. **JavaScript错误**
   - 检查控制台输出
   - 验证本地存储权限
   - 测试事件绑定

3. **样式问题**
   - 检查CSS文件加载
   - 验证CSS变量
   - 测试不同分辨率

### 调试工具
- 浏览器开发者工具
- 网络请求监控
- 控制台日志
- 本地存储检查

## 更新日志

### v1.0.0 (2025-01-11)
- ✅ 初始版本发布
- ✅ 完整网站结构
- ✅ 第1周学习材料
- ✅ 每日练习功能
- ✅ 主题切换系统
- ✅ 响应式设计
- ✅ Gitee Pages部署

## 许可证

MIT License - 自由使用和修改

## 贡献

欢迎提交Issue和Pull Request：
1. Fork项目
2. 创建功能分支
3. 提交更改
4. 创建Pull Request

## 联系方式

- 项目主页：https://gitee.com/handora/financial_learning_project
- 问题反馈：Gitee Issues
- 功能建议：Gitee Discussions

---

**祝您学习愉快！** 🚀